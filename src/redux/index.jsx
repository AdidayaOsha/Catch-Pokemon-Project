import { combineReducers } from "redux";
import pokemonReducer from "./pokemon-search";

export default combineReducers({
  pokemon: pokemonReducer,
});
