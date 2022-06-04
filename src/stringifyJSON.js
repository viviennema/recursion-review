// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // string input
  if (typeof obj === 'string') {
    return obj;
  }

  // null input
  if (typeof obj === 'null') {
    return 'null';
  }

  // undefined, function, symbol
  if (typeof obj === 'undefined' || typeof obj === 'function' || typeof obj === 'symbol') {
    return 'null';
  }

  // number, boolean input
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }


  if (Array.isArray(obj)) {

    var result = '[';
    for (var i = 0; i < obj.length; i++) {
      if ( i !== obj.length - 1) {
        result += stringifyJSON(obj[i]) + ',';
      } else {
        result += stringifyJSON(obj[i]) + ']';
      }

    }
    return result;
  }

  if (obj instanceof Object) {

    var result = '{';

    var keys = obj.getKeys();

    for (var i = 0; i < keys.length; i++) {
      if (i !== keys.length - 1) {
        result += stringifyJSON(key);
        result += ':';
        result += stringifyJSON(obj[key]);
        result += ',';
      } else {
        result += stringifyJSON(key);
        result += ':';
        result += stringifyJSON(obj[key]);
        result += '}';
      }

    }
    return result;
  }



};
