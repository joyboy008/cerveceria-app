import { ReactNode } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="contenedor-general p-2">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
