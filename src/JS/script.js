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

