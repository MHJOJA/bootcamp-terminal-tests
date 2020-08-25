module.exports =function (listItem){
    var x = 20
     var finalReturn = []
   
     for(var i=0; i<listItem.length; i++){
       var sortedList = listItem[i];
     //  console.log(sortedList)
       if (sortedList.qty > x){
         finalReturn.push(sortedList);
     }
   }
  // console.log(finalReturn)
   return finalReturn
 }

 
 module.exports = function(listItem){
     var x = 20
     var finalReturn = []
     for(var i=0; i<listItem.length; i++){
         var sortedList =listItem[i];
         if (sortedList.qty > x){
             finalReturn.push(sortedList);
         }
     }
     //console.log(finalReturn)
     return finalReturn
 }