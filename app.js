function popMenu() {
    var style = document.getElementById('style');
    console.log(style.href);
    if (style.href == "file:///home/yash/repos/Dashboard/style.css") {
        style.href = "menu.css";
        console.log("Switching to menu!");
    } else {
        style.href = 'style.css';
        console.log("Switching to dashboard!");
    }
}

let menu = document.getElementById("hamburgerMenu");
let closeMenu = document.getElementById("closePopup");
menu.addEventListener("click", popMenu);
closeMenu.addEventListener("click", popMenu);