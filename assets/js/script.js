const criptButton = document.querySelector('.botao .encript');
const decriptButton = document.querySelector('.botao .decript');
const textArea = document.querySelector('textarea');
const textOutput = document.querySelector('.text-output');
const textAreaOutput = document.querySelector('.text-output .message .output');
const noMessage = document.querySelector('.content .text-output .no-message');
const message = document.querySelector('.content .text-output .message');


//criptografa a string
function cod(input, output) {
   
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'e') {
            output.value +='enter';
        } 
        else if (input[i] === 'i') {
            output.value += 'imes';
        } 
        else if (input[i] === 'a') {
            output.value += 'ai';
        } 
        else if (input[i] === 'o') {
            output.value += 'ober';
        } 
        else if (input[i] === 'u') {
            output.value += 'ufat'
        } 
        else {
            output.value += input[i]
        }
    }

}


//descriptografa a string
function decode(input, output) {
    let newString = input.replaceAll('ai', 'a');
    let newStrin1 = newString.replaceAll('enter', 'e');
    let newString2 = newStrin1.replaceAll('imes', 'i');
    let newString3 = newString2.replaceAll('ober','o');
    let newString4 = newString3.replaceAll('ufat','u');
    
    output.value += newString4;
}


//esconde elementos e chama a função code()
function encript() {
    if (textArea.value.length === 0) {
        noMessage.style.display = 'block';
        message.style.display = 'none';
    } 
    else {
        noMessage.style.display = 'none';
        message.style.display = 'block';
        textAreaOutput.value = '';
        cod(textArea.value, textAreaOutput);
        textArea.value = '';

    }
        


}

//esconde elementos e chama a função decode()
function decript() {
    if (textArea.value.length === 0) {
        noMessage.style.display = 'block';
        message.style.display = 'none';
    } 
    else {
        noMessage.style.display = 'none';
        message.style.display = 'block';
        textAreaOutput.value = '';
        decode(textArea.value, textAreaOutput);
        textArea.value = '';

    } 

    
    


}

function copiar() {
    textAreaOutput.select();
    document.execCommand('copy');
}
