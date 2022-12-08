const firstname = document.getElementById('name');
const lastname = document.getElementById('lastname');
const phonenumber = document.getElementById('phonenumber');
const email = document.getElementById('email');
const count = document.getElementById('count');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidphonenumber = phonenumber => {
    const re = ([0-9]);
    return re.test(String(phonenumber).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const phonenumberValue = phonenumber.value.trim();
    const emailValue = email.value.trim();
    const countValue = count.value.trim();

    if(firstnameValue === '') {
        setError(firstname, 'Måste ange ett namn');
    } else {
        setSuccess(firstname);
    }
    if(lastnameValue === '') {
        setError(lastname, 'Måste ange ett efternamn');
    } else {
        setSuccess(lastname);
    }
    
    if(countValue === '0') {
        setError(count, 'Måste ange rätt antal personer');
    } else {
        setSuccess(count);
    }

    if(emailValue === '') {
        setError(email, 'Måste ange en email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Ange en giltig email');
    } else {
        setSuccess(email);
    }
    if(phonenumberValue === '') {
        setError(phonenumber, 'Måste ange ett telefonnummer');
    } else if (!isValidphonenumber(phonenumberValue)) {
        setError(phonenumber, 'Ange ett giltigt telefonnummer ');
    } else {
        setSuccess(phonenumber);
    }

    

    

};
