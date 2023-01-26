

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            // $('#main-logo').css('display', 'none');
            $('#main-logo').css('height', '7vw');
            $('.sticky').css('padding', '0');
            $('.sticky').css('padding-top', '0.3em');
            $('.navbar').addClass("sticky");
        }else{
            $('#main-logo').css('height', '10vw');
            $('#main-logo').css('display', 'block');
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //Slider up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");      
    });

    $('#ispv').click(function(){
        $('#exampleModalLabel').text('Indemnización Sustitutiva de la Pensión de Vejez');
        $('#exampleModalContent').empty();
        $('#exampleModalContent').append('<div class="box cu-content"><img src="./images/portafolio/indemnizacion sustitutiva.jpg" style="height:15em;margin-bottom:0.3em;" alt=""><div class="text" style="margin-bottom:0.4em;"><b>Indemnización Sustitutiva de la Pensión de Vejez</b></div><br/><p>Es un nuevo estudio a la liquidación realizada por Colpensiones, cuando el ciudadano queda mal liquidado, en la mayoría de los casos se debe reliquidar.</p></div>');
    })
    $('#rispv').click(function(){
        $('#exampleModalLabel').text('Reliquidación de la Indemnización Sustitutiva de la Pensión de Vejez');
        $('#exampleModalContent').empty();
        $('#exampleModalContent').append('<div class="box cu-content"><img src="./images/portafolio/indemnizacion2.jpg" style="height:15em;margin-bottom:0.3em;" alt=""><div class="text" style="margin-bottom:0.4em;"><b>Reliquidación de la Indemnización Sustitutiva de la Pensión de Vejez</b></div><br/><p>Es un nuevo estudio a la liquidación realizada por Colpensiones, cuando el ciudadano cree estar mal liquidado.</p></div>');
    })
    $('#pv').click(function(){
        $('#exampleModalLabel').text('Pensión de Vejez');
        $('#exampleModalContent').empty();
        $('#exampleModalContent').append('<div class="box cu-content"><img src="./images/portafolio/jevez o jubilacion.jpg" style="height:15em;margin-bottom:0.3em;" alt=""><div class="text" style="margin-bottom:0.4em;"><b>Pensión de Vejez</b></div><br/><p>Es una prestación social la cual es reconocida al tener la edad requerida y por haber cotizado las semanas exigidas por la Ley para obtener el derecho.</p></div>');
    })
    $('#ps').click(function(){
        $('#exampleModalLabel').text('Pensión de Sobrevivientes');
        $('#exampleModalContent').empty();
        $('#exampleModalContent').append('<div class="box cu-content"><img src="./images/portafolio/sobrevivencia.jpg" style="height:15em;margin-bottom:0.3em;" alt=""><div class="text" style="margin-bottom:0.4em;"><b>Pensión de Sobrevivientes</b></div><br/><p>La pensión de sobrevivientes es el derecho y prestación que se reconoce a los beneficiarios de una persona que fallece y que en vida fue pensionada o tuviese cotizaciones al sistema pensional y cumpliese los requisitos de Ley.</p></div>');
    })
    $('#dcfp').click(function(){
        $('#exampleModalLabel').text('Devolución de Aportes Fondo Privado');
        $('#exampleModalContent').empty();
        $('#exampleModalContent').append('<div class="box cu-content"><img src="./images/portafolio/capital fondo privado.jpg" style="height:15em;margin-bottom:0.3em;" alt=""><div class="text" style="margin-bottom:0.4em;"><b>Devolución de Aportes Fondo Privado</b></div><br/><p>Es el derecho que se tiene a la devolución del capital ahorrado incluidos los rendimientos financieros cuando no se han reunido los requisitos necesarios para obtener la pensión.</p></div>');
    })
    $('#tfpc').click(function(){
        $('#exampleModalLabel').text('Traslado de fondo privado a Colpensiones');
        $('#exampleModalContent').empty();
        $('#exampleModalContent').append('<div class="box cu-content"><img src="./images/portafolio/relquidacion vejez.jpg" style="height:15em;margin-bottom:0.3em;" alt=""><div class="text" style="margin-bottom:0.4em;"><b>Traslado de fondo privado a Colpensiones</b></div><br/><p>Es declarar jurídicamente la nulidad del traslado efectuado con anterioridad de Colpensiones a un fondo privado, por falta de asesoría e información real y veraz acerca del futuro pensional.</p></div>');
    })
    $('#pi').click(function(){
        $('#exampleModalLabel').text('Pensión de Invalidez');
        $('#exampleModalContent').empty();
        $('#exampleModalContent').append('<div class="box cu-content"><img src="./images/portafolio/nulidad.jpg" style="height:15em;margin-bottom:0.3em;" alt=""><div class="text" style="margin-bottom:0.4em;"><b>Pensión de Invalidez</b></div><br/><p>Es una prestación económica mensual a aquella persona que se ha calificado como inválida y que ha perdido el 50% o más de su capacidad laboral, además de contar con las semanas cotizadas exigidas por la Ley.</p></div>');
    })

    //typed animation script

    // var typed = new Typed(".typing",{
    //     // strings: ["Indemnización Sustitutiva de la Pensión de Vejez", "Reliquidación de la Indemnización Sustitutiva de la Pensión de Vejez", "Pensión de Vejez y/o Jubilación", "Reliquidación de Pensión de Vejez y/o Jubilación", "Pensión de Sobrevivencia", "Devolución de Capital Fondo Privado", "Nulidad de Traslado"],
    //     strings: [""],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true

    // })

    var typed = new Typed(".typing2",{
        strings: [""],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    })

    //owl carousel script
    $('.owl-carousel').owlCarousel({
        margin: 15,
        nav: true,
        // loop: true,
        navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
    });
});