import Home from "./page/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./page/singlepage/Single";
import Write from "./page/write/Write";
import Setting from "./page/settingProfile/Setting";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import { useEffect, useState } from "react";
function App() {
  const [login, setLogin] = useState(true);
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={login ? <Home /> : <Register />} />
        <Route path="/login" element={login ? <Home /> : <Login />} />
        <Route path="/write" element={login ? <Write /> : <Register />} />
        <Route path="/setting" element={login ? <Setting /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
