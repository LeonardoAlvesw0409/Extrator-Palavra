const botaoMostrapalvras = document.querySelector('#botao-palavrachave');

botaoMostrapalvras.addEventListener('click', mostraPalavraChave);

function mostraPalavraChave () {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResutaldo = document.querySelector('#resultado-palavrachave');
    const Palavras = texto.split(" ");

    campoResultado.textContent = palavra.join(", ");

}