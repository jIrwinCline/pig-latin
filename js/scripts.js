var pigLatin = '';
function translate(input) {
  var inputArr = input.split(" ");
  // var vowels = ['a','e','i','o','u'];
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
        } else if(letterArr[0] === "a", "e", "i", "o", "u") {
          letterArr.push("w", "a", "y");
          var latinWord = letterArr.join('');
          pigLatin = pigLatin + latinWord + " ";
          console.log(pigLatin);
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
