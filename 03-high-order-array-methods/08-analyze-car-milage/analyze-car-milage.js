function analyzeCarMileage(cars) {
    let sum = 0;
    cars.forEach(car => {
        sum += car.mileage;
    });

    const averageMileage = Number((sum / cars.length).toFixed(2));

    // highest
    let highest = 0;
    let lower = cars[0].mileage;
    let highestCar;
    let lowerCar;
    cars.forEach(hcar => {
        if (hcar.mileage > highest) {
            highestCar = hcar;
            highest = hcar.mileage;
        }
        if (hcar.mileage < lower) {
            lowerCar = hcar;
        }
    })

    return {
        averageMileage: averageMileage,
        highestMileageCar: highestCar,
        lowestMileageCar: lowerCar,
        totalMileage: sum
    }
}

const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2020, mileage: 25000 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 30000 },
    { make: 'Ford', model: 'Mustang', year: 2021, mileage: 15000 },
];

// console.log(analyzeCarMileage(cars));

module.exports = analyzeCarMileage;
