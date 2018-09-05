import { actions } from '~redux/login/actions';

const initState = {
  isValidUser: false,
  loading: false
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actions.ACCEPT:
      return {
        ...state,
        isValidUser: true
      };
    case actions.REJECT:
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
