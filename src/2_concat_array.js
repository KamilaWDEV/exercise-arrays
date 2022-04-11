// Napisz funkcję concatArray,
//  która jako argument przyjmuje tablicę słów i zwraca pojedynczy ciąg tekstowy, 
//  składający się z tych słów. Słowa oddzielone są spacjami,
//   a ciąg kończy się kropką .. Oto kilka przykładów:

//   Write a function concatArray that takes an array of words as an argument
//    and returns a single text string consisting of those words.
//     Words are separated by spaces and the string ends with a period.
//      Here are some examples:


function concatArray(Array) {
  let concatStr = Array.join(' ') + '.';
  return concatStr;
};


module.exports = concatArray;
/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(concatArray(["Hello", "this", "is", "dog"]), 'Hello this is dog.');
verify(concatArray(["All", "I", "want", "for", "christmas", "is", "you"]), 'All I want for christmas is you.');
verify(concatArray([]), '.');