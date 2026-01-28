import { API } from '@/API';
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
import { InternalAxiosRequestConfig } from 'axios'

const API_BASE_URL = API

// Define types for API requests and responses
interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface User {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  is_staff?: boolean;
  // Add other user properties as needed
}

export interface Category {
  id: number;
  name: string;
  description?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  stock_quantity: number;
  description?: string;
  category?: string;
  is_active?: boolean;
}

interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  // Add other cart item properties as needed
}

interface PaymentResponse {
  success: boolean;
  message?: string;
  transaction_id?: string;
  order?: Order;
}
interface Order {
  id: number;
  user: number;
  items: CartItem[];
  total: number;
  status: string;
  created_at: string;
  payment?: {
    bkash_url?: string;
    // Add other payment properties as needed
  };
  // Add other order properties as needed
}

interface PaymentData {
  payment_method: string;
  paymentID: string;
  orderID: number;
  // Add other payment properties as needed
}

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token')
      if (token && config.headers) {
        config.headers.Authorization = `Token ${token}`
      }
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token')
        window.location.href = '/ecom/auth/login'
      }
    }
    return Promise.reject(error)
  }
)

// API endpoints
export const authAPI = {
  login: (credentials: LoginCredentials): Promise<AxiosResponse<{ token: string; user: User }>> => 
    api.post('/ecom/auth/login/', credentials),
  
  register: (userData: RegisterData): Promise<AxiosResponse<{ token: string; user: User }>> => 
    api.post('/ecom/auth/register/', userData),
  
  logout: (): Promise<AxiosResponse> => 
    api.post('/ecom/auth/logout/'),
  
  getProfile: (): Promise<AxiosResponse<User>> => 
    api.get('/ecom/auth/user/'),
}

export const productsAPI = {
  getAll: (params: Record<string, any> = {}): Promise<AxiosResponse<Product[]>> => 
    api.get('/ecom/products/', { params }),
  
  getById: (id: number): Promise<AxiosResponse<Product>> => 
    api.get(`/ecom/products/${id}/`),
  
  search: (query: string): Promise<AxiosResponse<Product[]>> => 
    api.get('/ecom/products/', { params: { search: query } }),
  
  getCategories: (): Promise<AxiosResponse<Category[]>> => 
    api.get('/ecom/categories/'),
}

export const cartAPI = {
  get: (): Promise<AxiosResponse<CartItem[]>> => 
    api.get('/ecom/cart/'),
  
  addItem: (data: { product_id: number; quantity: number }): Promise<AxiosResponse<CartItem>> => 
    api.post('/ecom/cart/add/', data),
  
  updateItem: (itemId: number, data: { quantity: number }): Promise<AxiosResponse<CartItem>> => 
    api.put(`/ecom/cart/update/${itemId}/`, data),
  
  removeItem: (itemId: number): Promise<AxiosResponse> => 
    api.delete(`/ecom/cart/remove/${itemId}/`),
  
  clear: (): Promise<AxiosResponse> => 
    api.delete('/ecom/cart/clear/'),
}

// In your API file, update the ordersAPI.create method:
export const ordersAPI = {
  create: (data: { 
    items: { product_id: number; quantity: number }[]; 
    shipping_address: string;
    customer_phone: string;
    customer_email: string;
    total: number;
  }): Promise<AxiosResponse<Order>> => 
    api.post('/ecom/orders/create/', data),
  
  getAll: (): Promise<AxiosResponse<Order[]>> => 
    api.get('/ecom/orders/'),
  
  getById: (id: number): Promise<AxiosResponse<Order>> => 
    api.get(`/ecom/orders/${id}/`),
}

export const paymentAPI = {
  execute: (data: PaymentData): Promise<AxiosResponse<PaymentResponse>> => 
    api.post('/ecom/payment/execute/', data),
}

export const adminAPI = {
  getProducts: (): Promise<AxiosResponse<Product[]>> => 
    api.get('/ecom/admin/products/'),
  
  createProduct: (data: Omit<Product, 'id'> & { image_file?: string | null }): Promise<AxiosResponse<Product>> => 
    api.post('/ecom/admin/products/', data),
  
  updateProduct: (id: number, data: Partial<Product> & { image_file?: string | null; image_url?: string }): Promise<AxiosResponse<Product>> => 
    api.put(`/ecom/admin/products/${id}/`, data),
  
  deleteProduct: (id: number): Promise<AxiosResponse> => 
    api.delete(`/ecom/admin/products/${id}/`),
  
  getOrders: (): Promise<AxiosResponse<Order[]>> => 
    api.get('/ecom/admin/orders/'),
  
  updateOrder: (id: number, data: { status: string }): Promise<AxiosResponse<Order>> => 
    api.put(`/ecom/admin/orders/${id}/`, data),
}
export default api