// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
  var arr = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }

  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
