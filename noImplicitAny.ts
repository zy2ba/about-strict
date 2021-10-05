function someFn(someArg) {
  // tsc не ругается
  console.log(someArg.subtr(3));
}
someFn(42);


function someFnStrict(someArg: number) {
  // tsc ругается
  console.log(someArg.subtr(3));
}

someFn(42);

