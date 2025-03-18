import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
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
    </>
  );
}
