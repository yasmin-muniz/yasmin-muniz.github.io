

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

    /////////////// Mostrar o primeiro certificado e curso ao carregar a página
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


//////////////// BOTAO EXPERIENCIAS E EDUCACAO

 


 document.addEventListener('DOMContentLoaded', function() {
    const btnEducacao = document.querySelector('.botao-educacional');
    const btnExperiencia = document.querySelector('.botao-experiencia');
    const conteudoEducacao = document.getElementById('conteudo-educacao');
    const conteudoExperiencia = document.getElementById('conteudo-experiencia');

    window.toggleEducacao = function() {
        // Se o conteúdo de educação está oculto, exibe e oculta o conteúdo de experiência
        if (conteudoEducacao.style.display === "none") {
            conteudoEducacao.style.display = "block";
            conteudoExperiencia.style.display = "none"; // Oculta o conteúdo de experiência
            setActiveButton(btnEducacao);
        } else {
            conteudoEducacao.style.display = "none"; // Oculta o conteúdo de educação se já estiver visível
            btnEducacao.classList.remove('active');
        }
    }

    window.toggleExperiencia = function() {
        // Se o conteúdo de experiência está oculto, exibe e oculta o conteúdo de educação
        if (conteudoExperiencia.style.display === "none") {
            conteudoExperiencia.style.display = "block";
            conteudoEducacao.style.display = "none"; // Oculta o conteúdo de educação
            setActiveButton(btnExperiencia);
        } else {
            conteudoExperiencia.style.display = "none"; // Oculta o conteúdo de experiência se já estiver visível
            btnExperiencia.classList.remove('active');
        }
    }

    function setActiveButton(activeButton) {
        // Remove a classe 'active' de ambos os botões
        btnEducacao.classList.remove('active');
        btnExperiencia.classList.remove('active');
        // Adiciona a classe 'active' ao botão clicado
        activeButton.classList.add('active');
    }
});



//////////////// PAGINA BOOTCAMP -- BOTAO VER DETALHES 
 

function openModal(title, description, link1, link2) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-button-1").onclick = function() {
        window.location.href = link1;
    };
    document.getElementById("modal-button-2").onclick = function() {
        window.location.href = link2;
    };
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}




