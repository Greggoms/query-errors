import { useEffect } from "react";
import { applyThemePreference } from "./lib/utils/applyThemePreference";
import useThemeStore from "./store";
import Header from "./components/Header";
import Fetcher from "./components/Fetcher";

export default function App() {
  const theme = useThemeStore((state) => state.mode);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);

  return (
    <div className="grid grid-rows-layout">
      <Header />
      <div className="container mt-5 mb-10">
        <Fetcher />
      </div>
    </div>
  );
}
