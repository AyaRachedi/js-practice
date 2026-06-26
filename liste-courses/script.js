 let input = document.querySelector("#input");
        let btna = document.querySelector("#btna");
        let ul = document.querySelector("#liste");

        btna.addEventListener("click", () => {
            if (input.value === "") return
            let li = document.createElement("li");
            li.className = "text-sm rounded-xl border w-full px-4 flex justify-between itmes-center  py-3";
            li.textContent = input.value;

            let btns = document.createElement("button");
            btns.className = "text-sm text-gray-400 "
            btns.textContent = "✕";
            btns.addEventListener("click", () => {
                li.remove();
            });

            li.appendChild(btns);
            ul.appendChild(li);
            input.value = "";


        });

        // input.addEventListener("keydown", (e) => {
        //     if (e.Key === "Enter") btna.click();
        // });

         input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") btna.click();
        });

