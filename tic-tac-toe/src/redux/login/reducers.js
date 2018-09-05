import { actions } from '~redux/login/actions';

const initState = {
  isValidUser: false,
  loading: false
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actions.ACCEPT:
      window.localStorage.setItem('isValidUser', true);
      return {
        ...state,
        isValidUser: true
      };
    case actions.REJECT:
      return {
        ...state,
        isValidUser: false
      };
    case actions.LOGOFF:
      window.localStorage.setItem('isValidUser', false);
      return {
        ...state,
        isValidUser: false
      };
    default:
      return {
        ...state,
        isValidUser: false
      };
  }
}

export default reducer;
