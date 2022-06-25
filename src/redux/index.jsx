import { combineReducers } from "redux";
import pokemonReducer from "./pokemon-storage";

export default combineReducers({
  pokemon: pokemonReducer,
});
