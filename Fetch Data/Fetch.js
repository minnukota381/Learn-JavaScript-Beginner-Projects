document.getElementById("fetchExternal").addEventListener("click", fetchExternalData);
document.getElementById("fetchLocal").addEventListener("click", fetchLocalData);

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
