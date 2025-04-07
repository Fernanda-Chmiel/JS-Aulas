import { Header } from "./components/header/index.jsx";
import { NewTask } from "./components/newtask/index.jsx";
import { TaskList } from "./components/task-list/index.jsx"
import listaTarefas from "../data.json";

export function App() {
  return (
    <div className="container">
      <Header />
      <NewTask />
      <div className="tasks-list">
          {listaTarefas.tarefas.map(({ descricao }, index) => (
            <TaskList Key={index} descricao={descricao} />
          ))}
        </div>

    </div>
  );
}
