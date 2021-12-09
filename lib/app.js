var dateOfBirth = document.querySelector("#dateOfBirth");
var luckyNumber = document.querySelector("#luckyNumber");
var submitBtn = document.querySelector("#submitBtn");
var output = document.querySelector("#output");

submitBtn.addEventListener("click", eventHandler);

function eventHandler() {
  var dob = dateOfBirth.value;
  var num = luckyNumber.value;

  dob = dob.replaceAll("-", "");
  num = parseInt(num);

  var sum = 0;

  for (var i = 0; i < dob.length; i++) {
    sum += parseInt(dob[i]);
  }

  if (sum % num === 0) {
    output.innerText = num + " is lucky :) ";
  } else {
    output.innerText = num + " is unlucky :(";
  }
  console.log(dob + " " + num + " " + sum);
}
