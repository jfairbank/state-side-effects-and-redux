const initialState = {
  counter: 0,
  car: { color: 'red' },
};

const newState = Object.assign({}, initialState, {
  counter: initialState.counter + 1,
});

console.log(newState);
// { counter: 1, car: { color: 'red' } }

console.log(initialState);
// { counter: 0, car: { color: 'red' } }
