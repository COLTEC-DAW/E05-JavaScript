function sort(vet, f) {
  do{
    var done = vet.length-1;
    for(i = 0; i < vet.length-1; i++) {
      if(f(vet[i], vet[i+1])) {
        var a = vet[i];
        vet[i] = vet[i+1];
        vet[i+1] = a;
      }
      else{
        done--;
      }
    }
  }while(done != 0);
  console.log(vet);
}

function crescente(a, b){
  return (a > b) ? true : false;
}

function descrescente(a, b){
  return (a < b) ? true : false;
}

sort([5, 4, 7, 2, 8, 1, 3, 6, 9], crescentePar);
//-------------------------------------------------------------
function criptografar(s, cripto) {
  var sCripto = [];
  for(i = 0; i < s.length; i++) {
    sCripto.push(cripto(s[i]));
  }
  return sCripto;
}

function criptografia(i){
  if(i == 'x'){
    return 'a';
  }
  else if(i == 'y'){
    return 'b';
  }
  else if(i == 'z'){
    return 'c';
  }
  if(i == 'X'){
    return 'A';
  }
  else if(i == 'Y'){
    return 'B';
  }
  else if(i == 'Z'){
    return 'C';
  }
  return String.fromCharCode(i.charCodeAt(0) + 3);
}

console.log(criptografar("OLA", criptografia));
//-------------------------------------------------------------
function verifica(vet, verificacao){
  for(i = 0; i < vet.length; i++) {
    console.log(verificacao(vet[i]));
  }
}

function par(i) {
  return (i%2 == 0) ? true : false;
}

function primo(i) {
  if(i!=1){
    for (j = 2; j < i; j++)
      if (i % j == 0) return false;
   return true;
  }
  return false;
}

verifica([1, 2, 3, 4, 5, 6, 7, 8, 9], primo);
//------------------------------------------------------------
function transform(s, criterio) {
  var ns = '';
  for(i = 0; i < s.length; i++){
    ns+=(criterio(s[i]));
  }
  console.log(ns);
}

function uperVogal(i) {
  if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'){
    return i.toUpperCase();
  }
  else{
    return i;
  }
}

function uperConsoante(i) {
  if(i != 'a' && i != 'e' && i != 'i' && i != 'o' && i != 'u'){
    return i.toUpperCase();
  }
  else{
    return i;
  }
}

function lowVogal(i) {
  if(i == 'A' || i == 'E' || i == 'I' || i == 'O' || i == 'U'){
    return i.toLowerCase();
  }
  else{
    return i;
  }
}

function lowConsoante(i) {
  if(i != 'A' && i != 'E' && i != 'I' && i != 'O' && i != 'U'){
    return i.toLowerCase();
  }
  else{
    return i;
  }
}

transform("ola", uperVogal);
transform("ola", uperConsoante);
transform("OLA", lowVogal);
transform("OLA", lowConsoante);
//-----------------------------------------------------------------
function criarMatriz(criterio) {
  var matriz = [];
  for(i = 0; i < 5; i++){
    matriz[i] = [];
    for(j = 0; j < 5; j++){
      matriz[i][j] = criterio(i, j);
    }
  }
  console.log(matriz);
}

function c1(i, j){
  return i + j;
}
function c2(i, j){
  return i * j;
}
function c3(i, j){
  return i == j ? 1 : 0;
}
function c4(i, j){
  return i^2/(j+1);
}
function c5(i, j){
  return i > j ? 1 : (i < j ? 5 : 0);
}

criarMatriz(c1);
criarMatriz(c2);
criarMatriz(c3);
criarMatriz(c4);
criarMatriz(c5);
