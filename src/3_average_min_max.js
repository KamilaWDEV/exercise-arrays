// Napisz funkcję averageMinMax, 
// która jako argument przyjmuje tablicę liczb całkowitych,
//  a następnie wyświetla wartość minimalną, maksymalną i 
//  średnią wszystkich liczb.
//   Przypomnienie: średnia zbioru liczb całkowitych jest ich sumą 
//   podzieloną przez ich liczbę. Wynik powinien być zaokrąglony w
//    dół metodą „floor”. Oto kilka przypadków testowych:

// Write the averageMinMax function,
// which takes an array of integers as an argument,
// and then displays the minimum, maximum, and value
// mean of all numbers.
// Reminder: the mean of a set of integers is their sum
// divided by their number. The result should be rounded off in
// down with the "floor" method. Here are some test cases:


// definicja funkcji
function averageMinMax(arr) {
  console.log(Math.min(...arr));
  console.log(Math.max(...arr));
  
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
  var avg = sum / arr.length; 
}
console.log(Math.floor(avg));
};

// udostepnienie jej innym plikom
module.exports = averageMinMax;

// funkcja weryfikujaca
function verify(input, goal) {
if (input === goal) {
  console.log('Gratulacje!');
} else {
  console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
}
}

// weryfikacja
verify(averageMinMax([-42, 0, 42]), 'Min: -42 Max: 42 Average: 0');
verify(averageMinMax([30, 20, 100]), 'Min: 20 Max: 100 Average: 50');
verify(averageMinMax([-23, -4, -12]), 'Min: -23 Max: -4 Average: -13');