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
  Alert
} from '@mui/material'
import { Email, Lock } from '@mui/icons-material'
import Link from 'next/link'
import Header from '../../../../components/ecom/common/Header'
import { useAuth } from '@/context/AuthContext'

interface FormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  
  const { login } = useAuth()
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

    const result = await login(formData)
    
    if (result.success) {
      router.push('/ecom/')
    } else {
      setError(result.error || 'Login failed')
    }
    
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Container maxWidth="sm" className="py-16">
        <Paper className="p-8">
          <Box className="text-center mb-8">
            <Typography variant="h4" className="font-bold text-gray-900">
              Welcome Back
            </Typography>
            <Typography variant="body1" className="text-gray-600 mt-2">
              Sign in to your YouthsVoice account
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" className="mb-6">
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: <Email className="text-gray-400 mr-2" />
              }}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: <Lock className="text-gray-400 mr-2" />
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 py-3"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          <Box className="text-center mt-6">
            <Typography variant="body2" className="text-gray-600">
              Don't have an account?{' '}
              <Link href="/ecom/auth/register">
                <MuiLink className="font-semibold">
                  Sign up here
                </MuiLink>
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  )
}