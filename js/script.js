let btns;
let btn;
let arrayNumeros=new Array('1','2','3','4','5','7','7','8','0');
let arrayOperadores=new Array('%','/','X','-','+','=');
let arrayFuncoes=new Array('CE','C','Back','+/-');
let valorResultado=0;
let resultadoDisplay;
let operacoesDisplay;
operacoesDisplay=document.querySelector('#operacoes');

resultadoDisplay=document.querySelector('#resultado');
resultadoDisplay.innerHTML=valorResultado;
btns=document.querySelectorAll('.btn');

for(i=0; i<btns.length; i++){
    btns[i].onclick=function(){
        btn=this.innerHTML;
       
       processaTecla(btn, function(tp){
            console.log(tp);
            if(tp=='num'){
                console.log(1);
                operacoesDisplay.innerHTML+=btn;
            }else if(tp=='op'){
                console.log(2);
                operacoesDisplay.innerHTML+=btn;
            }else if(tp=='fn'){
                console.log(3);
                
            }else if(tp=='ef'){
                console.log(4);
                resultadoDisplay.innerHTML="ERRO FATAL";
            }
            
        });
    };
}



let calculo=function(btn){
    /*
    Provisório
    */
    





    /**Verifica se é função */
    /*Sim -> chama a função*/
    /*Não -> Verifica se btn é um operados */
        /**Sim ->Fecha valor */
        /**Não -> Verifica se é Número*/
            /*Sim ->compoe o valor */
            /**Não ->Pede socorro */
}

let processaTecla=function(btn, callback){
    let tp;
    console.log(btn);
    console.log(arrayNumeros.indexOf(btn));
    console.log(arrayOperadores.indexOf(btn));
    console.log(arrayFuncoes.indexOf(btn));
    if(arrayNumeros.indexOf(btn)>-1){
        tp='num';
    }else if(arrayOperadores.indexOf(btn)>-1){
        tp='op';
    }
    else if(arrayFuncoes.indexOf(btn)>-1){
        tp='fn';
    }else{
        tp='ef';
    }
    console.log(tp);

    return callback(tp);
}
let temNumero=function(num){


}
let temFuncao=function(){

}


