import { soma } from "../utils/calculadora";
import Header from "../components/header";
import BoldSampleText from "../components/boldSampleText";
import FormField from "../components/formField";
import Link from "../components/link";

const style = {
  backgroundColor: "black",
};

const Test = () => {
  return (
    <>
      <Header />
      <Link to="/">Ir para a página Home</Link>
      <br />
      <Link to="project">Ir para do Projeto</Link>
      <h1> Bem vindo ao mundo Dev Otaku</h1>
      <h2> Hello World</h2>
      <h3> Hello World</h3>
      <BoldSampleText accentColor="true">value</BoldSampleText>
      <p> {soma(2, 3)}</p>
      <FormField label="Nome" />
      <FormField label="Sobrenome" />

      <hr />
    </>
  );
};

export default Test;
