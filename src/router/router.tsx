import { Link, createBrowserRouter } from "react-router-dom";
import App from "./views/Hello";
import { Authentication } from "./views/Auth";
import { ProtectedPath } from "../components/ProtectedPath";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedPath redirectUrl="/auth">
        <App />
      </ProtectedPath>
    ),
  },
  {
    path: "/auth",
    element: (
      <ProtectedPath
        redirectUrl="/"
        validator={(user) => {
          return user != null;
        }}
      >
        <Authentication />,
      </ProtectedPath>
    ),
  },
  {
    path: "/test",
    element: <Link to="/"> back home</Link>,
  },
]);
