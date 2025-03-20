import { Moon, Sun, Github, Instagram, Youtube, Linkedin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
    <img className="perfil" src="../src/images/perfil.png" alt="" />
    <h2 className="font">@123</h2>
      <div className="toggle-container" onClick={toggleTheme}>
        <div className="toggle-switch">
          {theme === "dark" ? (
            <Moon size={20} color="black" />
          ) : (
            <Sun size={20} color="black" />
          )}
        </div>
      </div>

      <button className="buttons"> Inscreva-se no NLW </button>
      <button className="buttons"> Baixe meu e-book </button>
      <button className="buttons"> Veja meu portfólio </button>
      <button className="buttons"> Conheça o Explorer </button>

      <div className="icons">
      < Github />
      <Instagram className="icon" />
      <Youtube className="icon"/>
      <Linkedin className="icon"/>
      </div>
    </>
  );
}
