$(document).ready(function () {
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 20
    })
    const bars = document.querySelectorAll('.progress_bar');
    console.log(bars)
    bars.forEach((bar) => {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
        // console.log(percentage)
    })
    const counters = document.querySelectorAll('.counter');


    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = 0;

            let target = +counter.dataset.count;
            let step = target / 100;

            let countIt = function () {
                let displayedCount = +counter.innerText
                if (displayedCount < target) {
                    counter.innerText = Math.ceil(displayedCount + step);
                    setTimeout(countIt, 1);

                } else {
                    counter.innerText = target;
                }
            }
            countIt();
        })
    }

    // runCounter();

    let counterSection = document.querySelector('.counter_wrapper');
    let options = {
        rootMargin: '0px 0px -200px 0px'
    }
    let done = 0;
    const sectionObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && done !== 1) {
            done = 1;
            runCounter()
        }
    }, options)
    sectionObserver.observe(counterSection)

    var $wrapper = $('.portfolio_wrapper');


    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOption: {
            duration: 750,
            easing: 'linear'
        }
    })
    let links = document.querySelectorAll('.tabs a');
    // console.log(links)

    links.forEach(link => {
        let selector = link.dataset.filter;
        console.log(selector)
        link.addEventListener('click', function (e) {
            // console.log('something')
            e.preventDefault();
            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            })
            links.forEach(link => {
                link.classList.remove('active');
            })
            e.target.classList.add('active')

        })

    })
    $('.magnifiy').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true

        },
        zoom: {
            enabled: true
        }
    })

    //slider

    $('.slider').slick({
        arrows:false,
        autoplay:true
    })
})