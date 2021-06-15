namespace Lightning {
    window.addEventListener("load", handleLoad);

    let statusarray: string[] = [];
    function handleLoad(_event: Event): void {
    console.log("Anwendung startet");

    // Kategorie auswählen
    let music: HTMLDivElement = <HTMLDivElement>document.querySelector("#musicid");
    music.addEventListener("click", getCategory);
    let film: HTMLDivElement = <HTMLDivElement>document.querySelector("#filmid");
    film.addEventListener("click", getCategory);
    let sport: HTMLDivElement = <HTMLDivElement>document.querySelector("#sportid");
    sport.addEventListener("click", getCategory);
    let fitness: HTMLDivElement = <HTMLDivElement>document.querySelector("#fitnessid");
    fitness.addEventListener("click", getCategory);

    //Streaming Dienst auswählen
    let spotify: HTMLDivElement = <HTMLDivElement>document.querySelector("#spotifyid");
    spotify.addEventListener("click", getGenre);
    let deezer: HTMLDivElement = <HTMLDivElement>document.querySelector("#deezerid");
    deezer.addEventListener("click", getGenre);
    let applemusic: HTMLDivElement = <HTMLDivElement>document.querySelector("#applemusicid");
    applemusic.addEventListener("click", getGenre);
    let tidal: HTMLDivElement = <HTMLDivElement>document.querySelector("#tidalid");
    tidal.addEventListener("click", getGenre);
    let amazonmusic: HTMLDivElement = <HTMLDivElement>document.querySelector("#amazonmusicid");
    amazonmusic.addEventListener("click", getGenre);

    //Genre auswählen
    let jazz: HTMLDivElement = <HTMLDivElement>document.querySelector("#jazzid");
    jazz.addEventListener("click", getStatus);
    let rnb: HTMLDivElement = <HTMLDivElement>document.querySelector("#rnbid");
    rnb.addEventListener("click", getStatus);
    let klassik: HTMLDivElement = <HTMLDivElement>document.querySelector("#klassikid");
    klassik.addEventListener("click", getStatus);
    let soul: HTMLDivElement = <HTMLDivElement>document.querySelector("#soulid");
    soul.addEventListener("click", getStatus);
    let hiphop: HTMLDivElement = <HTMLDivElement>document.querySelector("#hiphopid");
    hiphop.addEventListener("click", getStatus);
        
    // posten
    let postbutton: HTMLElement = <HTMLElement>document.querySelector("#postbuttonid");
    postbutton.addEventListener("click", postStatus);

    // Blitz Bild
    let lightning: HTMLElement = <HTMLElement>document.querySelector("#lightningid");
    lightning.addEventListener("click", startApp);

    // Login
    let login: HTMLElement = <HTMLElement>document.querySelector("#gettoMenu");
    login.addEventListener("click", logIn);

    // Navigation
    let menu: HTMLElement = <HTMLElement>document.querySelector("#houseid");
    menu.addEventListener("click", NavigateToMenu);
    let chatmenu: HTMLElement = <HTMLElement>document.querySelector("#getbackid");
    chatmenu.addEventListener("click", NavigateToMenu);
    let streamingmenu: HTMLElement = <HTMLElement>document.querySelector("#navihouseid");
    streamingmenu.addEventListener("click", NavigateToMenu);
    let genremenu: HTMLElement = <HTMLElement>document.querySelector("#genrehouseid");
    genremenu.addEventListener("click", NavigateToMenu);
    let statusmenu: HTMLElement = <HTMLElement>document.querySelector("#statushouseid");
    statusmenu.addEventListener("click", NavigateToMenu);
    let profilemenu: HTMLElement = <HTMLElement>document.querySelector("#profilehouseid");
    profilemenu.addEventListener("click", NavigateToMenu);
    let feedmenu: HTMLElement = <HTMLElement>document.querySelector("#feedid");
    feedmenu.addEventListener("click", NavigateToMenu);
    
    // Statusfeld
    let statusfield: HTMLDivElement = <HTMLDivElement>document.querySelector("#statusfieldid");
    statusfield.addEventListener("click", startStatus);

    //Profil
    let profilefield: HTMLDivElement = <HTMLDivElement>document.querySelector("#profilefieldid");
    profilefield.addEventListener("click", startProfile);
    
    // ausloggen
    let logout: HTMLElement = <HTMLElement>document.querySelector("#logoutid");
    logout.addEventListener("click", goLogout);

    //Benachrichtigungen anschauen
    let notifications: HTMLElement = <HTMLElement>document.querySelector("#notificationtextid");
    notifications.addEventListener("click", seeNotifications);

    //Profileinstellungen anschauen
    let profilesettings: HTMLElement = <HTMLElement>document.querySelector("#profiletextid");
    profilesettings.addEventListener("click", seeProfile);

    //Feed
    let feedfield: HTMLDivElement = <HTMLDivElement>document.querySelector("#feedfieldid");
    feedfield.addEventListener("click", startFeed);

    // Chat
    let chatfield: HTMLDivElement = <HTMLDivElement>document.querySelector("#chatfieldid");
    chatfield.addEventListener("click", startChat);

    // Submit Funktion
    let sendbutton: HTMLElement = <HTMLElement>document.querySelector("#send");
    sendbutton.addEventListener("click", submitMessage);

    }

    function startApp(_event: Event): void {
        console.log("funktioniert!");
        let start: HTMLElement = <HTMLElement>document.querySelector("#startid");
        let login: HTMLElement = <HTMLElement>document.querySelector("#loginid");
        

        if (start.style.display == "block") {
            start.style.display = "none";
        } else {
            start.style.display = "none";
        }

        if (login.style.display == "none") {
            login.style.display = "block";
        } else {
            login.style.display = "block";
        }
    }

    function logIn(_event: Event): void {
        console.log("login");
        let menu: HTMLElement = <HTMLElement>document.querySelector("#menuid");
        let login: HTMLElement = <HTMLElement>document.querySelector("#loginid");

        if (login.style.display == "block") {
            login.style.display = "none";
        } else {
            login.style.display = "none";
        }

        if (menu.style.display == "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "block";
        }
    }


    function NavigateToMenu(_event: Event): void {

        // Haus Menü
        console.log("navigieren erfolgreich");
        let menu: HTMLElement = <HTMLElement>document.querySelector("#menuid");
        let chat: HTMLElement = <HTMLElement>document.querySelector("#chatid");
        let category: HTMLElement = <HTMLElement>document.querySelector("#categoryid");
        let streaming: HTMLElement = <HTMLElement>document.querySelector("#streamingid");
        let genre: HTMLElement = <HTMLElement>document.querySelector("#genreid");
        let status: HTMLElement = <HTMLElement>document.querySelector("#statusid");
        let profile: HTMLElement = <HTMLElement>document.querySelector("#profileid");
        let feed: HTMLElement = <HTMLElement>document.querySelector("#feedid");

        if (menu.style.display == "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "block";
        }

        if (category.style.display == "block") {
            category.style.display = "none";
        } else {
            category.style.display = "none";
        }

        if (chat.style.display == "block") {
            chat.style.display = "none";
        } else {
            chat.style.display = "none";
        }

        if (streaming.style.display == "block") {
            streaming.style.display = "none";
        } else {
            streaming.style.display = "none";
        }

        if (genre.style.display == "block") {
            genre.style.display = "none";
        } else {
            genre.style.display = "none";
        }

        if (status.style.display == "block") {
            status.style.display = "none";
        } else {
            status.style.display = "none";
        }

        if (profile.style.display == "block") {
            profile.style.display = "none";
        } else {
            profile.style.display = "none";
        }

        if (feed.style.display == "block") {
            feed.style.display = "none";
        } else {
            feed.style.display = "none";
        }
    }

    function startStatus(_event: Event): void {
        console.log("funktioniert");
        let menu: HTMLElement = <HTMLElement>document.querySelector("#menuid");
        let category: HTMLElement = <HTMLElement>document.querySelector("#categoryid");
        let streaming: HTMLElement = <HTMLElement>document.querySelector("#streamingid");
        let status: HTMLElement = <HTMLElement>document.querySelector("#statusid");
    
        if (menu.style.display == "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "none";
        }

        if (category.style.display == "none") {
            category.style.display = "block";
        } else {
            category.style.display = "block";
        }

        if (streaming.style.display == "block") {
            streaming.style.display = "none";
        } else {
            streaming.style.display = "none";
        }

        if (status.style.display == "block") {
            status.style.display = "none";
        } else {
            status.style.display = "none";
        }
    }

    function getCategory(_event: any): void {
        console.log("Es hat funktioniert jiha");
        let category: HTMLElement = <HTMLElement>document.querySelector("#categoryid");
        let streaming: HTMLElement = <HTMLElement>document.querySelector("#streamingid");

        // welche Kategorie wurde ausgewählt
        let value = (_event.target).getAttribute("value");
        console.log("Value:" + value);
        
        // kategorie in array pushen
        statusarray.push(value);

        if (category.style.display == "block") {
            category.style.display = "none";
        } else {
            category.style.display = "none";
        }

        if (streaming.style.display == "none") {
            streaming.style.display = "block";
        } else {
            streaming.style.display = "block";
        } 
    }

    function getGenre(_event: any): void {
        console.log("Es hat funktioniert jiha");
        let streaming: HTMLElement = <HTMLElement>document.querySelector("#streamingid");
        let genre: HTMLElement = <HTMLElement>document.querySelector("#genreid");

        // welche Kategorie wurde ausgewählt
        let value = (_event.target).getAttribute("value");
        console.log("Value:" + value);
        
        // kategorie in array pushen
        statusarray.push(value);

        if (streaming.style.display == "block") {
            streaming.style.display = "none";
        } else {
            streaming.style.display = "none";
        }

        if (genre.style.display == "none") {
            genre.style.display = "block";
        } else {
            genre.style.display = "block";
        }
    }

    function getStatus(_event: any): void {
        let genre: HTMLElement = <HTMLElement>document.querySelector("#genreid");
        let status: HTMLElement = <HTMLElement>document.querySelector("#statusid");

        if (genre.style.display == "block") {
            genre.style.display = "none";
        } else {
            genre.style.display = "none";
        }

        if (status.style.display == "none") {
            status.style.display = "block";
        } else {
            status.style.display = "block";
        }

        // welche Kategorie wurde ausgewählt
        let value = (_event.target).getAttribute("value");
        console.log("Value:" + value);
        
        // kategorie in array pushen
        statusarray.push(value);

        // Zeit Anzeige
        var today: Date = new Date();
        var date: string = today.getHours() + ":" + today.getMinutes() + " " + "Uhr";
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
        } else {
            statusarray = [];
        }

    }

    function postStatus(_event: Event): void {
        let feed: HTMLElement = <HTMLElement>document.querySelector("#feedid");
        let status: HTMLElement = <HTMLElement>document.querySelector("#statusid");
    
        if (status.style.display == "block") {
            status.style.display = "none";
        } else {
            status.style.display = "none";
        }

        if (feed.style.display == "none") {
            feed.style.display = "block";
        } else {
            feed.style.display = "block";
        }
        // startFeed(_event);

        if (statusarray[0] == "Musik") {
            console.log("heyyyy");
            var statusdiv: HTMLDivElement = document.createElement("div");
            statusdiv.style.backgroundColor = "#ffc09f"; 
            statusdiv.style.position = "absolute";   
            statusdiv.style.top = "61%";   
            statusdiv.style.left = "10%";
            statusdiv.style.width = "37%";
            statusdiv.style.height = "17%";
            statusdiv.style.borderRadius = "10px";
            statusdiv.style.boxShadow = "5px 5px 5px #b6b6b6";
            statusdiv.id = "newstatus";
            document.querySelector("#feedid")?.appendChild(statusdiv);  
            var username: HTMLElement = document.createElement("p");
            username.innerHTML = "@sarah";
            username.style.textAlign = "center";
            username.style.position = "relative";
            username.style.top = "0%";
            username.style.fontSize = "large";
            username.id = "username";
            document.querySelector("#newstatus")?.appendChild(username);   
            var activity: HTMLElement = document.createElement("p");
            activity.innerHTML = statusarray[2] + " " + "auf" + " " + statusarray[1];
            activity.style.textAlign = "center";
            activity.style.position = "relative";
            activity.style.top = "2%";
            activity.style.fontSize = "medium";
            document.querySelector("#username")?.appendChild(activity);  
        } 
    }

    function startChat(_event: Event): void {
        console.log("funktioniert2!");
               
        let menu: HTMLElement = <HTMLElement>document.querySelector("#menuid");
        let chat: HTMLElement = <HTMLElement>document.querySelector("#chatid");
    
        if (menu.style.display == "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "none";
        }

        if (chat.style.display == "none") {
            chat.style.display = "block";
        } else {
            chat.style.display = "block";
        }
    }

    function submitMessage(_event: any): void {
        console.log("wird aufgerufen");
        let message: HTMLInputElement = <HTMLInputElement>document.querySelector("#input");
        let username: HTMLInputElement = <HTMLInputElement>document.querySelector("#username");
        console.log("message:" + message.value);
        console.log("username:" + username.value);
        let jsonmessage: string = "{ Channel: 1, Username: \"" + username.value + "\", Message: \"" + message.value + "\"}";
        console.log("jsonmessage:" + jsonmessage);
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:3000/chat", false);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify({ Channel: 1, Username: "Oskar", Message: "hallo"}));
    }

    function startProfile(_event: Event): void {
        console.log("profilansicht");
        let profile: HTMLElement = <HTMLElement>document.querySelector("#profileid");
        let menu: HTMLElement = <HTMLElement>document.querySelector("#menuid");

        if (menu.style.display == "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "none";
        }

        if (profile.style.display == "none") {
            profile.style.display = "block";
        } else {
            profile.style.display = "block";
        }
    }

    function goLogout(_event: Event): void {
        let profile: HTMLElement = <HTMLElement>document.querySelector("#profileid");
        let start: HTMLElement = <HTMLElement>document.querySelector("#startid");

        if (profile.style.display == "block") {
            profile.style.display = "none";
        } else {
            profile.style.display = "none";
        }

        if (start.style.display == "none") {
            start.style.display = "block";
        } else {
            start.style.display = "block";
        }
    }

    function seeNotifications(_event: Event): void {
        let leftside: HTMLElement = <HTMLElement>document.querySelector("#leftsideid");
        let rightside: HTMLElement = <HTMLElement>document.querySelector("#rightsideid");

        if (leftside.style.display == "block") {
            leftside.style.display = "none";
        } else {
            leftside.style.display = "none";
        }

        if (rightside.style.display == "none") {
            rightside.style.display = "block";
        } else {
            rightside.style.display = "block";
        }
    }

    function seeProfile(_event: Event): void {
        let leftside: HTMLElement = <HTMLElement>document.querySelector("#leftsideid");
        let rightside: HTMLElement = <HTMLElement>document.querySelector("#rightsideid");

        if (rightside.style.display == "block") {
            rightside.style.display = "none";
        } else {
            rightside.style.display = "none";
        }

        if (leftside.style.display == "none") {
            leftside.style.display = "block";
        } else {
            leftside.style.display = "block";
        }
    }

    function startFeed(_event: Event): void {
        console.log("profilansicht");
        let feed: HTMLElement = <HTMLElement>document.querySelector("#feedid");
        let menu: HTMLElement = <HTMLElement>document.querySelector("#menuid");

        if (menu.style.display == "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "none";
        }

        if (feed.style.display == "none") {
            feed.style.display = "block";
        } else {
            feed.style.display = "block";
        }
    }
}