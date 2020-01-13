function meal(meals) {
    let randomMeal = Math.floor(Math.random() * Math.floor(3));
    return meals[randomMeal];
};

exports.meal = meal;