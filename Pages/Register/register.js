function successAlert(){
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    
}


var registerBtn = document.getElementById('register');

registerBtn.addEventListener('click',function(){
    successAlert();
})