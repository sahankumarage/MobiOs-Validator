function successAlert() {
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });
}

var registerBtn = document.getElementById('register');

registerBtn.addEventListener('click', function () {

    var password = document.getElementById("passwordInput").value;
    var confirmPassword = document.getElementById("confirmPasswordInput").value;

    if (password === confirmPassword && checkFields()) {
        registerUser();
        successAlert();
        clear();
    } else {
        errorAlert();
    }
});

function registerUser() {
    // formData
    var formData = {
        firstName: document.getElementById("firstNameInput").value,
        lastName: document.getElementById("lastNameInput").value,
        address: document.getElementById("addressInput").value,
        email: document.getElementById("emailInput").value,
        password: document.getElementById("passwordInput").value,
    };

    // Register
    fetch("http://localhost:8080/User/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log("Success:", data);
        // Handle success, if needed
    })
    .catch(error => {
        console.error("Error:", error);
        // Handle error, if needed
    });
}

// ClearInputFields
function clear() {
    document.getElementById("firstNameInput").value = "";
    document.getElementById("lastNameInput").value = "";
    document.getElementById("addressInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("passwordInput").value = "";
    document.getElementById("confirmPasswordInput").value = "";
}

function checkFields() {
    var firstName = document.getElementById("firstNameInput").value;
    var lastName = document.getElementById("lastNameInput").value;
    var address = document.getElementById("addressInput").value;
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    var confirmPassword = document.getElementById("confirmPasswordInput").value;

    if (!firstName || !lastName || !address || !email || !password || !confirmPassword) {
        return false; // Stop further execution
    }

   

    return true; // All fields are filled and passwords match
}


function errorAlert(){
    Swal.fire({
        title: "<strong>Please complete all fields Or Passwords Are Not Matched!</u></strong>",
        icon: "error",
        html: `
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        
      });
}