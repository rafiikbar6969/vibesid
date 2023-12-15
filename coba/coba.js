$(window).scroll( function(){
    // bagian header
    var wScroll = $(this).scrollTop();
    $('.isi h2').css({
        'transform' : 'translate(0px,'+ wScroll/1.1 +'%)'
    });
    $('.isi p').css({
        'transform' : 'translate(0px,'+ wScroll/1.2 +'%)'
    });
    // akhir bagian header
});