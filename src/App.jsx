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
import SinglePage from "./components/Games/SinglePage";
import GamesFilter from "./components/Games/GamesFilter";
import { Provider } from "react-redux";
import favorite from "./redux/favorite";
import { Toaster } from "react-hot-toast";
import GameNets from "./pages/GameNets";
function App() {
  return (
    <div className="relative container text-white  min-h-screen ">
      <Toaster />
      <Provider store={favorite}>
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
            <Route path="games/page/:id" element={<SinglePage />} />
            <Route path="games/:id" element={<GamesFilter />} />
            <Route path="streamers" element={<Streamers />} />
            <Route path="login" element={<Login />} />
            <Route path="gameNet" element={<GameNets />} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
