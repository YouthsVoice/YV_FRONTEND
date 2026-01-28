import { CircularProgress, Box, CircularProgressProps } from '@mui/material'
import { ReactNode } from 'react'

interface LoadingSpinnerProps {
  size?: number;
  text?: ReactNode;
  className?: string;
  textClassName?: string;
  color?: CircularProgressProps['color'];
}

const LoadingSpinner = ({ 
  size = 40, 
  text = 'Loading...', 
  className = '',
  textClassName = 'text-gray-600 text-sm',
  color = 'primary'
}: LoadingSpinnerProps) => {
  return (
    <Box className={`flex flex-col items-center justify-center p-8 space-y-4 ${className}`}>
      <CircularProgress size={size} color={color} />
      {text && (
        <p className={textClassName}>{text}</p>
      )}
    </Box>
  )
}

export default LoadingSpinner