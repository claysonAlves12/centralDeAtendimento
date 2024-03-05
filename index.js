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

function obterLocalizacao(destino) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(posicao) {
        mostrarLocalizacao(posicao, destino);
      });
    } else {
      alert("Geolocalização não é suportada neste navegador.");
    }
  }

  function mostrarLocalizacao(posicao, destino) {
    let latitude = posicao.coords.latitude;
    let longitude = posicao.coords.longitude;
    
    // Define as coordenadas das lojas
    const coordenadasLojas = {
      lojaMatriz: { latitude:-7.1904374624209035, longitude:-48.21272309404203 }, 
      lojaPalmasCentro: { latitude:-10.183068519555283, longitude:-48.325667030423055 }, 
      lojaTaquaraltoPalmas: { latitude:-10.330113865536656, longitude:-48.296974443559385 },
      lojaColinasDoTocantins: { latitude:-8.059600077772732, longitude:-48.47552546042143 },
      lojaGuarai: { latitude:-8.831138002591345, longitude:-48.512667474079684 },
      lojaGurupi: { latitude:-11.736329594351318, longitude:-49.07593032990577 },
      lojaAraguatins: { latitude:-5.65233849160522, longitude:-48.12605433689783 },
      lojaParaisoDoTocantins: { latitude:-10.17868386309622, longitude:-48.88191837526594 },
      lojaPortoNacional: { latitude: -10.703812937992577, longitude:-48.412764377730404 },
      lojaSaoGeraldoDoAaguaia: { latitude: -6.3966066137625, longitude:-48.55569742106515},
      lojaRedencao: { latitude:-8.030961097352547, longitude:-50.0298798786007},
      lojaXinguara: { latitude:-7.1071368733067315, longitude:-49.939456365692685},
      lojaLuisEduardoMagalhaes: { latitude:-12.089403746057195, longitude:-45.79588442367158},
      lojaBarreiras: { latitude:-12.148992016966648, longitude:-44.99652560589469},
      lojaBalsas: { latitude:-7.527639913659679, longitude:-46.042415934399294},
      lojaBacabal: { latitude:-4.234568834126292, longitude:-44.782286648245716},
      lojaSantaInes: { latitude:-3.6676205812389173, longitude:-45.37413074309012}
    };

    // Obtém as coordenadas do destino selecionado
    let destinoCoords = coordenadasLojas[destino];

    // Cria o link com as coordenadas do destino
    let link = "https://www.google.com/maps/dir/" + latitude + "," + longitude + "/" + destinoCoords.latitude + "," + destinoCoords.longitude;
    window.open(link, "_blank");

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.open("https://maps.google.com/?q=" + destinoCoords.latitude + "," + destinoCoords.longitude);
      } else {
        window.open(link, "_blank");
    }
  }
