import { useEffect, useState } from "react";
import { Card } from "./card/index.jsx";

export default function App() {
  const [prod, setProd] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProd(data.products));
  }, []);

  return (
    <>
    <div className="grid">
      {prod &&
        prod.map((produto) => (
          <Card
            key={produto.id}
            title={produto.title}
            description={produto.description}
            price={produto.price}
            image={produto.thumbnail}
          />
        ))}
        </div>
    </>
  );
}
