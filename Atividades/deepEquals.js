// Já utilize JSON em alguns projetos, então achei bem prático apenas
// comparar o JSON gerado pelos objetos 
const deepEquals = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2)