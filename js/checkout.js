const form = document.querySelector("form");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#errorMessageCheckout_fullName")
const streetAddress = document.querySelector("#streetAddress");
const streetAddressError = document.querySelector("#errorMessageCheckout_streetAddress")
const zipCode = document.querySelector("#zipCode");
const zipCodeError = document.querySelector("#errorMessageCheckout_zipCode")
const city = document.querySelector("#city");
const cityError = document.querySelector("#errorMessageCheckout_city")
const email = document.querySelector("#email");
const emailError = document.querySelector("#errorMessageCheckout_email")
const phoneNumber = document.querySelector("#phoneNumber");
const phoneNumberError = document.querySelector("#errorMessageCheckout_phoneNumber")
const button = document.querySelector(".button");


function sendForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 1)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkLength(streetAddress.value, 10)) {
    streetAddressError.style.display = "none";
  } else {
    streetAddressError.style.display = "block";
  }

  if (checkNumber(zipCode.value)) {
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

  if (checkNumber(phoneNumber.value)) {
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

function checkNumber(number) {
  const regEx = /^\d+$/;
  const testNumber = regEx.test(number)
  return testNumber;
};

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const testEmail = regEx.test(email);
    return testEmail;
};

function checkValidation() {
  if (checkLength(fullName.value, 1) && checkLength(streetAddress.value, 1) && checkNumber(zipCode.value, 4) && checkLength(city.value, 1) && checkEmail(email.value) && checkNumber(phoneNumber.value, 8)) {

  button.innerHTML = `<a href="/checkout-success.html" class="completePurchase">Complete Purchase</a>`
  }
};

form.addEventListener("submit", sendForm);