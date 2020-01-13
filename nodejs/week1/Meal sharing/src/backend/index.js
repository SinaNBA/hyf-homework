const express = require('express');
const app = express();
const meals = require('./data/meals');
const reviews = require('./data/reviews');
const reservations = require('./data/reservations');
const routesMeals = require('./routes/meals');
const routesCheapMeals = require('./routes/cheap-meals');
const routeslargeMeals = require('./routes/large-meals');
const routesMeal = require('./routes/meal');
const routesReservations = require('./routes/reservations');
const routesReservation = require('./routes/reservation');






app.get("/meals", (req, res) => {
    const answer = routesMeals.mealsFunc(meals, reviews);
    res.send(answer);
});

app.get("/cheap-meals", (req, res) => {
    const answerFromMeals = routesMeals.mealsFunc(meals, reviews);
    const answer = routesCheapMeals.cheapMeals(answerFromMeals);
    res.send(answer);
});

app.get("/large-meals", (req, res) => {
    const answerFromMeals = routesMeals.mealsFunc(meals, reviews);
    const answer = routeslargeMeals.largeMeals(answerFromMeals);
    res.send(answer);
});

app.get("/meal", (req, res) => {
    const answerFromMeals = routesMeals.mealsFunc(meals, reviews);
    const answer = routesMeal.meal(answerFromMeals);
    res.send(answer);
});

app.get("/reservations", (req, res) => {
    const answer = routesReservations.reservationsFunc(reservations, meals);
    res.send(answer);
});

app.get("/reservation", (req, res) => {
    const answerFromReservations = routesReservations.reservationsFunc(reservations, meals);
    const answer = routesReservation.reservation(answerFromReservations);
    res.send(answer);
});


app.listen(7000, () => {
    console.log("server is 7000");

});