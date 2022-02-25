import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../service/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextTypes = {
  user: User | undefined;
  LoginWithGoogle: () => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextTypes);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL || !uid) {
          throw new Error("Missing information from Google account");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  async function LoginWithGoogle() {
    const provider = new GoogleAuthProvider();

    const AuthWithGoogle = getAuth();

    const result = await signInWithPopup(AuthWithGoogle, provider);
  }
  return (
    <AuthContext.Provider value={{ user, LoginWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}
