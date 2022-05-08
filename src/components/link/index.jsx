import { Link } from "react-router-dom";

const MyLink = (props) => {
  return <Link to={props.to}>{props.children}</Link>;
};

export default MyLink;
