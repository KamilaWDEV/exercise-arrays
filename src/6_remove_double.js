

 
function removeDouble(arr) {
  for (let i=arr.length; i>-1; i--) {
    for (let j=i-1; j>-1; j--) {
      if (arr[i] === arr[j]) {
        arr.splice(j,1);
      }
    }
  }
  return arr;
};




module.exports = removeDouble;
 


/**Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(removeDouble(["suit", "clock", "butter", "suit"]), [ 'clock', 'butter', 'suit' ]);
verify(removeDouble(["hello", "hello", 23, -3, 23, "hello"]), [ -3, 23, 'hello' ]);
