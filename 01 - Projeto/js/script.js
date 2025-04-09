//selecionar elementos 
/*
//getelementById = seleciona um elemento do 

const selecaoAnimais = document.getElementById('');
//console.log(selecaoAnimais);

//getElementByClassName = seleciona e retorna u
constgridanimais= document.getElementsByName('')
const listaContato = document.getElementsByClassName('grid-section contato');
//console.log(listaContato)

//getelementByTagName

const ul = document.getElementsByTagName('ul');
//console.log(ul[n])


//Seletor Geral 

//querySelectorAll - retorna todos os elementos compatveis em css em uma old liste
const gridSection = document.querySelectorAll('.grid-section');


//const lista = document.querySelectorAll('')

*/


//html selection
const gridSelectionHtml =  document.getElementsByClassName('grid-section');
console.log(gridSelectionHtml)

//NodList - sempre pelo querySelectorAll
const gridSelectionNode =  document.querySelectorAll('grid-section');
console.gridSelectionNode

//sempre estatica
gridSelectionNode.forEach


// as duas são array-like
// array nodelist - foreach

gridSelectionNode.forEach(function(gridItem,index,array){
  gridItem.classList.add('vermelho');
  console.log(index);
  console.log(array);
});


//retornar no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);
//reorne no console apenas as imagens que começão com a palavra imagem

const todasImagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(todasImagens);
//selecione todos os links internos do site (onde o href começa com o #)

const todosLinks = document.querySelectorAll('[href="#"]');
console.log(todosLinks);

//selecione o primeiro h2 dentro de .animais descrição ^

const animais1 =document.querySelector('.animais-descricao');
const h2animais = animais1.querySelector('h2');