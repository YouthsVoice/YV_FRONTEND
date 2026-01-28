'use client'
import { useState, useEffect, ChangeEvent } from 'react'
import { useParams } from 'next/navigation'
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Chip,
  Divider,
  Breadcrumbs,
  Link as MuiLink
} from '@mui/material'
import { ShoppingCart, Share, Favorite } from '@mui/icons-material'
import Link from 'next/link'
import Header from '../../../../components/ecom/common/Header'
import LoadingSpinner from '../../../..//components/ecom/common/LoadingSpinner'
import { useCart } from '../../../../context/CartContext'
import { productsAPI } from '../../../../utils/apis'
import { Product } from '../../../../components/ecom/types/product'


export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1)
  const { addToCart, getCartItem } = useCart()

  // Fix: Only call getCartItem when product is defined
  const cartItem = product ? getCartItem(product.id) : undefined

  useEffect(() => {
    if (productId) {
      fetchProduct()
    }
  }, [productId])

  const fetchProduct = async (): Promise<void> => {
    try {
      setLoading(true)
      const response = await productsAPI.getById(parseInt(productId))
      setProduct(response.data)
      setError(null)
    } catch (err) {
      setError('Product not found')
      console.error('Product fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = (): void => {
    if (product) {
      addToCart(product, selectedQuantity)
    }
  }

  const handleQuantityChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedQuantity(Number(e.target.value))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <LoadingSpinner text="Loading product..." />
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Container className="py-8 text-center">
          <Typography variant="h4" color="error">
            {error || 'Product not found'}
          </Typography>
          <Link href="/ecom/products">
            <Button variant="contained" className="mt-4">
              Back to Products
            </Button>
          </Link>
        </Container>
      </div>
    )
  }

  const isInStock = product.stock_quantity > 0

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Container maxWidth="xl" className="py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs className="mb-6">
          <Link href="/ecom/" passHref>
            <MuiLink>Home</MuiLink>
          </Link>
          <Link href="/ecom/products" passHref>
            <MuiLink>Products</MuiLink>
          </Link>
          <Typography color="text.primary">{product.name}</Typography>
        </Breadcrumbs>

        <Grid container spacing={6}>
          {/* Product Images */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="bg-white rounded-lg shadow-sm p-4">
              <img
                src={product.image_url || '/images/placeholder-product.jpg'}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </Box>
          </Grid>

          {/* Product Info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="bg-white rounded-lg shadow-sm p-6">
              {/* Product Title and Category */}
              <Typography variant="h4" className="font-bold mb-2">
                {product.name}
              </Typography>
              
              {product.category && (
                <Chip 
                  label={product.category} 
                  variant="outlined" 
                  className="mb-4"
                />
              )}

              {/* Price */}
              <Typography variant="h3" className="text-green-600 font-bold mb-4">
                ৳{typeof product.price === 'string' ? parseFloat(product.price).toFixed(2) : product.price.toFixed(2)}
              </Typography>

              {/* Stock Status */}
              <Box className="mb-6">
                <Typography 
                  variant="body1" 
                  className={isInStock ? 'text-green-600' : 'text-red-600'}
                >
                  {isInStock ? 'In Stock' : 'Out of Stock'}
                </Typography>
                {isInStock && (
                  <Typography variant="body2" className="text-gray-600">
                    {product.stock_quantity} items available
                  </Typography>
                )}
              </Box>

              <Divider className="my-6" />

              {/* Quantity Selector */}
              {isInStock && (
                <Box className="mb-6">
                  <Typography variant="h6" className="mb-2">
                    Quantity
                  </Typography>
                  <Box className="flex items-center space-x-4">
                    <select
                      value={selectedQuantity}
                      onChange={handleQuantityChange}
                      className="border rounded-lg px-3 py-2"
                    >
                      {[...Array(Math.min(product.stock_quantity, 10))].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <Typography variant="body2" className="text-gray-600">
                      Max: {product.stock_quantity}
                    </Typography>
                  </Box>
                </Box>
              )}

              {/* Action Buttons */}
              <Box className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCart />}
                  onClick={handleAddToCart}
                  disabled={!isInStock}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 py-3"
                >
                  {cartItem ? `Add More (${cartItem.quantity} in cart)` : 'Add to Cart'}
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Favorite />}
                  className="flex-1 py-3"
                >
                  Wishlist
                </Button>
              </Box>

              {/* Additional Actions */}
              <Box className="flex space-x-4">
                <Button startIcon={<Share />} className="text-gray-600">
                  Share
                </Button>
              </Box>
            </Box>

            {/* Product Description */}
            <Box className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <Typography variant="h5" className="font-bold mb-4">
                Product Description
              </Typography>
              <Typography variant="body1" className="text-gray-700 whitespace-pre-line">
                {product.description || 'No description available.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}