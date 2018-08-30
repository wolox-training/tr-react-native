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

export const actions = {
  SQUARE_CLICKED: 'SQUARE_CLICKED',
  HISTORY_ITEM_SELECTED: 'HISTORY_ITEM_SELECTED'
}


export const actionCreators = {
  gameHandleClick,
  gameJumpTo
};
