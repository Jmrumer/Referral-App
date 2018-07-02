//Decides who to email form to
function onRadioButtonChange() {
  if
    (document.getElementById('oneDay').checked === true
     && document.getElementById('radio_inbound').checked === true
     || document.getElementById('radio_outbound').checked === true
     || document.getElementById('radio_small_sort').checked === true)
  {
     document.getElementById('form_referral').action = 'Mailto:jmrumer@gmail.com'//one day hub training email here.
  }
  else if(document.getElementById('oneDay').checked === true
     && document.getElementById('radio_ramp').checked === true)
  {
    document.getElementById('form_referral').action = 'Mailto:bob@bob.com' //one day ramp training email here.
  }
  else if
    (document.getElementById('twoDay').checked === true
     && document.getElementById('radio_inbound').checked === true
     || document.getElementById('radio_outbound').checked === true
     || document.getElementById('radio_small_sort').checked === true)
  {
     document.getElementById('form_referral').action = 'Mailto:jay.anime.15@gmail.com'//two day hub training email here.
  }
  else  (document.getElementById('twoDay').checked === true
     && document.getElementById('radio_ramp').checked === true)
  {
    document.getElementById('form_referral').action = 'Mailto:bob@bob.com' //two day ramp training email here.
  }
  }
//stores the value of action from the form
var mail = document.getElementById("form_referral").getAttribute("action");
//changes action value using onRadioButtonChange then confirms submission to the given address
$("[type='radio']").click(onRadioButtonChange(){});

$("#submit").click(function(event){
  event.preventDefault();
  alert("The form has been submitted to " + mail + ".");
  });
//Confirms page reset
$("#reset").click(function(event){
  alert("The form has been cleared.");
  });
