import { Routes, Route } from "react-router-dom";
import Breweries from "../pages/Breweries";
import Login from "../pages/Login";
import { BreweriesId } from "../pages/BreweriesId";
import PrivateRouter from "../components/PrivateRouter";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRouter>
            <Breweries />
          </PrivateRouter>
        }
      />

      <Route
        path="/perid/:id"
        element={
          <PrivateRouter>
            <BreweriesId />
          </PrivateRouter>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
