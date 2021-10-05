function appendValue(this: { value: string }, valueToAppend: string): string {
  return (this.value += valueToAppend);
}

const context = { anotherField: 0 };

appendValue.call(context, 42);
