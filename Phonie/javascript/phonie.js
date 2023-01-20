document.getElementById("answer").addEventListener("click", check)

function check() {
  let phone = document.getElementById("number").value;
  confirmPhoneNumber(phone);
}

let listMTN = ["0810", "0813", "0814", "0816", "0703", "0803", "0903", "0906"];
let listAirtel = ["0802", "0808", "0902", "0907", "0701", "0812"];
let listGlo = ["0705", "0805", "0905", "0807", "0811", "0815"];
let list9mobile = ["0809", "0908", "0909", "0817", "0818"];
let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


function confirmPhoneNumber(number) {
  let displayText = document.getElementById("t-2");
  let theImage = document.getElementById("images");

  if (String(number).startsWith("+234")) {
    number = "0" + number.slice(4);
  }

  for (let i = 0; i < number.length; i++) {
    if (!digits.includes(number.charAt(i))) {
      displayText.innerText = "number cannot contain characters";
      theImage.src = "";
      return;
    }
  }
  if (number.length !== 11) {
    displayText.innerText = "number of digits must be 11";
    theImage.setAttribute("src", "");
    return;
  }

  let num = number.substring(0, 4);

  if (listMTN.includes(num)) {
    displayText.innerText = "MTN";
    theImage.setAttribute("src", "./images/mtn-logo.png");
  }

  if (listAirtel.includes(num)) {
    displayText.textContent = "Airtel";
    theImage.setAttribute("src", "./images/airtel-logo.png");
  }

    if (listGlo.includes(num)) {
      displayText.innerText = "Glo";
      theImage.setAttribute("src", "./images/glo-logo.png");
    }
  
    if (list9mobile.includes(num)) {
      displayText.innerText = "9mobile";
      theImage.setAttribute("src", "./images/9mobile-logo.png");
  }
}