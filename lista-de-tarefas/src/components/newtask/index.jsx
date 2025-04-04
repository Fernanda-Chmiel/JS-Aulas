import "./styles.css";
import { CirclePlus } from "lucide-react";

export function NewTask() {
  return (
    <div className="container">
      <div className="align">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className="add-task"
        />
        <button type="button" className="button-add">
          <CirclePlus color="#F0EDF2" size={18} />
        </button>
      </div>
    </div>
  );
}
