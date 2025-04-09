///classList
//retorna uma lista com as classes do elemento
//permite addd, remover e vereficar se contem 

const menu = document.querySelector('.menu');

console.log(menu.classList) //[array]string

console.log(menu.className) //string

menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile');//adiciona um 'elemento'ao componete 'tag' classe 
menu.classList.remove('mobile');
//menu.classList.toggle('ativo');//se não existir  - adiciona, se existir remove 

const contem = menu.classList.contains('ativo');//true or false 
//console.log(contem);

//menu.classList.replace('ativo', 'inativo');//troca os valores 



//atributes - retorna um array-like com os atribustis nos elementos

const animais = document.querySelector('.animais');
//console.log(animais);

console.log(animais.attributes[1]); //[]define qual elemento mostra 

//get , set 
//getAttribute - pegar
//setAttribute - setar / atribuir


const img = document.querySelector('img');

console.log(img);

console.log(img.getAttribute('src'));
 img.setAttribute('alt', 'texto alternativo');

 const possui = img.hasAttribute('possui');
 //console.log(possui);
img.removeAttribute('alt');

//Read Only e Writable
//propriedades que permitem alteração 
//propriedades que são somente leituras - não podem mudar seu valor, não aceita

const meusAnimais = document.querySelector('.animais');
//console.log(meusAnimais);

console.log(meusAnimais.className);

//meusAnimais.className='azul'; //substitui completamente a string, muda todo o conteudo
//meusAnimais.className+=' vermelho';
//meusAnimais.attributes = 'class="ativo"'; //read-onlay

//objeto.propriedade


//adicione a classe ativo  a todos o sitens do menu

const itensMenu = document.querySelectorAll('.menu a');
console.log(itensMenu);

itensMenu.forEach((item)=>{
  item.classList.add('ativo');
});

//remova  a classe ativo de todos os itens do menu
//mantenha apenas no primeiro

itensMenu.forEach((item)=>{
  item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');

//verefique se as imagens possuem o atributo alt

const pegarImagem = document.querySelectorAll('img');

pegarImagem.forEach((img)=>{
  const possuiAlt = img.hasAttribute('alt');
  console.log(img, possuiAlt);
});


//verefique o href do link externo no menu
//bri.ifsp.edu.br => www.google.com.br
const link = document .querySelector('a[href^="http"]');
link.setAttribute('href', 'www.google.com.br')
 console.log(link);