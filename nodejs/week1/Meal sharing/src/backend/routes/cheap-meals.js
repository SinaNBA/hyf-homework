const cheapMealsArray = [];

function cheapMeals(meals) {
    for (let i = 0; i < meals.length; i++) {
        if (meals[i].price < 70) {
            cheapMealsArray.push(meals[i]);
        }
    }
    return cheapMealsArray;
};

exports.cheapMeals = cheapMeals;