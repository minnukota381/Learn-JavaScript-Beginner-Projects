let textButton = document.querySelector("#text-button");
textButton.addEventListener('click',() => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);
    xhr.onload =() => {
        if (xhr.status === 200) {
            let data = xhr.responseText

            document.getElementById("text").innerText = data;
        } else {
            alert('Error: ' + xhr.status);
        }
    }
    xhr.send();
});

let JSONButton = document.querySelector('#JSON-button');
JSONButton.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'JSONData.json', true);
    xhr.onload = () => {
        if (xhr.status == 200) {
            let JSONData = JSON.parse(xhr.responseText);
            displayJSONData(JSONData);
            console.log(JSONData);
        } else {
            alert('Error: ' + xhr.status);
        }
    };
    xhr.send();
});

let displayJSONData = (jsonData) => {
    let html = '<ul class="list-group mt-1">';
    jsonData.forEach(item => {
        html += `<li class="list-group-item">${item.name}: ${item.RegNo}</li>`;
    });
    html += '</ul>';
    document.querySelector("#JSON").innerHTML = html;
};

let APIButton = document.querySelector('#API-button');
APIButton.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);
    xhr.onload = () => {
        if (xhr.status == 200) {
            let APIData = JSON.parse(xhr.responseText);
            displayAPIData(APIData);
            console.log(APIData);
        } else {
            alert('Error: ' + xhr.status);
        }
    };
    xhr.send();
});

let displayAPIData = (APIData) => {
    let html = '<ul class="list-group mt-1">';
    APIData.forEach(item => {
        html += `<li class="list-group-item">${item.login}</li>`;
    });
    html += '</ul>';
    document.querySelector("#API").innerHTML = html;
};

let mytextButton = document.querySelector("#text2-button");
mytextButton.addEventListener('click', () =>{
    let xhr =  new XMLHttpRequest();
    xhr.open('GET', 'data2.txt', true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            let info = xhr.responseText;
            document.getElementById("text2").innerText = info;
        } else {
            alert('Error: ' + xhr.status);
        }
    }
    xhr.send();
});

let myJSONButton = document.querySelector("#json2-button");
myJSONButton.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'JSON2.json',true);
    xhr.onload = () =>{
        if(xhr.status === 200){
            let JSONinfo = JSON.parse(xhr.responseText);
            console.log(JSONinfo);
            displayJSONData(JSONinfo);
        } else{
            alert('Error: ' + xhr.status);
        }
    }
    xhr.send();
});

let dispJSON = (jsoninfo) => {
    let html = '<ul>';
    jsoninfo.forEach(item => {
        html += `<li>${item.name}: ${item.RegNo}</li>`;
    });
    html += '</ul>';
    document.querySelector("#JSON2").innerHTML = html;
} 