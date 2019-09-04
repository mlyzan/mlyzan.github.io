window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    close = document.querySelectorAll('.close')[0],
    close2= document.querySelectorAll('.close')[1],
    overlay = document.querySelector('.overlay'),
    btn1 = document.querySelector('#header-btn'),
    btn2 = document.querySelector('#subheader-btn');



    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    });

    btn1.addEventListener('click', ()=>{
        overlay.style.display = "block";
    });
    btn2.addEventListener('click', ()=>{
        overlay.style.display = "block";
    });

    close.addEventListener('click', ()=>{
        overlay.style.display = "none";
    });
    close2.addEventListener('click', ()=>{
        overlay.style.display = "none";
    });

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.modal').fadeOut();
            $('.thanks').fadeIn('slow');
    
            $('form').trigger('reset');
        });
        return false;
        });

})