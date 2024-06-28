import { createStore } from "redux";
import favoritesReducer from "./Favorites/favoritesReducer";

const favorite = createStore(favoritesReducer);

export default favorite;
