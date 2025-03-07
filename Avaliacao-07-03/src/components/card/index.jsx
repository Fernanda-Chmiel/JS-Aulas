import "./style.css";

export function Card({ title, description, price, image, tags }) {
  return (
    <div className="card">
      <div className="img">
        <img class="img" src={image} alt="" />
      </div>
      <p className="tags">{tags}</p>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <strong>
        <img
          src="https://www.istockphoto.com/vector/shopping-cart-black-line-drawing-icon-gm1987775073-559417253?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_vector&utm_content=srp_topbanner_media&utm_term=carrinho+de+compras"
          alt=""
        />
        <p className="cifrao">R$</p>
        <p className="price">{price}</p>
      </strong>
    </div>
  );
}
