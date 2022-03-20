import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginRegister from "./pages/LoginRegister";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login-register" element={<LoginRegister />}></Route>
     </Routes>
    </div>
  );
}

export default App;
