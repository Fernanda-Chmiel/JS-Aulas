import { useState } from "react";
import "./style.css";
import { ShoppingCart, Plus, Minus } from "lucide-react";

export function Card({ title, description, price, image, tags }) {
  const [contar, setcontar] = useState(0);
  return (
    <div className="card">
      <div className="img">
        <img class="img" src={image} alt="" />
      </div>

      <div className="tags-container">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            <span>{tag}</span>
          </div>
        ))}
      </div>

      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>

      <div className="alinhar">
        <strong>
          <p className="cifrao">R$</p>
          <p className="price">{price}</p>
        </strong>

        <div className="quantityButtons">
          <button className="menos" onClick={() => setcontar(contar - 1)}>
            <Minus className="menos" size={12} color="#8047F8" />
          </button>
          <p className="num">{contar}</p>
          <button className="mais" onClick={() => setcontar(contar + 1)}>
            <Plus className="mais" size={12} color="#8047F8" />
          </button>
        </div>

        <button type="button" className="shoppingBtn">
          <ShoppingCart color="#F3F2F2" fill="#F3F2F2" size={20} />
        </button>
      </div>
    </div>
  );
}
