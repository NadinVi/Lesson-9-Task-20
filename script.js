// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
// +Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// +Визначити кількість негативних елементів.
// +Знайти кількість непарних позитивних елементів.
// +Знайти кількість парних позитивних елементів.
// +Знайти суму парних позитивних елементів.
// +Знайти суму непарних позитивних елементів.
// +Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, ост альні обнулити.


let arrNumber = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumOfPozitiveNums = 0;
let factorOfPozitiveNums = 1;
let sumOddPozitiveNums = 0;
let sumEvenPozitiveNums = 0;


let pozitiveNums = arrNumber
.filter(function(number) {
    return number >= 0;
})

pozitiveNums.forEach(function(number) {
    sumOfPozitiveNums += number;
})

pozitiveNums.forEach(function(number) {
    factorOfPozitiveNums *= number;
})

//console.log(pozitiveNums);
console.log(`Кількість позитивних елементів ${pozitiveNums.length}`);
console.log(`Сума позитивних елементів = ${sumOfPozitiveNums}`);
console.log(`Добуток позитивних елементів = ${factorOfPozitiveNums}`);


let negativesNums = arrNumber
.filter(function(number) {
    return number < 0;
})

//console.log(negativesNums);
console.log(`Кількість негативних елементів ${negativesNums.length}`);

let oddPozitiveNums = pozitiveNums
.filter(function(number) {
    return number % 2 ;
})

oddPozitiveNums.forEach(function(number) {
    sumOddPozitiveNums += number;
})

//console.log(oddPozitiveNums);
console.log(`Кількість непарних позитивних елементів ${oddPozitiveNums.length}`);
console.log(`Сума непарних позитивних елементів = ${sumOddPozitiveNums}`);

let evenPozitiveNums = pozitiveNums
.filter(function(number) {
    return number % 2 == 0;
})

evenPozitiveNums.forEach(function(number) {
    sumEvenPozitiveNums += number;
})
//console.log(evenPozitiveNums);
console.log(`Кількість парних позитивних елементів ${evenPozitiveNums.length}`)
console.log(`Сума парних позитивних елементів = ${sumEvenPozitiveNums}`);