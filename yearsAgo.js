
  module.exports = function(year){
      var todaysDate = new Date()
      var fullYear =  todaysDate.getFullYear()
      var howManyYearsAgo = fullYear - year;
      return howManyYearsAgo;
  }