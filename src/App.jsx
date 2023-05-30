import "./reset.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChatCreating } from "./pages/Chat-creating/ChatCreating";
import { Identification } from "./pages/Identification/Identification";
import { Chat } from "./pages/Chat/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Identification />} />
        <Route
          path="/creating/:idInstance/:apiTokenInstance"
          element={<ChatCreating />}
        />
        <Route
          path="/creating/:idInstance/:apiTokenInstance/chat/:recipientNum"
          element={<Chat />}
        />
      </Routes>
    </Router>
  );
}

export default App;
