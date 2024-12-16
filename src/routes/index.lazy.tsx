import HomePage from '@/pages/homePage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: HomePage,
})

