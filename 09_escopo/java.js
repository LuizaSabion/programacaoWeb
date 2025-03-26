
//escopo

//escopo da função

//escopo da função pai

var carro = 'fusca';

function mostrarMeuCarro(){
  var meuCarro = 'Fusca'; //se declara a variavel sem usar var, let ou const torna a variavel global
  console.log(meuCarro); //so vai ser possivel chamar dentro da função pois é uma variavel local 
}


function mostrarMeuCarro(){
   texto = `Meu Carro é um ${carro}`; //se declara a variavel sem usar var, let ou const torna a variavel global
  console.log(texto); //so vai ser possivel chamar dentro da função pois é uma variavel local 
}

mostrarMeuCarro();

console.log(texto);

//escopo de bloco

var verdade = true;


//toda variavel definida com var no bloco vaza[escapa do bloco] -> é visivel fora do bloco
//se for usado o let  ou const não deixa vazar a variavel
if(verdade){
  let carro = 'Fusca';
  console.log(carro);
}//sempre que for criar variavel usar o let  ou const, continua sendo variavel local

console.log(`fora do bloco`, carro);

{
  var caminhao="ford"; //global
  let ano = 2020; //encapsula local
}
console.log(caminhao);
//console.log(ano);

for (let i=0; i <10; i++){
  console.log(i);
}

//console.log(i);

var idade = 100;
console.log(idade);

var idade = 'cem';
console.log(idade);

const mes="dezembro";
//mes="janeiro";

const semana='santa';//a variavel cosnt é obigada a atribuir um valor, mesmo se não da erro

let ano = 2020; 
 ano=2010;

// com var é possivel criar mais de uma variavel com mesmo nome, a let const bloqueia criar mais d euma variavel com o mesmo nome






