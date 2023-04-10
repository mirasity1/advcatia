import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./error-page";
import Header from "./reusable/header";
import Contatos from "./Contatos";
import Areas from "./areas";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGavel,
  faHandshake,
  faPassport,
  faBalanceScale,
  faHome,
  faHeart,
  faBuilding,
  faFileInvoice,
  faFileSignature,
  faUserFriends,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGavel,
  faHandshake,
  faPassport,
  faBalanceScale,
  faHome,
  faHeart,
  faBuilding,
  faFileInvoice,
  faFileSignature,
  faUserFriends,
  faFileAlt
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Header /> }],
    errorElement: <ErrorPage />,
  },
  {
    path: "/contatos",
    element: <Contatos />,
    children: [{ path: "/contatos", element: <Header /> }],
    errorElement: <ErrorPage />,
  },
  {
    path: "/areas-de-atuacao",
    element: <Areas />,
    children: [{ path: "/areas-de-atuacao", element: <Header /> }],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
