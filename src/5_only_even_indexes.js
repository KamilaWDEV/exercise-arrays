  // 1. nazwac fukkcje
  //2.stworzyc tablice gdzie beda przytrzymywane zrwacane litery.
  //3. petla ktora zwraca co drugie słowo
  //4.wypchnac słowo to zadeklarowanej tablicy
  // zwrocic wynik


   

  function evenIndexes(word) {
    let tab = [];
    for (i=0; i<word.length; i+=2) {
      tab.push(word[i]);
    }
    return tab;
  };
  
  module.exports = evenIndexes;
  /**Weryfikacja */
  
  function verify(input, goal) {
    if (input.toString() === goal.toString()) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(evenIndexes("lol"), [ 'l', 'l' ]);
  verify(evenIndexes("You're weird"), [ 'Y', 'u', 'r', ' ', 'e', 'r' ]);
  verify(evenIndexes(""), [ ]);