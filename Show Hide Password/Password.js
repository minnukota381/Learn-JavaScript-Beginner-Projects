document.getElementById("togglePassword").addEventListener("click", function() {
    var password1=document.getElementById("password");
    var toggle=document.getElementById("togglePassword");
    if(password1.type==="password"){
        password1.type="text";
        toggle.innerHTML="Hide";
    }else{
        password1.type="password";
        toggle.innerHTML="show";
    }
})