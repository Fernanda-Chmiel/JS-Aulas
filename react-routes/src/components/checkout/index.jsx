import "./style.css";
import {
  MapPin,
  DollarSign,
  Landmark,
  AppWindow,
  CircleDollarSign,
  Trash2
} from "lucide-react";
import { useState } from "react";
import "./style.css";
import { Plus, Minus } from "lucide-react";

export function Fonte() {
  return (
    <>
      <div className="titles">
        <h2>Complete seu pedido</h2>
      </div>
    </>
  );
}

export function Layout() {
  return (
    <>
      <div className="box1">
        <div className="grid1">
          <MapPin color="#C47F17" />
          <h2 className="title1">Endereço de Entrega</h2>
        </div>
        <p className="title2">
          Informe o endereço onde deseja receber seu pedido
        </p>

        <div className="separar">
          <input id="cep" name="input" value="CEP" />
          <input id="rua" name="input" value="Rua" />
        </div>

        <input id="num" name="input" value="Número" />
        <input id="complemento" name="input" value="Complemento" />

        <input id="bairro" name="input" value="Bairro" />
        <input id="cidade" name="input" value="Cidade" />
        <input id="uf" name="input" value="UF" />
      </div>
    </>
  );
}

export function Compra() {
  const [contar, setcontar] = useState(0);
  return (
    <>
      <div className="box2">
        <h2 className="cafe">Cafés selecionados</h2>

        <div className="duda">
          <div className="espaco">
            <img
              className="imgcafe"
              src="/images/coffees/expresso.png"
              alt=""
            />
          </div>

          <div className="espaco">
            <h1 className="coffeletter">Expresso Tradicional</h1>
          </div>
          <div className="espaco990">
            <h3>R$ 9,90</h3>
          </div>
        </div>

        <div className="espacebuttons1">
        <div className="quantityButtom">
          <button className="menos" onClick={() => setcontar(contar - 1)}>
            <Minus className="menos" size={12} color="#8047F8" />
          </button>
          <p className="num">{contar}</p>
          <button className="mais" onClick={() => setcontar(contar + 1)}>
            <Plus className="mais" size={12} color="#8047F8" />
          </button>
        </div>

        <button className="remover" State="Default" Type="Secondary" > <Trash2 color="#8047F8" size={16} />REMOVER</button>

        </div>

        <hr />
        <div className="duda">
          <img className="imgcafe" src="/images/coffees/latte.png" alt="" />
          <h1 className="coffeletter">Latte</h1>
          <h3 className="preco1980">R$ 19,80</h3>
        </div>

        <div className="espacebuttons2">
        <div className="quantityButtom">
          <button className="menos" onClick={() => setcontar(contar - 1)}>
            <Minus className="menos" size={12} color="#8047F8" />
          </button>
          <p className="num">{contar}</p>
          <button className="mais" onClick={() => setcontar(contar + 1)}>
            <Plus className="mais" size={12} color="#8047F8" />
          </button>
        </div>

        <button className="remover" State="Default" Type="Secondary" > <Trash2 color="#8047F8" size={16} />REMOVER</button>

        </div>

        <hr />
        <div className="duda">
          <p className="titleitens" >Total de itens</p>
          <p className="precotitle2">R$ 29,70</p>
        </div>
        <div className="duda">
          <p className="titleitens">Entrega</p>
          <p className="precotitle2">R$ 3,50</p>
        </div>
        <div className="duda">
          <h2 className="total">Total</h2>
          <h2 className="precototal">R$ 33,20</h2>
        </div>
        <button className="conf">CONFIRMAR PEDIDO</button>
      </div>
    </>
  );
}

export function Pagamento() {
  return (
    <>
      <div className="pagamento">
        <div className="grid1">
          <DollarSign color="#8047F8" />
          <h2 className="title1">Pesquisa</h2>
        </div>
        <p className="title2">
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </p>
        <button className="button">
          {" "}
          <AppWindow color="#8047F8" size={20} /> CARTÃO DE CRÉDITO
        </button>
        <button className="button">
          {" "}
          <Landmark color="#8047F8" size={20} /> CARTÃO DE DÉBITO
        </button>
        <button className="button">
          {" "}
          <CircleDollarSign color="#8047F8" size={20} /> DINHEIRO
        </button>
      </div>
    </>
  );
}
