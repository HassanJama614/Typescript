
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void; 
  }
  
  
  class Car implements Vehicle {
  
    constructor(public make: string, public model: string, public year: number) {}
  
    start(): void {
      console.log("Car engine started");
    }
  
   
    displayInfo(): void {
      console.log(`Car: ${this.year} ${this.make} ${this.model}`);
    }
  }
  
  
  const myCar = new Car("Toyota", "Corolla", 2022);
  
  
  myCar.displayInfo();
  
  
  myCar.start();
  
  
  const anotherCar = new Car("Honda", "Civic", 2023);
  anotherCar.displayInfo();
  anotherCar.start();