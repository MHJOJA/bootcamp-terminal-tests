
  module.exports = function(reg, loc){

    var plates = reg.split(',');
    var x = [];
    for(var i=0; i<plates.length; i++){
        var temp = plates[i].trim()
        if(temp.startsWith(loc)){
            x.push(temp);
        }

    }
    return x;
    }
  