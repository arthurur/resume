const initialState = {
  name: 'Arthur Uberti Rolim',
  
}

function userReducer(state = initialState, action) {
  return state;
}

export default userReducer;

export const getName = state => state.user.name;