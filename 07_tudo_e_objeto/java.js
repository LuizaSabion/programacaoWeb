var nome = 'Sergio';

var tam = nome.length;

console.log(tam);

console.log(nome.charAt(1));

console.log(nome.replace('er', 'rei'));

var altura = 1.75;

altura.toString() //1.75

altura.toFixed() //'2' aredonda para cima 

function areaDoQuadrado(lado){
  return lado*lado;

}

console.log(areaDoQuadrado.toString());//transforma em string

areaDoQuadrado.length // 1- quantidade do paramentro que a função recebe

var btn = document.querySelector('.botao');//querySelector busca no codigo tudo que tenha botao
console.log(btn);

btn.classList.add('vermelha');

console.log(btn);

btn.addEventListener('click', function(){
  console.log('Clicou');
});

//nomei 3 propriedades ou metodos de strings.

var cocao = 'Cocão';

cocao

//fixed, length, slice

//nomei 5 propriedades ou metodos de elementos do DOM

var classe = document.querySelector('.botao');
classe.app
//addEventListener;
//appendChild;
//innerHtml
//outerHtml








