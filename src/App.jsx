import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Register from "./pages/Register";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Games from "./pages/Games";
import Streamers from "./pages/Streamers";
import Layout from "./ui/Layout";
import Prodoct from "./features/Store/Prodoct";
import News from "./pages/News";
import SinglePage from "./features/Games/SinglePage";
import GamesFilter from "./features/Games/GamesFilter";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import GameNets from "./pages/GameNets";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import SingleGameNets from "./features/GameNets/SingleGameNets";
import store from "./redux/store";
import NotFound from "./ui/NotFound";
function App() {
  return (
    <div className="relative container text-white  min-h-screen ">
      <Toaster />
      <ThemeProvider theme={THEME}>
        <Provider store={store}>
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
              <Route path="Auth" element={<Auth />} />
              <Route path="gameNet" element={<GameNets />} />
              <Route path="gameNet/:id" element={<SingleGameNets />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
const THEME = createTheme({
  typography: {
    fontFamily: "Peyda-light",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
