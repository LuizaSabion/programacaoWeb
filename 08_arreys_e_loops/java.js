//array - vetor 

var jogador = ['Pele', 'Rivelino', 'Tostão'];

console.log(jogador[2]);

console.log(jogador.pop()); //Remove o Ultime item 

console.log(jogador);

jogador.push('Zico'); //aficiona um elemento no final

console.log(jogador);

console.log(jogador.length);

for (var i ; i <jogador.length; i++){
  console.log(jogador[i]);
}


var i = 0;
while (i <4){
  console.log(i);
  i++;
}

jogador.forEach(function(item){
  console.log(item);
});
  

var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'uva'];

frutas.pop();

frutas.forEach(function(frutas, index){
  console.log(frutas, index);
});

//crie um arrey com os anos que o basil foi campeao 

var brasilCampeao = [1958, 1962, 1970, 1994, 2002];

console.log(brasilCampeao);

for(var i=0; i< brasilCampeao.length; i++){
  console.log(`O brasil ganhou as seguintes copas dos mundo ${brasilCampeao[i]
  }`);
}

// operador ternario

var campeao = 1970;

var brasil = (campeao === 1970) ? `Brasil ganhou a copa` : `Brasil Perdeu a Copa`;

console.log(brasil);

var brasilPentaCampeao = true;

//if abreviado
if(brasilPentaCampeao){
  console.log('Sim é verdade')
}else {
  console.log('Não é Verdade');
}