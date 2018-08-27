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
