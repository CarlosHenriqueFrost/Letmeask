import Illustration from "../Assets/illustration.svg";
import Logo from "../Assets/logo.svg";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";

import "../styles/Home.scss";
import "../styles/Button.scss";

export function NewRoomWithGoogle() {
  const { user } = useContext(AuthContext);

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
          <h1>{user?.name}</h1>
          <h2>Crie uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala já existente?{" "}
            <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
