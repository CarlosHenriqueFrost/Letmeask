import Illustration from "../Assets/illustration.svg"
import Logo from "../Assets/logo.svg"
import GoogleIcon from "../Assets/google-icon.svg"

import "../styles/global.css"

export function Home() {
  return (
    <div>
      <aside>
        <img src={Illustration} alt="imagem ilustrando perguntas e respostas" />
        <strong>Toda pergunta tem uma resposta</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>

      <main>
        <div>
          <img src={Logo} alt="Logo da Letmeask" />
          <button>
            <img src={GoogleIcon} alt="Icone do Google" />
            Crie sua sala com Google
          </button>
          <div>--------- Ou entre em uma sala ---------</div>

          <form>
            <input 
              type="text"
              placeholder="Digite o código da sala"
            />
            <button>Entrar em uma sala</button>
          </form>
        </div>
      </main>
    </div>
  )
}