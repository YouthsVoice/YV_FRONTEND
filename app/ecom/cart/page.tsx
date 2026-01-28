'use client'
import { 
  Container, 
  Typography, 
  Grid, 
  Box,
  Button,
  Paper,
  Divider
} from '@mui/material'
import { ShoppingCart, Delete, Add, Remove } from '@mui/icons-material'
import Link from 'next/link'
import Header from '../../../components/ecom/common/Header'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'

export default function CartPage() {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart()
  const { isAuthenticated } = useAuth()

  const handleQuantityChange = (productId: number, newQuantity: number): void => {
    if (newQuantity < 1) {
      removeFromCart(productId)
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Container className="py-16 text-center">
          <ShoppingCart className="text-gray-400 text-6xl mb-4 mx-auto" />
          <Typography variant="h4" className="mb-4 text-gray-600">
            Your cart is empty
          </Typography>
          <Typography variant="body1" className="mb-8 text-gray-500">
            Add some products to your cart to see them here
          </Typography>
          <Link href="/ecom/products">
            <Button variant="contained" size="large">
              Continue Shopping
            </Button>
          </Link>
        </Container>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Container maxWidth="xl" className="py-8">
        <Typography variant="h4" className="font-bold mb-6">
          Shopping Cart ({cartItems.length} items)
        </Typography>

        <Grid container spacing={4}>
          {/* Cart Items */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Paper className="p-6">
              <Box className="flex justify-between items-center mb-4">
                <Typography variant="h6">
                  Cart Items
                </Typography>
                <Button 
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800"
                >
                  Clear Cart
                </Button>
              </Box>

              <Divider className="mb-4" />

              <div className="space-y-4">
                {cartItems.map(item => (
                  <Box key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    {/* Product Image */}
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />

                    {/* Product Info */}
                    <Box className="flex-1">
                      <Typography variant="h6" className="font-semibold">
                        {item.name}
                      </Typography>
                      <Typography variant="body1" className="text-green-600 font-bold">
                        ৳{item.price.toFixed(2)}
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        Stock: {item.stock_quantity}
                      </Typography>
                    </Box>

                    {/* Quantity Controls */}
                    <Box className="flex items-center space-x-2">
                      <Button
                        size="small"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="min-w-0 w-8 h-8"
                      >
                        <Remove fontSize="small" />
                      </Button>
                      
                      <Typography className="w-12 text-center">
                        {item.quantity}
                      </Typography>
                      
                      <Button
                        size="small"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.stock_quantity}
                        className="min-w-0 w-8 h-8"
                      >
                        <Add fontSize="small" />
                      </Button>
                    </Box>

                    {/* Item Total */}
                    <Typography variant="h6" className="font-bold w-24 text-right">
                      ৳{(item.price * item.quantity).toFixed(2)}
                    </Typography>

                    {/* Remove Button */}
                    <Button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 min-w-0 w-8 h-8"
                    >
                      <Delete fontSize="small" />
                    </Button>
                  </Box>
                ))}
              </div>
            </Paper>
          </Grid>

          {/* Order Summary */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Paper className="p-6 sticky top-4">
              <Typography variant="h6" className="font-bold mb-4">
                Order Summary
              </Typography>

              <Box className="space-y-3 mb-6">
                <Box className="flex justify-between">
                  <Typography>Subtotal:</Typography>
                  <Typography>৳{cartTotal.toFixed(2)}</Typography>
                </Box>
                <Box className="flex justify-between">
                  <Typography>Shipping:</Typography>
                  <Typography className="text-green-600">Free</Typography>
                </Box>
                <Box className="flex justify-between">
                  <Typography>Tax:</Typography>
                  <Typography>৳0.00</Typography>
                </Box>
                <Divider />
                <Box className="flex justify-between">
                  <Typography variant="h6" className="font-bold">
                    Total:
                  </Typography>
                  <Typography variant="h6" className="font-bold text-green-600">
                    ৳{cartTotal.toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              {isAuthenticated ? (
                <Link href="/ecom/checkout" className="block">
                  <Button 
                    variant="contained" 
                    fullWidth 
                    size="large"
                    className="bg-green-600 hover:bg-green-700 py-3"
                  >
                    Proceed to Checkout
                  </Button>
                </Link>
              ) : (
                <Box className="space-y-3">
                  <Link href="/ecom/auth/login" className="block">
                    <Button 
                      variant="contained" 
                      fullWidth 
                      size="large"
                      className="bg-blue-600 hover:bg-blue-700 py-3"
                    >
                      Login to Checkout
                    </Button>
                  </Link>
                  <Typography variant="body2" className="text-center text-gray-600">
                    Or{' '}
                    <Link href="/ecom/auth/register" className="text-blue-600 hover:underline">
                      create an account
                    </Link>
                  </Typography>
                </Box>
              )}

              <Link href="/ecom/products">
                <Button variant="outlined" fullWidth className="mt-3">
                  Continue Shopping
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}