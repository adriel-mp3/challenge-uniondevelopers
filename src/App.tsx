import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Home from "./pages/Home";
import User from "./pages/User/User";
import { UserStorage } from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user/:id/*" element={<User />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
