import { Header } from "./components/header/index.jsx";
import { NewTask } from "./components/newtask/index.jsx";

export function App() {
  return (
    <div className="container">
      <Header />
      <NewTask />
    </div>
  );
}
