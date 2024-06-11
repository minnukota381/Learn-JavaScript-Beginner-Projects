// Function to save the username to localStorage
function saveName() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value;

    // Save the username in localStorage
    localStorage.setItem('username', username);
    alert('Name saved successfully!');
}

// Function to load the username from localStorage

function loadName() {
    // Retrieve the username from localStorage
    const savedName = localStorage.getItem('username');

    if (savedName) {
        // Display the retrieved name in a greeting
        const greetingElement = document.getElementById('greeting');
        greetingElement.textContent = 'Welcome back, ' + savedName + '!';
    } else {
        alert('No name found in localStorage.');
    }
}
