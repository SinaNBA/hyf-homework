function reservation(reservations) {
    const randomReservation = Math.floor(Math.random() * Math.floor(2));
    return reservations[randomReservation];
};

exports.reservation = reservation;