import { useEffect } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import useThemeStore from "./store";
import { applyThemePreference } from "./lib/utils/applyThemePreference";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<p>Oops! Something went wrong...</p>}
    >
      <Route index element={<Home />} />
    </Route>
  )
);

export default function App() {
  const theme = useThemeStore((state) => state.mode);

  const queryClient = new QueryClient();

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
