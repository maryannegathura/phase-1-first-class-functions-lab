// Code your solution in this file!
// helpers.js

// Function: returnFirstTwoDrivers
// Parameters: drivers (Array)
// Returns: Array containing the first two drivers from the input array
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Function: returnLastTwoDrivers
  // Parameters: drivers (Array)
  // Returns: Array containing the last two drivers from the input array
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Array: selectingDrivers
  // Contains: The first and last functions defined above
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function: createFareMultiplier
  // Parameters: multiplier (Number)
  // Returns: Function that multiplies a given value by the multiplier
  function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }
  
  // Function: fareDoubler
  // Parameters: fare (Number)
  // Returns: Fare doubled
  const fareDoubler = createFareMultiplier(2);
  
  // Function: fareTripler
  // Parameters: fare (Number)
  // Returns: Fare tripled
  const fareTripler = createFareMultiplier(3);
  
  // Function: selectDifferentDrivers
  // Parameters: drivers (Array), fn (Function)
  // Returns: Result of calling the function fn with drivers as argument
  function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
  }
  
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  