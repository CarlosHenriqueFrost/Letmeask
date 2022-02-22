import { Home } from "./pages/Home";
import { NewRoomWithGoogle } from "./pages/NewRoomWithGoogle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/new" element={<NewRoomWithGoogle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
