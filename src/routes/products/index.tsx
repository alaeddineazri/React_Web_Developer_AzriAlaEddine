import ProductPage from '@/pages/productPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/')({
  component: ProductPage,
})

