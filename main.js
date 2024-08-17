$(document).ready(function(){

    $('form').on('submit',function(e){
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $(`<li style="display: none">${novaTarefa} </li>`);
        

        $('#lista-de-tarefa').append(novoItem);
        $(novoItem).fadeIn(1000);

        $('#nova-tarefa').val('');
    });

    $(document).on('click', 'li', function() {
    $(this).toggleClass('riscado');
    });
})    