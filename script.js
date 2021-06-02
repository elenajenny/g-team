"use strict";
var Lightning;
(function (Lightning) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Anwendung startet");
        let lightning = document.querySelector("#lightningid");
        lightning.addEventListener("click", startApp);
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
})(Lightning || (Lightning = {}));
//# sourceMappingURL=script.js.map