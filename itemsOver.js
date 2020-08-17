module.exports = function(listItem, y){

    var finalReturn = [];
    for(var i=0; i<listItem.length; i++){
      var listSort = listItem[i];
      if(listSort.qty > y){
        finalReturn.push(listSort);
      }
    }
  return finalReturn
  }

      