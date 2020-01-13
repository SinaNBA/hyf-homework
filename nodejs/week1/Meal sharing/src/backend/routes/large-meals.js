const largeMealsArray = [];

function largeMeals(meals) {
    for (let i = 0; i < meals.length; i++) {
        if (meals[i].maxNumberOfGuests > 2) {
            largeMealsArray.push(meals[i]);
        }
    }
    return largeMealsArray;
};

exports.largeMeals = largeMeals;