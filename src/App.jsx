import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChatCreating } from "./pages/Chat-creating/ChatCreating";
import { Identification } from "./pages/Identification/Identification";
import { Chat } from "./pages/Chat/Chat";

function App() {
  return (
    <Router>
      <Routes className="App">
        <Route path="/" element={<Identification />} />
        <Route path="/creating/:idInstance/:apiTokenInstance" element={<ChatCreating />} />
        {/* <Route path="/creating" element={<ChatCreating />} /> */}
        <Route path="/creating/:idInstance/:apiTokenInstance/:resipientNum" element={<Chat />}/>
      </Routes>
    </Router>
  );
}

export default App;