import { Grid, Typography, Box } from '@mui/material'
import ProductCard from './ProductCard'
import LoadingSpinner from '../common/LoadingSpinner'
import { Product } from '../types/product' // Import from your types file

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const ProductGrid = ({ products, loading, error }: ProductGridProps) => {
  if (loading) {
    return <LoadingSpinner text="Loading products..." />
  }

  if (error) {
    return (
      <Box className="text-center py-8">
        <Typography color="error">{error}</Typography>
      </Box>
    )
  }

  if (!products || products.length === 0) {
    return (
      <Box className="text-center py-8">
        <Typography variant="h6" className="text-gray-500">
          No products found
        </Typography>
      </Box>
    )
  }

  return (
  <Grid container spacing={3}>
    {products.map(product => (
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
        <ProductCard product={product} />
      </Grid>
    ))}
  </Grid>
)
}

export default ProductGrid