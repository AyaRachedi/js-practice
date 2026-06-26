let count = 0;
        let affichage = document.querySelector("#affichage");
        let btnplus = document.querySelector("#btnplus");
        let reset = document.querySelector("#btnreset");
        let btnmoins = document.querySelector("#btnmoins");


        btnplus.addEventListener("click", () => {
            count++;
            affichage.textContent = count;
        });

        btnmoins.addEventListener("click", () => {
            count--;
            affichage.textContent = count;
        });

        reset.addEventListener("click", () => {
            count = 0;
            affichage.innerHTML = count;
        });
