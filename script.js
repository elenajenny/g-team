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
        let menu = document.querySelector("#houseid");
        menu.addEventListener("click", NavigateToMenu);
        let chatmenu = document.querySelector("#getbackid");
        chatmenu.addEventListener("click", NavigateToMenu);
        let streamingmenu = document.querySelector("#navihouseid");
        streamingmenu.addEventListener("click", NavigateToMenu);
        let genremenu = document.querySelector("#genrehouseid");
        genremenu.addEventListener("click", NavigateToMenu);
        let statusmenu = document.querySelector("#statushouseid");
        statusmenu.addEventListener("click", NavigateToMenu);
        let profilemenu = document.querySelector("#profilehouseid");
        profilemenu.addEventListener("click", NavigateToMenu);
        let feedmenu = document.querySelector("#feedid");
        feedmenu.addEventListener("click", NavigateToMenu);
        // Statusfeld
        let statusfield = document.querySelector("#statusfieldid");
        statusfield.addEventListener("click", startStatus);
        //Profil
        let profilefield = document.querySelector("#profilefieldid");
        profilefield.addEventListener("click", startProfile);
        // ausloggen
        let logout = document.querySelector("#logoutid");
        logout.addEventListener("click", goLogout);
        //Benachrichtigungen anschauen
        let notifications = document.querySelector("#notificationtextid");
        notifications.addEventListener("click", seeNotifications);
        //Profileinstellungen anschauen
        let profilesettings = document.querySelector("#profiletextid");
        profilesettings.addEventListener("click", seeProfile);
        //Feed
        let feedfield = document.querySelector("#feedfieldid");
        feedfield.addEventListener("click", startFeed);
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
        let profile = document.querySelector("#profileid");
        let feed = document.querySelector("#feedid");
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
        if (profile.style.display == "block") {
            profile.style.display = "none";
        }
        else {
            profile.style.display = "none";
        }
        if (feed.style.display == "block") {
            feed.style.display = "none";
        }
        else {
            feed.style.display = "none";
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
    function startProfile(_event) {
        console.log("profilansicht");
        let profile = document.querySelector("#profileid");
        let menu = document.querySelector("#menuid");
        if (menu.style.display == "block") {
            menu.style.display = "none";
        }
        else {
            menu.style.display = "none";
        }
        if (profile.style.display == "none") {
            profile.style.display = "block";
        }
        else {
            profile.style.display = "block";
        }
    }
    function goLogout(_event) {
        let profile = document.querySelector("#profileid");
        let start = document.querySelector("#startid");
        if (profile.style.display == "block") {
            profile.style.display = "none";
        }
        else {
            profile.style.display = "none";
        }
        if (start.style.display == "none") {
            start.style.display = "block";
        }
        else {
            start.style.display = "block";
        }
    }
    function seeNotifications(_event) {
        let leftside = document.querySelector("#leftsideid");
        let rightside = document.querySelector("#rightsideid");
        if (leftside.style.display == "block") {
            leftside.style.display = "none";
        }
        else {
            leftside.style.display = "none";
        }
        if (rightside.style.display == "none") {
            rightside.style.display = "block";
        }
        else {
            rightside.style.display = "block";
        }
    }
    function seeProfile(_event) {
        let leftside = document.querySelector("#leftsideid");
        let rightside = document.querySelector("#rightsideid");
        if (rightside.style.display == "block") {
            rightside.style.display = "none";
        }
        else {
            rightside.style.display = "none";
        }
        if (leftside.style.display == "none") {
            leftside.style.display = "block";
        }
        else {
            leftside.style.display = "block";
        }
    }
    function startFeed(_event) {
        console.log("profilansicht");
        let feed = document.querySelector("#feedid");
        let menu = document.querySelector("#menuid");
        if (menu.style.display == "block") {
            menu.style.display = "none";
        }
        else {
            menu.style.display = "none";
        }
        if (feed.style.display == "none") {
            feed.style.display = "block";
        }
        else {
            feed.style.display = "block";
        }
    }
})(Lightning || (Lightning = {}));
//# sourceMappingURL=script.js.map