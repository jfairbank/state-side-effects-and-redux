incrementBtn.addEventListener('click', actions.increment);
decrementBtn.addEventListener('click', actions.decrement);

store.subscribe(() => {
  counterElement.innerHTML = store.getState();
});

incrementBtn.click();
incrementBtn.click();
decrementBtn.click();

console.log(counterElement.innerHTML); // 1
