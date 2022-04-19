let initialstate = { user: "Robert" };
export default function rootreducers(state = initialstate, action) {
  switch (action.type) {
    case "Create":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
