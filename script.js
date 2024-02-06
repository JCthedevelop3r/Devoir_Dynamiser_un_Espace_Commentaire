const btn = document.querySelector("button");

btn.addEventListener("click", showError);
        
    function showError() {
        event.preventDefault();

        const firstNameInput = document.getElementById("first-name");
        const lastNameInput = document.getElementById("last-name");
        const messageTextarea = document.getElementById("message");
        const hiddenError = document.getElementById("error-message");

        //Les expressions présentes dans les paramètres de la condition suivante permettent de tester
        //les cas où un ou plusieurs champs du formulaire seraient vides.

        if (firstNameInput.value === "" && lastNameInput.value === "" && messageTextarea.value === "" || 
        firstNameInput.value === "" || lastNameInput.value === "" || messageTextarea.value === "" ||
        firstNameInput.value === "" && lastNameInput.value === ""|| firstNameInput.value === "" &&
        messageTextarea.value === "" || lastNameInput.value === "" && messageTextarea.value === "") {

            return hiddenError.style.display = "block";

        } else {

        hiddenError.style.display = "none";

        }
    }

btn.addEventListener("click", newComment);

function newComment() {

    const commentList = document.getElementById("comment-list");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const messageTextarea = document.getElementById("message");

    //Dans le "if" qui suit, je demande de ne pas exécuter la fonction si un ou plusieurs champs son vides.

    if (firstNameInput.value === "" && lastNameInput.value === "" && messageTextarea.value === "" || 
        firstNameInput.value === "" || lastNameInput.value === "" || messageTextarea.value === "" ||
        firstNameInput.value === "" && lastNameInput.value === ""|| firstNameInput.value === "" &&
        messageTextarea.value === "" || lastNameInput.value === "" && messageTextarea.value === "") {

            return newComment == false;

        } else {

        //Je re-crée un commentaire en copiant le modèle présent dans le DOM.

        //Je commence par créer chaque balise.

        const styleComment1 = document.createElement("div");
        styleComment1.className = "flex space-x-4 text-sm text-gray-500";
    
        const styleComment2 = document.createElement("div");
        styleComment2.className = "flex-1 py-10";

        let userFullName = document.createElement("h3");
        userFullName.className = "font-medium text-gray-900";
        userFullName.innerHTML = firstNameInput.value + " " + lastNameInput.value;

        const styleComment3 = document.createElement("div");
        styleComment3.className = "prose prose-sm mt-4 max-w-none text-gray-500";

        let comment = document.createElement("p");
        comment.innerHTML = messageTextarea.value;

         //Je les dispose selon le modèle du DOM en configurant la descendance.

        styleComment1.appendChild(styleComment2);
        styleComment2.appendChild(userFullName);
        styleComment2.appendChild(styleComment3);
        styleComment3.appendChild(comment);

        //J'insère le nouveau commentaire dans la liste de commentaire
        
        commentList.appendChild(styleComment1);

        firstNameInput.value = "";
        lastNameInput.value = "";
        messageTextarea.value = "";

    }
}
