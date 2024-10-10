window.onscroll = function() {
    var skills = document.getElementById("avaliacao");
    var skillsPos = skills.getBoundingClientRect().top;
    if (skillsPos < window.innerHeight) {
        var barras = document.querySelectorAll(".progresso");
        barras.forEach(barra => {
            barra.style.width = barra.getAttribute("data-valor") + "%";
        });
    }
};