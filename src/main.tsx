import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import React from "react";
import "@fontsource/";
import App from "./components/App/App";
import "./index.css";
import theme from "./styles/theme/theme.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
