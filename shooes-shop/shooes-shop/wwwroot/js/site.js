window.toggleNavbar = () => {
    let nav = document.getElementById("navbarNav");
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
    } else {
        nav.classList.add("show");
    }
};

window.toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
};