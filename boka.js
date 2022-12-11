let form = document.getElementById("form");

let förnamnInput = document.getElementById("förnamn");
let efternamnInput = document.getElementById("efternamn");
let emailInput = document.getElementById("email");
let telefonnummerInput = document.getElementById("telefonnummer");
let datumInput = document.getElementById("datum");
let bastuRadios = document.querySelectorAll('input[name="bastu"]');

let formGroup = document.getElementsByClassName("form-group");

// console.log(form)
// console.log(förnamnInput)
// console.log(efternamnInput)
// console.log(emailInput)
// console.log(telefonnummerInput)
// console.log(datumInput)
// console.log(bastuRadios)
//console.log(formGroup)

form.addEventListener("submit", validateForm);

document.getElementById("email").onchange = function (e) {
  e.preventDefault();
  ValidateEmail();
};

function ValidateEmail() {
  if (emailInput.value === "") {
    document.getElementById("ERROR").innerText = "This field cannot be empty";
  } else {
    document.getElementById("ERROR").innerText = "invalid email";
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    formGroup[2].classList.remove("error");
    emailInput.classList.remove("invalid");

    return true;
  }

  formGroup[2].classList.add("error");
  emailInput.classList.add("invalid");

  return false;
}

document.getElementById("telefonnummer").onchange = function (e) {
  e.preventDefault();
  Validatenumber();
};
function Validatenumber() {
  if (document.getElementById("telefonnummer").value.length < 8) {
    document.getElementById("ERROR2").innerText = "need atleast 8 digits";
    formGroup[3].classList.add("error");
    telefonnummerInput.classList.add("invalid");

    if (telefonnummerInput.value === "") {
      document.getElementById("ERROR2").innerText =
        "This field cannot be empty";
    }
    return;
  }

  formGroup[3].classList.remove("error");
  telefonnummerInput.classList.remove("invalid");

  return false;
}
document.getElementById("datum").onchange = function (e) {
  e.preventDefault();
  CheckDate();
};
function CheckDate() {
  var selectedText = document.getElementById("datum").value;
  var selectedDate = new Date(selectedText);
  var now = new Date();
  if (selectedDate < now || selectedText === "") {
    document.getElementById("ERROR3").innerText = "Date cant be blank and must be in the future";
    formGroup[4].classList.add("error");
    datumInput.classList.add("invalid"); 
  } 
  else {
    formGroup[4].classList.remove("error");
    datumInput.classList.remove("invalid");
  }

}

function validateForm(e) {
  e.preventDefault();

  let now = new Date();

  if (förnamnInput.value === "") {
    formGroup[0].classList.add("error");
    förnamnInput.classList.add("invalid");
  } else {
    formGroup[0].classList.remove("error");
    förnamnInput.classList.remove("invalid");
  }

  if (efternamnInput.value === "") {
    formGroup[1].classList.add("error");
    efternamnInput.classList.add("invalid");
  } else {
    formGroup[1].classList.remove("error");
    efternamnInput.classList.remove("invalid");
  }

  if (emailInput.value === "") {
    document.getElementById("ERROR").innerText = "This field cannot be empty";
    formGroup[2].classList.add("error");
    emailInput.classList.add("invalid");
  } else {
    formGroup[2].classList.remove("error");
    emailInput.classList.remove("invalid");
  }

  if (telefonnummerInput.value === "") {
    formGroup[3].classList.add("error");
    telefonnummerInput.classList.add("invalid");
  } else {
    formGroup[3].classList.remove("error");
    telefonnummerInput.classList.remove("invalid");
  }

  if (datumInput.value === "") {
    formGroup[4].classList.add("error");
    datumInput.classList.add("invalid");
  } else {
    formGroup[4].classList.remove("error");
    datumInput.classList.remove("invalid");
  }

  if (bastuRadios[0].checked === false && bastuRadios[1].checked === false) {
    formGroup[8].classList.add("error");
  } else {
    formGroup[8].classList.remove("error");
  }

  if (
    formGroup[0].classList.contains("error") === false &&
    formGroup[1].classList.contains("error") === false &&
    formGroup[2].classList.contains("error") === false &&
    formGroup[3].classList.contains("error") === false &&
    formGroup[4].classList.contains("error") === false &&
    formGroup[8].classList.contains("error") === false
  ) {
    alert("Bokning klar");
    location. reload()
  }
  
}
