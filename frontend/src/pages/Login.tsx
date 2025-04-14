import { FormEvent, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { LoginComponent } from "../components/login/LoginComponent";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const { state } = useAuth();
  if (state.token) return <Navigate to="/" replace />;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (isRegisterMode) {
        await axios.post("http://localhost:4000/auth/register", {
          username,
          password,
        });
        setError("Cuenta creada. Ahora inicia sesión.");
        setIsRegisterMode(false);
      } else {
        const res = await axios.post("http://localhost:4000/auth/login", {
          username,
          password,
        });
        login(res.data.token, username);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Algo salió mal");
    }
  };

  return (
    <>
      <LoginComponent
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
        error={error}
        isRegisterMode={isRegisterMode}
        setIsRegisterMode={setIsRegisterMode}
      />
    </>
  );
};

export default Login;
