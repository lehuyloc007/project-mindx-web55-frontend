import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AuthContext from "./contexts/auth";
import HomePage from "./pages/HomePage";
import LoginRegister from "./pages/LoginRegister";
import http from "./ultis/axios";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const tocken = localStorage.getItem('jwtLoginUser');
    if(!tocken) {
      return;
    }
    http.get('/user/info', {
      headers: {
        authorization: "Bearer " + tocken 
      }
    }).then(res => {
      setUser(res.data)
    })
  },[])
  return (
    <div className="App">
      <AuthContext.Provider value={{user: user, setUser: setUser}}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login-register" element={<LoginRegister />}></Route>
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
