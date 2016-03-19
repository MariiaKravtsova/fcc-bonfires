/*
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  var word = str.toLowerCase().split(' ');
  for (var i = 0; i < word.length; i++){
    word[i] = word[i].split('');
    word[i][0] = word[i][0].toUpperCase();
    word[i] = word[i].join('');
  }


  return word.join(' ');
}

titleCase("I'm a little tea pot");
