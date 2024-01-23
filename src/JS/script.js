// Script do efeito de máquina de escrever

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 120 * i)

  });
}

const titulo = document.querySelector('.descricao-profissao');
typeWrite(titulo);


// Mexendo com o Navbar

document.addEventListener("DOMContentLoaded", function () {

  // Obtém todos os links da barra de navegação
  var navLinks = document.querySelectorAll(".nav-item.nav-link");

  // Adiciona um ouvinte de eventos a cada link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {

      // Fecha o menu de navegação ao clicar em um link
      var navbarToggler = document.getElementById("botao-navbar");
      if (navbarToggler) {
        navbarToggler.click();
      }
    });
  });
});
