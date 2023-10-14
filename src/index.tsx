import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { App } from "./pages/App";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { Theme } from "@radix-ui/themes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App>
      <Theme accentColor="red" grayColor="olive">
        <RouterProvider router={router} />
      </Theme>
    </App>
  </React.StrictMode>
);
