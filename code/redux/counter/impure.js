let state = 0;

incrementBtn.addEventListener('click', () => {
  state += 1;
});

decrementBtn.addEventListener('click', () => {
  state -= 1;
});

incrementBtn.click();
incrementBtn.click();
decrementBtn.click();

console.log(state);
