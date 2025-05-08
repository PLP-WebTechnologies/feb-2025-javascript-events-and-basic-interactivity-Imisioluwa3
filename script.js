const btn = document.getElementById("btnColor");
const text = document.querySelectorAll('p');

btn.addEventListener('click', function() {
    text.forEach(p => {
        if (p.style.color === 'purple') {
            p.style.color = "#333";
        } else {
            p.style.color = "purple";
        }
    });
});


// Form Custom Validation
const form = document.getElementById("form");
const uName = document.getElementById("name");
const passWord = document.getElementById("password");
const modal = document.getElementById("modal");
const closeM = document.getElementById("closeModal");   

form.onsubmit = function (e) {
    e.preventDefault();
    // Password validation
    if (passWord.value.length < 8) {
        passWord.setCustomValidity("Password must be at least 8 characters long.");
        passWord.reportValidity();
        return;
    } else {
        passWord.setCustomValidity("");
    }

    // Display Welcome Message
    const welcome = document.getElementById("user");
    if (welcome){
        welcome.textContent = "Welcome" + " " + uName.value;
        welcome.style.fontSize = "2rem";
        welcome.style.color = "red";
        console.log("Welcome message:",  welcome.textContent);
    }

    modal.style.display = "flex";
};

closeM.onclick = function() {
    modal.style.display = "none";
};
