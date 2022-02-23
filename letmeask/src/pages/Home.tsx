import Illustration from "../Assets/illustration.svg";
import Logo from "../Assets/logo.svg";
import GoogleIcon from "../Assets/google-icon.svg";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { auth, firebase } from "../service/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import "../styles/Home.scss";
import "../styles/Button.scss";

export function Home() {
  const NavigationBetweenPages = useNavigate();

  function AuthSystemWithGoogle() {
    const provider = new GoogleAuthProvider();

    const AuthWithGoogle = getAuth();
    signInWithPopup(AuthWithGoogle, provider).then((result) =>
      console.log(result)
    );

    // const AuthWithGoogle = new firebase.auth.GoogleAuthProvider();

    // auth.signInWithPopup(AuthWithGoogle).then((result) => {
    //   console.log(result);

    // NavigationBetweenPages("/room/new");
  }
  return (
    <div className="AuthComponent">
      <aside>
        <img src={Illustration} alt="imagem ilustrando perguntas e respostas" />
        <strong>
          Toda pergunta tem <br /> uma resposta
        </strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>

      <main>
        <div className="LoginWithGoogleOrJoinARoom">
          <img src={Logo} alt="Logo da Letmeask" />
          <button onClick={AuthSystemWithGoogle} className="LoginWithGoogle">
            <img src={GoogleIcon} alt="Icone do Google" />
            Crie sua sala com Google
          </button>
          <div className="Divider">Ou entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar em uma sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
