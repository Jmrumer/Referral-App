$( "#oneDayHub" ).on( "click", function() {
  $( "#form_referral" ).attr("action", "oneDay.php");
});

$( "#twoDayHub" ).on( "click", function() {
  $( "#form_referral" ).attr("action", "twoDay.php");
});

$( "#oneDayRamp" ).on( "click", function() {
  $( "#form_referral" ).attr("action", "oneDayRamp.php");
});


$( "#twoDayRamp" ).on( "click", function() {
  $( "#form_referral" ).attr("action", "twoDayRamp.php");
});

$("#reset").click(function(event){
  alert("The form has been cleared.");
  });
