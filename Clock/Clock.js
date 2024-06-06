let d=new Date();
setInterval(TimerF, 1000);

function TimerF(){
    d=new Date();
    document.getElementById("demo").innerHTML= 'Current Time: ' + d.getHours()
        + ':' + d.getMinutes() + ':' + d.getSeconds();
}