function toggleMenu() {
    const menuHamburguer = document.getElementById("menu-hamburguer");
    
    if (menuHamburguer.style.display === "block") {
        menuHamburguer.style.display = "none";
    } else {
        menuHamburguer.style.display = "block";
    }
}
