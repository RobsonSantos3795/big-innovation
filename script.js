var logina = document.getElementById("logina");
var menu = document.getElementById("menu");

logina.addEventListener("click", function() {
    menu.classList.toggle("visible");
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
})

function suspender() {
    let suspenso = document.getElementById("suspenso");
    let suspiro = suspenso.value;
    if (suspiro) {
        window.location.href = suspiro;
    } else {
        alert("Insira um valor válido!");
    }
}

function valtar() {
    let voltar = "index.html";

    if (voltar) {
        alert("Redirecionamento para página principal");
        window.location.href = "index.html";
    } else {
        alert("Algo deu errado! Tente novamente mais tarde.");
    }
}
