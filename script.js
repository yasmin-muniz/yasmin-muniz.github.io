

//////////////////////////////////////// BOTÕES DE CERTIFICACOES E CURSO - NAVEGACAO
document.addEventListener("DOMContentLoaded", function() {
    const certificados = document.querySelectorAll('.certificado');
    const cursos = document.querySelectorAll('.curso');
    const certPrev = document.querySelector('.cert-prev');
    const certNext = document.querySelector('.cert-next');
    const cursoPrev = document.querySelector('.curso-prev');
    const cursoNext = document.querySelector('.curso-next');
    let certIndex = 0;
    let cursoIndex = 0;

    function showCert(index) {
        certificados.forEach((certificado, idx) => {
            if (idx === index) {
                certificado.style.display = 'block';
            } else {
                certificado.style.display = 'none';
            }
        });
    }

    function showCurso(index) {
        cursos.forEach((curso, idx) => {
            if (idx === index) {
                curso.style.display = 'block';
            } else {
                curso.style.display = 'none';
            }
        });
    }

    // Mostrar o primeiro certificado e curso ao carregar a página
    showCert(certIndex);
    showCurso(cursoIndex);

    certPrev.addEventListener('click', function() {
        certIndex = (certIndex === 0) ? certificados.length - 1 : certIndex - 1;
        showCert(certIndex);
    });

    certNext.addEventListener('click', function() {
        certIndex = (certIndex === certificados.length - 1) ? 0 : certIndex + 1;
        showCert(certIndex);
    });

    cursoPrev.addEventListener('click', function() {
        cursoIndex = (cursoIndex === 0) ? cursos.length - 1 : cursoIndex - 1;
        showCurso(cursoIndex);
    });

    cursoNext.addEventListener('click', function() {
        cursoIndex = (cursoIndex === cursos.length - 1) ? 0 : cursoIndex + 1;
        showCurso(cursoIndex);
    });
});

//////////////////////////  MENU FICAR OCULTO QUANDO UTILIZAR A BARRA DE ROLAGEM

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Desce a barra de rolagem, oculta o menu
        document.getElementById("navbar").classList.add("hidden");
    } else {
        // Sobe a barra de rolagem, mostra o menu
        document.getElementById("navbar").classList.remove("hidden");
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);


///////////// BOTAO EXPERIENCIAS E EDUCACAO
function toggleEducacao() {
    var conteudoEducacao = document.getElementById("conteudo-educacao");
    var conteudoExperiencia = document.getElementById("conteudo-experiencia");
    
    // Se o conteúdo de educação está oculto, exibe e oculta o conteúdo de experiência
    if (conteudoEducacao.style.display === "none") {
        conteudoEducacao.style.display = "block";
        conteudoExperiencia.style.display = "none"; // Oculta o conteúdo de experiência
    } else {
        conteudoEducacao.style.display = "none"; // Oculta o conteúdo de educação se já estiver visível
    }
}

function toggleExperiencia() {
    var conteudoExperiencia = document.getElementById("conteudo-experiencia");
    var conteudoEducacao = document.getElementById("conteudo-educacao");
    
    // Se o conteúdo de experiência está oculto, exibe e oculta o conteúdo de educação
    if (conteudoExperiencia.style.display === "none") {
        conteudoExperiencia.style.display = "block";
        conteudoEducacao.style.display = "none"; // Oculta o conteúdo de educação
    } else {
        conteudoExperiencia.style.display = "none"; // Oculta o conteúdo de experiência se já estiver visível
    }
}





