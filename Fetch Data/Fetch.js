document.getElementById("fetchExternal").addEventListener("click", fetchExternalData);
document.getElementById("fetchLocal").addEventListener("click", fetchLocalData);
document.getElementById("postDataForm").addEventListener("submit", postData);

function fetchExternalData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error fetching external data:', error));
}

function fetchLocalData() {
    fetch("localdata.json")
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error fetching local data:', error));
}

function displayData(data) {
    const output = document.getElementById("output");
    let table = `<table class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>`;
    
    data.forEach(user => {
        table += `<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                  </tr>`;
    });
    
    table += `  </tbody>
                </table>`;
    
    output.innerHTML = table;
}

function postData(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    
    const data = {
        name: name,
        username: username,
        email: email
    };
    
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Data submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting data!');
    });
}
