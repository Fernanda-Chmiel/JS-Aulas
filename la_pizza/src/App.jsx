import logoIMG from "./assets/logo.svg";
import { Card } from "./components/card";
import LaCumaIMG from "./assets/pizza-1.png";
export function App() {
  return (
    <>
      <div className="container">
        <img src={logoIMG} alt="La pizza Pedaço da Itália" className="logo" />
      </div>
      <div className="products-container">
        <h1 className="title">Mais vendidas</h1>

        <div className="products">
          <Card
            imgURL={LaCumaIMG}
            name="La Cuma"
            description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            price="29,90"
          />
        </div>
      </div>
    </>
  );
}
