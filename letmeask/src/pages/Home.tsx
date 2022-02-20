import Illustration from "../Assets/illustration.svg";
import Logo from "../Assets/logo.svg";
import GoogleIcon from "../Assets/google-icon.svg";
import { Button } from "../components/Button";

import "../styles/Home.scss";

export function Home() {
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
          <button className="LoginWithGoogle">
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
