"use strict";
var Lightning;
(function (Lightning) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Anwendung startet");
        // Blitz Bild
        let lightning = document.querySelector("#lightningid");
        lightning.addEventListener("click", startApp);
        // Chat
        let chatfield = document.querySelector("#chatfieldid");
        chatfield.addEventListener("click", startChat);
    }
    function startApp(_event) {
        console.log("funktioniert!");
        let start = document.querySelector("#startid");
        let menu = document.querySelector("#menuid");
        if (start.style.display == "block") {
            start.style.display = "none";
        }
        else {
            start.style.display = "none";
        }
        if (menu.style.display == "none") {
            menu.style.display = "block";
        }
        else {
            menu.style.display = "block";
        }
    }
    function startChat(_event) {
        console.log("funktioniert2!");
        let menu = document.querySelector("#menuid");
        let chat = document.querySelector("#chatid");
        if (menu.style.display == "block") {
            menu.style.display = "none";
        }
        else {
            menu.style.display = "none";
        }
        if (chat.style.display == "none") {
            chat.style.display = "block";
        }
        else {
            chat.style.display = "block";
        }
    }
})(Lightning || (Lightning = {}));
//# sourceMappingURL=script.js.map