/*$(document).on("ready",main);
function main(){
    $("#oscuro").on("click" ,modoNoche);
    
}**/

$(document).ready(function(){
    $("#btn1").click(function(){
        $("div.parrafo").toggleClass('color');
    });
    $("#btn2").click(function(){
        $('#subtitulo, #parrafo').toggleClass('letra');
    });
    $("#img1").mouseover(function(){
        $('#imgg').addClass('nwa');
    });
    $("#img1").mouseout(function(){
        $('#imgg').removeClass('nwa');
    });
    /*$("#btn3").click(function(){
        $("h2.subtitulo").toggleClass('cambio');
    });*/

});

/*function modoNoche(){
    $(this).toggleClass("nocturno");
    if($(this).hadClass("Nocturno")){
        $(this).removeClass("Nocturno")
    }else{
        $(this).addClass("Nocturno");
    }
}*/