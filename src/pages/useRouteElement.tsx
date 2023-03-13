import { useRoutes } from 'react-router-dom'
import RegisterLayout from 'src/laypouts/RegisterLayout'
import Login from './Login'
import ProductList from './ProductList'
import Register from './Register'

export default function useRouteElement() {
  const routeElemnts = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/Login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/Register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElemnts
}
