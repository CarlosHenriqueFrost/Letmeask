import { Home } from "./pages/Home";
import { NewRoomWithGoogle } from "./pages/NewRoomWithGoogle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextTypes = {
  user: User | undefined;
  LoginWithGoogle: () => void;
};

export const AuthContext = createContext({} as AuthContextTypes);

function App() {
  const [user, setUser] = useState<User>();

  async function LoginWithGoogle() {
    const provider = new GoogleAuthProvider();

    const AuthWithGoogle = getAuth();

    const result = await signInWithPopup(AuthWithGoogle, provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL || !uid) {
        throw new Error("Missing information from Google account");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, LoginWithGoogle }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/new" element={<NewRoomWithGoogle />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
