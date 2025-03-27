import { useState } from "react";
import logoIMG from "./assets/logo.svg";

export function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErros] = useState({ email: "", password: "" });

  function handleSubmit(event) {
    event.preventDefault();
    let formIsValid = true;
    let newErros = { email: "", password: "" };

    if (!email) {
      newErros.email = "O E-mail é obrigatório";
      formIsValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErros.email = "Digite um E-mail válido";
      formIsValid = false;
    }

    if (!password) {
      newErros.password = "A senha é Obrigatória";
      formIsValid = false;
    }

    if (password.length < 6) {
      newErros + "A senha deve ter pelo menos 6 caracteres";
      formIsValid = false;
    }

    if (!formIsValid) {
      setErros(newErros);
      return;
    }

    console.log("Email: ", email);
    console.log("Senha: ", password);
  }

  return (
    <div className="container">
      <div className="s-form">
        <img src={logoIMG} alt="logo vertigo" />
        <h1>Acesse a plataforma</h1>
        <p>
          Faça login ou registre-se para começar a construir seus projetos ainda
          hoje.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Digite o seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div>
            <label htmlFor="password">Senha</label>
            <button type="button" className="forgot-password-btn">
              Esqueceu a senha?
            </button>
          </div>
          <input
            type="password"
            placeholder="Digite a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="submit-btn">
            Entrar
          </button>
        </form>

        <div className="sign-up">
          <p>
            Ainda não tem uma conta?
            <button type="button">Inscreva-se</button>
          </p>
        </div>
      </div>
      <div className="s-right"></div>
    </div>
  );
}
