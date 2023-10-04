import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "../../ui/Home"
import Menu from "../../features/menu/Menu"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
])

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  return <RouterProvider router={router} />
}

export default OrderItem
