import getUserData from '~services/UsersService.js';

export const actions = {
  FETCH_USER_DATA: 'FETCH_USER_DATA',
  ACCEPT: 'ACCEPT',
  REJECT: 'REJECT'
};

export const actionCreators = {
  asyncRequest: () => async dispatch => {
    const response = await getUserData(); // Ver parte de API
    if(response.ok) {
      dispatch({ type: actions.ACCEPT, data: response.data });
    } else {
      dispatch({type: actions.REJECT, error: response.error });
    }
  },

};
export default actionCreators;
