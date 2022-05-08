import Link from "../components/link";
import { useState, useEffect } from "react";

const HomeTeste = () => {
  console.log("HOME SENDO CRIADO");

  const [contador, setContador] = useState(0);

  const add = (num) => {
    setContador(contador + num);
  };

  useEffect(() => {
    if (contador === 5) alert("Você alcançou o número");
  }, [contador]);

  return (
    <>
      <h1> Home</h1>
      <Link to="test">Ir para a página teste</Link>
      <br />
      <button onClick={() => add(-1)}>Diminui</button>
      <span style={{ color: "black" }}> {contador} </span>
      <button onClick={() => add(1)}>Aumenta</button>
    </>
  );
};

export default HomeTeste;
