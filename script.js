let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    event.preventDefault();

    let firstNameInput = document.getElementById("first-name");
    let lastNameInput = document.getElementById("last-name");
    let messageTextarea = document.getElementById("message");
    let hiddenError = document.getElementById("error-message");

    if(firstNameInput.value === "", lastNameInput.value === "", messageTextarea.value === "") {
     
         return hiddenError.style.display = "block"; 
         
     } else {
      
    hiddenError.style.display = "none";        

    let commentList = document.getElementById("comment-list");

    let div1 = document.createElement("div");
    div1.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");

    let div2 = document.createElement("div");
    div2.classList.add("flex-1", "py-10");

    let h3 = document.createElement("h3");
    h3.classList.add("font-medium", "text-gray-900");
    let fullName = firstNameInput.value + " " + lastNameInput.value;
    h3.textContent = fullName;

    let div3 = document.createElement("div");
    div3.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");
    let p = document.createElement("p");
    p.textContent = messageTextarea.value;
    div3.appendChild(p);

    div2.appendChild(h3);
    div2.appendChild(div3);
    div1.appendChild(div2);

    commentList.appendChild(div1);

    firstNameInput.value = "";
    lastNameInput.value = "";
    messageTextarea.value = "";

        }

});