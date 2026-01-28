'use client'
import { useState, useEffect } from 'react'
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert
} from '@mui/material'
import { Add, Edit, Delete, Visibility } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import Header from '../../../../components/ecom/common/Header'
import LoadingSpinner from '../../../../components/ecom/common/LoadingSpinner'
import ProductForm from '../../../../components/ecom/admin/ProductForm'
import { useAuth } from '@/context/AuthContext'
import { adminAPI } from '../../../../utils/apis'
import { Product } from '../../../../utils/apis'

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [formOpen, setFormOpen] = useState<boolean>(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  
  const { isAdmin } = useAuth()
  const router = useRouter()

  // Redirect if not admin
  useEffect(() => {
    if (!isAdmin) {
      router.push('/ecom/')
    }
  }, [isAdmin, router])

  useEffect(() => {
    if (isAdmin) {
      fetchProducts()
    }
  }, [isAdmin])

  const fetchProducts = async (): Promise<void> => {
    try {
      const response = await adminAPI.getProducts()
      setProducts(response.data)
      setError('')
    } catch (err: any) {
      setError('Failed to load products')
      console.error('Products fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = (): void => {
    setEditingProduct(null)
    setFormOpen(true)
  }

  const handleEdit = (product: Product): void => {
    setEditingProduct(product)
    setFormOpen(true)
  }

  const handleDelete = async (productId: number): Promise<void> => {
    if (!confirm('Are you sure you want to delete this product?')) return

    try {
      await adminAPI.deleteProduct(productId)
      setProducts(products.filter(p => p.id !== productId))
    } catch (err: any) {
      setError('Failed to delete product')
    }
  }

  const handleFormClose = (): void => {
    setFormOpen(false)
    setEditingProduct(null)
  }

  const handleFormSuccess = (): void => {
    handleFormClose()
    fetchProducts()
  }

  if (!isAdmin) {
    return null
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <LoadingSpinner text="Loading products..." />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Container maxWidth="xl" className="py-8">
        {/* Page Header */}
        <Box className="flex justify-between items-center mb-6">
          <Box>
            <Typography variant="h4" className="font-bold">
              Product Management
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              Manage your store products
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleCreate}
          >
            Add Product
          </Button>
        </Box>

        {error && (
          <Alert severity="error" className="mb-6">
            {error}
          </Alert>
        )}

        {/* Products Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product: Product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Box className="flex items-center space-x-3">
                      <img
                        src={product.image_url || '/images/placeholder-product.jpg'}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <Box>
                        <Typography variant="body2" className="font-semibold">
                          {product.name}
                        </Typography>
                        <Typography variant="caption" className="text-gray-500">
                          ID: {product.id}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell className="font-semibold text-green-600">
                    ৳{typeof product.price === 'string' ? parseFloat(product.price).toFixed(2) : product.price.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={product.stock_quantity} 
                      color={product.stock_quantity > 0 ? 'success' : 'error'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={product.is_active ? 'Active' : 'Inactive'} 
                      color={product.is_active ? 'success' : 'default'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    {product.category || 'Uncategorized'}
                  </TableCell>
                  <TableCell>
                    <Box className="flex space-x-1">
                      <IconButton
                        size="small"
                        href={`/ecom/product/${product.id}`}
                        target="_blank"
                      >
                        <Visibility fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleEdit(product)}
                      >
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(product.id)}
                        className="text-red-600"
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Product Form Dialog */}
        <Dialog 
          open={formOpen} 
          onClose={handleFormClose}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            {editingProduct ? 'Edit Product' : 'Add New Product'}
          </DialogTitle>
          <DialogContent>
            <ProductForm
              product={editingProduct}
              onSuccess={handleFormSuccess}
              onCancel={handleFormClose}
            />
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  )
}