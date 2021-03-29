/*Declara as variáveis */
 //Armazena o container de operaçãoes
 let operacoesDisplay;
 //Armazena o container do resultado
 let resultadoDisplay;
//Armazena grupo de boões
let btns;
//Armazena um botão especifico
let btn;
/**Armazena o valor do resultado */
let valorResultado=0;

/**Array contendo os numeros válidos */
let arrayNumeros=new Array('1','2','3','4','5','6','7','8','9','0')
/**Array contendo os operadores válidos */
let arrayOperadores=new Array('%','/','X','-','+','=','-/+')
/**Array contendo os funções válidas */
let arrayFuncoes=new Array('CE','C','Back')

operadoresDisplay=document.querySelector('#operacoes')
operadoresDisplay.innerHTML=". . ."
resultadoDisplay=document.querySelector('#resultado')
resultadoDisplay.innerHTML=valorResultado;

btns=document.querySelectorAll(".btn");
for(i=0; i<btns.length; i++){
    btns[i].onclick=function(){
        btn=this.innerHTML;
        operadoresDisplay.innerHTML +=btn;
    }
}

