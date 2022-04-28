
let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');
let containerPassword = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ!@#%&*<>123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value; // comando que mostra na tela o valor inicial determinado no input no HTML

slider.oninput = function(){
    sizePassword.innerHTML = this.value; // função responsável por atualizar o valor dos caracteres de acordo com o valor determinado na barra em tempo real
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){ // definimos uma variável "n" que irá receber/ter o tamanho do nosso "charset" definido
        pass += charset.charAt(Math.floor(Math.random()*n)); // usamos o método "charAT" para retornar o caractere em um índice especificado (posição) em uma string.
    }
   
    containerPassword.classList.remove('hide'); // os método "classlist" irá listar todas as classes contidas no elemento enquanto o "remove" irá excluir a classe definida dentro dos parênteses
    password.innerHTML = pass; // o "innerHTML" serve para retornar no html tudo que está sendo definido no Javascript
    novaSenha = pass;

}

function copyPassword(){
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
}




