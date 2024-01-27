/* Em um novo projeto React com Vite crie um componente chamado “Profile”
 que seja capaz de aceitar as props avatar, name, bio, email, phone, githubUrl, 
 linkedinUrl e twitterUrl. O componente Profile deverá então renderizar um cartão 
 de perfil de acordo com a imagem abaixo.*/

import { useState } from "react";
import Button from "../Button";
import Title from "../Title";
import style from "./style.module.css";

function Container({
  avatar,
  name,
  carrer,
  phone,
  email,
  githubUrl,
  linkedinUrl,
  twitterUrl,
}) {
  const [btnText, setBtnText] = useState("follow");

  function clickOnBtn() {
    console.log(btnText);
    setBtnText(btnText === "follow" ? "following" : "follow");
  }

  return (
    <div className={style.container}>
      <img className={style.imgProfile} src={avatar} alt={name} />

      {/* Children */}
      <Title>
        <span>{name}</span>
        <button className={style.followBtn} onClick={clickOnBtn}>
          {btnText}
        </button>
      </Title>

      <p className={style.data}>{carrer}</p>
      <p className={style.data}>{phone}</p>
      <p className={style.data}>{email}</p>
      <div className={style.allBtns}>
        <a href={githubUrl} target="_blank">
          <Button btnText="GitHub" />
        </a>
        <a href={linkedinUrl} target="_blank">
          <Button btnText="LinkedIn" />
        </a>
        <a href={twitterUrl} target="_blank">
          <Button btnText="Twitter" />
        </a>
      </div>
    </div>
  );
}

export default Container;
