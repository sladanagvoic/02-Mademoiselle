$(document).ready(function () {




// animation start
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 50) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });
    }



    animation();
    $(window).scroll(function () {
        animation();
    });
// animation end






//form Validation start
    if ($('.contact-form').length > 0) {
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    name: {
                        required: true
                    },
                    'email': {
                        required: true,
                        email: true
                    },
                    subject:{
                         required: true
                    },
                    message: {
                        required: true,
                        maxlength: 255
                    }

                },
                messages: {
                    name: {
                        required: 'Name je obavezno polje!'
                    },
                    'email': {
                        required: 'Email je obavezno polje!',
                        email: 'Molimo unesite validan Email'
                    },
                    subject:{
                         required: 'Subject je obavezno polje!'
                    },
                    message: {
                        required: 'Message je obavezno polje!',
                        maxlength: 'Max Message duzina je 255 karaktera'

                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.error-msg'));
                }

            });
        });
    }//form Validation end





    // toggle-submenu start
    $('.navbar-nav').on('click', '.toggle-submenu', function (e) {
        e.preventDefault();
        $(this).toggleClass('fa-chevron-down fa-chevron-up');
        $(this).parent().next('.submenu').slideToggle();
    });// toggle-submenu end



    if ($('.testimonials-slider').length > 0) {
        $('.testimonials-slider').owlCarousel({
            autoplay: true,
            nav: false,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                }
            }
        });
    }



});

