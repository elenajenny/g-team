namespace Lightning {
    window.addEventListener("load", handleLoad);

    
    function handleLoad (_event: Event) {
    console.log("Anwendung startet");

    // Blitz Bild
    let lightning: HTMLElement = <HTMLElement>document.querySelector("#lightningid");
    lightning.addEventListener("click", startApp);

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