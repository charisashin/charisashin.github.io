$(document).ready(function () {
    renderNav();
    setTheme(localStorage.getItem('theme'));
    scrollDetect();
    renderFooter();
})

function renderNav() {
    var path = $('html').attr('path');
    var nav = $('nav');
    var logoImg = $('<div/>').addClass();
    var logo = $('<a/>').addClass('logo');
    var work = $('<a/>').append('Work'),
        about = $('<a/>').append('About'),
        cv = $('<a/>').append('Resume'),
        theme_icon = themeIcon(),
        menu_icon = menuIcon();

    if (path == 'home') {
        logo.append(logoImg).click(function () { closeMenu(); smoothScrollTo('#intro') });
        work.click(function(){closeMenu(); smoothScrollTo('.intro')});
        about.click(function(){closeMenu(); smoothScrollTo('#about')});
        cv.attr('href','./assets/CharisaShinResume.pdf')
    } else {
        logo.append(logoImg).attr('href','../index.html')
        work.attr('href','../index.html')
        about.attr('href','../index.html#about')
        cv.attr('href','../assets/CharisaShinResume.pdf')
    }

    var nav_wrap = $('<div/>').addClass('navWrap')
        .append(work)
        .append(about)
        .append(cv)
        .append(theme_icon);

    nav.append(logo).append(nav_wrap).append(menu_icon);
}

function menuIcon() {
    var menu_icon = $('<div/>').addClass('menu'),
        rect1 = $('<div/>').addClass('rect').attr('i', 1),
        rect2 = $('<div/>').addClass('rect').attr('i', 2),
        rect3 = $('<div/>').addClass('rect').attr('i', 3),
        rect4 = $('<div/>').addClass('rect').attr('i', 4);
    menu_icon.append(rect1).append(rect2).append(rect3).append(rect4);
    menu_icon.click(function () {
        menu_icon.toggleClass('open')
        $('.navWrap').toggleClass('open');
    })
    return menu_icon;
}

function themeIcon() {
    var themeIcon = $('<div/>').addClass('theme-switch');
    themeIcon.click(function () { closeMenu();switchTheme() })
    return themeIcon;
}

function switchTheme() {
    var theme = $('html').attr('data-theme');
    if (theme == 'light') {
        setTheme('dark');
    } else if (theme == 'dark') {
        setTheme('light')
    }
}

function setTheme(theme) {
    if (theme == null || theme == 'light') {
        $('html').attr('data-theme', 'light');
        $('.theme-switch').removeClass('dark');
        localStorage.setItem('theme', 'light')
    }
    else if (theme == 'dark') {
        $('html').attr('data-theme', 'dark');
        $('.theme-switch').addClass('dark');
        localStorage.setItem('theme', 'dark')
    }
}

function closeMenu() {
    $('.menu').removeClass('open')
    $('.navWrap').removeClass('open');
}

function scrollDetect() {
    var nav = $('nav');
    $(window).scroll(function () {
        var before = $(window).scrollTop();
        $(window).scroll(function () {
            var after = $(window).scrollTop();
            if (before <= 0) {
                nav.removeClass('hide')
                // before = after;
            }
            else if (before < after) {
                nav.addClass('hide')
                // console.log('上');
                before = after;
            }
            else if (before > after) {
                nav.removeClass('hide')
                // console.log('下');
                before = after;
            };
        });
    });
}

var cursor = document.getElementById('cursor');
    window.addEventListener('mousemove' , function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    });

    //CURSOR HOVER ZOOM
    $(".nav-logo, a, .hero-text, .hero-arrow, .grid-item, nav").hover(function() {
        $("#cursor").addClass("zoom");
//        console.log("is this thing on")
    }, function() {
        $("#cursor").removeClass("zoom");
    });

// smooth scroll
function smoothScrollTo(id) {
    $('html, body').animate({
        scrollTop: ($(id).offset().top)
    }, 800);
}
//render footer
function renderFooter(){
    console.log('footer')
    var footer = $('<footer/>').text('Designed & Built by Charisa Shin ✨ 2020');
    $('body').append(footer);
}
