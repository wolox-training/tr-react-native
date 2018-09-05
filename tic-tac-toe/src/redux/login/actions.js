import UsersService from '~services/UsersService.js';

import strings from '~utils/strings';

export const actions = {
  ACCEPT: 'ACCEPT',
  REJECT: 'REJECT',
  LOGOFF: 'LOGOFF'
};

export const actionCreators = {
  asyncRequest: values => async dispatch => {
    const response = await UsersService.getUserData(values.username,values.password);

    if (response.ok && response.data.length) {
      dispatch({ type: actions.ACCEPT, data: response.data });
    } else {
      dispatch({ type: actions.REJECT });
      window.alert(strings.API_ERROR_MSG);
    }
  },
  logoff: () => dispatch => {
    dispatch({ type: actions.LOGOFF });
  }
};
export default actionCreators;
