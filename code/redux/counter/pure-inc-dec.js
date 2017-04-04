let state = 0;

state = reducer(state, { type: 'INCREMENT' });
state = reducer(state, { type: 'INCREMENT' });

state = reducer(state, { type: 'DECREMENT' });

console.log(state); // 1
