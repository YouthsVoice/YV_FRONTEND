"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';

import Grid from '@mui/material/Grid';
import { API } from '@/API';

interface VolunteerEvent {
  id: string;
  name: string;
  status: 'open' | 'closed';
  sheet_url?: string;
}

interface FormField {
  id: string;
  name: string;
  label: string;
  order: number;
  event: string;
}

const baseURL = API; // replace with your backend URL
const authHeaders = {
  headers: {
    Authorization: `Bearer YOUR_ADMIN_JWT_TOKEN`, // replace with actual auth handling
  },
};

export default function AdminDashboard() {
  const [events, setEvents] = useState<VolunteerEvent[]>([]);
  const [fields, setFields] = useState<FormField[]>([]);
  const [newEventName, setNewEventName] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<string>('');
  const [newField, setNewField] = useState({ name: '', label: '', order: 0 });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (selectedEvent) fetchFields(selectedEvent);
  }, [selectedEvent]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get<VolunteerEvent[]>(`${baseURL}/api/admin/vol/events/active/`);
      if (res.data) {
        setEvents(Array.isArray(res.data) ? res.data : []);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    }
  };


  console.log(events);
  

  const fetchFields = async (eventId: string) => {
    try {
      const res = await axios.get<FormField[]>(`${baseURL}/api/admin/vol/api/fields/?event=${eventId}`, authHeaders);
      setFields(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error('Error fetching fields:', error);
      setFields([]);
    }
  };

  const handleCreateEvent = async () => {
    try {
      setLoading(true);
      await axios.post(`${baseURL}/api/admin/vol/api/events/active/`, { name: newEventName }, );
      setNewEventName('');
      fetchEvents();
      showSnackbar('Event created.', 'success');
    } catch {
      showSnackbar('Failed to create event.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleAddField = async () => {
    try {
      setLoading(true);
      await axios.post(
        `${baseURL}api/admin/vol/api/fields/`,
        { ...newField, event: selectedEvent },
        authHeaders
      );
      setNewField({ name: '', label: '', order: 0 });
      fetchFields(selectedEvent);
      showSnackbar('Field added.', 'success');
    } catch {
      showSnackbar('Failed to add field.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateSheet = async () => {
    try {
      await axios.post(`${baseURL}api/admin/vol/api/events/${selectedEvent}/create_sheet/`, {}, authHeaders);
      fetchEvents();
      showSnackbar('Sheet created.', 'success');
    } catch {
      showSnackbar('Failed to create sheet.', 'error');
    }
  };

  const showSnackbar = (message: string, severity: 'success' | 'error') => {
    setSnackbar({ open: true, message, severity });
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 4 }}>Admin Dashboard</Typography>

      <Box component={Paper} p={3} mb={4}>
        <Typography variant="h6">Create New Event</Typography>
        <TextField
          fullWidth
          label="Event Name"
          value={newEventName}
          onChange={(e) => setNewEventName(e.target.value)}
          sx={{ mt: 2, mb: 2 }}
        />
        <Button variant="contained" onClick={handleCreateEvent} disabled={loading}>
          {loading ? <CircularProgress size={20} /> : 'Create Event'}
        </Button>
      </Box>

      <Box component={Paper} p={3} mb={4}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select Event</InputLabel>
          <Select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            label="Select Event"
          >
            {events.map((event) => (
              <MenuItem key={event.id} value={event.id}>{event.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedEvent && (
          <>
            <Typography variant="h6" sx={{ mb: 2 }}>Add Field to Event</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Field Name"
                  value={newField.name}
                  onChange={(e) => setNewField({ ...newField, name: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Field Label"
                  value={newField.label}
                  onChange={(e) => setNewField({ ...newField, label: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type="number"
                  label="Field Order"
                  value={newField.order}
                  onChange={(e) => setNewField({ ...newField, order: Number(e.target.value) })}
                />
              </Grid>
            </Grid>
            <Box mt={2}>
              <Button variant="contained" onClick={handleAddField} disabled={loading}>
                {loading ? <CircularProgress size={20} /> : 'Add Field'}
              </Button>
            </Box>

            <Box mt={4}>
              <Button variant="outlined" onClick={handleCreateSheet}>
                Generate Google Sheet
              </Button>
              {events.find(e => e.id === selectedEvent)?.sheet_url && (
                <Typography variant="body2" mt={1}>
                  Sheet URL: <a href={events.find(e => e.id === selectedEvent)?.sheet_url} target="_blank" rel="noreferrer">View Sheet</a>
                </Typography>
              )}
            </Box>

            <Box mt={4}>
              <Typography variant="h6">Fields:</Typography>
              {fields.map(field => (
                <Typography key={field.id}>
                  {field.order}. {field.label} ({field.name})
                </Typography>
              ))}
            </Box>
          </>
        )}
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}