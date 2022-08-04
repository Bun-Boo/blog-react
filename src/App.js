import Home from "./page/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./page/singlepage/Single";
import Write from "./page/write/Write";
import Setting from "./page/settingProfile/Setting";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
function App() {
  const user = true;
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/setting" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
