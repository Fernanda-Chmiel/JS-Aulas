import { Card, Card1, Card2 } from "./components/card";
import "./index.css";

export function App() {
  return (
    <>
    <div className="grip">
      <Card
        description="para você começar"
        title="Essentials"
        price="19,97"
        features={[
          "Até 3 usuários",
          "Autoatendimento",
        ]}
      />
      <Card2
        description="para você decolar"
        title="Ultimate"
        price="29,97"
        darkMode
        features={[
          "Usuários ilimitados",
          "Suporte 24/7",
          "CSM Dedicado",
          "Treinamentos",
        ]}
      />
            <Card1         
        description="para sua empresa"
        title="Enterprise"
        features={[
          "Plano customizado especialmente para a necessidade de seu negócio",
        ]}
      />
      </div>
    </>
  );
}