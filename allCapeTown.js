module.exports = function(registration){

    if(registration.startsWith("CA")){
        return true
    }
    return false
}