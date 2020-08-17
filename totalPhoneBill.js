
  module.exports = function(value){
    var bill = value.split(',')
    var total = 0;
      for(var i=0; i<value.length; i++){
          if(bill == 'call'){
              total += 2.75
          }
          else if(bill == 'sms'){
              total += 0.65
          }
      }
      console.log(total.toFixed(2))
      return 'R'+ total.toFixed(2)
}