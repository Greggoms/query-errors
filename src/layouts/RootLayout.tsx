import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="grid grid-rows-layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
