const findTheOldest = function(people) {

    let oldestAge = 0;
    let oldestPerson;
    const today = new Date();
    const thisYear = today.getFullYear()
    people.forEach(function(person){
        const lastYear = person.yearOfDeath || thisYear;
        const age = lastYear-person.yearOfBirth;
        if (age>oldestAge){
            oldestAge = age;
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
