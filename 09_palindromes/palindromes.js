const palindromes = function (string) {
    removeChar = string.toLowerCase().split('').filter(char => {
      if(char === ' ' || 
        char === '!' || 
        char === ',' || 
        char === '.'){

        return false

      }else return true
    }).join('');

    console.log(removeChar);

    if (removeChar.split('').reverse().join('') === removeChar){
        return true
    } else return false

};

// Do not edit below this line
module.exports = palindromes;
