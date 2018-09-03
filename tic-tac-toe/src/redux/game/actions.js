export const actions = {
<<<<<<< HEAD
  SQUARE_CLICKED: 'SQUARE_CLICKED',
  HISTORY_ITEM_SELECTED: 'HISTORY_ITEM_SELECTED'
=======
  SQUARE_CLICKED: '@@GAME/SQUARE_CLICKED',
  HISTORY_ITEM_SELECTED: '@@GAME/HISTORY_ITEM_SELECTED'
>>>>>>> master
};
const actionCreators = {
  gameHandleClick: index => ({ type: actions.SQUARE_CLICKED, index }),
  gameJumpTo: index => ({ type: actions.HISTORY_ITEM_SELECTED, index })
};

export default actionCreators;
