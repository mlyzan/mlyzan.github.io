 //modal
 $('[data-modal=consultation]').on('click', ()=>{
    $('.overlay, #consultation').fadeIn('slow');
});

$('.modal__close').on('click', ()=>{
    $('.overlay, #consultation, #thanks').fadeOut('slow');
});

//form
$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).send(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
    });


