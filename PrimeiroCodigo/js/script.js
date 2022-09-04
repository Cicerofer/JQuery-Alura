// $('#botao-copiar').on('click',function(){

//     var nome = $('#campo-nome').val();
//     $('#texto-copiado').text(nome);
// });

$('#lista').on("dblclick", "li", function(){

    $(this).animate({"margin-left" : "+=100"}, function(){
        $(this).remove();
    });
});

$('#botao-adiciona').click(function(){

    var texto = $('#treinamento').val();
    $('<li>').text(texto).css({'color' : 'blue', 'background-color' : 'lightgrey' }).appendTo('#lista');
});

$('#botao-atualiza').click(function(){

    $.ajax({        
        url: 'http://mirrorfashion.caelum.com.br/treinamentos',        
        dataType: 'jsonp',
        success: function(retorno) {
            
            $.each(retorno.treinamentos, function(){
                var treinamento = this;

                $('<li>').css('color', 'green').text(treinamento.nome).appendTo('#lista');
            });
        }
    });
});