namespace Lightning {
    window.addEventListener("load", handleLoad);

    
    function handleLoad (_event: Event) {
    console.log("Anwendung startet");
    let lightning: HTMLElement = <HTMLElement>document.querySelector("#lightningid");
    lightning.addEventListener("click", startApp);
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
}