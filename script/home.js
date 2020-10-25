$(document).ready(function () {
    $.getJSON('./content/home.json', function (data) {
        $.each(data.projects, function () { renderWork(this) });
    })
    //scroll hint
    $('.scroll-hint').click(function(){
        smoothScrollTo('#work')
    })
    //avatar click
    $('.avatar').click(function(){
        smoothScrollTo('#about')
    })
})

function renderWork(a) {
    var img = $('<img/>').attr('src', a.img),
        video = $('<video loop playsinline preload/>').attr('src', a.video),
        wrap = $('<div/>').addClass('img-wrap')
            .append(img).append(video)

        arrow = '<span> →</span>',
        title = $('<h3/>').append(a.title + arrow),
        caption = $('<p/>').text(a.caption);
    var workCover = $('<a/>').addClass('work')
        .attr('href', a.href)
        .append(wrap)
        .append(title)
        .append(caption)
        .hover(function () { play(this) }, function () { stop(this) })
    $('.gallery').append(workCover);
}

function play(a) {
    var video = $(a).children('.img-wrap').children('video').get(0);
    video.play();
}
function stop(a) {
    var video = $(a).children('.img-wrap').children('video').get(0);
    video.pause();
    video.currentTime = 0;
}

var cursor = document.getElementById('cursor');
    window.addEventListener('mousemove' , function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    });

    //CURSOR HOVER ZOOM
    $(".nav-logo, a, .hero-text, .hero-arrow, .grid-item").hover(function() {
        $("#cursor").addClass("zoom");
//        console.log("is this thing on")
    }, function() {
        $("#cursor").removeClass("zoom");
    });
