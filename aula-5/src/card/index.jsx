import "./index.css";
export function Card({ title, description, price, image }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p className="description">{description}</p>
      <strong>
        <p className="cifrao">$</p>
      <p className="price">{price}</p>
      </strong>
    </div>
  );
}
