import { of } from "rxjs";

interface A {
  a: string;
}

interface B {
  b: string;
}

function example(arg: A | B): void {
  if ("a" in arg) {
    arg.a;
    return;
  }
  arg.b;
}

function isB(arg: A | B): arg is B {
  return true;
}

of<A | B>({ a: "" }, { b: "" }).subscribe((arg: B) => {});
