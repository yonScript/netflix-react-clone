import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Player from "./pages/Player/Player";

// Style
import "./App.css";

function App() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/player/:id" element={<Player />} />
        </Routes>
    );
}

export default App;
