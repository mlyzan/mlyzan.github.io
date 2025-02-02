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
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
    });

//gamburger
$('#gamburger').on('click', function(){
    $('.nav').toggle('slow');
    this.classList.toggle('gamburger_active');
});