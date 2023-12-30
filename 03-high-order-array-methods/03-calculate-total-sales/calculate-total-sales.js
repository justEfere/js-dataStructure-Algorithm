function calculateTotalSalesWithTax(array, tax) {
    const sum = array.map(item => item.price * item.quantity)
        .reduce((acc, next) => acc + next);

    return sum + (tax / 100 * sum);
}

// calculateTotalSalesWithTax(
//     [
//         { name: 'Apple', price: 0.5, quantity: 10 },
//         { name: 'Banana', price: 0.3, quantity: 20 },
//         { name: 'Orange', price: 0.6, quantity: 15 },
//     ],
//     8
// ); // 21.6 (20 + 8% tax)

module.exports = calculateTotalSalesWithTax;
