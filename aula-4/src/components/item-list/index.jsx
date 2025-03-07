import { Check, Info } from "lucide-react";
import "./style.css";

export function ItemList({ functionality }) {
  return (
    <li>
      <div>
        <Check size={20} color="#04D361" />
        {functionality}
      </div>
      <Info size={20} color="#64748B" />
    </li>
  );
}

export function ItemList1({ functionality }) {
  return (
    <li>
      <footer id="enterprise">
      <div>
        <Check size={20} color="#04D361" />
      </div>
      {functionality}
      </footer>
    </li>
  );
}

export function ItemList2({ functionality }) {
  return (
    <li>
      
      <div>
        <Check size={20} color="#04D361" />
        <footer id="essentials">
        {functionality}
        </footer>
      </div>
      <Info size={20} color="#64748B" />
    </li>
  );
}