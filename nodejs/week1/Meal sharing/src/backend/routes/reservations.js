function reservationsFunc(reservations, meals) {
    for (let i = 0; i < reservations.length; i++) {
        for (let j = 0; j < meals.length; j++) {
            if (reservations[i].mealId == meals[j].id) {
                reservations[i].meal = meals[j];
            }
        }

    }
    

    return reservations;
}

exports.reservationsFunc = reservationsFunc;