var userfirstname, userlastname, useremail, userphoneNumber, userpassword, userconfirmpassword, usergender;
var userpresentAddress, userpermanentAddress, userpresentPincode, userpermanentPincode, userpresentState, userpremanentState, userdateofBirth;
var userbirthTime, userlanguages, userInterests, userbirthTime, userImgFile, userResume;
var validArray = [
    { id: "firstname", validId: "validfirstname", errmsg: "* Firstname is required", isValid: false, isborder: true },
    { id: "lastname", validId: "validlastname", errmsg: "* Lastname is required", isValid: false, isborder: true },
    { id: "email", validId: "validemail", errmsg: "*Enter valid Email Id", isValid: false, isborder: true },
    { id: "phone", validId: "validphonenumber", errmsg: "*Enter valid Phone Number", isValid: false, isborder: true },
    { id: "password", validId: "validpassword", errmsg: "*Enter valid Password", isValid: false, isborder: true },
    { id: "confirmpassword", validId: "validconfirmpassword", errmsg: "* Enter valid Password", isValid: false, isborder: true },
    { id: "gender", validId: "validgender", errmsg: "* Gender is required", isValid: false, isborder: false },
    { id: "presentaddress", validId: "validpresentaddress", errmsg: "* Present Address is required", isValid: false, isborder: true },
    { id: "permanentaddress", validId: "validpermanentaddress", errmsg: "* Permanent Address is required", isValid: false, isborder: true },
    { id: "presentpincode", validId: "validpresentpincode", errmsg: "* Pincode is required", isValid: false, isborder: true },
    { id: "permanentpincode", validId: "validpermanentpincode", errmsg: "* Pincede is required", isValid: false, isborder: true },
    { id: "presentstate", validId: "validpresentstate", errmsg: "* State is required", isValid: false, isborder: true },
    { id: "permanentstate", validId: "validpermanentstate", errmsg: "* State is required", isValid: false, isborder: true },
    { id: "dateofbirth", validId: "validdateofbirth", errmsg: "* Date of Birth is required", isValid: false, isborder: true },
    { id: "dateoftime", validId: "validdatetime", errmsg: "* Date Time is required", isValid: false, isborder: true },
    { id: "language", validId: "validlanguage", errmsg: "* Choose Language", isValid: false, isborder: false },
    { id: "interestsfield", validId: "validinterest", errmsg: "* Choose Interest", isValid: false, isborder: false },
    { id: "img", validId: "validimg", errmsg: "* Image is required", isValid: false, isborder: false },
    { id: "resume", validId: "validfile", errmsg: "* Resume is required", isValid: false, isborder: false }

];

function validateName(id, validId, firstname) {
    var name = document.getElementById(id);
    var regex = /^[a-zA-Z\.@]+$/;

    name.addEventListener("input", function () {
        var inputValue = name.value;
        if (regex.test(inputValue)) {
            name.style.outlineColor = "green"
            name.style.borderColor = "green";
            document.getElementById(validId).innerHTML = "";
            if (firstname) {
                userfirstname = inputValue;
                isValidId(id);

            }
            else {
                userlastname = inputValue;
                isValidId(id);
            }
        }
        else {
            name.style.outlineColor = "red";
            document.getElementById(validId).innerHTML = `*${id} must contain only letters.`
        }
    });

}

function validateEmail(id, validId) {
    var email = document.getElementById(id);
    var regex = /^([a-zA-Z\.-]+)@([a-zA-Z0-9]+).([a-z]{2,8})$/;

    email.addEventListener("input", function () {
        var inputValue = email.value;
        if (regex.test(inputValue)) {
            email.style.outlineColor = "green";
            email.style.borderColor = "green";
            document.getElementById(validId).innerHTML = "";
            useremail = inputValue;
            isValidId(id);
        }
        else {
            email.style.outlineColor = "red";
            document.getElementById(validId).innerHTML = `*Enter valid Email Id`
        }
    });

}

function validatePhoneNumber(id, validId) {
    var phone = document.getElementById(id);
    var regex = /^([+])([0-9]+)$/;

    phone.addEventListener("input", function () {
        var inputValue = phone.value;
        if (regex.test(inputValue)) {
            phone.style.outlineColor = "green";
            phone.style.borderColor = "green";
            document.getElementById(validId).innerHTML = "";
            userphoneNumber = inputValue;
            isValidId(id);
        }
        else {
            phone.style.outlineColor = "red";
            document.getElementById(validId).innerHTML = `*Enter valid Phone Number`;
        }
    });

}

function validatePassword(idpassword, validpassword, idconfirmpassword, validconfirmpassword) {
    var confirmpassword = document.getElementById(idconfirmpassword);
    var password = document.getElementById(idpassword);

    confirmpassword.addEventListener("input", function () {

        if (document.getElementById(idpassword).value === document.getElementById(idconfirmpassword).value) {
            confirmpassword.style.outlineColor = "green";
            confirmpassword.style.borderColor = "green";
            password.style.outlineColor = "green";
            password.style.borderColor = "green";
            document.getElementById(validpassword).innerHTML = "";
            document.getElementById(validconfirmpassword).innerHTML = "";
            userpassword = document.getElementById(idpassword).value;
            userconfirmpassword = document.getElementById(idpassword).value;
            isValidId(idpassword);
            isValidId(idconfirmpassword);
        }
        else {
            confirmpassword.style.outlineColor = "red";
            password.style.outlineColor = "red";
            document.getElementById(validpassword).innerHTML = `*Enter valid Password`;
            document.getElementById(validconfirmpassword).innerHTML = `*Enter valid Password`;
        }
    });

}

function validategender(id, validId) {
    var gender = Array.from(document.querySelectorAll(`.${id}:checked`).values()).map((value) => value.value);
    if (gender.length <= 0) {
        document.getElementById(validId).innerHTML = `*Choose Gender`
    }
    else {
        document.getElementById(validId).innerHTML = "";
        usergender = gender;
        console.log(gender);
        isValidId(id);
    }
}


//Address 
function address(addressId, isPresent) {
    document.getElementById(addressId).addEventListener("input", function () {
        if (isPresent) {
            userpresentAddress = document.getElementById(addressId).value;
            isValidId(addressId);
        }
        else {
            userpermanentAddress = document.getElementById(addressId).value;
            isValidId(addressId);
        }
    });
}

function sameAddress() {
    var sameAddress = document.getElementById("sameaddress");
    if (sameAddress.checked === true) {
        document.getElementById("permanentaddress").innerHTML = document.getElementById("presentaddress").value;
        userpermanentAddress = document.getElementById("presentaddress").value;
        document.getElementById("permanentaddress").disabled = "disabled";
        isValidId("permanentaddress");

        document.getElementById("permanentpincode").value = document.getElementById("presentpincode").value;
        userpermanentPincode = document.getElementById("presentpincode").value;
        document.getElementById("permanentpincode").disabled = "disabled";
        isValidId("permanentpincode");

        document.getElementById("permanentstate").value = document.getElementById("presentstate").value;
        userpremanentState = document.getElementById("presentstate").value;
        document.getElementById("permanentstate").disabled = "disabled";
        isValidId("permanentstate");
    }
    else {
        document.getElementById("permanentaddress").disabled = "";
        document.getElementById("permanentpincode").disabled = "";
        document.getElementById("permanentstate").disabled = "";
    }
}

function validatepincode(id, validId, present) {
    var pincode = document.getElementById(id);
    var regex = /^[0-9]{6}$/;

    pincode.addEventListener("input", function () {
        var inputValue = pincode.value;
        if (regex.test(inputValue)) {
            pincode.style.outlineColor = "green";
            pincode.style.borderColor = "green";
            document.getElementById(validId).innerHTML = "";
            if (present) {
                userpresentPincode = inputValue;
                isValidId(id);
            }
            else {
                userpermanentPincode = inputValue;
                isValidId(id);
            }
        }
        else {
            pincode.style.outlineColor = "red";
            document.getElementById(validId).innerHTML = `*Enter valid Pincode`
        }
    });
}


function validDateofBirth(id, validId) {
    var dob = document.getElementById(id);
    var regex = /^((19|20)[0-9][0-9])-((0)[1-9]|(1|2)[0-2])-((0)[1-9]|(1|2)[0-9]|(3)[0-1])$/;

    dob.addEventListener("input", function () {
        var inputValue = dob.value;
        if (regex.test(inputValue)) {
            dob.style.outlineColor = "green";
            dob.style.borderColor = "green";
            document.getElementById(validId).innerHTML = "";
            userdateofBirth = inputValue;
            isValidId(id);
        }
        else {
            dob.style.outlineColor = "red";
            document.getElementById(validId).innerHTML = `*Enter valid Date of Birth`
        }
    });
}

function validBirthTime(id, validId) {
    var datetime = document.getElementById(id);
    if (datetime.value) {
        var [h, m] = datetime.value.split(":");
        userbirthTime = (h % 12 ? h % 12 : 12) + ":" + m, h >= 12 ? 'PM' : 'AM';
        datetime.style.outlineColor = "green";
        datetime.style.borderColor = "green";
        isValidId(id);
    }

}

function validateState(id, validId, present) {
    var selectState = Array.from(document.querySelectorAll(".permanentstate:checked").values()).map((value) => value.value);
    if (selectState.length <= 0) {
        document.getElementById(validId).innerHTML = `*Choose atleast one State`;
    }
    else {
        document.getElementById(id).style.outlineColor = "green";
        document.getElementById(id).style.borderColor = "green";
        document.getElementById(validId).innerHTML = "";
        if (present) {
            userpresentState = selectState;
            isValidId("presentstate");
        }
        else {
            userpremanentState = selectState;
            isValidId("permanentstate");
        }
    }
}

function validateLanguage(validId) {
    var selectedlanguages = Array.from(document.querySelectorAll(".selectedlanguage:checked").values()).map((value) => value.value);
    if (selectedlanguages.length <= 0) {
        document.getElementById(validId).innerHTML = `*Choose atleast one language`;
    }
    else {
        document.getElementById(validId).innerHTML = "";
        userlanguages = selectedlanguages;
        isValidId("language");
    }
}

function validateInterest(validId) {
    var selectedinterests = Array.from(document.querySelectorAll(".interests:checked").values()).map((value) => value.value);
    if (selectedinterests.length <= 0) {
        document.getElementById(validId).innerHTML = `*Choose atleast one Interest`
    }
    else {
        document.getElementById(validId).innerHTML = "";
        userInterests = selectedinterests;
        isValidId("interestsfield");
    }
}


function fileUpload(id, validId, isImg) {
    var fileInput = document.getElementById(id);
    var file = fileInput.files[0];
    if (file) {

        if (isImg) {
            var reader = new FileReader();
            reader.onload = function (e) {
                userImgFile = e.target.result;
                document.getElementById("userimg").src = e.target.result;
                isValidId(id);
            }

            reader.readAsDataURL(file);

        }
        else {
            var filesData = [];

            document.getElementById(id).addEventListener('change', function (e) {
                var files = e.target.files;

                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    var reader = new FileReader();

                    reader.onload = (function (file) {
                        return function (e) {
                            filesData.push({
                                name: file.name,
                                data: e.target.result
                            });

                            var listItem = document.createElement('li');
                            listItem.textContent = file.name;

                            var downloadBtn = document.createElement('button');
                            downloadBtn.textContent = 'Download';
                            downloadBtn.onclick = (function (fileData) {
                                return function () {
                                    var a = document.createElement('a');
                                    a.href = fileData.data;
                                    a.download = fileData.name;
                                    document.body.appendChild(a);
                                    a.click();
                                    document.body.removeChild(a);
                                };
                            })(filesData[filesData.length - 1]);

                            listItem.appendChild(downloadBtn);
                            document.getElementById('userresume').appendChild(listItem);
                        };
                    })(file);

                    reader.readAsDataURL(file);
                    isValidId(id);
                }
            });

        }
    }
    else {
        document.getElementById(validId).innerHTML = "File Required";
    }
}
function submitForm(event) {
    event.preventDefault();
    console.log(
        userfirstname,
        userlastname,
        useremail,
        userphoneNumber,
        userpassword,
        userconfirmpassword,
        usergender,
        userpresentAddress,
        userpermanentAddress,
        userpresentPincode,
        userpermanentPincode,
        userpresentState,
        userpremanentState,
        userdateofBirth,
        userbirthTime,
        userlanguages,
        userInterests,
        userImgFile,
        userResume
    );

    var isSubmitValid = true;
    validArray.forEach(element => {
        if (!element.isValid) {
            isSubmitValid = false;
            errMsg(element.id, element.validId, element.errmsg, element.isborder);
        }
    });

    if (isSubmitValid) {
        alert("Form Submitted Successfully");
        //Assign Values
        document.getElementById("username").innerHTML = userfirstname + " " + userlastname;
        document.getElementById("useremail").innerHTML = useremail;
        document.getElementById("userphone").innerHTML = userphoneNumber;
        document.getElementById("userpassword").innerHTML = userconfirmpassword;
        document.getElementById("usergender").innerHTML = usergender;
        document.getElementById("useraddress").innerHTML = userpresentAddress;
        document.getElementById("userdob").innerHTML = userdateofBirth;
        document.getElementById("userbirthtime").innerHTML = userbirthTime;
        document.getElementById("userlanguage").innerHTML = userlanguages.toString();
        document.getElementById("userinterest").innerHTML = userInterests.toString();


        //Hide Form and Show Table
        document.getElementById("form-page").style.display = "none";
        document.getElementById("usertable").style.display = "block";


    }

}

function errMsg(fieldId, validId, msg, isborder) {
    document.getElementById(validId).innerHTML = msg;
    if (isborder) {
        document.getElementById(fieldId).style.borderColor = "red";
    }


}

function isValidId(id) {
    validArray.forEach((element) => {
        if (element.id == id) {
            element.isValid = true;
        }
    });
}

function backbtn()
{
    //Hide Table and Show Form
    
    document.getElementById("usertable").style.display = "none";
    document.getElementById("form-page").style.display = "block";
}