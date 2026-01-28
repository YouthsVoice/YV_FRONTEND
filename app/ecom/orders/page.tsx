'use client'
import { useState, useEffect } from 'react'
import {
  Container,
  Paper,
  Typography,
  Box,
  Chip,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert
} from '@mui/material'
import { Visibility, Receipt } from '@mui/icons-material'
import Header from '../../../components/ecom/common/Header'
import LoadingSpinner from '../../../components/ecom/common/LoadingSpinner'
import { ordersAPI } from '../../../utils/apis'
import { ORDER_STATUS, OrderStatus } from '@/utils/constants'

interface Order {
  id: number;
  order_number: string;
  created_at: string;
  total_amount: number | string;
  status: OrderStatus;
  bkash_payment_status?: string;
  // Add other order properties as needed
}

interface OrdersResponse {
  orders?: Order[];
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async (): Promise<void> => {
    try {
      const response = await ordersAPI.getAll()
      const data = response.data as OrdersResponse
      setOrders(data.orders || [])
      setError('')
    } catch (err: any) {
      setError('Failed to load orders')
      console.error('Orders fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: OrderStatus): string => {
    return ORDER_STATUS[status]?.color || 'bg-gray-100 text-gray-800'
  }

  const getStatusLabel = (status: OrderStatus): string => {
    return ORDER_STATUS[status]?.label || status
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <LoadingSpinner text="Loading your orders..." />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Container maxWidth="xl" className="py-8">
        <Box className="mb-6">
          <Typography variant="h4" className="font-bold">
            My Orders
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            View your order history and track your purchases
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" className="mb-6">
            {error}
          </Alert>
        )}

        {orders.length === 0 ? (
          <Paper className="p-8 text-center">
            <Receipt className="text-gray-400 text-6xl mb-4 mx-auto" />
            <Typography variant="h6" className="mb-2 text-gray-600">
              No orders yet
            </Typography>
            <Typography variant="body2" className="mb-6 text-gray-500">
              When you make purchases, they will appear here
            </Typography>
            <Button variant="contained" href="/ecom/products">
              Start Shopping
            </Button>
          </Paper>
        ) : (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order #</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Payment</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order: Order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-semibold">
                      {order.order_number}
                    </TableCell>
                    <TableCell>
                      {new Date(order.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="font-semibold text-green-600">
                      ৳{typeof order.total_amount === 'string' ? parseFloat(order.total_amount).toFixed(2) : order.total_amount.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={getStatusLabel(order.status)}
                        className={getStatusColor(order.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      {order.bkash_payment_status === 'Completed' ? (
                        <Chip 
                          label="Paid" 
                          color="success" 
                          size="small" 
                        />
                      ) : (
                        <Chip 
                          label="Pending" 
                          color="warning" 
                          size="small" 
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        startIcon={<Visibility />}
                        size="small"
                        href={`/ecom/orders/${order.id}`}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </div>
  )
}