function popMenu() {
    var style = document.getElementById('style');
    if (style.href == "file:///home/yash/repos/Dashboard/style.css") {
        style.href = "menu.css";
    } else {
        style.href = 'style.css';
    }
}

let menu = document.getElementById("hamburgerMenu");
let closeMenu = document.getElementById("closePopup");
menu.addEventListener("click", popMenu);
closeMenu.addEventListener("click", popMenu);