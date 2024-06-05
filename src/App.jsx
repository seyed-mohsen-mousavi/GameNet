import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Games from "./pages/Games";
import Streamers from "./pages/Streamers";
import Layout from "./components/Layout";
import Prodoct from "./components/Store/Prodoct";
import News from "./pages/News";

function App() {
  return (
    <div className="container text-white overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store/:id" element={<Prodoct />} />
          <Route path="store" element={<Store />} />
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<div>single new</div>} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="games" element={<Games />} />
          <Route path="streamers" element={<Streamers />} />
          <Route path="login" element={<Login />} />
          <Route path="gameNet" element={<div> گیم نت</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
