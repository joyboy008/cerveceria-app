// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Breweries from "./pages/Breweries";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRouter";
import { BreweriesId } from "./pages/BreweriesId";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Breweries />
              </PrivateRoute>
            }
          />

          <Route
            path="/perid/:id"
            element={
              <PrivateRoute>
                <BreweriesId />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
