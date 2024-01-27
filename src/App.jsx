import Container from "./Components/Container";
import imgProfile from "./assets/profile.png";
import style from "./style/app.module.css";

function App() {
  return (
    <>
      <h1>Testando</h1>
      <div className={style.page}>
        <Container
          avatar={imgProfile}
          name="John Doe"
          carrer="Full Stack Developer"
          phone="+55 (21) 92121-4545"
          email="john.doe@gmail.com"
          githubUrl="https://github.com/"
          linkedinUrl="https://www.linkedin.com/home"
          twitterUrl="https://twitter.com/i/flow/login"
        />
      </div>
    </>
  );
}

export default App;
