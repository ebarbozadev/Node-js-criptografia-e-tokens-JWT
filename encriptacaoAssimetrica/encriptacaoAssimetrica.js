import { generateKeyPairSync } from "crypto";

// rsa - referente ao primeiro parâmetro
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    }
});

// console.log(privateKey)
// console.log(publicKey);

// Para descriptografar o público e também o privado
import { publicEncrypt, privateDecrypt } from "crypto";

const dadosCriptografados = publicEncrypt(
    publicKey,
    // Transformando uma string (mensagem) em binário
    Buffer.from('Mensagem super secreta')
)

console.log(dadosCriptografados.toString('hex'))

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log('Dados decifrados: ', dadosDecifrados.toString('utf-8'));