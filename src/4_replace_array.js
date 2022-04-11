function replaceArray(arrStr){
  for (let i=0; i < arrStr.length; i++) {
    if (arrStr[i][0] === 'h' || arrStr[i][0] === 'H') {
      arrStr[i] = arrStr[i].toUpperCase();
    }
  }
  console.log(arrStr);
  return arrStr;
}

module.exports = replaceArray;
/**Weryfikacja */

function verify(input, goal) {
  if (input.toString() === goal.toString()) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(replaceArray(["banana", "suit", "hammer"]), [ 'banana', 'suit', 'HAMMER' ]);
verify(replaceArray(["Hello", "there"]), [ 'HELLO', 'there' ]);
verify(replaceArray(["Hey!", "hey..."]), [ 'HEY!', 'HEY...' ]);