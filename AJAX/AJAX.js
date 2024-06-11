// Select the button with ID 'text-button' and add a click event listener
let textButton = document.querySelector("#text-button");
textButton.addEventListener('click', () => {
    // Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // Initialize a GET request to the 'data.txt' file
    xhr.open('GET', './Assets/data.txt', true);
    xhr.onload = () => {
        // If the request is successful (status 200)
        if (xhr.status === 200) {
            // Get the response text
            let data = xhr.responseText;
            // Display the data in the element with ID 'text'
            document.getElementById("text").innerText = data;
        } else {
            // If there's an error, alert the user with the status code
            alert('Error: ' + xhr.status);
        }
    };
    // Send the request
    xhr.send();
});

// Select the button with ID 'JSON-button' and add a click event listener
let JSONButton = document.querySelector('#JSON-button');
JSONButton.addEventListener('click', () => {
    // Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // Initialize a GET request to the 'JSONData.json' file
    xhr.open('GET', './Assets/JSONData.json', true);
    xhr.onload = () => {
        // If the request is successful (status 200)
        if (xhr.status == 200) {
            // Parse the JSON response
            let JSONData = JSON.parse(xhr.responseText);
            // Display the JSON data in a formatted way
            displayJSONData(JSONData);
            // Log the JSON data to the console
            console.log(JSONData);
        } else {
            // If there's an error, alert the user with the status code
            alert('Error: ' + xhr.status);
        }
    };
    // Send the request
    xhr.send();
});

// Function to display JSON data in a formatted way
let displayJSONData = (jsonData) => {
    let html = '<ul class="list-group mt-1">';
    jsonData.forEach(item => {
        // Create a list item for each JSON object
        html += `<li class="list-group-item">${item.name}: ${item.RegNo}</li>`;
    });
    html += '</ul>';
    // Insert the list into the element with ID 'JSON'
    document.querySelector("#JSON").innerHTML = html;
};

// Select the button with ID 'API-button' and add a click event listener
let APIButton = document.querySelector('#API-button');
APIButton.addEventListener('click', () => {
    // Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // Initialize a GET request to the GitHub API
    xhr.open('GET', 'https://api.github.com/users', true);
    xhr.onload = () => {
        // If the request is successful (status 200)
        if (xhr.status == 200) {
            // Parse the JSON response
            let APIData = JSON.parse(xhr.responseText);
            // Display the API data in a formatted way
            displayAPIData(APIData);
            // Log the API data to the console
            console.log(APIData);
        } else {
            // If there's an error, alert the user with the status code
            alert('Error: ' + xhr.status);
        }
    };
    // Send the request
    xhr.send();
});

// Function to display API data in a formatted way
let displayAPIData = (APIData) => {
    let html = '<ul class="list-group mt-1">';
    APIData.forEach(item => {
        // Create a list item for each API user
        html += `<li class="list-group-item">${item.login}</li>`;
    });
    html += '</ul>';
    // Insert the list into the element with ID 'API'
    document.querySelector("#API").innerHTML = html;
};

// Select the button with ID 'text2-button' and add a click event listener
let mytextButton = document.querySelector("#text2-button");
mytextButton.addEventListener('click', () => {
    // Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // Initialize a GET request to the 'data2.txt' file
    xhr.open('GET', './Assets/data2.txt', true);
    xhr.onload = () => {
        // If the request is successful (status 200)
        if (xhr.status === 200) {
            // Get the response text
            let info = xhr.responseText;
            // Display the data in the element with ID 'text2'
            document.getElementById("text2").innerText = info;
        } else {
            // If there's an error, alert the user with the status code
            alert('Error: ' + xhr.status);
        }
    };
    // Send the request
    xhr.send();
});

// Select the button with ID 'json2-button' and add a click event listener
let myJSONButton = document.querySelector("#json2-button");
myJSONButton.addEventListener('click', () => {
    // Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // Initialize a GET request to the 'JSON2.json' file
    xhr.open('GET', './Assets/JSON2.json', true);
    xhr.onload = () => {
        // If the request is successful (status 200)
        if (xhr.status === 200) {
            // Parse the JSON response
            let JSONinfo = JSON.parse(xhr.responseText);
            // Log the JSON data to the console
            console.log(JSONinfo);
            // Display the JSON data in a formatted way
            dispJSON(JSONinfo);
        } else {
            // If there's an error, alert the user with the status code
            alert('Error: ' + xhr.status);
        }
    };
    // Send the request
    xhr.send();
});

// Function to display JSON data in a formatted way
let dispJSON = (jsoninfo) => {
    let html = '<ul>';
    jsoninfo.forEach(item => {
        // Create a list item for each JSON object
        html += `<li>${item.name}: ${item.RegNo}</li>`;
    });
    html += '</ul>';
    // Insert the list into the element with ID 'JSON2'
    document.querySelector("#JSON2").innerHTML = html;
};

// Select the button with ID 'api2-button' and add a click event listener
let myAPIButton = document.querySelector("#api2-button");
myAPIButton.addEventListener('click', () => {
    // Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // Initialize a GET request to the JSONPlaceholder API
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', 'true');
    xhr.onload = () => {
        // If the request is successful (status 200)
        if (xhr.status === 200) {
            // Parse the JSON response
            let APIinfo = JSON.parse(xhr.responseText);
            // Display the API data in a formatted way
            dispAPI(APIinfo);
            // Log the API data to the console
            console.log(APIinfo);
        } else {
            // If there's an error, alert the user with the status code
            alert('Error: ' + xhr.status);
        }
    };
    // Send the request
    xhr.send();
});

// Function to display API data in a formatted way
let dispAPI = (APIinfo) => {
    let html = '<ul class="list-group mt-1">';
    // Check if the API data is an array
    if (Array.isArray(APIinfo)) {
        APIinfo.forEach(item => {
            // Create a list item for each API object
            html += `<li class="list-group-item">${item.title}</li>`;
        });
    } else {
        // Create a list item for a single API object
        html += `<li class="list-group-item">${APIinfo.title}</li>`;
    }
    html += '</ul>';
    // Insert the list into the element with ID 'API2'
    document.querySelector("#API2").innerHTML = html;
};
