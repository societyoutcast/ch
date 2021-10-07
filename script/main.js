let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

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
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();


menujs.onclick = function myFunction () {
    var x = document.getElementById('myTopnav');

    if (x.className === 'div-nav') {
        x.className += 'div-nav';
    } else {
        x.className = 'div-nav';
    }
}

menujs2.onclick = function myFunction () {
    var x = document.getElementById('myTopnav2');

    if (x.className === 'div-nav2') {
        x.className += 'div-nav2';
    } else {
        x.className = 'div-nav2';
    }
}

// Swiper 

new Swiper('#swipe-1', {
    slidesPerView: 5,
    touchRatio: 1.3,
    touchAngle: 45,
    touchAngle: 90,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
    
});
new Swiper('.image-slider', {
    slidesPerView: 5,
    touchRatio: 1.3,
    touchAngle: 45,
    touchAngle: 90,
    
});

new Swiper('.image-slider-2', {
    slidesPerView: 3,
    touchRatio: 1.3,
    touchAngle: 45,
    touchAngle: 90,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
});

new Swiper('.image-slider-3', {
    slidesPerView: 2,
    touchRatio: 1.3,
    touchAngle: 45,
    touchAngle: 90,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
});