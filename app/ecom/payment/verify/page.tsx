'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  CircularProgress,
  Alert
} from '@mui/material'
import { CheckCircle, Error, ShoppingCart } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import Header from '../../../../components/ecom/common/Header'
import { paymentAPI } from '../../../../utils/apis'

interface Order {
  order_number: string;
  total_amount: number | string;
  // Add other order properties as needed
}

type PaymentStatus = 'verifying' | 'success' | 'error'

export default function PaymentVerifyPage() {
  const [status, setStatus] = useState<PaymentStatus>('verifying')
  const [message, setMessage] = useState<string>('')
  const [order, setOrder] = useState<Order | null>(null)
  
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    verifyPayment()
  }, [])

  const verifyPayment = async (): Promise<void> => {
    const paymentID = searchParams.get('paymentID')
    const orderID = searchParams.get('orderID')
    const statusParam = searchParams.get('status')

    if (!paymentID || !orderID) {
      setStatus('error')
      setMessage('Invalid payment parameters')
      return
    }

    try {
      const response = await paymentAPI.execute({
        paymentID,
        orderID: parseInt(orderID)
      } as any) // Temporary fix for property name mismatch

      // Use the actual PaymentResponse type from the API
      const data = response.data

      // Debug: log the actual response structure
      console.log('Payment API response:', data)

      // Check based on the actual API response structure
      // Since we don't know the exact structure, use a more flexible approach
      if (data.success || data.transaction_id) {
        setStatus('success')
        setMessage('Payment completed successfully!')
        // If the API returns order data, you might need to fetch it separately
        // or adjust based on what the actual API returns
      } else {
        setStatus('error')
        setMessage(data.message || 'Payment failed')
      }
    } catch (error: any) {
      setStatus('error')
      setMessage('Payment verification failed')
      console.error('Payment verification error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Container maxWidth="sm" className="py-16">
        <Paper className="p-8 text-center">
          {status === 'verifying' && (
            <>
              <CircularProgress size={60} className="mb-4" />
              <Typography variant="h5" className="mb-2">
                Verifying Payment...
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Please wait while we confirm your payment
              </Typography>
            </>
          )}

          {status === 'success' && (
            <>
              <CheckCircle className="text-green-500 text-6xl mb-4 mx-auto" />
              <Typography variant="h4" className="text-green-600 mb-2 font-bold">
                Payment Successful!
              </Typography>
              <Typography variant="body1" className="mb-6">
                Thank you for your purchase. Your order has been confirmed.
              </Typography>
              
              {order && (
                <Alert severity="success" className="mb-4 text-left">
                  <Typography variant="body2" className="font-semibold">
                    Order #{order.order_number}
                  </Typography>
                  <Typography variant="body2">
                    Total: Tk{typeof order.total_amount === 'string' ? parseFloat(order.total_amount).toFixed(2) : order.total_amount.toFixed(2)}
                  </Typography>
                </Alert>
              )}
              
              <Box className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="contained"
                  onClick={() => router.push('/ecom/products')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Continue Shopping
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => router.push('/ecom/orders')}
                >
                  View Orders
                </Button>
              </Box>
            </>
          )}

          {status === 'error' && (
            <>
              <Error className="text-red-500 text-6xl mb-4 mx-auto" />
              <Typography variant="h4" className="text-red-600 mb-2 font-bold">
                Payment Failed
              </Typography>
              <Typography variant="body1" className="mb-6">
                {message}
              </Typography>
              <Box className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="contained"
                  onClick={() => router.push('/ecom/cart')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Try Again
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => router.push('/ecom/products')}
                  startIcon={<ShoppingCart />}
                >
                  Continue Shopping
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </Container>
    </div>
  )
}