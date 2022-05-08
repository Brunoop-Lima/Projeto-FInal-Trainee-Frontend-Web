import "./styles.css";

const BoldSampleText = (props) => {
  return (
    <span
      style={{
        color: props.accentColor ? "red" : "white",
      }}
    >
      <b>
        <u>{props.children}</u>
      </b>
    </span>
  );
};

export default BoldSampleText;
