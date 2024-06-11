function show1(){
    var showMessage=document.getElementById("showMessage").value;
    document.getElementById("output").innerHTML=showMessage;
}
function show2(){
    var showAlert=document.getElementById("showMessage").value;
    window.alert(showAlert);
}
function showData(){
    var UserName=document.getElementById("showMessage").value;
    var message="You entered : "+UserName;
    document.getElementById("output").innerHTML=message;
}