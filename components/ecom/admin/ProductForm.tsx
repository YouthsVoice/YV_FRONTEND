'use client'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Typography,
  Alert,
  SelectChangeEvent
} from '@mui/material'
import { adminAPI, productsAPI } from '../../../utils/apis'
import { Product, Category } from '../../../utils/apis'

interface ProductFormProps {
  product?: Product | null;
  onSuccess: () => void;
  onCancel: () => void;
}

interface FormData {
  name: string;
  description: string;
  price: string;
  stock_quantity: string;
  category: string;
  is_active: boolean;
  image_file: string | null;
}

// Use a more flexible type that matches the API expectations
type ProductRequest = {
  name: string;
  description: string;
  price: number;
  stock_quantity: number;
  category: string;
  is_active: boolean;
} & (
  | { image_file: string; image_url?: never }
  | { image_file?: never; image_url: string }
  | { image_file?: never; image_url?: never }
)

const ProductForm = ({ product, onSuccess, onCancel }: ProductFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    price: '',
    stock_quantity: '',
    category: '',
    is_active: true,
    image_file: null
  })
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [imagePreview, setImagePreview] = useState<string>('')

  const isEditing = !!product

  useEffect(() => {
    fetchCategories()
    if (product) {
      setFormData({
        name: product.name || '',
        description: product.description || '',
        price: product.price?.toString() || '',
        stock_quantity: product.stock_quantity?.toString() || '',
        category: product.category || '',
        is_active: product.is_active !== false,
        image_file: null
      })
      setImagePreview(product.image_url || '')
    }
  }, [product])

  const fetchCategories = async (): Promise<void> => {
    try {
      const response = await productsAPI.getCategories()
      setCategories(response.data || [])
    } catch (err: any) {
      console.error('Failed to fetch categories:', err)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>): void => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      // Convert image to base64 for upload
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image_file: reader.result as string
        }))
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      // Clear image file if no file selected
      setFormData(prev => ({ ...prev, image_file: null }))
      if (!isEditing) {
        setImagePreview('')
      }
    }
  }

  const prepareProductData = (): any => {
    const baseData = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price) || 0,
      stock_quantity: parseInt(formData.stock_quantity) || 0,
      category: formData.category,
      is_active: formData.is_active,
    }

    // For new products or when updating image
    if (formData.image_file) {
      return {
        ...baseData,
        image_file: formData.image_file
      }
    }

    // For editing existing products without image change
    if (isEditing && product) {
      return {
        ...baseData,
        image_url: product.image_url // Keep existing image URL
      }
    }

    return baseData
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validate required fields
    if (!formData.name || !formData.description || !formData.price || !formData.stock_quantity) {
      setError('Please fill in all required fields')
      setLoading(false)
      return
    }

    // Validate numeric fields
    if (parseFloat(formData.price) <= 0) {
      setError('Price must be greater than 0')
      setLoading(false)
      return
    }

    if (parseInt(formData.stock_quantity) < 0) {
      setError('Stock quantity cannot be negative')
      setLoading(false)
      return
    }

    try {
      const productData = prepareProductData()
      
      if (isEditing && product) {
        await adminAPI.updateProduct(product.id, productData)
      } else {
        await adminAPI.createProduct(productData)
      }
      onSuccess()
    } catch (err: any) {
      setError(err.response?.data?.error || 'Operation failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} className="space-y-4 py-4">
      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        label="Product Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <TextField
        fullWidth
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        multiline
        rows={4}
      />

      <Box className="grid grid-cols-2 gap-4">
        <TextField
          fullWidth
          label="Price (BDT)"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
          inputProps={{ min: "0.01" }}
        />

        <TextField
          fullWidth
          label="Stock Quantity"
          name="stock_quantity"
          type="number"
          value={formData.stock_quantity}
          onChange={handleChange}
          required
          inputProps={{ min: "0" }}
        />
      </Box>

      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          value={formData.category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value="">No Category</MenuItem>
          {categories.map((category: Category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Image Upload */}
      <Box>
        <Typography variant="body2" className="mb-2 font-semibold">
          Product Image
        </Typography>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-2"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded border"
          />
        )}
        {isEditing && !formData.image_file && (
          <Typography variant="caption" className="text-gray-500 block mt-1">
            Current image will be kept if no new image is selected
          </Typography>
        )}
      </Box>

      <FormControlLabel
        control={
          <Switch
            name="is_active"
            checked={formData.is_active}
            onChange={handleChange}
          />
        }
        label="Active Product"
      />

      <Box className="flex justify-end space-x-3 pt-4">
        <Button onClick={onCancel} disabled={loading}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
        >
          {loading ? 'Saving...' : (isEditing ? 'Update Product' : 'Create Product')}
        </Button>
      </Box>
    </Box>
  )
}

export default ProductForm