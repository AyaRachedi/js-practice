let btn = document.querySelector("#btn");
        let liste = document.querySelector("#liste");

        btn.addEventListener("click", async () => {
            try {
                let response = await fetch("https://jsonplaceholder.typicode.com/posts");
                let posts = await response.json();
                posts.slice(0, 5).forEach((post) => {
                    let titre = document.createElement("p");
                    let body = document.createElement("p");
                    let card = document.createElement("div");
                    card.className = "border border-gray-100 shadow-xl rounded-xl bg-white ";

                    titre.textContent = post.title;
                    body.textContent = post.body;
                    // p.textContent=post.body;
                    titre.className = "font-bold text-gray-800   text-lg  px-6 py-4 ";
                    body.className = " text-gray-400  text-sm  px-6 pb-4  ";
                    card.appendChild(titre);
                    card.appendChild(body);
                    liste.appendChild(card);
                });

            }
            catch (error) {
                liste.textContent = "erreur";
            }
        }
        );
