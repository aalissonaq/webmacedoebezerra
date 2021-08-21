const INITIAL_STATE = {
  cliente: [],
};

function cliente(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cliente/All': { }
    default:
      return state;
  }
}

export default cliente;
