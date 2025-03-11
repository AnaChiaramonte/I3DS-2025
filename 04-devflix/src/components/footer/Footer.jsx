import Styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer>
      <p>
        Feito com ❤️ por
        <a href={props.devlinks}>{props.devName}</a>
      </p>
    </footer>
  );
};

export default Footer;
