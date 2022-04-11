  // TODO Implement me. 
  //Napisz funkcję displayFullName,
  // która jako argument przyjmuje imię i nazwisko,
  // a następnie wyświetla w konsoli powitanie w stylu Jamesa Bonda. 
  //Jeśli imion lub nazwisk jest kilka, powtórzony zostaje 
  //jedynie ostatni człon. Oto kilka przypadków testowych:

  //   Write a function displayFullName that takes a first 
  // and last name as an argument, then displays a James 
  // Bond-style greeting to the console. If there are 
  // several names or surnames, only the last segment 
  // is repeated. Here are some test cases:


module.exports = displayFullName;

function displayFullName(name) {
  let userName = name.split(' ');
  let userSurname = userName[userName.length - 1];
  console.log(`My name is ${userSurname}, ${name}`);
}
displayFullName('James Bond');
displayFullName('Ada Lovelace');
displayFullName('Salvador Felipe Jacinto Dalí');  



/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(displayFullName("James Bond"), "My name is Bond, James Bond");
verify(displayFullName("Ada Lovelace"), "My name is Lovelace, Ada Lovelace");
verify(displayFullName("Salvador Felipe Jacinto Dalí"), "My name is Dalí, Salvador Felipe Jacinto Dalí");