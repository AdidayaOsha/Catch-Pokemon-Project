const init_state = {
  pokemonName: "",
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "FILL_POKEMON":
      return { ...init_state, ...action.payload };
    case "GET_POKEMON":
      return { ...state, ...action };
    default:
      return state;
  }
};

export default reducer;
