import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from './features/cart/Cart'
import CreateOrder from './features/order/CreateOrder'
import Order from './features/order/Order'
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
{
  element:<AppLayout/>,
  children:[
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      cart: "/cart",
      element: <Cart />,
    },
    {
      cart: "/order/new",
      element: <CreateOrder />,
    },
    {
      cart: "/order/:orderId",
      element: <Order />,
    },

  ]
}

]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
