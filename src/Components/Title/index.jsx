import style from "./title.module.css";

function Title(props) {
  return <h2 className={style.name}>{props.children}</h2>;
}

export default Title;
