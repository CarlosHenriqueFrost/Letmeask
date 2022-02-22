import Illustration from "../Assets/illustration.svg";
import Logo from "../Assets/logo.svg";
import GoogleIcon from "../Assets/google-icon.svg";
import { Button } from "../components/Button";

import "../styles/Home.scss";
import "../styles/Button.scss";

export function NewRoomWithGoogle() {
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
          <h2>Crie uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala já existente? <a href="#">Clique aqui</a>
          </p>
        </div>
      </main>
    </div>
  );
}
