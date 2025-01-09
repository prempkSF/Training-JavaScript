// Initialize the flag variables
let nameValid = false;
let fatherNameValid = false;
let emailValid = false;
let addressValid = false;
let placeValid = false;
let dobValid = false;
let zipValid = false;


function validateName() {
    var name = document.getElementById("name");
    //Name Regex to Include all character other than 0-9
    var regex = /^[a-zA-Z\.@]+$/;
    var validName = document.getElementById("validName");

    name.addEventListener("input", function () {
        var inputText = name.value;
        if (regex.test(inputText)) {
            name.style.borderColor = "green"
            name.style.outlineColor = "green"
            setFlag(true);
        }
        else {
            name.style.borderColor = "red"
            name.style.outlineColor = "red"
            setFlag(false);
        }
    });
}


function validateFatherName() {
    var fatherName = document.getElementById("fatherName");
    //Father Name Regex to Include all character other than 0-9
    var regex = /^[a-zA-Z\.@]+$/;

    fatherName.addEventListener("input", function () {
        var inputText = fatherName.value;
        if (regex.test(inputText)) {
            fatherName.style.borderColor = "green"
            fatherName.style.outlineColor = "green"
            setFlag(true);
        }
        else {
            fatherName.style.borderColor = "red"
            fatherName.style.outlineColor = "red"
            setFlag(false);
        }
    });
}

function validateEmail() {
    var input = document.getElementById("email");
    //Email Regex of 4 different Section
    //prem@syncfusion.com.io
    var regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2-8})?$/;

    input.addEventListener("input", function () {
        var inputText = input.value;
        if (regex.test(inputText)) {
            input.style.borderColor = "green";
            input.style.outlineColor = "green";
            setFlag(true);
        }
        else {
            input.style.borderColor = "red";
            input.style.outlineColor = "red";
            setFlag(false);
        }
    });
}


function validateAddress() {
    var input = document.getElementById("address");
    //Address Regex Includes a-z A-Z 0-9 : and space " "
    var regex = /^[a-zA-Z\.0-9: ]+$/;

    input.addEventListener("input", function () {
        var inputText = input.value;
        if (regex.test(inputText)) {
            input.style.borderColor = "green";
            input.style.outlineColor = "green";
            setFlag(true);
        }
        else {
            input.style.borderColor = "red";
            input.style.outlineColor = "red";
            setFlag(false);
        }
    });
}

function validatePlace() {
    var input = document.getElementById("place");
    //Place Regex Only a-z A-Z
    var regex = /^[a-zA-Z]+$/;

    input.addEventListener("input", function () {
        var inputText = input.value;
        if (regex.test(inputText)) {
            input.style.borderColor = "green";
            input.style.outlineColor = "green";
            setFlag(true);
        }
        else {
            input.style.borderColor = "red";
            input.style.outlineColor = "red";
            setFlag(false);
        }
    });
}

function validateDOB() {
    var input = document.getElementById("dob");
    console.log(input.value)
    //Date Regex 
    //Check Year of 1900 to 2099
    //Date 01-31 Month 01-12
    var regex = /^(19|20)[0-9][0-9]-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

    input.addEventListener("input", function () {
        var inputText = input.value;
        if (regex.test(inputText)) {
            input.style.borderColor = "green";
            input.style.outlineColor = "green";
            dobValid = true;
        }
        else {
            input.style.borderColor = "red";
            input.style.outlineColor = "red";
            setFlag(false);
        }
    });
}

function validateZip() {
    var input = document.getElementById("zip");
    console.log(input.value)
    //Address Regex 
    var regex = /^([0-9]){6}$/;

    input.addEventListener("input", function () {
        var inputText = input.value;
        if (regex.test(inputText)) {
            input.style.borderColor = "green";
            input.style.outlineColor = "green";
            setFlag(true);
        }
        else {
            input.style.borderColor = "red";
            input.style.outlineColor = "red";
            setFlag(false);
        }
    });
}


function uploadFile() {
    document.getElementById('uploadImg').addEventListener('click', () => {
        const fileInput = document.getElementById('profileImg');
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = function () {
                const blob = new Blob([reader.result], { type: file.type });

            };
            reader.readAsArrayBuffer(file);
            setFlag(true);
        } else {
            alert('Please select a file first.');
            setFlag(false);
        }
    });
}

function submitForm(event) {
    // Validate all fields before submitting
    validateName();
    validateFatherName();
    validateEmail();
    validateAddress();
    validatePlace();
    validateDOB();
    validateZip();

    // If any validation fails, prevent form submission
    if (!(nameValid && fatherNameValid && emailValid && addressValid && placeValid && dobValid && zipValid)) {
        event.preventDefault();
        alert("Please fill out the form correctly.");
        return false; 
    }
    
    return true; 
}