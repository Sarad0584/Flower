function filterItems(category){

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if(category === "all"){
            card.style.display = "block";
        }
        else if(card.classList.contains(category)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });
}
function sendMessage(){

    const input = document.getElementById("userInput");
    const messages = document.getElementById("messages");

    if(input.value.trim() === "") return;

    messages.innerHTML += `
        <div class="user-message">
            ${input.value}
        </div>
    `;

    let reply =
    "I recommend our signature rose bouquet 🌹";

    const text = input.value.toLowerCase();

    if(text.includes("birthday")){
        reply = "Birthday Joy Bouquet is a great choice 🎂";
    }

    if(text.includes("anniversary")){
        reply = "Blush Romance Bouquet is perfect ❤️";
    }

    if(text.includes("budget")){
        reply = "We have beautiful bouquets under $50 🌸";
    }

    setTimeout(()=>{
        messages.innerHTML += `
            <div class="bot-message">
                ${reply}
            </div>
        `;

        messages.scrollTop =
        messages.scrollHeight;

    },500);

    input.value = "";
}