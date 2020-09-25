function validateLoginForm() {
    let phoneNumber = document.getElementById('phoneNumber').value;
    let password = document.getElementById('password').value;

    if (!isNaN(phoneNumber) &&
        phoneNumber.substring(0, 4) == '0878' &&
        phoneNumber.length == 12 &&
        password.length >= 5 &&
        password.length <= 25) {

        localStorage.phonenumber = phoneNumber
        window.location.href = "home.html"
    } else {
        alert("Wrong Phone Number or Password format. Please Try Again")
    }
}