// createCipheriv - Fazer a criptografia
// randomBytes - Irá gerar um valor aleatório
// createDecipheriv - Irá decifrar as mensagens

import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

const mensagem = 'emanuelSenha';

// Chave aleatória com bytes aleatórios
const chave = randomBytes(32);
// Para acrescentar na nossa randonização
const vi = randomBytes(16);

// Vai estar fazendo a criptografia
// aes256 é o nível de criptografia
// chave (segundo parâmetro) é a chave
// vi (terceiro parâmetro) é os números aleatórios para dificultar mais ainda
const cifra = createCipheriv('aes256', chave, vi);

// Passamos a nossa senha depois o tipo que ela está e depois como queremos a nossa criptografia
// Após vamos dizer o valor do vi que é o final
const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex');

console.log(mensagemCifrada);

// Transmissão de dados

const descriptografar = createDecipheriv('aes256', chave, vi);

const mensagemDescriptografada = descriptografar.update(mensagemCifrada, 'hex', 'utf-8') + descriptografar.final('utf-8');

console.log(mensagemDescriptografada.toString('utf-8'));