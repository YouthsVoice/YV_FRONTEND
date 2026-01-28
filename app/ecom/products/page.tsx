'use client'
import { useState, ChangeEvent } from 'react'
import { 
  Container, 
  Typography, 
  Grid, 
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material'
import { Search, FilterList } from '@mui/icons-material'
import Header from '../../../components/ecom/common/Header'
import ProductGrid from '../../../components/ecom/products/ProductGrid'
import { useProducts } from '@/hooks/useProducts'

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [categoryFilter, setCategoryFilter] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('-created_at')
  
  const { products, loading, error, search } = useProducts({
    search: searchQuery,
    category: categoryFilter,
    ordering: sortBy
  })

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
  }

  const handleCategoryChange = (e: SelectChangeEvent<string>) => {
    setCategoryFilter(e.target.value)
  }

  const handleSortChange = (e: SelectChangeEvent<string>) => {
    setSortBy(e.target.value)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Container maxWidth="xl" className="py-8">
        {/* Page Header */}
        <Box className="text-center mb-8">
          <Typography variant="h3" className="font-bold text-gray-900 mb-4">
            Our Products
          </Typography>
          <Typography variant="h6" className="text-gray-600 max-w-2xl mx-auto">
            Discover amazing products with secure bKash payments and fast delivery across Bangladesh
          </Typography>
        </Box>

        {/* Filters and Search */}
        <Box className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: <Search className="text-gray-400 mr-2" />
                }}
              />
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={categoryFilter}
                  label="Category"
                  onChange={handleCategoryChange}
                >
                  <MenuItem value="">All Categories</MenuItem>
                  {/* Categories will be populated from API */}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={handleSortChange}
                >
                  <MenuItem value="-created_at">Newest First</MenuItem>
                  <MenuItem value="created_at">Oldest First</MenuItem>
                  <MenuItem value="price">Price: Low to High</MenuItem>
                  <MenuItem value="-price">Price: High to Low</MenuItem>
                  <MenuItem value="name">Name: A to Z</MenuItem>
                  <MenuItem value="-name">Name: Z to A</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Products Grid */}
        <ProductGrid 
          products={products} 
          loading={loading} 
          error={error} 
        />
      </Container>
    </div>
  )
}