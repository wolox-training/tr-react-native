export const actions = {
  SQUARE_CLICKED: '@@GAME/SQUARE_CLICKED',
  HISTORY_ITEM_SELECTED: '@@GAME/HISTORY_ITEM_SELECTED'
};
const actionCreators = {
  gameHandleClick: index => ({ type: actions.SQUARE_CLICKED, index }),
  gameJumpTo: index => ({ type: actions.HISTORY_ITEM_SELECTED, index })
};

export default actionCreators;
