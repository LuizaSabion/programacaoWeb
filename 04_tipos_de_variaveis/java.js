var possuiFaculdade = false;
var possuiEspecializacao = false;
if (possuiFaculdade){
  console.log("Terminou a faculdade");
}
else{
  console.log("Não terminou a faculdade");
}

if (possuiEspecializacao){
  console.log("O aluno graduou-se em Analista de sistema");
}
else if (possuiFaculdade){
  console.log("O aluno terminou a faculdade");
}
else{
  console.log("O aluno está cursando faculdade");
}

// truthy e falsy

//sempre falso
if(false); //false
if(0);//0
if(NaN);
if(undefined);

//sempre vdd
if(1);
if(true);
if('Joao');
if(-5);

//negar
if(!true);//falso
if(!1);//falso
if(!undefined); true

//operadores logicos 
console.log(10 > 5); 
console.log(10 > 5); 
console.log(20 < 10); 
console.log(10 <= 0); 
console.log(10 >= 11); 

//operadores comparacao
console.log(10 == 10);
console.log(10 == '10');
console.log(10 === 10);
console.log(10 != 15);

//E
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log('gato' && 'cachorro');
console.log((5-5)&&(5+5));

//OU
console.log(true || true );
console.log(true || false);
console.log('gato' || 'cachorro');


