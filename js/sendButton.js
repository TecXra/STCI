document.addEventListener("DOMContentLoaded", function () {
  var el = document.querySelector(".button-bird");

  var inputFirst = document.getElementById("field1");
  var inputSecond = document.getElementById("field2");
  var inputThird = document.getElementById("field3");
  var inputFour = document.getElementById("field4");

  // var errorIcon = document.querySelectorAll(".fa-question");
  var errorIcon1 = document.getElementById("error__icon__1");
  var errorIcon2 = document.getElementById("error__icon__2");
  var errorIcon4 = document.getElementById("error__icon__4");

  var label1 = document.getElementById("label1");
  var label2 = document.getElementById("label2");
  var label4 = document.getElementById("label4");

  var text = document.querySelector(".button-bird__text");
  el.addEventListener("click", function (event) {
    var temp = true;
    event.preventDefault();
    if (inputFirst.value == "") {
      inputFirst.style.borderColor = "#ff8462";
      errorIcon1.classList.add("show__icon");
      temp = false;
    } else {
      temp = checkAlphaValidation(inputFirst);
    }
    if (inputSecond.value == "") {
      inputSecond.style.borderColor = "#ff8462";
      errorIcon2.classList.add("show__icon");
      temp = false;
    }
    if (inputFour.value == "") {
      inputFour.style.borderColor = "#ff8462";
      errorIcon4.classList.add("show__icon");
      temp = false;
    }
    // el.classList.toggle("active");

    if (temp) {
      el.classList.add("active");
      document.getElementById("button-bird-id").disabled = true;
      document.getElementById("field1").value = "";
      document.getElementById("field2").value = "";
      document.getElementById("field3").value = "";
      document.getElementById("field4").value = "";
      // if (el.classList.contains("active")) {
      text.innerHTML = "Message Sent";
      // }
    } else {
      text.innerHTML = "Hfuc Jevvjfh";
    }
  });
});

function checkValidation(value) {
  value.style.borderColor = "#ffffff";

  if (value == document.getElementById("field1")) {
    document.getElementById("error__icon__1").classList.remove("show__icon");
  }
  if (value == document.getElementById("field2")) {
    document.getElementById("error__icon__2").classList.remove("show__icon");
  }
  if (value == document.getElementById("field4")) {
    document.getElementById("error__icon__4").classList.remove("show__icon");
  }
  // if (value == document.getElementById("field1")) {
  //   checkAlphaValidation(document.getElementById("field1"));
  // }
}

function checkNumericValidation(input) {
  var letters = /^[0-9 ]+$/;
  if (!input.value.match(letters)) {
    return false;
  }
  return true;
}
function checkAlphaValidation(input) {
  var letters = /^[A-Za-z ]+$/;
  if (!input.value.match(letters)) {
    input.style.borderColor = "#ff8462";
    return false;
  }
  return true;
}
