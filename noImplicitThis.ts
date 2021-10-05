function getValue(): string {
  // а будет ли someValue хоть когда-то?
  return this.someValue
    ? this.someValue
    : 'no value';
}

function getValueStrict(
  this: ContextObjectModel
): string {
  // объявлен в ContextObjectModel
  return this.someValue
    ? this.someValue
    : 'no value';
}

function getName2(this: ContextObjectModel, name: string): string {
  return this ? name: 'no context';
}


class ContextObjectModel {
  someValue: string
}
