function ChangeText() {
    let x = document.getElementById("text");
    if (x.textContent === "Welcome") {
        x.textContent = "How are you today?";
    } else {
        x.textContent = "Welcome";
    }
}