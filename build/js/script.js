$('.bg').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  pauseOnHover: true
})


$(document).ready(function(){
var pattern = /.+@.+\..+/i;
var mail = $('#email');

mail.blur(function(){
if(mail.val() != ''){
if(mail.val().search(pattern) == 0){
$('#valid').text('');
$('#submit').attr('disabled', false);
mail.removeClass('error').addClass('ok');
}else{
$('#valid').text('Введите корректный e-mail адрес');
$('#submit').attr('disabled', true);
mail.addClass('error');
}
}else{
$('#valid').text('Поле e-mail не должно быть пустым!');
mail.addClass('error');
$('#submit').attr('disabled', true);
}
});
});

$(document).ready(function() { // Функция позволяющая выполнять другие функции не дожидаясь полной загрузки документа
  $("#submit").click(function() { // Ловим клик по кнопке
    if ($('.subscribe__form')[0].checkValidity()) { //проверяем условие
      $(".modal").fadeIn(); // Плавно показываем подложку
    }
  });
});

$(document).ready(function() { // Функция позволяющая выполнять другие функции не дожидаясь полной загрузки документа
  $(".modal__close").click(function() { // Ловим клик по подложке Overlay
    $(".modal").fadeOut(); // Плавно убираем подложку
  });
});
