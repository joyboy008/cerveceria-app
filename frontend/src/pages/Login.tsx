import { FormEvent, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { LoginComponent } from "../components/login/LoginComponent";
import { postLogin, postRegister } from "../api/axios";

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
        await postRegister(username, password);
        setError("Cuenta creada. Ahora inicia sesión.");
        setIsRegisterMode(false);
      } else {
        const res = await postLogin(username, password);
        login(res.data.token, username);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Algo salió mal");
    }
  };

  return (
    <section className="contenedor-login">
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
    </section>
  );
};

export default Login;
