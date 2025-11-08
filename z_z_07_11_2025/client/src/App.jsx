import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import Login from "./views/Login";
import Register from "./views/Register";
import Header from "./components/Header";
import ForosApi from "./views/ForosApi";
import NewForo from "./views/NewForo";
import UpdateForo from "./views/UpdateForo";
import OneForo from "./views/OneForo";

function App() {
  const [listaForos, setlistaForos] = useState([]);
  const [login, setLogin] = useState(false);
  const [me, setMe] = useState({});
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    setLogin(false);
    navigate("/login");
  };

  return (
    <>
      <Header login={login} logOut={logOut}/>
      <Routes>
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path="/register" element={<Register setLogin={setLogin} />} />
        <Route path="/foros" element={ < ForosApi setlistaForos={setlistaForos} setLogin={setLogin} setMe={setMe} listaForos={listaForos} logOut={logOut}/> }/>
        <Route path="/foros/new" element={ < NewForo me={me} setlistaForos={setlistaForos}  listaForos={listaForos} logOut={logOut} login={login}/> }/>
        <Route path="/foros/editar/:id" element={ <UpdateForo setlistaForos={setlistaForos}  listaForos={listaForos} logOut={logOut} setLogin={setLogin}/>} />
        <Route path="/foros/:id" element={ <OneForo setlistaForos={setlistaForos} setLogin={setLogin} logOut={logOut} listaForos={listaForos} />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
