document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll(".link");
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            let targetId = this.getAttribute("data-target");
            let targetElement = document.getElementById(targetId);
            let contents = document.querySelectorAll(".conteudo");
            contents.forEach(function(content) {
                if (content !== targetElement) {
                    content.classList.remove("ativo");
                }
            });
            targetElement.classList.toggle("ativo");
            let activeLink = document.querySelector(".link.active");
            if (activeLink) {
                activeLink.classList.remove("active");
            }
            this.classList.add("active");
        });
    });

    let perguntas = document.querySelectorAll('.pergunta');
    perguntas.forEach(function(pergunta) {
        pergunta.addEventListener('click', function() {
            let estaAtiva = pergunta.classList.contains('active');

            perguntas.forEach(function(outraPergunta) {
                outraPergunta.classList.remove('active');
            });

            if (!estaAtiva) {
                pergunta.classList.add('active');
                pergunta.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll('.link');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            let targetId = this.getAttribute('data-target'); 
            
            let targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
