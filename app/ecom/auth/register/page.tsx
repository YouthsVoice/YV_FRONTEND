'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Link as MuiLink,
  Alert,
  Grid
} from '@mui/material'
import { Person, Email, Lock, LocationOn, Phone, Home } from '@mui/icons-material'
import Link from 'next/link'
import Header from '../../../../components/ecom/common/Header'
import { useAuth } from '@/context/AuthContext'

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Bangladesh'
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  
  const { register } = useAuth()
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      setLoading(false)
      return
    }

    const { confirmPassword, ...registerData }: { confirmPassword: string } & RegisterData = formData
    const result = await register(registerData)
    
    if (result.success) {
      router.push('/ecom/')
    } else {
      setError(result.error || 'Registration failed')
    }
    
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Container maxWidth="md" className="py-12">
        <Paper className="p-8 shadow-xl">
          <Box className="text-center mb-8">
            <Typography variant="h4" className="font-bold text-gray-900 mb-2">
              Create Account
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              Join YouthsVoice today and start shopping
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" className="mb-6">
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <Box className="bg-blue-50 p-4 rounded-lg">
              <Typography variant="h6" className="font-semibold text-gray-800 mb-4 flex items-center">
                <Person className="mr-2 text-blue-600" />
                Personal Information
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: <Email className="text-gray-400 mr-2" />
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+880 1XXX-XXXXXX"
                    InputProps={{
                      startAdornment: <Phone className="text-gray-400 mr-2" />
                    }}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Address Information */}
            <Box className="bg-green-50 p-4 rounded-lg">
              <Typography variant="h6" className="font-semibold text-gray-800 mb-4 flex items-center">
                <LocationOn className="mr-2 text-green-600" />
                Address Information
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Street Address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="House #, Road #, Area"
                    InputProps={{
                      startAdornment: <Home className="text-gray-400 mr-2" />
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="City"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Dhaka, Chittagong, etc."
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Postal Code"
                    name="postalCode"
                    type="text"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    placeholder="1200, 4000, etc."
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    disabled
                    InputProps={{
                      startAdornment: <LocationOn className="text-gray-400 mr-2" />
                    }}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Security Information */}
            <Box className="bg-orange-50 p-4 rounded-lg">
              <Typography variant="h6" className="font-semibold text-gray-800 mb-4 flex items-center">
                <Lock className="mr-2 text-orange-600" />
                Security Information
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    helperText="Must be at least 6 characters long"
                    InputProps={{
                      startAdornment: <Lock className="text-gray-400 mr-2" />
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: <Lock className="text-gray-400 mr-2" />
                    }}
                  />
                </Grid>
              </Grid>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-4 text-lg font-semibold shadow-lg"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <Box className="text-center mt-6">
            <Typography variant="body2" className="text-gray-600">
              Already have an account?{' '}
              <Link href="/ecom/auth/login">
                <MuiLink className="font-semibold text-blue-600 hover:text-blue-800">
                  Sign in here
                </MuiLink>
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  )
}