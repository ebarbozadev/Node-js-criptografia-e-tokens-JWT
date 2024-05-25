import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComSal(senha) {
    // Vamos estar gerando números aleatórios e passando para hexadecimal
    const sal = randomBytes(16).toString('hex');

    // Iremos passar a senha, o sal e a quantidade de caracteres que nossa senha criptografada vai ter
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

    return `${sal}:${senhaHasheada}`
}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        // Vamos estar recebendo dois valores com essa função
        // split irá fazer a separação de qual dado vai para onde
        [this.sal, this.hash] = criaHashComSal(senha).split(':');
    }

    autenticacao(nome, senha) {
        console.log('Antes')
        if (this.nome === nome) {
            console.log('Entrou')
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');

            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)

            if (hashesCorrespondem) {
                console.log("Usuário autenticado com sucesso")
                return true;
            }
        } else {
            console.log("Usuário ou senha incorretos.")
            return false;
        }
    }
}

const usuario = new Usuario('Emanuel', 'senhaTal');

console.log(usuario)

// Teste de sucesso
usuario.autenticacao('Emanuel', 'senhaTal');

// Teste de fracasso
usuario.autenticacao('Carlos', '123');