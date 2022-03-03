const form = document.querySelector("form");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#errorMessage_fullName")
const streetAddress = document.querySelector("#streetAddress");
const streetAddressError = document.querySelector("#errorMessage_streetAddress")
const zipCode = document.querySelector("#zipCode");
const zipCodeError = document.querySelector("#errorMessage_zipCode")
const city = document.querySelector("#city");
const cityError = document.querySelector("#errorMessage_city")
const email = document.querySelector("#email");
const emailError = document.querySelector("#errorMessage_email")
const phoneNumber = document.querySelector("#phoneNumber");
const phoneNumberError = document.querySelector("#errorMessage_phoneNumber")


function sendForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 1)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkLength(streetAddress.value, 1)) {
    streetAddressError.style.display = "none";
  } else {
    streetAddressError.style.display = "block";
  }

  if (checkLength(zipCode.value, 4)) {
    zipCodeError.style.display = "none";
  } else {
    zipCodeError.style.display = "block";
  }

  if (checkLength(city.value, 1)) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }

  if (checkEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(phoneNumber.value, 8)) {
    phoneNumberError.style.display = "none";
  } else {
    phoneNumberError.style.display = "block";
  }

  checkValidation()
};

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
};

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const testEmail = regEx.test(email);
    return testEmail;
};

function checkValidation() {
  if (checkLength(fullName.value, 1) && checkEmail(email.value) && checkLength(subject.value, 1) && checkLength(textarea.value, 10)) {
    message.innerHTML = "Message has been sent";
  }
}

form.addEventListener("submit", sendForm);