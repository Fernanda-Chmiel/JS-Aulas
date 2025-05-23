import { ShoppingCart, Timer, Package, Coffee } from "lucide-react";
import coffeeImg from "../assets/coffee.svg";
import { Header } from "../components/header";
import { useEffect, useState } from "react";
import { Card } from "../components/card";

export function Home() {
  const [prod, setProd] = useState(null);
  useEffect(() => {
    fetch("/data.json")
      .then((resp) => resp.json())
      .then((data) => setProd(data.coffees));
  }, []);

  return (
    <>
      <Header />
      <main>
        <div id="content">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul className="info-list">
            <li>
              <ShoppingCart
                className="icon yellow-dark"
                size={32}
                weight="fill"
              />
              <span>Compra simples e segura</span>
            </li>

            <li>
              <Package className="icon base-text" size={32} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </li>

            <li>
              <Timer className="icon yellow" size={32} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </li>

            <li>
              <Coffee className="icon purple" size={32} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </div>
        <div>
          <img src={coffeeImg} alt="" />
        </div>
      </main>
      <section>
        <h2 className="cafes">Nossos cafés</h2>

        {
          <div className="grid">
            {prod &&
              prod.map((produto) => (
                <Card
                  key={produto.id}
                  title={produto.title}
                  tags={produto.tags}
                  description={produto.description}
                  price={produto.price}
                  image={produto.image}
                />
              ))}
          </div>
        }
      </section>
    </>
  );
}
