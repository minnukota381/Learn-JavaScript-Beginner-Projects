// function searchUser() {
//     let username = document.getElementById('usernameInput').value;
//     fetch(`https://api.github.com/users/${username}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('User not found');
//             }
//             return response.json();
//         })
//         .then(data => {
//             document.getElementById('userInfo').innerHTML = `
//                 <p>Username: ${data.login}</p>
//                 <p>Avatar: <img src="${data.avatar_url}" alt="Avatar"></p>
//                 <p>Bio: ${data.bio}</p>
//                 <p>Location: ${data.location}</p>
//                 <p>Name: ${data.name}</p>
//                 <p>Followers: ${data.followers}</p>
//                 <p>Public Repositories: ${data.public_repos}</p>
//             `;
//         })
//         .catch(error => {
//             document.getElementById('userInfo').textContent = error.message;
//         });
// }


async function searchUser() {
    let username = document.getElementById('usernameInput').value;
    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        let data = await response.json();
        document.getElementById('userInfo').innerHTML = `
            <p>Username: ${data.login}</p>
            <p>Avatar: <img src="${data.avatar_url}" alt="Avatar" style="width: 100px; height: 100px;"></p>
            <p>Bio: ${data.bio}</p>
            <p>Location: ${data.location}</p>
            <p>Name: ${data.name}</p>
            <p>Followers: ${data.followers}</p>
            <p>Public Repositories: ${data.public_repos}</p>
        `;
    } catch (error) {
        document.getElementById('userInfo').textContent = error.message;
    }
}
