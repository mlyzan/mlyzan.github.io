

$(document).ready(function(){

    //carousel
    $('.carousel__inner').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/next.png" alt="next"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });



    //tabs
    $('.triathlon').on('click', function(){
        $('.polar').fadeOut('slow');
        $('.suunto').fadeIn('slow');

    });
    $('.run').on('click', function(){
        $('.suunto').fadeOut('slow');
        $('.polar').fadeIn('slow');

    });
    $('.fitness').on('click', function(){
        $('.polar, .suunto').fadeIn('slow');

    });

    $('ul.catalog_list').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active');
          
    });


    //modal
    $('[data-modal=consultation]').on('click', ()=>{
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', ()=>{
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_buy').each(function(i) {
        $(this).on('click',()=>{
            $('#order .form__text span').text($('.catalog__content_first_title').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    //mask
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    //up
    $(window).scroll(function(){
        if($(this).scrollTop() > 1600 && $(window).width() > 576 ){
            $('.up').fadeIn('slow');
        } else{
            $('.up').fadeOut('slow');
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
});

const wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
    });

  });
          