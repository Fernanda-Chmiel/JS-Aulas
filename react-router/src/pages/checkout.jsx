import { Compra, Fonte, Layout, Pagamento } from "../components/checkout";
import { Header } from "../components/header";

export function Checkout() {
  return (
    <>
      <Header />
      <Fonte />
      <div className="gridpage" >
      <Layout />
      <Compra />
      </div>
      <Pagamento />

    </>
  );
}
