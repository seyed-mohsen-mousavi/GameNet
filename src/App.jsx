import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Games from "./pages/Games";
import Blog from "./pages/Blog";
import Stream from "./pages/Stream";
import Layout from "./components/Layout";
import Prodoct from "./components/Store/Prodoct";

function App() {
  return (
    <div className=" container text-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store/:id" element={<Prodoct  />} />
          <Route path="store" element={<Store />} />
          <Route path="blog" element={<Blog />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="games" element={<Games />} />
          <Route path="stream" element={<Stream />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
