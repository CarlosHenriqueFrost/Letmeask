import { Home } from "./pages/Home";
import { NewRoomWithGoogle } from "./pages/NewRoomWithGoogle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/new" element={<NewRoomWithGoogle />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
