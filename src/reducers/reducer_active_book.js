// State argument is not app state, only the state
// this reducer is resposible for
export default function(state = null, action){
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
      break;
    default:
  }

  return state;
}
