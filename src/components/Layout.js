import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  // Outlet will render whichever route is selected
  // Components in Layout will wil render in every route
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}