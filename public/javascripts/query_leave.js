$('#query_leave').click(function(e){
    $(this).addClass('active');
    $('#apply_leave').removeClass('active');
    //alert($('#quTab')[0]);
    if($('#quTab')[0])
    { 
        $('#qutab').addClass('active');
    } else {
        $('#workTab').append($('#query_tab_tmp').html());
        $('#tabCont').append($('#query_cont_tmp').html());
    }
});
