let icon = document.getElementById("icon");

icon.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains("dark")) {
        icon.src = "./Assets/sun.png";
    } else {
        icon.src = "./Assets/moon.png";
    }
});
