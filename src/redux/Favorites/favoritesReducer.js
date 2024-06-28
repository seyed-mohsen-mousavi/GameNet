import toast from "react-hot-toast";
const insitialState = {
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
};
export default function useFavorites(state = insitialState, action) {
  switch (action.type) {
    case "ADD_LIKE": {
      toast.success("به علاقه مندی ها اضافه شد");
      localStorage.setItem(
        "favorite",
        JSON.stringify([...state.favorite, action.payload])
      );
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    }
    case "REMOVE_LIKE": {
      toast.error("از علاقه مندی ها حذف شد");
      return {
        ...state,
        favorite: state.favorite.filter((e) => e.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
}
