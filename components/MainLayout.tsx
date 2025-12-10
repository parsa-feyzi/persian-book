import { ReactNode } from "react";

import Navbar from "./NavbarComponents/Navbar";
import Footer from "./Footer";


function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
