const findTheOldest = function(people) {
    const today = new Date();
    const thisYear = today.getFullYear();

    let oldestPerson = people.reduce((lastPerson, currentPerson) => {
        const currentPersonLastYear = currentPerson.yearOfDeath || thisYear;
        const currentPersonAge = currentPersonLastYear-currentPerson.yearOfBirth;

        const lastPersonLastYear = lastPerson.yearOfDeath || thisYear;
        const lastPersonAge = lastPersonLastYear-lastPerson.yearOfBirth;

        if (lastPersonAge<currentPersonAge) {
            return currentPerson;
        }
        return lastPerson;
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
