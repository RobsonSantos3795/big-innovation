function typeWriter(elemento) {
    const textoArray = elemento.inneiHTML.split('');
    elemento.inneiHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.inneiHTML += letra, 75 * i);
        
    });
}
const titulo = document.querySelector('h1');
typeWriter(titulo);