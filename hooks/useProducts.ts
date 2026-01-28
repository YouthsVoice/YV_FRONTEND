import { useState, useEffect } from 'react'
import { productsAPI } from '../utils/apis'
import { AxiosError } from 'axios'

// Define types
interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  stock_quantity: number;
  description?: string;
  category?: string;
}

interface Filters {
  category?: string;
  min_price?: number;
  max_price?: number;
  search?: string;
  sort_by?: string;
  in_stock?: boolean;
}

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  search: (query: string) => Promise<void>;
}

export const useProducts = (filters: Filters = {}): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [JSON.stringify(filters)]) // Use JSON.stringify for deep comparison

  const fetchProducts = async (): Promise<void> => {
    try {
      setLoading(true)
      const response = await productsAPI.getAll(filters)
      // The response data is the array of products, not an object with products property
      setProducts(response.data || [])
      setError(null)
    } catch (err: unknown) {
      const errorMessage = err instanceof AxiosError 
        ? err.response?.data?.message || 'Failed to fetch products'
        : 'Failed to fetch products'
      setError(errorMessage)
      console.error('Products fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  const searchProducts = async (query: string): Promise<void> => {
    try {
      setLoading(true)
      const response = await productsAPI.search(query)
      // The response data is the array of products, not an object with products property
      setProducts(response.data || [])
      setError(null)
    } catch (err: unknown) {
      const errorMessage = err instanceof AxiosError 
        ? err.response?.data?.message || 'Search failed'
        : 'Search failed'
      setError(errorMessage)
      console.error('Search error:', err)
    } finally {
      setLoading(false)
    }
  }

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
    search: searchProducts
  }
}