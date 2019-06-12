var pigLatin = '';
function translate(input) {
  var inputArr = input.split(" ");
  var vowel = ['a','e','i','o','u'];

  for(i=0;i<inputArr.length;i++){
    var letterArr = inputArr[i].split('');

    if(letterArr[0] === "y") {
      letterArr.splice(0,1);
      letterArr.push("y", "a", "y");
      var latinWord = letterArr.join('');
      pigLatin = pigLatin + latinWord + " ";

    } else if(letterArr[0] === "a" || letterArr[0] ==="e" ||letterArr[0] === "i" ||letterArr[0] === "o" ||letterArr[0] === "u") {
      letterArr.push("w", "a", "y");
      var latinWord = letterArr.join('');
      pigLatin = pigLatin + latinWord + " ";

    } else {
      for (var n = 0; n < letterArr.length; n++) {
        for (var x = 0; x < vowel.length; x++) {
          //evaluates where the first vowel in the word is.
          if (letterArr[n] === vowel[x] && letterArr[n] === 'u' && letterArr[n-1] === 'q') {
            var constChar = letterArr.splice(0,n+1);
            // letterArr.push(constChar);
            var latinWord2 = constChar.join('');
            letterArr.push(latinWord2 + 'ay ');
            pigLatin = pigLatin + letterArr.join('');
            n = letterArr.length

          } else if (letterArr[n] === vowel[x]) {
            var constChar = letterArr.splice(0,n);
            // letterArr.push(constChar);
            var latinWord2 = constChar.join('');
            letterArr.push(latinWord2 + 'ay ');
            pigLatin = pigLatin + letterArr.join('');
            n = letterArr.length;
          }
        }
      }
    }
  };
};
//////////////////////////////
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var input = ($("input#latin").val()).toLowerCase();
    var latin = translate(input);
    $("#result").text(pigLatin);
  });
});
