//when corresponding radio button is clicked form action attribute will change.
$( "#oneDayHub" ).on( "click", function() {
  $( "#form_referral" ).attr("action", "oneDay.php");
});

//Following php forms do not yet exist. 
$( "#twoDayHub" ).on( "click", function() {
  $( "#form_referral" ).attr("action", "twoDay.php");
});

$( "#oneDayRamp" ).on( "click", function() {
  $( "#form_referral" ).attr("action", "oneDayRamp.php");
});


$( "#twoDayRamp" ).on( "click", function() {
  $( "#form_referral" ).attr("action", "twoDayRamp.php");
});

//Throw an alert when reset is clicked to confirm
$("#reset").click(function(event){
  alert("The form has been cleared.");
  });
