import getUserData from '~src/services/UsersService';

export const actions = {
  FETCH_USER_DATA: 'FETCH_USER_DATA',
  SUBMIT: 'SUBMIT',
  REJECT: 'REJECT'
};

export const function


export const actionCreators = {
  asyncRequest: () => async dispatch => {
    dispatch({ type: actions.FETCH_USER_DATA });
    const response = await getUserData(); // Ver parte de API
    if(response.ok) {
      dispatch({ type: actions.SUBMIT, data: response.data });
    } else {
      dispatch({type: actions.REJECT, error: response.error });
    }
  }
};
