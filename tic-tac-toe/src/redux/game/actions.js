export function gameHandleClick(i) {
  return {
    type: 'SQUARE_CLICKED',
    index: i
  };
}

export function gameJumpTo(step) {
  return {
    type: 'HISTORY_ITEM_SELECTED',
    step
  };
}


export const actionCreators = {
  gameHandleClick,
  gameJumpTo,
  asyncRequest: () => async dispatch => {
    dispatch({ type: actions.FETCH_USER_DATA });
    const response = await getUserData();//Ver parte de API
    if(response.ok) {
      dispatch({ type: actions.SUBMIT, data: response.data });
    } else {
      dispatch({type: actions.REJECT, error: response.error });
    }
  }
};
