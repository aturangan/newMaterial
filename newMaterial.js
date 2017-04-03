/*
  Intersection:

  Creates an array of unique values that are included in all given arrays.
  The order and references of result values are determined by the first array.

  Returns the new array of intersecting values.

  Example
  _.intersection([2, 1], [2, 3]);
  // => [2]
*/

var intersection = function () {

  //create a results array
  //iterate through first array with a loop
    //iterate through second array
      //if array1 at index is equal to array 2 at index
      //add the value in array1 to the results array
  //return results

  var intersection = function (array1, array2) {
    var results = [];

    for (var i = 0; i < array1.length; i++) {
      for (var a = 0; a < array2.length; a++) {
        if (array1[i] === array2[a]) {
        results.push(array1[i]);
      }
    }
  }

  return results;
}


/* Partial

Creates a function that invokes func with partials prepended to the arguments it receives.
This method is like _.bind except it does not alter the this binding.

Arguments

func (Function): The function to partially apply arguments to.
[partials] (...*): The arguments to be partially applied.
Returns

(Function): Returns the new partially applied function.

Example

function greet(greeting, name) {
  return greeting + ' ' + name;
}

var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'

// Partially applied with placeholders.
var greetFred = _.partial(greet, _, 'fred');
greetFred('hi');
// => 'hi fred'
*/

var partial = function(func) {

  //create a variable arraySlice and set it to an array prototype with slice
  //create a variable argument and use arraySlice and call with the first argument
    //**calls a function with a given this value and arguments provided individually**

  //return a function
    //create a results array
    //create a variable partials and using array slice, call arguments

    //iterate through argument with a for loop
      //if the argument at the index is a placeholder,
        //the results at the index becomes the partials shifted
      //else the results at the index becomes the argument at the index
    //concat the partials in the results array and apply to func


  var arraySlice = Array.prototype.slice;
  var argument = arraySlice.call(arguments, 1)

  return function() {
    var results = [];
    var partials = arraySlice.call(arguments);

    for (var i = 0; i < argument.length; i++) {
      if (argument[i] === _.__) {
        results[i] = partials.shift();
      } else {
        results[i] = argument[i];
      }
    }

    return func.apply(this, results.concat(partials));
}
