import ProductDetailPage from '@/pages/productDetailPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetailPage,
  loader: async ({params}) => {
    return {
      productId: params.productId,
    }
  }
})
