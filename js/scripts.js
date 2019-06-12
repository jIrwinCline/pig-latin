var pigLatin = '';
function translate(input) {
  var inputArr = input.split(" ");
  var vowel = ['a','e','i','o','u'];
  console.log(inputArr);

  for(i=0;i<inputArr.length;i++){
    var letterArr = inputArr[i].split('');
    console.log(letterArr);

    if(letterArr[0] === "y") {
      letterArr.splice(0,1);
      letterArr.push("y", "a", "y");
      var latinWord = letterArr.join('');
      pigLatin = pigLatin + latinWord + " ";
      console.log(pigLatin);
    } else if(letterArr[0] === "a" || letterArr[0] ==="e" ||letterArr[0] === "i" ||letterArr[0] === "o" ||letterArr[0] === "u") {
      letterArr.push("w", "a", "y");
      var latinWord = letterArr.join('');
      pigLatin = pigLatin + latinWord + " ";
      console.log(pigLatin + i);
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
            console.log(pigLatin);

          } else if (letterArr[n] === vowel[x]) {

            var constChar = letterArr.splice(0,n);
            console.log(constChar + ' ' + letterArr + n)
            // letterArr.push(constChar);
            var latinWord2 = constChar.join('');
            letterArr.push(latinWord2 + 'ay ');
            pigLatin = pigLatin + letterArr.join('');
            console.log(pigLatin);
            n = letterArr.length;
          }
          // if(inputArr[i].includes('qu')) {
            //letterArr
            //splice
          // }
          ////////////////////////////
          // for (var n = 0; n < vowel.length; n++) {
          //   for (var i = 0; i < total.length; i++) {
          //     if (total[i] === vowel[n]) {
          //       total[i] = "-";
          //     }
          //   }
          // }
          /////////////////////////////
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
    $("#result").text(latin);
  });
});
