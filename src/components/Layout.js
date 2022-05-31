import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  // Outlet will render whichever route is selected
  // Components in Layout will wil render in every route
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}