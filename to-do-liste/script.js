 let input = document.querySelector("#input");
        let btn = document.querySelector("#btn");
        let liste = document.querySelector("#liste");

        btn.addEventListener("click", () => {
            if (input.value === "") return

            let li = document.createElement("li");
            li.className = "flex justify-between items-center bg-gray-100 text-sm p-2 mx-4  rounded-xl border border-gray-200 "
            li.textContent = input.value;

            let btnsupp = document.createElement("button");
            btnsupp.textContent = "✕";
            btnsupp.className = "text-red-400 hover:text-red-600 font-bold "
            btnsupp.addEventListener("click", () => {
                li.remove();
            });

            li.appendChild(btnsupp);
            liste.appendChild(li);
            input.value = "";


        });
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") btn.click();
        });
