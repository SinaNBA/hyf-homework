//Item array removal

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

function removeArrayItem(itemToRemove) {
    for (var i = 0; i < names.length; i++) {
        if (names[i] == itemToRemove) {
            delete names[i];
            return itemToRemove + " have been removed!";
        }
    }
    return itemToRemove + " not in the list!";


}

console.log(removeArrayItem(nameToRemove));
console.log(removeArrayItem('sina'));//Wrong value