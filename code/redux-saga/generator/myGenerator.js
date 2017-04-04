function* myGenerator() {
  yield 'hello';
  const value = yield 'world';
  return value * 2;
}
