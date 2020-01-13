function mealsFunc(meals, reviews) {
    for (let i = 0; i < meals.length; i++) {
        meals[i].reviews = [];
        for (let j = 0; j < reviews.length; j++) {
            if (meals[i].id == reviews[j].mealId) {
                meals[i].reviews = reviews[j];
            }
        }

    }
    return meals;
};

exports.mealsFunc = mealsFunc;