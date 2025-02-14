"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "@/API";
import {  FaPlus } from "react-icons/fa";
import Link from "next/link";
import DateTimeFormatter from "@/utility/DateTimeFormatter";

// Function to get a specific cookie by name

interface Event {
  id: number;
  name: string;
  description: string;
  from_date: string; // Date or string based on format
  to_date: string;   // Date or string
  place: string;
  participants: [number];
}

const EventCard = ({ event }: { event:Event }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
    <div className="text-xl font-semibold text-gray-800 mb-4">
      {event.name}
    </div>
    <p className="text-gray-600">{event.description}</p>
    <p className="text-gray-500 mt-2">
      From: <DateTimeFormatter fromDate={event.from_date}/> 
      </p><p>
       To:<DateTimeFormatter fromDate={event.to_date}/>
    </p>
    <p className="text-gray-500">Place: {event.place}</p>
  </div>
);

const EventSearch = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(events);
  
  // Get the token from cookies


  const fetchAllEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/api/events/latest/`);
      setEvents(response.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  const searchEvents = async (query: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/api/event/search?name=${query}`);
      setEvents(response.data);
      setError("");
    } catch (err) {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    fetchAllEvents();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      searchEvents(e.target.value);
    } else {
      fetchAllEvents();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        {/* Content Section */}
        <div className="flex-1 p-4 bg-gray-100 min-h-screen mt-[20px] ml-0 lg:ml-[250px]">
          {/* Search Bar and Create Button */}
          <div className="flex justify-between mb-4 py-5">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search events"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Link href="/admin/create-event">
              <button className="ml-4 px-4 py-2 bg-red-500  text-white rounded hover:bg-red-600">
                <FaPlus className="inline mr-2" /> Create New Event
              </button>
            </Link>
          </div>

          {/* Events Display */}
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {events && events.map((event:Event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventSearch;
