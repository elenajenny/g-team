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

    // Navigation
    let house: HTMLElement = <HTMLElement>document.querySelector("#houseid");
    house.addEventListener("click", NavigateToMenu);
    let housechat: HTMLElement = <HTMLElement>document.querySelector("#getbackid");
    housechat.addEventListener("click", NavigateToMenu);
    let housestreaming: HTMLElement = <HTMLElement>document.querySelector("#navihouseid");
    housestreaming.addEventListener("click", NavigateToMenu);
    let housegenre: HTMLElement = <HTMLElement>document.querySelector("#genrehouseid");
    housegenre.addEventListener("click", NavigateToMenu);
    let housestatus: HTMLElement = <HTMLElement>document.querySelector("#statushouseid");
    housestatus.addEventListener("click", NavigateToMenu);
    let houseprofile: HTMLElement = <HTMLElement>document.querySelector("#profilehouseid");
    houseprofile.addEventListener("click", NavigateToMenu);

    // let backarrow: HTMLElement = <HTMLElement>document.querySelector("#arrowid");
    // backarrow.addEventListener("click", NavigateBack);
    
    // Statusfeld
    let statusfield: HTMLDivElement = <HTMLDivElement>document.querySelector("#statusfieldid");
    statusfield.addEventListener("click", startStatus);

    //Profil
    let profilefield: HTMLDivElement = <HTMLDivElement>document.querySelector("#profilefieldid");
    profilefield.addEventListener("click", startProfile);

    // Chat
    let chatfield: HTMLDivElement = <HTMLDivElement>document.querySelector("#chatfieldid");
    chatfield.addEventListener("click", startChat);
    }

    function startApp(_event: Event): void {
        console.log("funktioniert!");
        let start: HTMLElement = <HTMLElement>document.querySelector("#startid");
        let menu: HTMLElement = <HTMLElement>document.querySelector("#menuid");

        if (start.style.display == "block") {
            start.style.display = "none";
        } else {
            start.style.display = "none";
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
        } else {
            statusarray = [];
        }

    }

    function postStatus(_event: Event): void {
        let menu: HTMLElement = <HTMLElement>document.querySelector("#menuid");
        let status: HTMLElement = <HTMLElement>document.querySelector("#statusid");
    
        if (status.style.display == "block") {
            status.style.display = "none";
        } else {
            status.style.display = "none";
        }

        if (menu.style.display == "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "block";
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
}