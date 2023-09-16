import { Link, createBrowserRouter } from "react-router-dom";
import App from "./views/Hello";
import { Title } from "@mantine/core";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Title> Auth</Title>,
  },
  {
    path: "/test",
    element: <Link to="/"> back home</Link>,
  },
]);
