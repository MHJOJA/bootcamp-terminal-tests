module.exports = function (registration, location){
    if(registration.startsWith(location)){
      return true;
    }
    return false;
  }
  