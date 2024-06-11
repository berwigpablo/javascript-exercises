const fibonacci = function(num) {
    if(num < 0) return 'OOPS'

    if(num == 0){
        return 0
    } else if(num == 1){
        return 1
    }else{
        firstNum = 0;
        secondNum = 1;

        for(i = 1; i < num; i++){
            nextNum = firstNum + secondNum;
            firstNum = secondNum;
            secondNum = nextNum;
        }

        return nextNum
    }
};

// Do not edit below this line
module.exports = fibonacci;
