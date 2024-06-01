const repeatString = function(string, num) {
    if (num === 0) return '';
    if (num < 0) return 'ERROR';

    let originalString = string;

    for (i = 1; i < num; i++){
        string += originalString;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
