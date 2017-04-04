const increment = () => ({
  type: 'INCREMENT',
});

const decrement = () => ({
  type: 'DECREMENT',
});

const changeColor = color => ({
  type: 'CHANGE_COLOR',
  payload: color,
});
