const sumAll = function(start, end) {
    let sumTotal = 0;

    if(start < 0 || 
        end < 0 || 
        !Number.isInteger(start) || 
        !Number.isInteger(end)){
        return 'ERROR'
    } else {

        if (start > end){
            let switchNum = end;
            end = start;
            start = switchNum;
        }

        for(i = start; i <= end; i++){
            sumTotal += i;
        }

        return sumTotal;
    }
};

// Do not edit below this line
module.exports = sumAll;    


