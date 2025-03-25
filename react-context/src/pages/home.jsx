import { Moon, Sun, Github, Instagram, Youtube, Linkedin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export function Home() {
  const { theme, toggleTheme } = useTheme();

  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.get("/users/Fernanda-Chmiel");
        setUser(response.data);
      } catch (error) {
        console.log("Erro ao buscar dados do usuário", error);
      }
    }

    getUserData();
  }, []);

  return (
    <div className={`container ${theme}`}>
      <img
        className="perfil"
        src={user.avatar_url}
        alt={`Imagem do ${user.name}`}
        title={`Imagem do ${user.name}`}
      />
      <h2 className="font">@{user.login}</h2>
      <div className="toggle-container" onClick={toggleTheme}>
        <div className="toggle-switch">
          {theme === "dark" ? (
            <Moon size={20} color="black" />
          ) : (
            <Sun size={20} color="black" />
          )}
        </div>
      </div>

      <div className={`button ${theme}`}>
        <button className="buttons"> Inscreva-se no NLW </button>
        <button className="buttons"> Baixe meu e-book </button>
        <button className="buttons"> Veja meu portfólio </button>
        <button className="buttons"> Conheça o Explorer </button>
      </div>

      <div className="icons">
        <Github />
        <Instagram className="icon" />
        <Youtube className="icon" />
        <Linkedin className="icon" />
      </div>
    </div>
  );
}
