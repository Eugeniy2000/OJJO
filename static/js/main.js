$(".header-top__search-main").click(function(){
  $(".header-top__search-inp").slideToggle();
  $(".header-top__search-inp").toggleClass("go");
  if($(".header-top__search-inp").hasClass("go")){
    return false;
  }
});

$(document).ready(function() {
  $('.network__video-1').fancybox();
});

$(document).ready(function() {
  $('.network__video-2').fancybox();
});

$(".events-tabs__link").click(function(){
  $(".events-tabs__item").removeClass("events-tabs__item--active");
  $(this).parent().addClass("events-tabs__item--active");
});


$(".header-burger__link").click(function(){
  $(".header-top").toggleClass("header-top--bg");
  $(".menu").toggleClass("menu--active");
  $(".header-burger").toggleClass("header-burger--active");
  $("body").toggleClass("lock");
});

$(window).on('load', function() { 
  $('.product__slider--big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    swipe: false,
    asNavFor: '.product__slider--small'
  });
  $('.product__slider--small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.product__slider--big',
    focusOnSelect: true
  });
});

Inputmask().mask(document.querySelectorAll("input"));


let select = function () {
  let selectHeader = document.querySelectorAll('.catalog-select__header');
  let selectItem = document.querySelectorAll('.catalog-select__item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.catalog-select__content'),
          currentText = select.querySelector('.catalog-select__current');
          icon = this.closest(".catalog-select__header");
      currentText.innerText = text;
      select.classList.remove('is-active');
  }
};


var formValidate = function(){
    $('form').each(function(){
      $(this).on("submit", function(){
        $(this).validate({
          rules: {
            //name присваевается инпуту
            name: "required",
            tel: "required",
            email: "required",
            textreq: "required",
            search: "required",
          },
          messages: {
            name: "Введите конкретное имя",
            tel: "Введите конкретный номер",
            email: "Введите конкретный email",
            textreq: "Введите ваш текст",
            search: "Поиск",
          },
          errorPlacement: function (error, element){
            element.attr("placeholder", error[0].outerText);
          }
        });
        if ($(this).valid()) {
          alert("Ваш запрос отправлен! Ожидайте ответа")
        }
        return false;
      })
    });
};

formValidate()
select()
