

$(window).scroll( function(){
    // bagian header
    var wScroll = $(this).scrollTop();
    $('.header h1').css({
        'transform' : 'translate(0px,'+ wScroll/2 +'%)'
    });
    $('.header p').css({
        'transform' : 'translate(0px,'+ wScroll/1.2 +'%)'
    });
    // akhir bagian header



    // program
    if(wScroll > $('section.program').offset().top -100){
        $('.service .layanan').addClass('muncul');
    }
    if(wScroll < 100){
        $('.service .layanan').removeClass('muncul');
    }
    // end program


    // about
    if(wScroll > $('section.about').offset().top -100){
        $('.left-about').addClass('about-active');
    }
    if(wScroll > $('section.about').offset().top -100){
        $('.right-about').addClass('about-active');
    }
    if(wScroll < 100){
        $('.right-about').removeClass('about-active');
        console.log('ok')
    }
    if(wScroll < 100){
        $('.left-about').removeClass('about-active');
    }
    // end about

    // feature
    let cards = document.querySelectorAll(".card");
    let stackArea = document.querySelector(".stack-area");

    function rotateCards() {
      let angle = 0;
      cards.forEach((card) => {
        if (card.classList.contains("active")) {
          card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
          angle = angle - 10;
        }
      });
    }

    rotateCards();

    window.addEventListener("scroll", () => {
      let proportion =
        stackArea.getBoundingClientRect().top / window.innerHeight;
      if (proportion <= 0) {
        let n = cards.length;
        let index = Math.ceil((proportion * n) / 2);
        index = Math.abs(index) - 1;
        for (let i = 0; i < n; i++) {
          if (i <= index) {
            cards[i].classList.add("active");
          } else {
            cards[i].classList.remove("active");
          }
        }
        rotateCards();
      }
    });
});