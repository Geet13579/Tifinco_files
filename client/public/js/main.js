(function() {
  "use strict";

    // Easy selector helper function
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
        return [...document.querySelectorAll(el)]
        } else {
        return document.querySelector(el)
        }
    }

    // Easy event listener function
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
        }
    }

    // Easy on scroll event listener 
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    // Navbar links active state on scroll
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
        } else {
            navbarlink.classList.remove('active')
        }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    // Scrolls to an element with header offset
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        let elementPos = select(el).offsetTop
        window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
        })
    }

    // Toggle .header-scrolled class to #header when page is scrolled
    let selectHeader = select('#header')
    let selectTopbar = select('#topbar')
    if (selectHeader) {
        const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
            if (selectTopbar) {
            selectTopbar.classList.add('topbar-scrolled')
            }
        } else {
            selectHeader.classList.remove('header-scrolled')
            if (selectTopbar) {
            selectTopbar.classList.remove('topbar-scrolled')
            }
        }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    // Back to top button
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add('active')
        } else {
            backtotop.classList.remove('active')
        }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    // Mobile nav toggle
    on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    
    // Scrool with ofset on links with a class name .scrollto
    on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
        e.preventDefault()

        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile')
            let navbarToggle = select('.mobile-nav-toggle')
            navbarToggle.classList.toggle('bi-list')
            navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
        }
    }, true)

    // Scroll with ofset on page load with hash links in the url
    window.addEventListener('load', () => {
        if (window.location.hash) {
        if (select(window.location.hash)) {
            scrollto(window.location.hash)
        }
        }
    });

    // Preloader
    let preloader = select('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
        preloader.remove()
        });
    }

    /**
   * Hero carousel indicators
   */
    let heroCarouselIndicators = select("#hero-carousel-indicators")
    let heroCarouselItems = select('#heroCarousel .carousel-item', true)

    heroCarouselItems.forEach((item, index) => {
        (index === 0) ?
        heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
        heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
    });

    /**
   * Menu isotope and filter
   */
    window.addEventListener('load', () => {
        $('.day-two').hide();
        $('.day-three').hide();

        let menuContainer = select('.menu-container');
        if (menuContainer) {
        let menuIsotope = new Isotope(menuContainer, {
            itemSelector: '.menu-item',
            layoutMode: 'fitRows',
            filter: '.day-one'
        });

        let menuFilters = select('#menu-flters li', true);
        on('click', '#menu-flters li', function(e) {
            e.preventDefault();
            menuFilters.forEach(function(el) {
            el.classList.remove('filter-active');
            });
            this.classList.add('filter-active');

            menuIsotope.arrange({
            filter: this.getAttribute('data-filter')
            });

        }, true);
        }

    });

    /**
   * Timer
   */
    var countDownDate = new Date("Nov 13, 2022 15:37:25").getTime();
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("eventdata").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("eventdata").innerHTML = "EXPIRED";
      }
    }, 1000);

    /**
   * sponsors
   */
    tns({
        container: '.sponsors-logo-carousel',
        autoplay: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        gutter: 15,
        nav: false,
        controls: false,
        responsive: {
            0: {
                items: 1,
            },
            540: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });


})()