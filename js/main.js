"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var close = document.querySelectorAll('.close'),
      overlay = document.querySelector('.overlay'),
      btn = document.getElementsByClassName('hire'),
      modal = document.getElementsByClassName('modal')[0],
      resume = document.getElementsByClassName('resume-modal')[0],
      btnResume = document.querySelectorAll('.resume'),
      print = document.querySelector('.btn_print'),
      download = document.querySelector('.btn_download'),
      blockResume = document.querySelector('.resume-modal__blocks'),
      form = document.getElementsByTagName('form')[0];

  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
      overlay.style.display = "none";
      modal.style.display = "none";
      resume.style.display = "none";
    });
  }

  for (var _i = 0; _i < btn.length; _i++) {
    btn[_i].addEventListener('click', function () {
      overlay.style.display = "block";
      modal.style.display = "flex";
      resume.style.display = "none";
    });
  }

  ;

  for (var _i2 = 0; _i2 < btnResume.length; _i2++) {
    btnResume[_i2].addEventListener('click', function () {
      overlay.style.display = "block";
      resume.style.display = "block";
    });
  }

  ; //website,app links 

  var website = document.getElementsByClassName('website');
  var app = document.getElementsByClassName('app');
  document.getElementById('applink').addEventListener('click', function () {
    for (var _i3 = 0; _i3 < website.length; _i3++) {
      website[_i3].style.display = 'none';

      for (var _i4 = 0; _i4 < app.length; _i4++) {
        app[_i4].style.display = 'block';
      }
    }
  });
  document.getElementById('websitelink').addEventListener('click', function () {
    for (var _i5 = 0; _i5 < app.length; _i5++) {
      app[_i5].style.display = 'none';

      for (var _i6 = 0; _i6 < website.length; _i6++) {
        website[_i6].style.display = 'block';
      }
    }
  });
  document.getElementById('all').addEventListener('click', function () {
    for (var _i7 = 0; _i7 < website.length; _i7++) {
      website[_i7].style.display = 'block';
    }

    for (var _i8 = 0; _i8 < app.length; _i8++) {
      app[_i8].style.display = 'block';
    }
  }); //form submit

  $('form').submit(function (e) {
    var _this = this;

    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(_this).find("input").val("");
      $(".modal").fadeOut();
      $('#thanks').fadeIn('slow');
      setTimeout(function () {
        $('#thanks').fadeOut('slow');
      }, 3000);
      $('form').trigger('reset');
    });
    return false;
  });
});