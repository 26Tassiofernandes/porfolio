// Script do efeito de máquina de escrever

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 150 * i)

  });
}

const titulo = document.querySelector('.descricao-profissao');
typeWrite(titulo);

// Inicialize o AOS em seu script JavaScript (usado para exibir animações de carregamento no site):

AOS.init();


// MANIPULANDO O NAVBAR

  document.addEventListener("DOMContentLoaded", function () {

    // Obtém o botão de navegação (hamburguer)

    var navbarToggler = document.getElementById("botao-navbar");

    // Verifica se o botão de navegação (hamburguer) existe e está visível

    if (navbarToggler && window.getComputedStyle(navbarToggler).display === "block") {

      // Obtém todos os links da barra de navegação

      var navLinks = document.querySelectorAll(".nav-item.nav-link");

      // Adiciona um ouvinte de eventos a cada link

      navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

          // Fecha o menu de navegação ao clicar em um link

          navbarToggler.click();
          
        });
      });
    }
  });
