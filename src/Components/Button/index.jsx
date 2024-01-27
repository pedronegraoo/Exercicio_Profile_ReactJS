import style from "./btn.module.css";

const Button = (props) => {
  return <button className={style.btn}>{props.btnText}</button>;
};

export default Button;
