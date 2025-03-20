import "./style.css";

export function Card({ imgURL, name, description, price }) {
  return (
    <div className="card">
      <img src={imgURL} alt={name} className="products-img" />
      <div className="products-details">
        <h1>{name}</h1>
        <p>{description}</p>
        <strong>R$ {price}</strong>
      </div>
      <button type="button">Compra agora</button>
    </div>
  );
}
