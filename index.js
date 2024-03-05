var perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach(function(pergunta) {
    pergunta.addEventListener('click', function() {
        pergunta.classList.toggle('active');
    });

    /*  pergunta.addEventListener('mouseenter', function() {
        pergunta.style.backgroundColor = 'rgba(145, 143, 143, 0.096)';
        pergunta.style.padding ="10px"
        pergunta.style.borderRadius = "20px";
    });

    pergunta.addEventListener('mouseleave', function() {
        pergunta.style.backgroundColor = 'white';
        pergunta.style.padding ="0px"
        pergunta.style.borderRadius = "0px";
    });  */
});
