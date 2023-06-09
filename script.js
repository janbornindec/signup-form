const form = document.querySelector("form");

const errors = document.querySelectorAll(".error");
const email = document.getElementById("email");
const first = document.getElementById("first-name");
const last = document.getElementById("last-name");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-pass");
const emailError = document.querySelector("#email + span.error");
const firstError = document.querySelector("#first-name + span.error");
const lastError = document.querySelector("#last-name + span.error");
const mobileError = document.querySelector("#mobile + span.error");
const passwordError = document.querySelector("#password + span.error");
const confirmPassError = document.querySelector("#confirm-pass + span.error");

inputListener(email);
inputListener(first);
inputListener(last);
inputListener(mobile);
inputListener(password);
inputListener(confirmPass);


function inputListener(type) {
    type.addEventListener("input", () => {
        if (type === email) {
            checkEmail();
        } else if (type === mobile) {
            checkMobile();
        } else if (type === first) {
            checkFirst();
        } else if (type === last) {
            checkLast();
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
        if (email.validity.typeMismatch) {
            emailError.textContent = "This has to be an email address.";
        } else if (email.validity.tooShort) {
            emailError.textContent = `Email address should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
        };
        emailError.className = "error active";
    };
};

function checkFirst() {
    if (first.validity.valid) {
        firstError.textContent = "";
        firstError.className = "error";
    } else {
        if (first.validity.valueMissing) {
            firstError.textContent = "Please enter your first name.";
        };
        firstError.className = "error active";
    };
};

function checkLast() {
    if (last.validity.valid) {
        lastError.textContent = "";
        lastError.className = "error";
    } else {
        if (last.validity.valueMissing) {
            lastError.textContent = "Please enter your last name.";
        };
        lastError.className = "error active";
    };
};

function checkMobile() {
    const pattern = mobile.getAttribute("pattern");
    if (mobile.validity.valid) {
        mobileError.textContent = "";
        mobileError.className = "error";
    } else {
        if (mobile.validity.tooShort) {
            mobileError.textContent = `Mobile number should be at least ${mobile.minLength} characters; you entered ${mobile.value.length}.`;
        } else if (mobile.value != pattern) {
            mobileError.textContent = "This has to be a mobile number, with or without country code. Digits only.";
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
        if (password.validity.valueMissing) {
            passwordError.textContent = "Please enter a password."
        } else if (password.validity.tooShort) {
            passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
        } else if (password.value != pattern) {
            passwordError.textContent = "Password should contain at least one of the following: number, lower and uppercase letters and special characters.";
        };
        passwordError.className = "error active";
    };
};

function checkConfirmPassword() {
    if (confirmPass.value !== password.value) {
            confirmPassError.textContent = "Passwords do not match.";
            confirmPassError.className = "error active";
    } else if (confirmPass.validity.valueMissing) {
            confirmPassError.textContent = "Please confirm your password.";
            confirmPassError.className = "error active";
    } else {
        confirmPassError.textContent = "";
        confirmPassError.className = "error";
    };
};

form.addEventListener("submit",(e) => {
    errors.forEach((error) => {
        if (error.classList.contains("active")) {
            checkEmail();
            checkFirst();
            checkLast();
            checkMobile();
            checkPassword();
            e.preventDefault;
        };
    });
});

/*

const inputs = document.querySelectorAll("input");
function inputListener(inputs) {
    inputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            const errorType = e.target.id;
            const errorContainer = document.querySelector(`${errorType} + span.error`);
            if (errorType.validity.valid) {
                errorContainer.textContent = "";
                errorContainer.className = "error";
            } else {
                if (errorType.validity.typeMismatch) {
                    errorContainer.textContent = "This field is empty.";
                } else if (errorType.validity.tooShort) {
                    errorContainer.textContent = `This should be at least ${errorType.minLength} characters; you entered ${errorType.value.length}.`;
                };
                errorContainer.className = "error active";
            };
        });
    });
};*/