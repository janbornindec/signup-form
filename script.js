const form = document.querySelector("form");
const inputs = document.querySelectorAll("#email");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-pass");
const emailError = document.querySelector("#email + span.error");
const mobileError = document.querySelector("#mobile + span.error");
const passwordError = document.querySelector("#password + span.error");
const confirmPassError = document.querySelector("#confirm-pass + span.error");

inputListener(email);
inputListener(mobile);
inputListener(password);
inputListener(confirmPass);

function inputListener(type) {
    type.addEventListener("input", () => {
        if (type === email) {
            checkEmail();
        } else if (type === mobile) {
            checkMobile();
        } else if (type === password) {
            checkPassword();
        } else if (type === confirmPass) {
            checkConfirmPassword();
        };
    });
};

function checkEmail() {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        if (email.validity.valueMissing) {
            emailError.textContent = "Please enter an email address.";
        } else if (email.validity.typeMismatch) {
            emailError.textContent = "This has to be an email address.";
        } else if (email.validity.tooShort) {
            emailError.textContent = `Email address should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
        };
        emailError.className = "error active";
    };
};

function checkMobile() {
    const pattern = mobile.getAttribute("pattern");
    if (mobile.validity.valid) {
        mobileError.textContent = "";
        mobileError.className = "error";
    } else {
        if (mobile.value != pattern) {
            mobileError.textContent = "This has to be a mobile number, with or without country code.";
        } else if (mobile.validity.tooShort) {
            mobileError.textContent = `Mobile number should be at least ${mobile.minLength} characters; you entered ${mobile.value.length}.`;
        };
        mobileError.className = "error active";
    };
};

function checkPassword() {
    const pattern = password.getAttribute("pattern");
    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className = "error";
    } else {
        if (password.value != pattern) {
            passwordError.textContent = "Password should be at least 8 characters, containing at least one of the following: number, lower and uppercase letters and special characters.";
        } else if (password.validity.tooShort) {
            passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
        };
        passwordError.className = "error active";
    };
};