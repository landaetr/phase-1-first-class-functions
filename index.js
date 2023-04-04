// receives a function and calls it
function receivesAFunction(callback) {
  return callback();
}

// returns a named function
function returnsANamedFunction() {
  function namedFunction() {
    return "This is a named function";
  }

  return namedFunction;
}

// returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    return "This is an anonymous function";
  };
}

module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};
