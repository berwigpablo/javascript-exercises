const removeFromArray = function(array, ...removeValue) {

    filterArray = array.filter(checkValue)
    
    function checkValue(value){
        for (i = 0; i < removeValue.length; i++){
            if(value === removeValue[i]){
                return false
            }
        }

        return true;
    }

    return filterArray;
};

// Do not edit below this line
module.exports = removeFromArray;
