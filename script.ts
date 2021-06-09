namespace Lightning {
    window.addEventListener("load", handleLoad);

    let selectedcolor: string = "#ff0000";

    function handleLoad(_event: Event): void {
    console.log("Anwendung startet");

    // Farbe der Kategorie
    let music: HTMLDivElement = <HTMLDivElement>document.querySelector("#musicid");
    music.addEventListener("click", setColor);
    let film: HTMLDivElement = <HTMLDivElement>document.querySelector("#filmid");
    film.addEventListener("click", setColor);
    let sport: HTMLDivElement = <HTMLDivElement>document.querySelector("#sportid");
    sport.addEventListener("click", setColor);
    let fitness: HTMLDivElement = <HTMLDivElement>document.querySelector("#fitnessid");
    fitness.addEventListener("click", setColor);

    // Blitz Bild
    let lightning: HTMLElement = <HTMLElement>document.querySelector("#lightningid");
    lightning.addEventListener("click", startApp);

    // Navigation
    let house: HTMLElement = <HTMLElement>document.querySelector("#houseid");
    house.addEventListener("click", NavigateToMenu);

    // let backarrow: HTMLElement = <HTMLElement>document.querySelector("#arrowid");
    // backarrow.addEventListener("click", NavigateBack);
    
    // Status
    let statusfield: HTMLDivElement = <HTMLDivElement>document.querySelector("#statusid");
    statusfield.addEventListener("click", startStatus);

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
        let status: HTMLElement = <HTMLElement>document.querySelector("#categoryid");

        if (menu.style.display == "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "block";
        }

        if (status.style.display == "block") {
            status.style.display = "none";
        } else {
            status.style.display = "none";
        }

        if (chat.style.display == "block") {
            chat.style.display = "none";
        } else {
            chat.style.display = "none";
        }

    }

    // function NavigateBack(_event: Event): void {
    //     // Zurück Menü
    //     console.log("pfeil");
    //     // window.history.back();
    //     window.history.go(-1);
    // }

    function startStatus(_event: Event): void {
        console.log("funktioniert");
        let menu: HTMLElement = <HTMLElement>document.querySelector("#menuid");
        let status: HTMLElement = <HTMLElement>document.querySelector("#categoryid");
    
        if (menu.style.display == "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "none";
        }

        if (status.style.display == "none") {
            status.style.display = "block";
        } else {
            status.style.display = "block";
        }
    }

    function setColor(_event: Event): void {
        console.log("Es hat funktioniert jiha");
        let music: HTMLDivElement = <HTMLDivElement>document.querySelector("#musicid");
        let value = music.getAttribute("value");
        console.log("value:" + value);
 
        
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
}