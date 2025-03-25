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

console.log(carro)