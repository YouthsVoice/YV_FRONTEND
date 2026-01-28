import { 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  Typography, 
  Box 
} from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'
import { MouseEvent } from 'react'

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number | string;
  image_url: string;
  stock_quantity: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, getCartItem } = useCart()
  const cartItem = getCartItem(product.id)
  const isInStock = product.stock_quantity > 0

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (isInStock) {
      addToCart(product, 1)
    }
  }

  return (
    <Link href={`/ecom/product/${product.id}`}>
      <Card className="card h-full flex flex-col group cursor-pointer">
        {/* Product Image */}
        <CardMedia
          component="img"
          height="200"
          image={product.image_url || '/images/placeholder-product.jpg'}
          alt={product.name}
          className="h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        <CardContent className="flex-grow flex flex-col p-4">
          {/* Product Name */}
          <Typography 
            variant="h6" 
            className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors"
          >
            {product.name}
          </Typography>
          
          {/* Product Description */}
          <Typography 
            variant="body2" 
            color="text.secondary" 
            className="mb-4 flex-grow line-clamp-3"
          >
            {product.description}
          </Typography>
          
          {/* Price and Stock */}
          <Box className="flex justify-between items-center mb-4">
            <Typography 
              variant="h6" 
              className="font-bold text-green-600"
            >
              ৳{typeof product.price === 'string' ? parseFloat(product.price).toFixed(2) : product.price.toFixed(2)}
            </Typography>
            
            <Typography 
              variant="body2" 
              className={isInStock ? 'text-green-600' : 'text-red-600'}
            >
              {isInStock ? `${product.stock_quantity} in stock` : 'Out of stock'}
            </Typography>
          </Box>
          
          {/* Add to Cart Button */}
          <Button
            variant="contained"
            fullWidth
            startIcon={<ShoppingCart />}
            onClick={handleAddToCart}
            disabled={!isInStock}
            className={`${
              isInStock 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-gray-400'
            } transition-colors`}
          >
            {cartItem ? `Add More (${cartItem.quantity})` : 'Add to Cart'}
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}

export default ProductCard