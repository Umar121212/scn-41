import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/base.scss";
import reportWebVitals from "./reportWebVitals";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./theme/globalStyle";
import { RegistrationPage } from "./pages/RegistrationPage/Registration";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {
    path: "registration",
    element: <RegistrationPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
