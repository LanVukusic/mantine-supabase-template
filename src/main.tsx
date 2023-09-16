import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { SpotlightProvider } from "@mantine/spotlight";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { mantineModals } from "./mantine/modals/modals.tsx";
import { spotlightActions } from "./mantine/spotlight.tsx";
import { mantineTheme } from "./mantine/theme.ts";
import { router } from "./router/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
      <Notifications />
      <SpotlightProvider shortcut={null} actions={spotlightActions}>
        <ModalsProvider modals={mantineModals}>
          <RouterProvider router={router} />
        </ModalsProvider>
      </SpotlightProvider>
    </MantineProvider>
  </React.StrictMode>
);
