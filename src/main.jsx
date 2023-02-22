import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./components/context/app-context";
import { ChakraProvider } from "@chakra-ui/react";

 ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);


