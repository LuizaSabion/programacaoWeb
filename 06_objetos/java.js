//objeto - composto de variaveis e funçoes

var pessoa = {
  nome: 'francisco',
  idade:59,
  profissao:'profesor',
  temFaculdade:true,

  mostrarNome(){
    return this.nome;
  }
}
console.log(pessoa.nome);
console.log(pessoa.mostrarNome());

//criar um obejeto
var carro ={};

console.log(typeof carro);

var menu ={
  width:800,
  heigth: 50,
  backgroudColor: '#84B',
}

//pegar um valor do objeto
//get
var bg = menu.backgroudColor;

console.log(bg);

//atribui um avalor
//set
menu.backgroudColor = '#000';
console.log(menu.backgroudColor);

menu.possition = 'fixed';

var height =120;
var menu2 = {
  width:800,
  height:50,

  metadeDaAltura(){
    return this.height/2;
  }
   var altura = menu2.metadeDaAltura();

   console.log(Number(altura));


}