import {FETCH, SUCCESS, ERROR} from "../actions";


const initialState = {
  characters: [],
    fetching: false,
    error: ""
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
   
      case FETCH:
        return Object.assign({}, state, {fetching: true, characters: [], error:""})
      case SUCCESS:
        return {...state, fetching: false, characters: action.payload, error:""}
      case ERROR:
        return {...state, fetching: false, characters: [], error: action.payload}
    default:
      return state;
  }
};