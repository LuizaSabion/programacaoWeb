function areaQuadrado(lado){
    return lado*lado;
}


console.log(areaQuadrado(5));

function pi(){
  return 3.14;
}

var total = 5 * pi();

console.log(total); 

//parametros e argum

function calcularImc(peso, altura){
  const imc = peso / (altura **2);
  return imc;
}//toda função que não tem um retorno retorna undfined

var valorImc = calcularImc(80,1.80);

console.log('Imc =' +valorImc);

function suaCorFavorita(corFavorita){
  if (corFavorita==='azul'){
    return 'voce gosta do mar'
  } else if(corFavorita === 'verde'){
    return 'voce gosta do palmeiras'
  } else{
    'voce não gosta de nada'
  }
  
}
console.log(suaCorFavorita('azul'));

//escopo

function visitarPaises(paisesVisistados){
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisistados}`
}
console.log(visitarPaises(1));

var profissao = 'Programador';

function dadosPessoa(){
  var nome = ' sergio ';
  var idade = 49;

  function novosDados(){
    var endereco = "pedro Cavalo ";
    var cep = 162000;

    return `${nome}, ${idade}, ${endereco}`
    }
     return novosDados();
}

console.log(dadosPessoa());
console.log(novosDados());