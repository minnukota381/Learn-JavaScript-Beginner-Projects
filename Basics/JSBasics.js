function show1(){
    let showMessage=document.getElementById("showMessage").value;
    document.getElementById("output").innerHTML=showMessage;
}
function show2(){
    let showAlert=document.getElementById("showMessage").value;
    window.alert(showAlert);
}
function showData(){
    let UserName=document.getElementById("showMessage").value;
    let message="You entered : "+UserName;
    document.getElementById("output").innerHTML=message;
}