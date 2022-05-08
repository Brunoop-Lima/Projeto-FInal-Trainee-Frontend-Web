import "../selectInput/style.css";

const Select = () => {
  return (
    <div className="teste">
      <h5>Categorias:</h5>
      <select>
        <option value="1">TODOS</option>
        <option value="2">Aventura</option>
        <option value="3">Romance</option>
        <option value="4">Comédia</option>
      </select>
    </div>
  );
};

export default Select;
