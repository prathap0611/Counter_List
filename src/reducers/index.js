import uuid from "uuid";

function reducer(state = [], action = {}) {
  let origObj;
  switch (action.type) {
    case "ADD_COUNTER":
      return [
        ...state,
        {
          id: uuid.v4(),
          value: 0
        }
      ];
    case "REMOVE_COUNTER":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case "INCREMENT":
      origObj = state[action.index];
      return [
        ...state.slice(0, action.index),
        {
          ...origObj,
          value: origObj.value + 1
        },
        ...state.slice(action.index + 1)
      ];
    case "DECREMENT":
      origObj = state[action.index];
      return [
        ...state.slice(0, action.index),
        {
          ...origObj,
          value: origObj.value - 1
        },
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export default reducer;
