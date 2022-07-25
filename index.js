const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(search) {

    drivers.filter(function(name) {
    return name = search;

})
}

console.log(findMatching('Sammy'))