// Fetch data from the API
fetch('http://localhost:8080/User/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // CheckData
        function checkUser(username, password) {
            let found = false;
            for (let i = 0; i < data.length; i++) {
                const item = data[i];
                console.log(item)
                if (item.email === username && item.password === password) {
                    found = true;
                    break;
                }
            }
            if (found) {
                successAlert();
                validatePage();
            } else {
                Erroralert();
                clearField();
            }
        }

        const registerBtn = document.getElementById('btn-register');
        registerBtn.addEventListener("click", function () {
            const enteredUsername = document.getElementById('usernameInput').value;
            const enteredPassword = document.getElementById('passwordInput').value;
            checkUser(enteredUsername, enteredPassword);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });


//ErrorAlert
function Erroralert() {

    Swal.fire({
        icon: "error",
        title: "Please Enter a Valid Username and Password.",

    });
}


function clearField() {
    const enteredUsername = document.getElementById('usernameInput').value="";
    const enteredPassword = document.getElementById('passwordInput').value="";

}

//Sucessfull Alert
function successAlert() {
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login Succeeded",
        showConfirmButton: false,
        timer: 1500
    });
}


function validatePage() {
    // Redirect to the Validator page after a delay of 1000 milliseconds (1 second)
    setTimeout(function () {
        window.location.href = "../Validator/vali.html";
    }, 2000);
}