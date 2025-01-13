
//object
// document.write(car.car_brand);
var car = {
    car_brand: "Telsa",
    car_model: "Model-3",
    price: 20000,
    testAutoPilot: function () {
        return "Auto Pilot is Tested Condition Good";
    }
};


//A class is created using function and class has its constructor
function Car(car_brand, car_model, price) {
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.price = price;
    this.testAutoPilot = function () {
       return "Auto Pilot is Tested Condition Good";
    }
}

var audi = new Car("Audi","v6",700000);
// document.write(audi.testAutoPilot());

Car.fuelType = "Electric"; //Add property
delete Car.price; //delete price property

var bmw = new Car( "BMW","de","Electric")
// Car.price = "45000"; //Change price property type
console.log(bmw.price,audi.price)
//JS suppports to Add, remove, Modify the object property
var str = new String();
// str is a object