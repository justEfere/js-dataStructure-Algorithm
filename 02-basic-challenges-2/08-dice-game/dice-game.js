function diceGameSimulation(iterations) {
    const resultObj = [];
    function randGenrate() {
        return Math.round((Math.random() * 5) + 1);
    };

    function generateAdd() {
        const dice1 = randGenrate();
        const dice2 = randGenrate();
        const sum = dice1 + dice2;

        let result;
        if (sum === 7 || sum === 11) {
            result = "win";
        } else if (sum === 2 || sum === 3 || sum === 12) {
            result = "lose";
        } else {
            result = "roll again";
        }
        resultObj.push({
            dice1, dice2, sum, result
        });
    }

    for (let i = 0; i <= iterations - 1; i++) {
        generateAdd();
    }
    return resultObj;
}

// diceGameSimulation(30);
// console.log(diceGameSimulation(30))

module.exports = diceGameSimulation;
