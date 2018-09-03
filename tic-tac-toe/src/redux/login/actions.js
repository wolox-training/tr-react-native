import UsersService from '~services/UsersService.js';

export const actions = {
  FETCH_USER_DATA: 'FETCH_USER_DATA',
  ACCEPT: 'ACCEPT',
  REJECT: 'REJECT'
};

export const actionCreators = {
  asyncRequest: values => async dispatch => {
    const response = await UsersService.getUserData(values.username,values.password);

    if (response.ok && response.data.length) {
      dispatch({ type: actions.ACCEPT, data: response.data });
    } else {
      dispatch({ type: actions.REJECT });
    }
  }
};
export default actionCreators;
