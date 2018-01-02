'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * Usage:
 * 
 *      const arr = [1, 2, 3, 4, 5];
 *      function multiplyBy5(item, loc, collection) {
 *          console.log(item * 5);
 *      }
 *      each(arr, multiplyeBy5);    //-> 5, 10, 15, 20, 25
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Designed to accept any value and return that value, unchanged.
 * 
 * @param {Any Type} value: The value accepted to be returned.
 * 
 * @return {Any Type}: The input value
 * 
 * Usage:
 * 
 *      var a = 5;
 *      console.log(identity(a)); //-> 5
 */
 
function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to accept any value and return the type of that value.
 * 
 * @param {Any Type} value: The value to find the type of
 * 
 * @param {String}: A string of the type of value. Types are one of:
 *          - "string"
 *          - "array"
 *          - "object"
 *          - "undefined"
 *          - "number"
 *          - "boolean"
 *          - "null"
 *          - "function"
 * 
 * Usage:
 * 
 *      console.log(typeOf(55)); //-> "number"
 *      console.log(typeOf(true)); //-> "boolean"
 *      console.log(typeOf([1,"2", false)); //-> "array"
 */
function typeOf(value) {
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to return the first x elements from an array. 
 * 
 * @param {Array} array: The array to pull elements from
 * @param {Number} num: The number of elements to get from array
 * 
 * @return {Array}: The first <num> elements of <array>. If <array> is not given,
 * an empty array will be returned. If <num> is not given, the first element from
 * <array> will be returned.
 * 
 * Usage:
 *      const arr = ['hi', 'my', 'name', 'is', 'ben'];
 *      console.log(first(arr, 3)); //-> ['hi', 'my', 'name']
 *      console.log(first(arr));    //-> ['hi']
 *      console.log(first());       //-> []
 */ 
function first(array, num) {
    if (!Array.isArray(array)) {
        return [];
    } else if (typeof num !== 'number') {
        return array[0];
    }
    
    num = Math.min(num, array.length);
    var toReturn = [];
    
    for (var i = 0; i < num; i++) {
        toReturn.push(array[i]);    
    }
    return toReturn;
}
module.exports.first = first;

/**
 * last: Designed to return the last x elements from an array. 
 * 
 * @param {Array} array: The array to pull elements from
 * @param {Number} num: The number of elements to get from array
 * 
 * @return {Array}: The last <num> elements of <array>. If <array> is not given,
 * an empty array will be returned. If <num> is not given, the last element from
 * <array> will be returned.
 * 
 * Usage:
 *      const arr = ['hi', 'my', 'name', 'is', 'ben'];
 *      console.log(last(arr, 3)); //-> ['name', 'is', 'ben']
 *      console.log(last(arr));    //-> ['ben']
 *      console.log(last());       //-> []
 */ 
function last(array, num) {
    if (!Array.isArray(array)) {
        return [];
    } else if (typeof num !== 'number') {
        return array[array.length-1];
    }
    
    num = Math.min(num, array.length);
    var toReturn = [];
    for (var i = array.length - num; i < array.length; i++) {
        toReturn.push(array[i]);    
    }
    return toReturn;
}
module.exports.last = last;

/**
 * indexOf: Designed to return the index of an element in an array.
 * 
 * @param {Array} array: The array to search through.
 * @param {Any Type} value: The value to find the index of.
 * 
 * @return {Number}: The index of <value> in <array> if it exists, -1 if not.
 * 
 * Usage:
 * 
 *      const arr = [34, 12, 'hi', true];
 *      console.log(indexOf(arr, 12));      //-> 1;
 *      console.log(indexOf(arr, true));    //-> 3;
 *      console.log(indexOf(arr, 'yo'));    //-> -1;
 */
function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;



/**
  * filter: Designed to filter values in a collection based on a test. 
  * Takes a collection, Array or Object, and passes each value 
  * in the collection through a test Function. The test Function returns 
  * true if the value passes the test, false otherwise. Values that pass 
  * the test are collected and returned in an output Array.
  * 
  * @param {Array or Object} collection: The collection to filter.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the filtered collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
function filter(array, test) {
    var toReturn = [];
    each(array, function(element, index, array) {
        if (test(element, index, array)) {
            toReturn.push(element);
        }
    });
    return toReturn;
}
module.exports.filter = filter;

/**
  * filter: Designed to filter values in a collection based on a test. 
  * Takes a collection, Array or Object, and passes each value 
  * in the collection through a test Function. The test Function returns 
  * true if the value passes the test, false otherwise. Values that fail 
  * the test are collected and returned in an output Array.
  * 
  * @param {Array or Object} collection: The collection to filter.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the rejected collection values. 
  * The Array will contain only the values that failed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['a', 'c']
  */
function reject(array, test) {
    return filter(array, function(element, index, array) {
        return !(test(element, index, array))
    });
}
module.exports.reject = reject;

/**
 * partition: Designed to filter an array based on a test and return two arrays;
 * one containing elements that pass the test and one containing elements that
 * fail the test.
 * 
 * Takes an Array and passes each element through a test Function. The test 
 * Function returns true if the value passes the test, false otherwise. 
 * 
 * @param {Array} array: Array to apply test function to
 * @param {Function} test: The Function to be applied to each value in 
 * the collection. The test Function must return a Boolean based on some 
 * logic which tests the value given to it.
 * 
 * @return {Array}: An array containing two arrays. The first array will contain
 * all elements from the input array that passed the test Function. The second
 * array will contain all elements from the input array that failed the test Function.
 * 
 * Usage:
 * 
 *      var arr = [1, 2, 3, 4, 5, 6, 7, 8];
 *      function isEven(value) {
 *          return value % 2 === 0; 
 *      }
 *      var results = partition(array, isEven);
 *      var evens = results[0];     //-> [2,4,6,8]
 *      var odds = results[1];      //-> [1,3,5,7]
 */
function partition(array, test) {
    var rejected = reject(array,test);
    var filtered = filter(array, test);
    
    return [filtered, rejected];
}
module.exports.partition = partition;

/**
 * unique: Designed to accept an array and return the same array without duplicates.
 * 
 * @param {Array} array: the input array to remove duplicates from
 * 
 * @return {Array}: The input array without duplicates.
 * 
 * Usage: 
 * 
 *      const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
 *      const uniqueArr = unique(arr);      //-> [1, 2, 3, 4, 5]
 */
function unique(array) {
    var toReturn = [];
    each(array, function(e, i, array) {
        if ( toReturn.indexOf(array[i]) === -1 ) {
            toReturn.push(array[i]);
        }
    })
    return toReturn;
}
module.exports.unique = unique;

/**
 * map: Designed to loop over a collection, Array or Object, apply a function
 * to each element of the collection, save the result of each function call in 
 * an array and return the resulting array.
 * 
 * @param {Array or Object} collection: The collection to loop over
 * @param {Function} func: The function to apply to each element of the collection
 * 
 * @return {Array}: An array containing the results of each function call.
 * 
 * Usage:
 * 
 *      const arr = [1, 2, 3, 4, 5];
 *      function multiplyBy5(item, loc, collection) {
 *          console.log(item * 5);
 *      }
 *      
 *      var result = map(arr, multiplyeBy5);    //-> [5, 10, 15, 20, 25]
 * 
 *      const obj = {name: "ben", employer: "operation spark", title "instructor"};
 *      function makeUpperCase(item, loc, collection) {
 *          return item.toUpperCase();
 *      }
 *      
 *      var result = map(arr, makeUpperCase);    //-> {name: "BEN", employer: "OPERATION SPARK", title "INSTRUCTOR"};
 */
function map(collection, func) {
    var toReturn = [];
    each(collection, function(item, loc, collection) {
        toReturn.push(func(item, loc, collection));
    });
    return toReturn;
}
module.exports.map = map;

/**
 * pluck: Designed to loop over an array of objects and, for each object, pull 
 * out the property value of the provided property key and store them in an array
 * to be returned.
 * 
 * @param {Array} array: An array of objects
 * @param {String} property: The property to pull out from each object
 * 
 * @return {Array}: An array containing the value of <property> for each object in
 * <array>
 * 
 * Usage:
 * 
 *      var arr = [{nameFirst: "Ben", nameLast: "Spector"}, {nameFirst: "Aaron", nameLast: "Schwindt"}];
 * 
 *      var firstNames = pluck(arr, "nameFirst");   //-> ["Ben", "Aaron"]
 * 
 */
function pluck(array, property) {
    return map(array, function(element, i, array) {
        return element[property];
    })
}
module.exports.pluck = pluck;

/** 
 * contains: Designed to return true if an array contains a value, false otherwise
 * 
 * @param {Array} array: The Array to check for <value>
 * @param {Any Type} value: The value to check <array> for
 * 
 * @return {Boolean}: true if <array> contains <value>, false otherwise
 * 
 * Usage:
 * 
 *      var arr = [1, 2, 3, 4, 5];
 *      contains(arr, 3);   //-> true
 *      contains(arr, 8);   //-> false
 */
function contains(array, value) {
    return indexOf(array,value) === -1 ? false : true;
}
module.exports.contains = contains;

/**
 * every: Designed to loop through a collection, Array or Object, and return 
 * true if every element in the collection passes a test Function, false if not.
 * 
 * Takes a collection and passes each element through a test Function. The test 
 * Function returns true if the value passes the test, false otherwise. 
 * 
 * @param {Array or Object} collection: collection to apply test function to
 * @param {Function} test: The Function to be applied to each value in 
 * the collection. The test Function must return a Boolean based on some 
 * logic which tests the value given to it.
 * 
 * @return {Boolean}: true if every element in the collection passes the test
 * function, false otherwise. If no test function is provided, every will return
 * true if all values are truthy, false otherwise,
 * 
 * Usage:
 * 
 *      const arr = [1,2,3,4,5];
 *      every (arr, function(e){return e > 5})  //-> false
 *      every (arr, function(e){return e <= 5})  //-> true
 */
function every(collection, test) {
    var result = true;
    if (typeOf(test) !== 'function') {
        each(collection, function(item, loc, collection) {
            if (!item) result = false;
        })
    } else {
        each(collection, function(item, loc, collection) {
           if (!test(item, loc, collection)) result = false;
        });
    }
    return result;
}
module.exports.every = every;

/**
 * every: Designed to loop through a collection, Array or Object, and return 
 * true if at least one element in the collection passes a test Function, false if not.
 * 
 * Takes a collection and passes each element through a test Function. The test 
 * Function returns true if the value passes the test, false otherwise. 
 * 
 * @param {Array or Object} collection: collection to apply test function to
 * @param {Function} test: The Function to be applied to each value in 
 * the collection. The test Function must return a Boolean based on some 
 * logic which tests the value given to it.
 * 
 * @return {Boolean}: true if at least one element in the collection passes the test
 * function, false otherwise. If no test function is provided, some will return
 * true if at least one value is truthy, false otherwise,
 * 
 * Usage:
 * 
 *      const arr = [1,2,3,4,5];
 *      some (arr, function(e){return e > 5})  //-> false
 *      some (arr, function(e){return e < 3})  //-> true
 */
function some(collection, func) {
    var result = false;
    if (typeOf(func) !== 'function') {
        each(collection, function(item, loc, collection) {
            if (item) result = true;
        })
    } else {
        each(collection, function(item, loc, collection) {
           if (func(item, loc, collection)) result = true;
        });
    }
    return result;
}
module.exports.some = some;

/**
 * reduce: Designed to loop over an array and call a function on every element passing
 * the arguments: previous result, element, index. The returned value of function is used
 * as the "previous result" for the next iteration. A seed is used on the first iteration
 * as the "previous result". The final result is returned.
 * 
 * @param {Array} array: Array to reduce
 * @param {Function} func: The Function to be applied to each value in the collection. 
 * The Function takes 3 arguments; <previousResult>, <element>, <index>, and returns
 * a new value to be used as <previousResult> for the next element.
 * @param {Any Type} seed: The first value used as <previousResult>
 * 
 * @return {Any Type}: The final result of reducing the array.
 * 
 * Usage:
 * 
 *      reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
 */
function reduce(array, func, seed) {
    var result = seed;
    each(array, function(element, index, array) {
        result = (result != undefined) ? func(result, element, index) : array[0];
    })
    return result;
}
module.exports.reduce = reduce;

/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

/**
 * extend: Designed to copy the properties from one or more objects into another object.
 * 
 * @param {Object} object1: The object to add all other object properties to
 * @param {Objects} objects: The objects whose properties will be added to object1
 * 
 * @return {Object}: object1 with properties from other objects added
 * 
 * Usage:
 * 
 *   var data = {a:"one"};
 *   extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
 *   extend(data, {a:"two"}); -> data now equals {a:"two"}
 */
function extend(object1, ...objects) {
    each(objects, function(object, key, objects) {
        for (var key in object) {
            object1[key] = object[key];
        }
    })
    return object1;
}
module.exports.extend = extend;