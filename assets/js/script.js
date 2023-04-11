const criptButton = document.querySelector('.botao .encript');
const decriptButton = document.querySelector('.botao .decript');
const textArea = document.querySelector('textarea');
const textOutput = document.querySelector('.text-output');
const textAreaOutput = document.querySelector('.text-output .message .output');
const noMessage = document.querySelector('.content .text-output .no-message');
const message = document.querySelector('.content .text-output .message');



function encript() {
    noMessage.style.display = 'none';
    message.style.display = 'block';
    textAreaOutput.value = textArea.value;
    textArea.value = '';


}

function decript() {


}

function copiar() {
    textArea.value = textAreaOutput.value;
    textAreaOutput.value = '';
    message.style.display = 'none';
    noMessage.style.display = 'block';
}
