module.exports = function (listItem){

    //console.log(listItem)
      
      var x = 0;
      var place =" ";
      
      for(var i=0; i<listItem.length; i++){
      var sortList = listItem[i].department;
        var score = listItem[i].sales;
        if(score > x){
        x = score
          place = sortList
        }
      }
      return place 
    }
    
    var go = [ 
      {day : 'Monday ', sales : '11500'},
      {day : 'Tuesday ', sales : '13540'},
      {day : 'Wednesday ', sales : '18016'},
      {day : 'Thursday ', sales : '36116'},
      {day : 'Friday ', sales : '35120'}
    ];
    function mostProfitableDay(listItem){ 
      var y = [];
      var a  =0;
      console.log(go)
     
          
         
      
     
          }