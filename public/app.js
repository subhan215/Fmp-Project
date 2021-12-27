var MenuItems = document.getElementById("MenuItems");
var togglerImg = document.getElementById("togglerimg");

MenuItems.style.maxHeight = "0px";
function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
        togglerImg.src = "Images/cross.png"
    }
    else {
        MenuItems.style.maxHeight = "0px";
        togglerImg.src = "Images/menu.png"
    }
}



