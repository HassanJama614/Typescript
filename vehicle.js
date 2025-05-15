
var Car = /** @class */ (function () {
   
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };

    Car.prototype.displayInfo = function () {
        console.log("Car: ".concat(this.year, " ").concat(this.make, " ").concat(this.model));
    };
    return Car;
}());

var myCar = new Car("Toyota", "Corolla", 2022);

myCar.displayInfo();

myCar.start();

var anotherCar = new Car("Honda", "Civic", 2023);
anotherCar.displayInfo();
anotherCar.start();
