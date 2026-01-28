'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useAuth } from './AuthContext'

// Define types for cart items and product
interface Product {
  id: number;
  name: string;
  price: number | string;
  image_url: string;
  stock_quantity: number;
}

export interface CartItem extends Product {
  quantity: number;
  price: number; // Ensure price is always a number in cart
}

export interface CartContextType {
  cartItems: CartItem[];
  cartTotal: number;
  cartCount: number;
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getCartItem: (productId: number) => CartItem | undefined;
}

// Create context with type
export const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartTotal, setCartTotal] = useState<number>(0)
  const [cartCount, setCartCount] = useState<number>(0)
  const { isAuthenticated } = useAuth()

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart) as CartItem[]
        setCartItems(parsedCart)
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error)
        setCartItems([])
      }
    }
  }, [])

  // Update totals when cart items change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    
    setCartTotal(total)
    setCartCount(count)
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product: Product, quantity: number = 1): void => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      
      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        // Add new item with price as number
        return [...prevItems, {
          id: product.id,
          name: product.name,
          price: typeof product.price === 'string' ? parseFloat(product.price) : product.price,
          image_url: product.image_url,
          stock_quantity: product.stock_quantity,
          quantity: quantity
        }]
      }
    })
  }

  const updateQuantity = (productId: number, quantity: number): void => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: quantity }
          : item
      )
    )
  }

  const removeFromCart = (productId: number): void => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== productId)
    )
  }

  const clearCart = (): void => {
    setCartItems([])
  }

  const getCartItem = (productId: number): CartItem | undefined => {
    return cartItems.find(item => item.id === productId)
  }

  const value: CartContextType = {
    cartItems,
    cartTotal,
    cartCount,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartItem
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}