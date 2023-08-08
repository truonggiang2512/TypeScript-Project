import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./Services/redux/configStore";
import router from "./Router/Router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </CssVarsProvider>
    </Provider>
  </>
);
