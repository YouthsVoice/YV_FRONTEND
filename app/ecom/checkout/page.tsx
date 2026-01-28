'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  Alert
} from '@mui/material'
import { Payment } from '@mui/icons-material'
import Header from '../../../components/ecom/common/Header'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'
import { ordersAPI } from '../../../utils/apis'
import { CartItem } from '@/context/CartContext'
interface FormData {
  shipping_address: string;
  customer_phone: string;
  customer_email: string;
}

interface OrderItem {
  product_id: number;
  quantity: number;
}

interface OrderRequest {
  items: OrderItem[];
  shipping_address: string;
  customer_phone: string;
  customer_email: string;
  total: number;
}

export default function CheckoutPage() {
  const [formData, setFormData] = useState<FormData>({
    shipping_address: '',
    customer_phone: '',
    customer_email: ''
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  
  const { cartItems, cartTotal, clearCart } = useCart()
  const { user } = useAuth()
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const orderData = {
        items: cartItems.map(item => ({
          product_id: item.id,
          quantity: item.quantity
        })),
        shipping_address: formData.shipping_address,
        customer_phone: formData.customer_phone,
        customer_email: formData.customer_email,
        total: cartTotal
      }

      const response = await ordersAPI.create(orderData)
      const order = response.data

      // Check if payment object exists and has bkash_url
      if (order.payment?.bkash_url) {
        // Redirect to bKash payment
        window.location.href = order.payment.bkash_url
      } else {
        setError('Payment initialization failed - no payment URL received')
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Checkout failed')
    } finally {
      setLoading(false)
    }
  }

  if (cartItems.length === 0) {
    router.push('/ecom/cart')
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Container maxWidth="lg" className="py-8">
        <Typography variant="h4" className="font-bold mb-6">
          Checkout
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {/* Shipping Information */}
            <Grid size={{ xs: 12, lg: 8 }}>
              <Paper className="p-6">
                <Typography variant="h6" className="font-bold mb-4">
                  Shipping Information
                </Typography>

                {error && (
                  <Alert severity="error" className="mb-4">
                    {error}
                  </Alert>
                )}

                <Box className="space-y-4">
                  <TextField
                    fullWidth
                    label="Shipping Address"
                    name="shipping_address"
                    value={formData.shipping_address}
                    onChange={handleChange}
                    required
                    multiline
                    rows={3}
                    placeholder="Enter your complete shipping address"
                  />

                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="customer_phone"
                    value={formData.customer_phone}
                    onChange={handleChange}
                    required
                    placeholder="+880 1XXX-XXXXXX"
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="customer_email"
                    type="email"
                    value={formData.customer_email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </Box>
              </Paper>
            </Grid>

            {/* Order Summary */}
            <Grid size={{ xs: 12, lg: 4 }}>
              <Paper className="p-6 sticky top-4">
                <Typography variant="h6" className="font-bold mb-4">
                  Order Summary
                </Typography>

                {/* Order Items */}
                <Box className="space-y-3 mb-4">
                  {cartItems.map((item: CartItem) => (
                    <Box key={item.id} className="flex justify-between items-center">
                      <Box>
                        <Typography variant="body2" className="font-medium">
                          {item.name}
                        </Typography>
                        <Typography variant="caption" className="text-gray-600">
                          Qty: {item.quantity}
                        </Typography>
                      </Box>
                      <Typography variant="body2">
                        ৳{(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Divider className="my-4" />

                {/* Total */}
                <Box className="flex justify-between items-center mb-6">
                  <Typography variant="h6" className="font-bold">
                    Total:
                  </Typography>
                  <Typography variant="h6" className="font-bold text-green-600">
                    ৳{cartTotal.toFixed(2)}
                  </Typography>
                </Box>

                {/* Payment Method */}
                <Box className="mb-6">
                  <Typography variant="body2" className="font-semibold mb-2">
                    Payment Method
                  </Typography>
                  <Box className="flex items-center space-x-2 p-3 border rounded-lg bg-blue-50">
                    <Payment className="text-blue-600" />
                    <Typography variant="body2" className="font-medium">
                      bKash Mobile Payment
                    </Typography>
                  </Box>
                  <Typography variant="caption" className="text-gray-600 mt-2 block">
                    You will be redirected to bKash for secure payment
                  </Typography>
                </Box>

                {/* Checkout Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 py-3"
                >
                  {loading ? 'Processing...' : 'Pay with bKash'}
                </Button>

                <Typography variant="caption" className="text-gray-500 mt-3 block text-center">
                  By completing your purchase, you agree to our terms of service
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  )
}