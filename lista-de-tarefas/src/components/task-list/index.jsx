import "./styles.css";
import { Trash2 } from "lucide-react";
import trash from "../../assets/Vector.png";

export function TaskList({ descricao }) {
  return (
    <div className="task-box">
        <input type="checkbox" class="rounded-checkbox" id="checkbox"/>
        <p className="description">
          {descricao}
        </p>

        <button type="button" className="button" >
        <img src={trash} alt="" size={24} />
        </button>
        
    </div>
  );
}