'use client'
import { useEffect, useState } from 'react'
import { 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Box,
  Card,
  CardContent
} from '@mui/material'
import { 
  ShoppingCart, 
  LocalShipping, 
  Security, 
  SupportAgent 
} from '@mui/icons-material'
import Link from 'next/link'

import Header from '../../components/ecom/common/Header'
import ProductGrid from '../../components/ecom/products/ProductGrid'
import { useProducts } from '../../hooks/useProducts'
import { Product } from '../../components/ecom/types/product' // Import Product type

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const { products, loading } = useProducts({ featured: true })

  useEffect(() => {
    // Show first 8 products as featured
    setFeaturedProducts(products.slice(0, 8))
  }, [products])

  const features: Feature[] = [
    {
      icon: <ShoppingCart className="text-blue-600 text-4xl" />,
      title: 'Easy Shopping',
      description: 'Simple and intuitive shopping experience'
    },
    {
      icon: <LocalShipping className="text-green-600 text-4xl" />,
      title: 'Fast Delivery',
      description: 'Quick shipping across Bangladesh'
    },
    {
      icon: <Security className="text-purple-600 text-4xl" />,
      title: 'Secure Payment',
      description: 'bKash secured payment gateway'
    },
    {
      icon: <SupportAgent className="text-orange-600 text-4xl" />,
      title: '24/7 Support',
      description: 'Always here to help you'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h2" className="font-bold mb-4">
                Welcome to YouthsVoice Store
              </Typography>
              <Typography variant="h5" className="mb-8 text-blue-100">
                Discover amazing products with secure bKash payments
              </Typography>
              <Link href="/ecom/products">
                <Button 
                  variant="contained" 
                  size="large"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                >
                  Shop Now
                </Button>
              </Link>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <Typography variant="h4" className="font-bold mb-4">
                  Why Shop With Us?
                </Typography>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>100% Secure bKash Payments</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Fast Delivery Across Bangladesh</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Quality Products Guaranteed</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Excellent Customer Support</span>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <Container maxWidth="xl">
          <Typography variant="h3" className="text-center font-bold mb-12">
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card className="card text-center h-full">
                  <CardContent className="p-6">
                    <Box className="mb-4">
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" className="font-semibold mb-2">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <Container maxWidth="xl">
          <Box className="text-center mb-12">
            <Typography variant="h3" className="font-bold mb-4">
              Featured Products
            </Typography>
            <Typography variant="h6" className="text-gray-600 max-w-2xl mx-auto">
              Check out our most popular products
            </Typography>
          </Box>

          <ProductGrid 
            products={featuredProducts} 
            loading={loading} 
            error={null} 
          />

          {featuredProducts.length > 0 && (
            <Box className="text-center mt-12">
              <Link href="/ecom/products">
                <Button 
                  variant="outlined" 
                  size="large"
                  className="px-8 py-3 text-lg"
                >
                  View All Products
                </Button>
              </Link>
            </Box>
          )}
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h5" className="font-bold mb-4">
                YouthsVoice Store
              </Typography>
              <Typography className="text-gray-400">
                Your trusted online shopping destination in Bangladesh. 
                Secure payments with bKash and fast delivery.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" className="font-semibold mb-4">
                Quick Links
              </Typography>
              <Box className="space-y-2">
                <Link href="/ecom/products" className="block text-gray-400 hover:text-white">
                  All Products
                </Link>
                <Link href="/ecom/about" className="block text-gray-400 hover:text-white">
                  About Us
                </Link>
                <Link href="/ecom/contact" className="block text-gray-400 hover:text-white">
                  Contact
                </Link>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" className="font-semibold mb-4">
                Contact Info
              </Typography>
              <Typography className="text-gray-400">
                Email: support@youthsvoice.org
              </Typography>
              <Typography className="text-gray-400">
                Phone: +880 1612 983983
              </Typography>
            </Grid>
          </Grid>
          <Box className="border-t border-gray-800 mt-8 pt-8 text-center">
            <Typography className="text-gray-400">
              © 2024 YouthsVoice Store. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </footer>
    </div>
  )
}