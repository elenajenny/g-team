"use strict";
var Lightning;
(function (Lightning) {
    window.addEventListener("load", handleLoad);
    let statusarray = [];
    function handleLoad(_event) {
        console.log("Anwendung startet");
        // Kategorie auswählen
        let music = document.querySelector("#musicid");
        music.addEventListener("click", getCategory);
        let film = document.querySelector("#filmid");
        film.addEventListener("click", getCategory);
        let sport = document.querySelector("#sportid");
        sport.addEventListener("click", getCategory);
        let fitness = document.querySelector("#fitnessid");
        fitness.addEventListener("click", getCategory);
        //Streaming Dienst auswählen
        let spotify = document.querySelector("#spotifyid");
        spotify.addEventListener("click", getGenre);
        let deezer = document.querySelector("#deezerid");
        deezer.addEventListener("click", getGenre);
        let applemusic = document.querySelector("#applemusicid");
        applemusic.addEventListener("click", getGenre);
        let tidal = document.querySelector("#tidalid");
        tidal.addEventListener("click", getGenre);
        let amazonmusic = document.querySelector("#amazonmusicid");
        amazonmusic.addEventListener("click", getGenre);
        //Genre auswählen
        let jazz = document.querySelector("#jazzid");
        jazz.addEventListener("click", getStatus);
        let rnb = document.querySelector("#rnbid");
        rnb.addEventListener("click", getStatus);
        let klassik = document.querySelector("#klassikid");
        klassik.addEventListener("click", getStatus);
        let soul = document.querySelector("#soulid");
        soul.addEventListener("click", getStatus);
        let hiphop = document.querySelector("#hiphopid");
        hiphop.addEventListener("click", getStatus);
        // posten
        let postbutton = document.querySelector("#postbuttonid");
        postbutton.addEventListener("click", postStatus);
        // Blitz Bild
        let lightning = document.querySelector("#lightningid");
        lightning.addEventListener("click", startApp);
        // Navigation
        let house = document.querySelector("#houseid");
        house.addEventListener("click", NavigateToMenu);
        let housechat = document.querySelector("#getbackid");
        housechat.addEventListener("click", NavigateToMenu);
        let housestreaming = document.querySelector("#navihouseid");
        housestreaming.addEventListener("click", NavigateToMenu);
        let housegenre = document.querySelector("#genrehouseid");
        housegenre.addEventListener("click", NavigateToMenu);
        let housestatus = document.querySelector("#statushouseid");
        housestatus.addEventListener("click", NavigateToMenu);
        // let backarrow: HTMLElement = <HTMLElement>document.querySelector("#arrowid");
        // backarrow.addEventListener("click", NavigateBack);
        // Statusfeld
        let statusfield = document.querySelector("#statusfieldid");
        statusfield.addEventListener("click", startStatus);
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
    function NavigateToMenu(_event) {
        // Haus Menü
        console.log("navigieren erfolgreich");
        let menu = document.querySelector("#menuid");
        let chat = document.querySelector("#chatid");
        let category = document.querySelector("#categoryid");
        let streaming = document.querySelector("#streamingid");
        let genre = document.querySelector("#genreid");
        let status = document.querySelector("#statusid");
        if (menu.style.display == "none") {
            menu.style.display = "block";
        }
        else {
            menu.style.display = "block";
        }
        if (category.style.display == "block") {
            category.style.display = "none";
        }
        else {
            category.style.display = "none";
        }
        if (chat.style.display == "block") {
            chat.style.display = "none";
        }
        else {
            chat.style.display = "none";
        }
        if (streaming.style.display == "block") {
            streaming.style.display = "none";
        }
        else {
            streaming.style.display = "none";
        }
        if (genre.style.display == "block") {
            genre.style.display = "none";
        }
        else {
            genre.style.display = "none";
        }
        if (status.style.display == "block") {
            status.style.display = "none";
        }
        else {
            status.style.display = "none";
        }
    }
    function startStatus(_event) {
        console.log("funktioniert");
        let menu = document.querySelector("#menuid");
        let category = document.querySelector("#categoryid");
        let streaming = document.querySelector("#streamingid");
        let status = document.querySelector("#statusid");
        if (menu.style.display == "block") {
            menu.style.display = "none";
        }
        else {
            menu.style.display = "none";
        }
        if (category.style.display == "none") {
            category.style.display = "block";
        }
        else {
            category.style.display = "block";
        }
        if (streaming.style.display == "block") {
            streaming.style.display = "none";
        }
        else {
            streaming.style.display = "none";
        }
        if (status.style.display == "block") {
            status.style.display = "none";
        }
        else {
            status.style.display = "none";
        }
    }
    function getCategory(_event) {
        console.log("Es hat funktioniert jiha");
        let category = document.querySelector("#categoryid");
        let streaming = document.querySelector("#streamingid");
        // welche Kategorie wurde ausgewählt
        let value = (_event.target).getAttribute("value");
        console.log("Value:" + value);
        // kategorie in array pushen
        statusarray.push(value);
        if (category.style.display == "block") {
            category.style.display = "none";
        }
        else {
            category.style.display = "none";
        }
        if (streaming.style.display == "none") {
            streaming.style.display = "block";
        }
        else {
            streaming.style.display = "block";
        }
    }
    function getGenre(_event) {
        console.log("Es hat funktioniert jiha");
        let streaming = document.querySelector("#streamingid");
        let genre = document.querySelector("#genreid");
        // welche Kategorie wurde ausgewählt
        let value = (_event.target).getAttribute("value");
        console.log("Value:" + value);
        // kategorie in array pushen
        statusarray.push(value);
        if (streaming.style.display == "block") {
            streaming.style.display = "none";
        }
        else {
            streaming.style.display = "none";
        }
        if (genre.style.display == "none") {
            genre.style.display = "block";
        }
        else {
            genre.style.display = "block";
        }
    }
    function getStatus(_event) {
        let genre = document.querySelector("#genreid");
        let status = document.querySelector("#statusid");
        if (genre.style.display == "block") {
            genre.style.display = "none";
        }
        else {
            genre.style.display = "none";
        }
        if (status.style.display == "none") {
            status.style.display = "block";
        }
        else {
            status.style.display = "block";
        }
        // welche Kategorie wurde ausgewählt
        let value = (_event.target).getAttribute("value");
        console.log("Value:" + value);
        // kategorie in array pushen
        statusarray.push(value);
        // Zeit Anzeige
        var today = new Date();
        var date = today.getHours() + ":" + today.getMinutes() + " " + "Uhr";
        console.log(date);
        document.querySelector("#timeid").innerHTML = date;
        // for (let index: number = 0; index < statusarray.length; index++) {
        //     console.log("array:" + statusarray);
        // }
        console.log("array" + statusarray);
        if (statusarray.length < 4) {
            document.querySelector("#chosencategory1id").innerHTML = statusarray[0];
            document.querySelector("#chosencategory2id").innerHTML = statusarray[1];
            document.querySelector("#chosencategory3id").innerHTML = statusarray[2];
        }
        else {
            statusarray = [];
        }
    }
    function postStatus(_event) {
        let menu = document.querySelector("#menuid");
        let status = document.querySelector("#statusid");
        if (status.style.display == "block") {
            status.style.display = "none";
        }
        else {
            status.style.display = "none";
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