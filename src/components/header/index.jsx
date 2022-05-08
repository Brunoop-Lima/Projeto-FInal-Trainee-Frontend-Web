import reiDosPiratas from "../../assets/luffySemFundo.jpg";
import "./styles.css";
import BoldSampleText from "../boldSampleText";
import FormField from "../formField";

const Header = () => {
  return (
    <header>
      <img src={reiDosPiratas} alt="Luffy chibi" style={{ height: 150 }} />
      <BoldSampleText>One Piece Forum</BoldSampleText>
      <FormField label="Pesquisar" />
    </header>
  );
};

export default Header;
