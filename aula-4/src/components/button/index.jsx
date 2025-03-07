import "./style.css";

export function Button({ title }) {
  return (
    <button type="button" className="darkButton">
      {title}
    </button>
  );
}

export function Button1({ title }) {
  return (
    <button type="button" className="button2">
      {title}
    </button>
  );
}

