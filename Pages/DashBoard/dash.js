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
                alert("Login Successfully!!");
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
        title: "Please Enter a Valid Username Password.",

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
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });
}

