$('document').ready(function () {

    $('.head').mousemove(e => {
        e.target.style.setProperty('--xpos', `${e.pageX}px`);
        e.target.style.setProperty('--ypos', `${e.pageY}px`);
        $('.glow').css('left', `${e.pageX}px`);
        $('.glow').css('top', `${e.pageY}px`);
    });

    $('.fake-power').hover(e => {
        $('.fake-power img').fadeIn(500);
    }, e => {
        $('.fake-power img').fadeOut(500);
    });

    // class="animate_animated animate__zoomOut"
    // for the button on click

    $('.fake-power').click(e => {
        $('.navbar').addClass('flexicution');
        $('.guise').fadeOut(800);
        $('.head').fadeOut(2000);
        $('.power').fadeOut(1000);
        $('.fake-power').fadeOut(1000);
        $('body').css({
            'overflow': 'visible',
            'overflow-x': 'hidden',
            'height': '100%',
            'cursor': 'url(resources/images/cursor.png), auto',
        });
        $('.peekaboo').css('display', 'flex')
    });


    const nb = document.querySelector('.navbar');
    const h = document.querySelector('header');
    const ab = document.querySelector('.about');
    const nl = document.querySelectorAll('.navlink');
    const logo = document.querySelector('.the-light');



 

    const navShrink = new IntersectionObserver(function(entries, navShrink) {
        entries.map(entry => {
            if(entry.isIntersecting) {
                nb.classList.add('tuckNav');
                nl.forEach(e => {
                    e.classList.add('tucklink');
                });
                logo.classList.add('tuckLogo');
            }
            else {
                nb.classList.remove('tuckNav');
                nl.forEach(e => {
                    e.classList.remove('tucklink');
                });
                logo.classList.remove('tuckLogo');
            };
        });
    });
    
    navShrink.observe(ab);
});