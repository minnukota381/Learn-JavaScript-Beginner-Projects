// document.getElementById("togglePassword").addEventListener("click", function() {
//     var password1=document.getElementById("password");
//     var toggle=document.getElementById("togglePassword");
//     if(password1.type==="password"){
//         password1.type="text";
//         toggle.innerHTML="Hide";
//     }else{
//         password1.type="password";
//         toggle.innerHTML="show";
//     }
// })

document.getElementById("togglePassword").addEventListener("click", function() {
    var password = document.getElementById("password");
    var toggleIcon = document.querySelector("#togglePassword i");

    if (password.type === "password") {
        password.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
});