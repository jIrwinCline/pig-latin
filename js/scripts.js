
//////////////////////////////
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var input = $("input#latin").val();
    var latin = translate(input);
    console.log(input);
    $("#result").text(latin);
  });
});
