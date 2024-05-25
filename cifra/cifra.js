const mensagemSecreta = 'minha mensagem secreta';

console.log(mensagemSecreta);

function criptaMensagem(mensagem, movimentos) {
    // Vai separar em cada caractere e formar uma string
    // [
    //     'm', 'i', 'n', 'h', 'a',
    //     ' ', 'm', 'e', 'n', 's',
    //     'a', 'g', 'e', 'm', ' ',
    //     's', 'e', 'c', 'r', 'e',
    //     't', 'a'
    // ]
    // console.log(mensagem.split(''));

    const mensagemCifrada = mensagem.split('').map( caractere => {
        // Vamos estar percorrendo cada caractere que vamos pegar dessa mensagem
        // E cada caractere tem um código único, no caso como vamos estar só com uma posição vamos pegar o charCodeAt da posição 0
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere + movimentos);
    });

    // Irá reunir todos os caracteres em uma única string
    return mensagemCifrada.join('');
}

function descriptMensagem(mensagem, movimentos) {
    const mensagemDescriptada = mensagem.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere - movimentos);
    });

    return mensagemDescriptada.join('');
}


const mensagemCifrada = criptaMensagem(mensagemSecreta, 3);
const mensagemDescifrada = descriptMensagem(mensagemCifrada, 3);

console.log('Mensagem criptografada: ', mensagemCifrada, ' e mensagem descriptografada: ', mensagemDescifrada);