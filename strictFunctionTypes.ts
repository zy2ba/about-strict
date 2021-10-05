// транспортное средство
export class Vehicle {
  // можно водить
  drive() {}
}

// аааавтомобиль!
export class Car extends Vehicle {
  // скручивать колпачки
  stealWheelCaps(): Car {
    return this;
  }
}

// tesla
export class CarTesla extends Car {
  // заряжать
  charging() {}
}

//делаем с машинами специфичные для них действия
function doSomeActionWithVehicle(vehicle: Vehicle): Vehicle {
  vehicle.drive();
  return vehicle;
}

function doSomeActionWithCar(car: Car): Car {
  car.stealWheelCaps();
  return car;
}
function doSomeActionWithTeslaCar(carTesla: CarTesla): CarTesla {
  carTesla.charging();
  return carTesla;
}

let carAction: (car: Car) => Car;

//без strictFunctionTypes передаётся
carAction = doSomeActionWithVehicle;
carAction = doSomeActionWithCar;
carAction = doSomeActionWithTeslaCar;

function actionRunnerCar(car: Car, actionFunction: (tesla: Car) => Car): Car {
  return actionFunction(car);
}

let car = new Car();
let carTesla = new CarTesla();

actionRunnerCar(car, doSomeActionWithCar);
actionRunnerCar(carTesla, doSomeActionWithTeslaCar);
//
actionRunnerCar(car, doSomeActionWithTeslaCar);

