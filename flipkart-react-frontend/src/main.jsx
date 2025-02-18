import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Cart from "./routes/Cart.jsx";
import Home from "./routes/Home.jsx";
import Wishlist from "./routes/Wishlist.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import flipkartStore from "./store/index.js";
import Note from "./routes/Note.jsx";
import CreateAccount from "./routes/CreateAccount.jsx";
import PlacedOrderPage from "./routes/PlacedOrderPage.jsx";
import EmptyCart from "./routes/EmptyCart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login-page", element: <LoginPage /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/notifications", element: <Note /> },
      { path: "/emptycart", element: <EmptyCart /> },
      { path: "/create-account", element: <CreateAccount /> },
      { path: "/placeorderPage", element: <PlacedOrderPage /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={flipkartStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
