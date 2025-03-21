import "./style.css";
import { Heart } from "lucide-react";

export function Card({ imgURL, name, description, price }) {
  return (
    <div className="card">
      <img src={imgURL} alt={name} className="products-img" />
      <div className="fav-btn">
        <Heart size={18} color="#FF3536" fill="#FF3536" className="fav-icon" />
      </div>

      <div className="products-details">
        <h1>{name}</h1>
        <p>{description}</p>
        <strong>R$ {price}</strong>
      </div>
      <button type="button" className="checkout-btn">
        Compra agora
      </button>
    </div>
  );
}
