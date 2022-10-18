setTimeout(function() {
    $('.trust-area').parallax({imageSrc: './img/fundo-parallax.jpg'})
}, 250)


$('.filter-btn').on('click', function() {
    
    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'pias-btn') {
        eachBoxes('pias', boxes);
    } else if(type == 'ilhas-btn') {
        eachBoxes('ilhas', boxes);
    } else if(type == 'lavatorios-btn') {
        eachBoxes('lavatorios', boxes);
    } else if(type == 'lavanderias-btn') {
        eachBoxes('lavanderias', boxes);
    } else {
        eachBoxes('all', boxes);
    }
});

function eachBoxes(type, boxes) {
    if(type == 'all') {
        $(boxes).fadeIn();
    } else {
        $(boxes).each(function() {
            if(!$(this).hasClass(type)) {
                $(this).fadeOut('slow');

            } else {
                $(this).fadeIn();
            }
        });
    }
    
}

const url = 'https://wa.me/5511989535288'
const btn = document.querySelector('#contact-btn')
const btn2 = document.querySelector('#call-btn')

function openInNewTab(url) {
    const win = window.open(url, '_blank')
    win.focus()
}

btn.addEventListener('click', () => {
    openInNewTab(url)
})

btn2.addEventListener('click', () => {
    openInNewTab(url)
})

let navBtn = $('.nav-item');

let bannerSection = $('#mainSlider');
let aboutSection = $('#about-area');
let servicesSection = $('#services-area');
let productSection = $('#product-area');
let portfolioSection = $('#portfolio-area');
let contactSection = $('#contact-area');
let localSection = $('#local-area');

let scrollTo = '';

$(navBtn).click(function(){
    let btnId = $(this).attr('id');

    if(btnId == 'about-menu') {
        scrollTo = aboutSection;
    } else if(btnId == 'services-menu') {
        scrollTo = servicesSection;
    } else if(btnId == 'product-menu') {
        scrollTo = productSection;
    } else if(btnId == 'projects-menu') {
        scrollTo = portfolioSection;
    } else if(btnId == 'contact-menu') {
        scrollTo = contactSection;
    } else if(btnId == 'local-menu') {
        scrollTo = localSection;
    } else {
        scrollTo = bannerSection
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
})

