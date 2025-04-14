import { ReactNode } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
