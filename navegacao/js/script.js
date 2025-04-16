/*
img = document.querySelectorAll('img');
 function callback(e){
  console.log('clicou');
 }

img.addEventListener('click', function callback);
*/
const animaisLista = document.querySelector('.animal-item');
function executaCallback(e){
  const currenteTarget = e.currenteTarget;
  const target = e.target;
  const type = e.type;
  //const path = e.path;

  console.log(
    currenteTarget, 
    target,
    type,
    //path
  );
}
animaisLista.addEventListener('Click',executaCallback);

const link = document.querySelector('a[href^=http]');
 
function clickNoLink(e){
  e.preventDefault();//evita o comportamento padrao de carregamento nas paginas
    console.log(this)
  //é um apalavra reservada para fazer referencia ao prorpio objeto
  //console.log(e.currentTarget.href);

  console.log(this.getAttribute('href'));
}
link.addEventListener('click', clickNoLink);

function callKey(e){
  if (e.key === 'a'){
    document.body.classList.toggle('azul')
  }else if (e.key='v'){
    document.body.classList.toggle('verde') ,,
  }
}