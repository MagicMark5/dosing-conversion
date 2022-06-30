import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ modal, toggle, closeModal }) {
  // Outlet will render whichever route is selected
  // Components in Layout will wil render in every route
  return (
    <>
      <Nav modal={modal} toggle={toggle} closeModal={closeModal} />
      <Outlet />
      <Footer modal={modal} />
    </>
  )
}