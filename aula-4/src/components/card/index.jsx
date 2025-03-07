import { Button, Button1 } from "../button";
import { ItemList, ItemList1, ItemList2 } from "../item-list";
import "./style.css";

export function Card({ //cima
  description,
  title,
  price,
  darkMode = false,
  features,
}) {
  return (
    <div className={`container ${darkMode ? "css" : ""}`}>
     
      <p className="cor" id="description">{description}</p>
      <div className="details">
        <h1 >{title}</h1>
        <p>
            R$
          <strong  className="strong">

           {price}
            <span>/mês</span>
          </strong>
        </p>
      </div>

      <Button1 title="Assinar agora" />

      <hr />

      <ul>
        {features &&
          features.map((item, index) => (
            <ItemList2 key={index} functionality={item} />
          ))}
      </ul>
    </div>
  );
}

export function Card1({  //ultimo
  description,
  title,
  price,
  darkMode = false,
  features,
}) {
  return (
    <div className={`container ${darkMode ? "" : ""}`}>

     <p id="description">{description}</p>
      <div className="details">
        <h1>{title}</h1>
        <p>
          <strong>
            {price}
          </strong>
        </p>
      </div>

      <Button1 title="Fale com a gente" />

      <hr />

      <ul>
        {features &&
          features.map((item, index) => (
            <ItemList1 key={index} functionality={item} />
          ))}
      </ul>
    </div>
  );
}

export function Card2({
  description,
  title,
  price,
  darkMode = false,
  features,
}) {
  return (
    <div className={`container ${darkMode ? "darkContainer" : ""}`}>
      <h5 className="maisVantajoso"> MAIS VANTAJOSO</h5>
      <p id="description">{description}</p>
      <div className="details">
        <h1>{title}</h1>
        <p>
        R$
          <strong>
            {price}
            <span>/mês</span>
          </strong>
        </p>
      </div>

      <Button title="Assinar agora" />

      <hr />

      <ul>
        {features &&
          features.map((item, index) => (
            <ItemList key={index} functionality={item} />
          ))}
      </ul>
    </div>
  );
}