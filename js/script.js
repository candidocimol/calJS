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
operadoresDisplay.innerHTML=""
resultadoDisplay=document.querySelector('#resultado')
resultadoDisplay.innerHTML=valorResultado;

btns=document.querySelectorAll(".btn");
for(i=0; i<btns.length; i++){
    btns[i].onclick=function(){
        btn=this.innerHTML;
        /**Verificar qual o tipo de botão foi precionado */
        let tp=processaBotao(btn)
        if(tp=="num"){
            operadoresDisplay.innerHTML +=btn;
        }else if(tp=='op'){
            if(btn=="="){
                valorResultado=eval(operadoresDisplay.innerHTML);
                resultadoDisplay.innerHTML=valorResultado;
                operadoresDisplay.innerHTML +=btn+valorResultado;
            }else if(btn=="%"){
              

            }else{
                operadoresDisplay.innerHTML +=btn; 
            }
        }else if(tp=="fn"){
            if(btn=="C"){
                resultadoDisplay.innerHTML="0";
                operadoresDisplay.innerHTML="";

            }else if(btn="Back"){
                operadoresDisplay.innerHTML=operadoresDisplay.innerHTML.slice(0,-1)
            }
        }else if(tp="ef"){
            resultadoDisplay.innerHTML="Erro!";
            operadoresDisplay.innerHTML="Erro!";
        }
        
       
    }
}

/**Função para definir o tipo  de botão precionado */
let processaBotao=function(btn){
    let tp;//tipo de botão
    //num, op, fn, ef
    if(arrayNumeros.indexOf(btn)>-1){
        tp="num"
    }else if(arrayOperadores.indexOf(btn)>-1){
        tp="op"
    }else if(arrayFuncoes.indexOf(btn)>-1){
        tp="fn"
    }else{
        tp="ef"
    }
    return tp;
}

