// Define types for status objects
interface StatusConfig {
  label: string;
  color: string;
}

interface PaymentMethodConfig {
  name: string;
  icon: string;
}

// Define type for ORDER_STATUS object
interface OrderStatusMap {
  pending: StatusConfig;
  paid: StatusConfig;
  processing: StatusConfig;
  shipped: StatusConfig;
  delivered: StatusConfig;
  cancelled: StatusConfig;
}

// Define type for PAYMENT_METHODS object
interface PaymentMethodsMap {
  bkash: PaymentMethodConfig;
}

export const ORDER_STATUS: OrderStatusMap = {
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
  paid: { label: 'Paid', color: 'bg-blue-100 text-blue-800' },
  processing: { label: 'Processing', color: 'bg-purple-100 text-purple-800' },
  shipped: { label: 'Shipped', color: 'bg-indigo-100 text-indigo-800' },
  delivered: { label: 'Delivered', color: 'bg-green-100 text-green-800' },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-800' },
}

export const PAYMENT_METHODS: PaymentMethodsMap = {
  bkash: { name: 'bKash', icon: '💰' },
}

export const CURRENCY: string = 'BDT'

// Optional: Export type for order status keys
export type OrderStatus = keyof typeof ORDER_STATUS;

// Optional: Export type for payment method keys
export type PaymentMethod = keyof typeof PAYMENT_METHODS;

// Optional: Utility function to get status config
export const getOrderStatus = (status: OrderStatus): StatusConfig => {
  return ORDER_STATUS[status];
}

// Optional: Utility function to get payment method config
export const getPaymentMethod = (method: PaymentMethod): PaymentMethodConfig => {
  return PAYMENT_METHODS[method];
}