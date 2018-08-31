import UsersService from '~services/UsersService.js';

export const actions = {
  FETCH_USER_DATA: 'FETCH_USER_DATA',
  ACCEPT: 'ACCEPT',
  REJECT: 'REJECT'
};

export const actionCreators = {
  asyncRequest: (user,pass) => async dispatch => {
    const response = await UsersService.getUserData(user,pass); // Ver parte de API
    if(response.ok && response.data.length) {
      dispatch({ type: actions.ACCEPT, data: response.data });
    } else {
      dispatch({type: actions.REJECT, error: response.error });
    }
  }

};
export default actionCreators;
