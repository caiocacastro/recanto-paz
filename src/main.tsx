import React from "react";
import ReactDOM from "react-dom/client";
import Pages from "./routes/index.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const routes = createBrowserRouter([{ path: "*", Component: Pages }]);
const theme = createTheme({
  typography: {
    fontFamily: ["Varela Round"].join(","),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>
);
