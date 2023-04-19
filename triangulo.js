// Eu não vou usar iteração em nenhum programa dessa atividade (exceto no de 
// loops), para maximizar o sofrimento do pc, o meu sofrimento, e o sofrimento de
// quem for ler o código. Espero que goste.

function triangulo(str, i, tamanho) {
    if(i < tamanho) {
        console.log(str);
        triangulo(str+"#", i+1, tamanho);
    }
}

let tamanhoTriangulo = prompt("Tamanho do triângulo: ");
triangulo("##", 0, tamanhoTriangulo);