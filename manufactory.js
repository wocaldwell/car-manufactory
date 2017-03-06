"use strict";

/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car () {
  // Create the manufactured date property (see above)
  this.manufactured_date = Date.now();
}

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the more general Car object.
  3. Give it one property, named manufacturer, that holds a string value.
         For, example, this.manufacturer = "Ford".
 */
function YourFavoriteMake () {
  // Define the manufacturer instance variable
  this.manufacturer = "Buick";
}
// Set the prototype to a new Car instance
YourFavoriteMake.prototype = new Car();

/*
  1. Create a constructor function named after your favorite car model.
  2. It must inherit from the specific make type you created in previous step.
  3. Create some instance properties that are specific to the specific
        car model (e.g. horsepower, cargo capacity, etc.)
*/
function YourFavoriteModel () {
    this.model = "La Sabre";
    this.color = "Ugly";
    this.horsepower = 2;
}
// Set the prototype to appropriate model you created above and set the model name argument
YourFavoriteModel.prototype = new YourFavoriteMake;

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/
var myFirstFavoriteCar = new YourFavoriteModel;
myFirstFavoriteCar.plate_number = "NOH8TRS";
console.log('myFirstFavoriteCar = ', myFirstFavoriteCar);
var mySecondFavoriteCar = new YourFavoriteModel;
mySecondFavoriteCar.plate_number = "123 ABC";
console.log('mySecondFavoriteCar = ', mySecondFavoriteCar);
var myThirdFavoriteCar = new YourFavoriteModel;
myThirdFavoriteCar.plate_number = "WER138";
console.log('myThirdFavoriteCar = ', myThirdFavoriteCar);


/*
  Now let's see some power of prototypal inheritance. Create a function for
  another model that's made by the manufacturer as your previous car. So if
  your first model was Fusion, make another one here for F150, for example.
 */
function AnotherModel () {
    this.model = "Riviera";
}
/*
  Assign the prototype to the make you define above. Now both models will
  inherit the `manufacturer` property from the make function.
 */
AnotherModel.prototype = new YourFavoriteMake;


/*
  Now create an instance of this new car model to put in your garage. Remember
  to give it a plate number.
 */
 var myBeaterCar = new YourFavoriteMake;
myBeaterCar.plate_number = "COOLGUY";
console.log('myBeaterCar = ', myBeaterCar);