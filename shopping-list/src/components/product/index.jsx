import { Apple, EllipsisVertical } from "lucide-react";

export function Product() {
  return (
    <div className="card-product">
      <div className="details">
        <p>Maçã</p>
        <span> 2 unidades</span>
      </div>
      <Apple size={16} />
      <EllipsisVertical size={16} />
    </div>
  );
}
