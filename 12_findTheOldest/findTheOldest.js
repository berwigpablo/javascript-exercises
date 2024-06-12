const findTheOldest = function(people) {
    oldest = people.sort((a, b) => {
        if(!a.yearOfDeath){
          return (b.yearOfDeath - b.yearOfBirth) - (2024 - a.yearOfBirth)

        } else if(!b.yearOfDeath){
          return (2024 - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)

        } else {
          return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
        }
    });
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
