const initialState = {
  name: 'Arthur Dale',
  loggedIn: false,
}

function userReducer(state = initialState, action) {
  return state;
}

export default userReducer;

export const getName = state => state.user.name;