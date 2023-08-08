export function landing_page(editor, options = {}) {
    editor.Blocks.add('landing_page', {
        label : 'landing_page',
        content: `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <!-- Required meta tags -->
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"><!-- font awesome 5 free -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"><!-- Bootstrap CSS -->
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"><!-- Poppins font from Google -->
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&amp;display=swap" rel="stylesheet">
          <link rel="preconnect" href="https://fonts.gstatic.com">
          <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;400;600;900&amp;display=swap" rel="stylesheet"><!-- Your Custom CSS file that will include your blocks CSS -->
          <link rel="stylesheet" href="./Template_02.css">
          <title>Your template</title>
        </head>
        
        <body>
          <!-- Put the blocks HTML here -->
          <!------------------------------>
          <!-- HERO ---------------->
          <!------------------------------>
          <header class="hero container-fluid">
            <div class="hero__content container mx-auto">
              <!-- I'm putting the nav inside this "fixed-nav-container" to fix some issues happens on scroll -->
              <div class="fixed-nav-container">
                <nav class="hero-nav position-relative container mx-auto px-0">
                  <ul class="nav w-100 list-unstyled align-items-center p-0">
                    <li class="hero-nav__item"><a href="/"><img class="hero-nav__logo" src="https://svgshare.com/i/RmR.svg" change-src-onscroll="https://svgshare.com/i/RmR.svg" alt="our logo"></a><!-- Don't remove this empty span --><span class="mx-2"></span></li>
                    <li id="hero-menu" class="flex-grow-1 hero__nav-list hero__nav-list--mobile-menu ft-menu">
                      <ul class="hero__menu-content nav flex-column flex-lg-row ft-menu__slider animated list-unstyled p-2 p-lg-0">
                        <li class="flex-grow-1">
                          <ul class="nav nav--lg-side flex-column-reverse flex-lg-row-reverse list-unstyled align-items-center p-0">
                            <li class="flex-grow-1">
                              <ul class="nav nav--lg-side flex-column-reverse flex-lg-row-reverse list-unstyled align-items-center p-0">
                                <li class="hero-nav__item"><a href="https://twitter.com/intent/tweet?text=30%2B%20HTML%20BLOCKS%20TO%20BUILD%20OUTSTANDING%20LANDING%20PAGES&amp;url=https%3A%2F%2Ffrontendor.com%2F" target="_blank" class="btn btn-primary"><p class="mb-0"> Try For Free </p></a></li>
                              </ul>
                            </li>
                            <li class="hero-nav__item"><a href="#!" class="hero-nav__link"><p class="mb-0">FAQ</p></a></li>
                            <li class="hero-nav__item"><a href="#!" class="hero-nav__link"><p class="mb-0">à propos</p></a></li>
                            <li class="hero-nav__item"><a href="#!" class="hero-nav__link"><p class="mb-0">Services</p></a></li>
                          </ul>
                        </li>
                      </ul><button close-nav-menu="" class="ft-menu__close-btn animated"><svg class="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"></path>
                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"></path>
                        </svg></button>
                    </li>
                    <li class="hero-nav__item d-lg-none d-flex flex-row-reverse"><button open-nav-menu="" class="text-center px-2"><i class="fas fa-bars"></i></button></li>
                  </ul>
                </nav>
              </div>
              <div class="hero__body">
                <div class="row px-0 mx-0">
                  <div class="col-lg-6 px-0 mx-0">
                    <h1 class="hero__title mb-4">Titre</h1>
                    <p class="hero__paragraph mb-5">Texte</p>
                    <div class="hero__btns-container"><a class="hero__btn btn btn-primary mb-2 mb-lg-0 mx-1 mx-lg-2" href="#!"><p class="mb-0">Votre action</p></a></div>
                  </div>
                  <div class="col-lg-6 mt-5 mt-lg-0">
                    <div class="hero__img-container"><img class="hero__img w-100" src="https://i.imgur.com/EQ6c19n.png"></div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <script src="https://unpkg.com/tua-body-scroll-lock"></script>
          <script>
            var showDropdown = function(e) {
                e.currentTarget.classList.add("hero-nav__item--show-dropdown")
              },
              hideDropdown = function(e) {
                e.currentTarget.classList.remove("hero-nav__item--show-dropdown")
              },
              toggleDropdown = function(e) {
                e.currentTarget.classList.toggle("hero-nav__item--show-dropdown")
              };
        
            function setupDropdowns(n) {
              document.querySelectorAll(".hero-nav__item--with-dropdown").forEach(function(e) {
                var o, t;
                n.matches ? ((o = e.classList).contains("hero-nav__item--dropdown-left") && o.contains("hero-nav__item--dropdown-right") || (t = e.getBoundingClientRect().width, e.querySelector(".dropdown").style.transform = "translateX(calc(-50% + " + t / 2 + "px))"), e.addEventListener("mouseenter", showDropdown), e.addEventListener("mouseleave", hideDropdown), e.querySelector(".hero-nav__link").removeEventListener("click", toggleDropdown)) : (e.removeEventListener("mouseenter", showDropdown), e.removeEventListener("mouseleave", hideDropdown), e.querySelector(".dropdown").style.transform = "", e.addEventListener("click", toggleDropdown))
              })
            }
            var mediaQuery = window.matchMedia("(min-width: 992px)");
            setupDropdowns(mediaQuery), mediaQuery.addListener(function(e) {
              var o;
              setupDropdowns(e), e.matches && ((o = document.querySelector("#hero-menu")).style.height = "", bodyScrollLock.unlock(o))
            });
            var heroMenu = document.querySelector("#hero-menu");
        
            function closeMenuAndGoTo(o) {
              document.querySelector("#hero-menu").classList.toggle("ft-menu--js-show");
              var e = document.querySelector("#hero-menu");
              if (e.style.height = "", bodyScrollLock.unlock(e), "#" === o || !document.querySelector(o)) return !1;
              setTimeout(function() {
                var e = document.querySelector(o);
                window.scrollTo({
                  top: e.getBoundingClientRect().top,
                  behavior: "smooth"
                })
              }, 250)
            }
            document.querySelector("[close-nav-menu]").onclick = function(e) {
              heroMenu.classList.toggle("ft-menu--js-show"), bodyScrollLock.unlock(heroMenu)
            }, document.querySelector("[open-nav-menu]").onclick = function(e) {
              heroMenu.classList.toggle("ft-menu--js-show"), heroMenu.style.height = window.innerHeight + "px", bodyScrollLock.lock(heroMenu)
            }, document.querySelector("#hero-menu").querySelectorAll("[href*='#']").forEach(function(o) {
              o.onclick = function(e) {
                e.preventDefault(), closeMenuAndGoTo(o.getAttribute("href"))
              }
            });
            var nav = document.querySelector(".hero-nav");
            window.onscroll = function(e) {
              var o = document.querySelector("[change-src-onscroll]");
              window.scrollY > nav.getBoundingClientRect().height ? (nav.classList.contains("hero-nav--is-sticky") || (window.logoSrc = o.getAttribute("src"), o.setAttribute("src", o.getAttribute("change-src-onscroll")), o.setAttribute("change-src-onscroll", logoSrc)), nav.classList.add("hero-nav--is-sticky")) : 0 === window.scrollY && (nav.classList.contains("hero-nav--is-sticky") && (window.logoSrc = o.getAttribute("src"), o.setAttribute("src", o.getAttribute("change-src-onscroll")), o.setAttribute("change-src-onscroll", logoSrc)), nav.classList.remove("hero-nav--is-sticky"))
            };
            var languageDropdown = document.querySelector("[javascript-language-selector]");
            languageDropdown.onclick = function(e) {
              e.target.classList.contains("dropdown__link") && (languageDropdown.querySelector(".dropdown__link--selected").classList.remove("dropdown__link--selected"), e.target.classList.add("dropdown__link--selected"), document.querySelector(".language-image").setAttribute("src", e.target.querySelector("img").getAttribute("src")))
            }
          </script>
          <!------------------------------>
          <!-- RIGHT FEATURE ---------------->
          <!------------------------------>
          <div class="block-8-scr space-between-blocks" style="background: #e1e3e5">
            <div class="container position-relative">
              <div class="row px-2 align-items-center flex-column-reverse flex-lg-row">
                <!-- CONTENT -->
                <div class="col-lg-6 position-relative mt-4 mt-lg-0">
                  <h1 class="block__title mb-3">Titre</h1>
                  <p class="block__paragraph block__paragraph--big mb-5">Texte</p>
                </div><!-- IMAGE -->
                <div class="col-lg-6 my-5 my-lg-0 p-lg-5 text-center">
                  <div class="block-8-scr__img-container position-relative"><img class="block-8-scr__img" src="https://i.imgur.com/NqcwPP0.png"></div>
                </div>
              </div>
            </div>
          </div>
          <!------------------------------>
          <!-- LEFT FEATURE ---------------->
          <!------------------------------>
          <div class="block-8-scr space-between-blocks">
            <div class="container position-relative">
              <div class="row px-2 align-items-center flex-column-reverse flex-lg-row">
                <!-- IMAGE -->
                <div class="col-lg-6 my-5 my-lg-0 p-lg-5 text-center">
                  <div class="block-8-scr__img-container position-relative"><img class="block-8-scr__img" src="https://i.imgur.com/gfEAURj.png"></div>
                </div><!-- CONTENT -->
                <div class="col-lg-6 position-relative mt-4 mt-lg-0">
                  <h1 class="block__title mb-3">Titre</h1>
                  <p class="block__paragraph block__paragraph--big mb-0">Texte</p>
                </div>
              </div>
            </div>
          </div>
          <!------------------------------>
          <!-- RIGHT FEATUR ---------------->
          <!------------------------------>
          <div class="block-8-scr space-between-blocks" style="background: #edecef">
            <div class="container position-relative">
              <div class="row px-2 align-items-center flex-column-reverse flex-lg-row">
                <!-- CONTENT -->
                <div class="col-lg-6 position-relative mt-4 mt-lg-0">
                  <h1 class="block__title mb-3">Titre</h1>
                  <p class="block__paragraph block__paragraph--big mb-5">Votre contenue</p>
                </div><!-- IMAGE -->
                <div class="col-lg-6 my-5 my-lg-0 p-lg-5 text-center">
                  <div class="block-8-scr__img-container position-relative"><img class="block-8-scr__img" src="https://i.imgur.com/owFIYQY.png"></div>
                </div>
              </div>
            </div>
          </div>
          <!------------------------------>
          <!-- TESTIMONIAL ---------------->
          <!------------------------------>
          <div class="block-61 space-between-blocks">
            <div class="container">
              <div class="block__header col-lg-8 col-xl-7 mx-auto text-center px-0">
                <h1 class="block__title">Titre</h1>
              </div>
              <div class="row px-2 pt-4">
                <div class="col-lg-6 pb-5">
                  <div class="testimonial-card-1">
                    <p class="testimonial-card-1__paragraph">Texte</p>
                    <div class="block-61-person">
                      <div><img class="block-61-person__avatar" src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"></div>
                      <div class="px-2"></div>
                      <div class="flex-grow-1 d-flex flex-column"><span class="block-61-person__rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span><span class="block-61-person__name my-1">Ali Boukeroui</span><span class="block-61-person__info">frontendor.com</span></div>
                    </div><span class="testimonial-card-1__quote-symbol"><i class="fas fa-quote-left"></i></span>
                  </div>
                </div>
                <div class="col-lg-6 pb-5">
                  <div class="testimonial-card-1">
                    <p class="testimonial-card-1__paragraph">Texte</p>
                    <div class="block-61-person">
                      <div><img class="block-61-person__avatar" src="https://uifaces.co/our-content/donated/ukegoVAy.jpg"></div>
                      <div class="px-2"></div>
                      <div class="flex-grow-1 d-flex flex-column"><span class="block-61-person__rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span><span class="block-61-person__name my-1">Ali Boukeroui</span><span class="block-61-person__info">frontendor.com</span></div>
                    </div><span class="testimonial-card-1__quote-symbol"><i class="fas fa-quote-left"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!------------------------------>
          <!-- FAQ ---------------->
          <!------------------------------>
          <div class="block-39 space-between-blocks">
            <div class="container">
              <!-- HEADER -->
              <div class="block__header col-lg-8 col-xl-7 mx-auto text-center mb-5">
                <h1 class="block__title">Questions posés</h1>
              </div>
              <div class="row px-2">
                <div class="col-lg-6">
                  <div class="content-block">
                    <h4 class="content-block__title">Votre Question</h4>
                    <p class="content-block__paragraph">Votre contenue</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="content-block">
                    <h4 class="content-block__title">Votre Question</h4>
                    <p class="content-block__paragraph">Votre Contenue</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="content-block">
                    <h4 class="content-block__title">Votre Question</h4>
                    <p class="content-block__paragraph">Votre Contenue</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="content-block">
                    <h4 class="content-block__title">Votre Question</h4>
                    <p class="content-block__paragraph">Votre Contenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!------------------------------>
          <!-- CTA ---------------->
          <!------------------------------>
          <div class="block-32 space-between-blocks">
            <div class="container">
              <div class="col-lg-8 col-xl-7 mx-auto text-center mb-4">
                <h1 class="block__title">Commencez Maintenant</h1>
              </div>
              <div class="text-center mt-1"><a href="#!" class="btn btn-primary"><p class="mb-0">Commencez</p></a></div>
            </div>
          </div>
          <script>
            function submitForm(t) {
              t.preventDefault();
              var n = t.target.querySelector("button");
              if (n.classList.contains("btn--loading")) return !1;
              n.classList.add("btn--loading");
              try {
                setTimeout(function() {
                  n.classList.remove("btn--loading")
                }, 2e3)
              } catch (t) {
                console.log(t), n.classList.remove("btn--loading")
              }
            }
          </script>
          <!------------------------------>
          <!-- FOOTER ---------------->
          <!------------------------------>
          <div class="block-44 py-5">
            <div class="container">
              <div class="row px-0 mx-0 justify-content-center align-items-center">
                <div class="block-44__logo-container"><img class="block-44__logo" src="https://svgshare.com/i/RnS.svg"></div>
                <ul class="block-44__list list-unstyled justify-content-center mb-0">
                  <li class="block-44__li-1"><a href="#!" class="block-44__link"><p class="mb-0">Cookies</p></a></li>
                  <li class="block-44__li-1"><a href="#!" class="block-44__link"><p class="mb-0">Documents</p></a></li>
                  <li class="block-44__li-1"><a href="#!" class="block-44__link"><p class="mb-0">Privée</p></a></li>
                  <li class="block-44__li-1"><a href="#!" class="block-44__link"><p class="mb-0">Les services</p></a></li>
                </ul>
              </div>
            </div>
            <hr class="block-44__divider">
          </div><!-- Put the blocks HTML here -->
          <style>
          :root {
            --primary: #a883f8;
            --secondary: #fcf6ef;
            --primary-invert: #fff;
            --secondary-invert: #000;
            --gradient-primary: linear-gradient(230deg, #000, #000);
            --gradient-secondary: linear-gradient(230deg, #071836, #020024);
            --text-primary: #000;
            --elements-roundness: 0;
            --space-between-blocks: 5.3rem;
            --space-between-blocks-small-screens: 3rem
          }
          
          body {
            font-family: Poppins, sans-serif;
            color: var(--text-primary)
          }
          
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "JetBrains Mono", monospace;
            letter-spacing: -.1rem
          }
          
          .space-between-blocks {
            padding-top: var(--space-between-blocks-small-screens);
            padding-bottom: var(--space-between-blocks-small-screens)
          }
          
          @media (min-width:992px) {
            .space-between-blocks {
              padding-top: var(--space-between-blocks);
              padding-bottom: var(--space-between-blocks)
            }
          }
          
          button {
            color: inherit;
            padding: 0;
            background: 0 0;
            border: none
          }
          
          button:focus {
            outline: 0;
            box-shadow: none
          }
          
          .btn {
            font-size: 1rem;
            padding: .8rem 1.6rem;
            border: none;
            transition: .2s all;
            border-radius: var(--elements-roundness)
          }
          
          @media (min-width:992px) {
            .btn {
              padding: .8rem 2rem
            }
          }
          
          .btn,
          .btn:focus,
          .btn:hover {
            border: none;
            box-shadow: none;
            outline: 0
          }
          
          .btn:focus,
          .btn:hover {
            transform: scale(1.05)
          }
          
          .btn-primary,
          .btn-primary:focus,
          .btn-primary:hover {
            background: var(--secondary-invert);
            color: var(--primary-invert);
            box-shadow: 8px 8px 0 var(--primary)
          }
          
          .btn-secondary,
          .btn-secondary:focus,
          .btn-secondary:hover {
            background: var(--gradient-secondary, --secondary);
            color: var(--secondary-invert)
          }
          
          .btn-primary--empty,
          .btn-primary--empty:focus,
          .btn-primary--empty:hover {
            color: var(--primary)
          }
          
          .btn-sm {
            padding: .8rem
          }
          
          .highlight {
            color: var(--primary)
          }
          
          .block__header {
            margin-bottom: 4rem
          }
          
          .block__title {
            font-size: 2rem;
            font-weight: 900;
            line-height: 1.4
          }
          
          @media (min-width:992px) {
            .block__title {
              font-size: 2.5rem
            }
          
            .block__title--big {
              font-size: 3rem;
              line-height: 1.1
            }
          }
          
          @media (min-width:1200px) {
            .block__title--big {
              font-size: 3.5rem;
              line-height: 1.2
            }
          }
          
          .block__paragraph {
            font-size: 1.1rem;
            line-height: 1.5;
            opacity: .9
          }
          
          @media (min-width:992px) {
            .block__paragraph--big {
              font-size: 1.2rem;
              line-height: 1.6
            }
          }
          
          .fr-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            height: 2.5rem;
            width: 2.5rem;
            border-radius: 5px;
            background: rgba(0, 0, 0, .04);
            margin-bottom: 1.5rem;
            transition: .5s
          }
          
          .fr-icon--medium {
            font-size: 1.5rem;
            height: 3rem;
            width: 3rem
          }
          
          .fr-icon--large {
            font-size: 1.2rem;
            height: 3.25rem;
            width: 3.25rem
          }
          
          @media (min-width:992px) {
            .fr-icon--large {
              height: 3.8rem;
              width: 3.8rem;
              font-size: 1.9rem
            }
          }
          
          .hero {
            --hero-nav-height: 100px;
            --dropdown-background: white;
            --dropdown-text-color: var(--text-primary);
            --block-background: linear-gradient(to top, rgb(0 0 0 / 3%), transparent);
            --block-text-color: var(--text-primary);
            background: var(--block-background);
            color: var(--block-text-color);
            position: relative;
            display: flex;
            flex-direction: column
          }
          
          .hero-nav {
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: var(--hero-nav-height);
            display: flex;
            align-items: center;
            z-index: 2
          }
          
          .hero-nav__item {
            margin: auto;
            font-size: 1.1rem
          }
          
          @media (min-width:992px) {
            .hero-nav__item {
              margin: 0 1rem
            }
          }
          
          @media (min-width:992px) {
            .nav--lg-side {
              flex-direction: row-reverse
            }
          }
          
          .hero-nav__logo {
            height: 35px
          }
          
          .hero-nav__link {
            color: inherit;
            opacity: .9
          }
          
          .hero-nav__link:focus,
          .hero-nav__link:hover {
            color: inherit;
            text-decoration: none;
            opacity: 1
          }
          
          .ft-menu {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 2000;
            -webkit-animation-name: fadeOut;
            animation-name: fadeOut;
            -webkit-animation-duration: .5s;
            animation-duration: .5s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both
          }
          
          @media (print),
          (prefers-reduced-motion:reduce) {
            .ft-menu {
              -webkit-animation-duration: 1ms !important;
              animation-duration: 1ms !important;
              -webkit-transition-duration: 1ms !important;
              transition-duration: 1ms !important;
              -webkit-animation-iteration-count: 1 !important;
              animation-iteration-count: 1 !important
            }
          }
          
          .ft-menu .hero-nav__item {
            width: 100%;
            margin-top: .75rem;
            margin-bottom: .75rem
          }
          
          @media (min-width:992px) {
            .ft-menu .hero-nav__item {
              width: auto;
              margin-top: 0;
              margin-bottom: 0
            }
          }
          
          .ft-menu--js-show {
            -webkit-animation-name: fadeIn;
            animation-name: fadeIn;
            -webkit-animation-duration: .5s;
            animation-duration: .5s
          }
          
          .ft-menu::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background: var(--primary);
            opacity: .9;
            z-index: -1
          }
          
          @media (min-width:992px) {
            .ft-menu {
              -webkit-animation-name: none;
              animation-name: none;
              position: static;
              z-index: auto
            }
          
            .ft-menu::before {
              content: none
            }
          }
          
          .ft-menu__slider {
            color: var(--dropdown-text-color);
            background: var(--dropdown-background);
            width: 80%;
            height: 100%;
            overflow: hidden;
            transform: translateX(-100%);
            transition: .5s transform
          }
          
          @media (min-width:992px) {
            .ft-menu__slider {
              --block-background: transparent;
              color: var(--block-text-color);
              width: auto;
              height: auto;
              background: 0 0;
              transform: none;
              display: flex;
              align-items: center
            }
          }
          
          .ft-menu--js-show .ft-menu__slider {
            transform: translateX(0)
          }
          
          .ft-menu__close-btn {
            color: var(--primary-invert);
            position: absolute;
            right: 0;
            top: 0;
            font-size: 2rem;
            margin: 1rem;
            transform: translateX(100%);
            transition: .5s transform
          }
          
          @media (min-width:992px) {
            .ft-menu__close-btn {
              display: none
            }
          }
          
          .ft-menu--js-show .ft-menu__close-btn {
            transform: translateX(0)
          }
          
          .ft-menu__close-btn:focus,
          .ft-menu__close-btn:hover {
            color: var(--primary-invert)
          }
          
          @-webkit-keyframes fadeIn {
            from {
              visibility: hidden;
              opacity: 0
            }
          
            to {
              visibility: visible;
              opacity: 1
            }
          }
          
          @keyframes fadeIn {
            from {
              visibility: hidden;
              opacity: 0
            }
          
            to {
              visibility: visible;
              opacity: 1
            }
          }
          
          @-webkit-keyframes fadeOut {
            from {
              visibility: visible;
              opacity: 1
            }
          
            to {
              visibility: hidden;
              opacity: 0
            }
          }
          
          @keyframes fadeOut {
            from {
              visibility: visible;
              opacity: 1
            }
          
            to {
              visibility: hidden;
              opacity: 0
            }
          }
          
          .fixed-nav-container {
            height: var(--hero-nav-height)
          }
          
          .hero-nav--is-sticky {
            color: var(--dropdown-text-color);
            background: var(--dropdown-background);
            position: fixed !important;
            left: 0;
            right: 0;
            margin: auto;
            box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
            padding: 1rem !important;
            height: 60px;
            transition: .2s height;
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            -webkit-animation-name: slideInDown;
            animation-name: slideInDown
          }
          
          @media (min-width:992px) {
            .hero-nav--is-sticky {
              height: 80px;
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px;
              padding: 1rem .5rem !important
            }
          }
          
          .hero-nav--is-sticky .ft-menu__slider {
            color: var(--dropdown-text-color)
          }
          
          .hero-nav--is-sticky .btn {
            background: var(--gradient-primary);
            color: var(--primary-invert)
          }
          
          @-webkit-keyframes slideInDown {
            from {
              -webkit-transform: translate3d(0, -100%, 0);
              transform: translate3d(0, -100%, 0);
              visibility: visible
            }
          
            to {
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0)
            }
          }
          
          @keyframes slideInDown {
            from {
              -webkit-transform: translate3d(0, -100%, 0);
              transform: translate3d(0, -100%, 0);
              visibility: visible
            }
          
            to {
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0)
            }
          }
          
          .ft-menu__slider .hero-nav__item {
            font-size: 1.1rem;
            padding: 0 1rem
          }
          
          @media (min-width:992px) {
            .ft-menu__slider .hero-nav__item {
              padding: 0
            }
          }
          
          .hero-nav__link {
            display: flex;
            align-items: center;
            outline: 0 !important
          }
          
          .ft-menu__slider {
            overflow-x: hidden;
            overflow-y: auto
          }
          
          @media (min-width:992px) {
            .ft-menu__slider {
              overflow: visible
            }
          }
          
          .hero-nav__item--with-dropdown {
            position: relative;
            cursor: pointer
          }
          
          @media (min-width:992px) {
            .hero-nav__item--with-dropdown::before {
              content: "";
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              height: 176%
            }
          }
          
          .hero-nav__dropdown {
            position: static;
            width: 100%;
            height: auto;
            font-size: .9rem;
            border-top: 1px solid rgba(0, 0, 0, .1);
            max-height: 0;
            overflow: hidden;
            visibility: hidden;
            opacity: 0;
            transition: .3s all;
            color: var(--dropdown-text-color);
            text-align: initial;
            cursor: auto
          }
          
          @media (min-width:992px) {
            .hero-nav__dropdown {
              position: absolute;
              top: 176%;
              left: 0;
              margin-top: 0;
              border-radius: 10px;
              border-top: none;
              box-shadow: 0 14px 50px 0 rgba(0, 0, 0, .1);
              background: var(--dropdown-background);
              z-index: 2;
              max-height: 0;
              padding: 2.3rem 3rem 2rem 2rem;
              overflow: visible;
              transition: .3s all
            }
          }
          
          .dropdown--important {
            position: absolute;
            width: auto !important;
            top: 176%;
            left: 0;
            margin-top: 0;
            border-radius: 10px;
            border-top: none;
            box-shadow: 0 14px 50px 0 rgba(0, 0, 0, .1);
            background: var(--dropdown-background);
            z-index: 2;
            max-height: 0;
            padding: 2rem;
            padding-right: 3rem;
            overflow: visible;
            transition: .3s all
          }
          
          @media (min-width:992px) {
            .dropdown--of-1-columns {
              width: 400px
            }
          
            .dropdown--of-2-columns {
              width: 700px
            }
          
            .dropdown--language-selector {
              width: 250px
            }
          }
          
          .hero-nav__item--show-dropdown .hero-nav__dropdown {
            margin-top: 1rem;
            visibility: visible;
            opacity: 1;
            max-height: 9999px;
            padding-top: 1rem
          }
          
          @media (min-width:992px) {
            .hero-nav__item--show-dropdown .hero-nav__dropdown {
              margin-top: 0;
              padding: 2.3rem 3rem 2rem 2rem
            }
          }
          
          .hero-nav__item-chevron {
            transition: .3s all
          }
          
          .hero-nav__item--show-dropdown .hero-nav__item-chevron {
            transform: rotate(180deg)
          }
          
          .hero-nav__item--dropdown-left .hero-nav__dropdown {
            transform: translateX(-15px) !important
          }
          
          .hero-nav__item--dropdown-left .hero-nav__dropdown::before {
            left: 15%;
            right: auto
          }
          
          .hero-nav__item--dropdown-right .hero-nav__dropdown {
            transform: translateX(15px) !important;
            left: auto;
            right: 0
          }
          
          .hero-nav__item--dropdown-right .hero-nav__dropdown::before {
            left: auto;
            right: 15%
          }
          
          @media (min-width:992px) {
            .hero-nav__item--lg-dropdown-left .hero-nav__dropdown {
              transform: translateX(-15px) !important;
              left: 0;
              right: auto
            }
          
            .hero-nav__item--lg-dropdown-left .hero-nav__dropdown::before {
              left: 15%;
              right: auto
            }
          
            .hero-nav__item--lg-dropdown-right .hero-nav__dropdown {
              transform: translateX(15px) !important;
              left: auto;
              right: 0
            }
          
            .hero-nav__item--lg-dropdown-right .hero-nav__dropdown::before {
              left: auto;
              right: 15%
            }
          }
          
          .dropdown--important::before {
            content: "";
            width: 17.1px;
            height: 6.85px;
            background: var(--dropdown-background);
            clip-path: polygon(50% 0, 0 100%, 100% 100%);
            position: absolute;
            top: -6px;
            left: 0;
            right: 0;
            margin: auto
          }
          
          @media (min-width:992px) {
            .hero-nav__dropdown::before {
              content: "";
              width: 17.1px;
              height: 6.85px;
              background: var(--dropdown-background);
              clip-path: polygon(50% 0, 0 100%, 100% 100%);
              position: absolute;
              top: -6px;
              left: 0;
              right: 0;
              margin: auto
            }
          }
          
          .dropdown__title {
            color: var(--dropdown-text-color);
            opacity: .7;
            font-weight: 600;
            font-size: .9rem;
            display: block;
            margin-top: .5rem;
            margin-bottom: 1.18rem
          }
          
          .dropdown__link {
            display: flex;
            align-items: flex-start;
            position: relative;
            cursor: pointer;
            margin-bottom: 1.3rem;
            color: inherit;
            text-decoration: none
          }
          
          .dropdown__link:focus,
          .dropdown__link:hover {
            color: inherit;
            text-decoration: none
          }
          
          [javascript-language-selector] .dropdown__link {
            border-radius: .5rem;
            padding: .7rem;
            margin-bottom: 3px
          }
          
          .dropdown__link::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%
          }
          
          .dropdown__link:last-child {
            margin: 0
          }
          
          [javascript-language-selector] .dropdown__link--selected,
          [javascript-language-selector] .dropdown__link:focus,
          [javascript-language-selector] .dropdown__link:hover {
            background: rgba(0, 0, 0, .06)
          }
          
          .dropdown__icon {
            width: 35px;
            height: 35px;
            background-image: var(--gradient-primary);
            color: var(--primary-invert);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10rem;
            font-size: 13px
          }
          
          @media (min-width:992px) {
            .dropdown__icon {
              width: 40px;
              height: 40px
            }
          }
          
          .dropdown__item {
            max-width: 250px
          }
          
          .dropdown__item-title {
            font-size: .9rem;
            font-weight: 600;
            line-height: 1.5;
            position: relative;
            z-index: -1
          }
          
          @media (min-width:992px) {
            .dropdown__item-title {
              white-space: nowrap
            }
          }
          
          .dropdown__item-title::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 20%;
            width: 100%;
            background: var(--secondary);
            transform: translateY(2px);
            opacity: 0;
            transition: .2s
          }
          
          [javascript-language-selector] .dropdown__item-title {
            white-space: nowrap
          }
          
          [javascript-language-selector] .dropdown__item-title::before {
            display: none
          }
          
          .dropdown__link:focus .dropdown__item-title::before,
          .dropdown__link:hover .dropdown__item-title::before {
            height: 30%;
            transform: translateY(0);
            opacity: .4
          }
          
          .dropdown__item-description {
            font-size: .9rem;
            opacity: .9;
            margin-top: .3rem;
            margin-bottom: 0
          }
          
          .dropdown__item-description,
          .dropdown__item-title {
            width: 95%
          }
          
          .hero__row {
            height: 300px;
            position: static
          }
          
          @media (min-width:992px) {
            .hero__row {
              height: 100%;
              position: absolute;
              top: 0;
              right: 0;
              left: 0;
              margin: 0
            }
          }
          
          .hero_empty-column {
            height: 100%
          }
          
          .hero__image-column {
            height: 100%;
            background-position: center;
            background-size: cover
          }
          
          .hero__content {
            text-align: initial
          }
          
          .hero__body {
            padding-top: 2rem;
            padding-bottom: 3rem;
            position: relative;
            z-index: 1
          }
          
          @media (min-width:992px) {
            .hero__body {
              padding-top: 4rem;
              padding-bottom: 9rem
            }
          }
          
          .hero__title {
            font-size: 1.8rem;
            font-weight: 900
          }
          
          .hero__paragraph {
            font-size: .9rem;
            font-weight: 400;
            line-height: 1.7;
            opacity: .98
          }
          
          @media (min-width:576px) {
            .hero__title {
              font-size: 2.5rem;
              line-height: 1.17
            }
          
            .hero__paragraph {
              width: 80%
            }
          }
          
          @media (min-width:768px) {
            .hero__title {
              font-size: 3rem;
              line-height: 1.22
            }
          }
          
          @media (min-width:992px) {
            .hero__title {
              width: 95%
            }
          
            .hero__paragraph {
              font-size: 1.2rem;
              width: 70%
            }
          }
          
          .hero__btns-container {
            margin-left: -.5rem;
            margin-right: -.5rem
          }
          
          .block-8-scr {
            --space-between-blocks: 2rem;
            --space-between-blocks-small-screens: 0rem;
            --block-background: white;
            --block-text-color: var(--text-primary);
            background: var(--block-background);
            color: var(--block-text-color)
          }
          
          .block-8-scr__li {
            font-size: 1rem;
            font-weight: 600;
            opacity: .9;
            margin-bottom: .8rem
          }
          
          .block-8-scr__li:last-child {
            margin-bottom: 0
          }
          
          .plan-features__icon {
            width: 1.1rem;
            height: 1.1rem;
            color: #33c58d
          }
          
          .block-8-scr__li-icon {
            color: #33c58d;
            transform: scale(1.5)
          }
          
          .block-8-scr__img {
            width: 70%;
            position: relative;
            z-index: 1;
            border-radius: 5px;
            background: 0 0
          }
          
          .block-61 {
            --block-background: white;
            --block-text-color: var(--text-primary);
            background: var(--block-background);
            color: var(--block-text-color)
          }
          
          .testimonial-card-1 {
            padding: 3rem 2.2rem 2.2rem 2.2rem;
            position: relative;
            background: var(--secondary-invert);
            box-shadow: 0 0 30px 0 rgba(0, 0, 0, .09);
            display: flex;
            flex-direction: column;
            height: 100%;
            box-shadow: 8px 8px 0 var(--primary);
            color: #fff
          }
          
          .testimonial-card-1__paragraph {
            font-size: .95rem;
            opacity: .9;
            line-height: 1.7;
            flex-grow: 1;
            padding-bottom: 1.5rem
          }
          
          .testimonial-card-1__quote-symbol {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background: var(--gradient-primary, --primary);
            color: var(--primary-invert);
            font-size: 1.3rem;
            border-radius: 10rem;
            position: absolute;
            top: -25px;
            left: 30px;
            background: var(--primary)
          }
          
          .block-61-person {
            display: flex;
            align-items: center;
            margin-top: -1rem
          }
          
          .block-61-person__avatar {
            width: 56px;
            height: 56px;
            border-radius: 10rem
          }
          
          .block-61-person__rating {
            font-size: .75rem;
            color: #ffe200
          }
          
          .block-61-person__name {
            font-size: .87rem;
            font-weight: 600
          }
          
          .block-61-person__info {
            font-size: .87rem;
            opacity: .8
          }
          
          .block-26 {
            --block-background: #f5f5f5;
            --block-text-color: var(--text-primary);
            background: var(--block-background);
            color: var(--block-text-color);
            padding-top: 5.8rem;
            padding-bottom: 5.8rem
          }
          
          .block-26__title {
            font-size: 2.1rem;
            font-weight: 600
          }
          
          .block-26__heading {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: .5rem
          }
          
          .block-26__item {
            margin-bottom: .4rem
          }
          
          .block-39 {
            --block-background: white;
            --block-text-color: var(--text-primary);
            background: var(--block-background);
            color: var(--block-text-color)
          }
          
          .content-block {
            text-align: initial;
            margin-top: 1rem;
            margin-bottom: 1rem
          }
          
          @media (min-width:992px) {
            .content-block {
              width: 90%
            }
          }
          
          .content-block__title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1rem;
            line-height: 1.5
          }
          
          @media (min-width:992px) {
            .content-block__title {
              font-size: 1.5rem
            }
          }
          
          .content-block__paragraph {
            font-size: 1rem;
            opacity: .9;
            line-height: 1.7
          }
          
          .block-32 {
            --block-background: #edecef;
            --block-text-color: var(--text-primary);
            background: var(--block-background);
            color: var(--block-text-color)
          }
          
          .block-44 {
            --block-background: var(--secondary-invert);
            --block-text-color: white;
            --text-primary: var(--block-text-color);
            background: var(--block-background);
            color: var(--block-text-color);
            font-size: 1rem;
            text-align: center
          }
          
          @media (min-width:992px) {
            .block-44 {
              text-align: initial
            }
          }
          
          .block-44__logo-container {
            width: 100%;
            margin-bottom: 2.5rem
          }
          
          @media (min-width:992px) {
            .block-44__logo-container {
              width: auto;
              flex-grow: 1;
              margin-bottom: 0
            }
          }
          
          .block-44__logo {
            height: 36px
          }
          
          .block-44__list {
            display: flex;
            flex-wrap: wrap
          }
          
          .block-44__li-1 {
            font-weight: 400;
            margin-bottom: .6rem;
            margin: .9rem;
            opacity: .7
          }
          
          .block-44__li-1::after {
            content: "";
            display: inline-block;
            width: 0
          }
          
          @media (min-width:992px) {
            .block-44__li-1 {
              margin: 0
            }
          
            .block-44__li-1::after {
              width: 2.8rem
            }
          
            .block-44__li-1:last-child::after {
              width: 0
            }
          }
          
          .block-44__link {
            color: var(--block-text-color);
            opacity: .7
          }
          
          .block-44__link:focus,
          .block-44__link:hover {
            color: inherit;
            text-decoration: underline
          }
          
          .block-44__divider {
            margin: 2.4rem 0
          }
          
          .block-44__extra-links {
            justify-content: center
          }
          
          @media (min-width:768px) {
            .block-44__extra-links {
              justify-content: flex-start
            }
          }
          
          .block-44__copyrights {
            color: var(--text-primary);
            line-height: 1.7;
            font-size: .9rem;
            opacity: .7
          }
          </style>
        </body>
        
        </html>
        `
    })
};


export function Landing_page3(editor, options = {}) {
    editor.Blocks.add ('landing_page3', {
        label: 'landing_page3',
        icon: ``,
        content: `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <!-- Required meta tags -->
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"><!-- font awesome 5 free -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"><!-- Bootstrap CSS -->
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"><!-- Poppins font from Google -->
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&amp;display=swap" rel="stylesheet"><!-- Your Custom CSS file that will include your blocks CSS -->
          <link rel="stylesheet" href="./Template01.css">
          <title>Your template</title>
        </head>
        
        <body>
          <!-- Put the blocks HTML here -->
          <!------------------------------>
          <!--Section Name---------------->
          <!------------------------------>
          <header class="hero container-fluid">
            <div class="hero__content container mx-auto">
              <!-- I'm putting the nav inside this "fixed-nav-container" to fix some issues happens on scroll -->
              <div class="fixed-nav-container">
                <nav class="hero-nav position-relative container mx-auto px-0">
                  <ul class="nav w-100 list-unstyled align-items-center p-0">
                    <li class="hero-nav__item"><a href="/"><img class="hero-nav__logo" src="https://svgshare.com/i/RmR.svg" change-src-onscroll="https://svgshare.com/i/RmR.svg" alt="our logo"></a><!-- Don't remove this empty span --><span class="mx-2"></span></li>
                    <li id="hero-menu" class="flex-grow-1 hero__nav-list hero__nav-list--mobile-menu ft-menu">
                      <ul class="hero__menu-content nav flex-column flex-lg-row ft-menu__slider animated list-unstyled p-2 p-lg-0">
                        <li class="flex-grow-1">
                          <ul class="nav nav--lg-side flex-column-reverse flex-lg-row-reverse list-unstyled align-items-center p-0">
                            <li class="flex-grow-1">
                              <ul class="nav nav--lg-side flex-column-reverse flex-lg-row-reverse list-unstyled align-items-center p-0">
                                <li class="hero-nav__item"><a href="https://twitter.com/intent/tweet?text=30%2B%20HTML%20BLOCKS%20TO%20BUILD%20OUTSTANDING%20LANDING%20PAGES&amp;url=https%3A%2F%2Ffrontendor.com%2F" target="_blank" class="btn btn-primary"><p class="mb-0">Votre action</p></a></li>
                              </ul>
                            </li>
                            <li class="hero-nav__item"><a href="#!" class="hero-nav__link"><p class="mb-0">Nous contacter</p></a></li>
                            <li class="hero-nav__item"><a href="#!" class="hero-nav__link"><p class="mb-0">Prix</p></a></li>
                            <li class="hero-nav__item"><a href="#!" class="hero-nav__link"><p class="mb-0">Les services</p></a></li>
                          </ul>
                        </li>
                      </ul><button close-nav-menu="" class="ft-menu__close-btn animated"><svg class="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"></path>
                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"></path>
                        </svg></button>
                    </li>
                    <li class="hero-nav__item d-lg-none d-flex flex-row-reverse"><button open-nav-menu="" class="text-center px-2"><i class="fas fa-bars"></i></button></li>
                  </ul>
                </nav>
              </div>
              <div class="hero__body">
                <div class="row px-0 mx-0">
                  <div class="col-lg-6 px-0 mx-0">
                    <h1 class="hero__title mb-4">Titre<span class="highlight">Google Analytics</span></h1>
                    <p class="hero__paragraph mb-5">Prouver les fonctionnalités de Google Analytics</p>
                    <div class="hero__btns-container"><a class="hero__btn btn btn-primary mb-2 mb-lg-0 mx-1 mx-lg-2" href="#!">Commencez à l'utiliser</a><a class="hero__btn btn btn-secondary mb-2 mb-lg-0 mx-1 mx-lg-2" href="#!"><p class="mb-0">Votre action</p></a></div>
                  </div>
                  <div class="col-lg-6 mt-5 mt-lg-0">
                    <div class="hero__img-container"><img class="hero__img w-100" src="https://i.imgur.com/R3YCad7.png"></div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <script src="https://unpkg.com/tua-body-scroll-lock"></script>
          <script>
            /* Hero Menu & Dropdown's JavaScript */
            var showDropdown = function(e) {
              e.currentTarget.classList.add("hero-nav__item--show-dropdown");
            };
        
            var hideDropdown = function(e) {
              e.currentTarget.classList.remove("hero-nav__item--show-dropdown");
            };
        
            var toggleDropdown = function(e) {
              e.currentTarget.classList.toggle("hero-nav__item--show-dropdown");
            };
        
            function setupDropdowns(mediaQuery) {
              document
                .querySelectorAll(".hero-nav__item--with-dropdown")
                .forEach(function(liElement) {
                  if (mediaQuery.matches) {
                    var liElclassList = liElement.classList;
                    if (
                      !liElclassList.contains("hero-nav__item--dropdown-left") ||
                      !liElclassList.contains("hero-nav__item--dropdown-right")
                    ) {
                      var linkWidth = liElement.getBoundingClientRect().width;
                      liElement.querySelector(".dropdown").style.transform =
                        "translateX(calc(-50% + " + linkWidth / 2 + "px))";
                    }
        
                    liElement.addEventListener("mouseenter", showDropdown);
                    liElement.addEventListener("mouseleave", hideDropdown);
        
                    /* If someone resize his browser to small screen */
                    var heroNavLink = liElement.querySelector(".hero-nav__link");
                    heroNavLink.removeEventListener("click", toggleDropdown);
                  } else {
                    /* if someone resize his browser to large screen */
                    liElement.removeEventListener("mouseenter", showDropdown);
                    liElement.removeEventListener("mouseleave", hideDropdown);
                    liElement.querySelector(".dropdown").style.transform = "";
        
                    liElement.addEventListener("click", toggleDropdown);
                  }
                });
            }
        
            var mediaQuery = window.matchMedia("(min-width: 992px)");
            /* setup dropdowns on page load */
            setupDropdowns(mediaQuery);
            mediaQuery.addListener(function(mediaQuery) {
              setupDropdowns(mediaQuery);
        
              if (mediaQuery.matches) {
                var heroMenu = document.querySelector("#hero-menu");
                heroMenu.style.height = "";
                bodyScrollLock.unlock(heroMenu);
              }
            });
        
            /* Toggle Menu on mobile */
            var heroMenu = document.querySelector("#hero-menu");
            document.querySelector("[close-nav-menu]").onclick = function(e) {
              heroMenu.classList.toggle("ft-menu--js-show");
              bodyScrollLock.unlock(heroMenu);
            };
        
            document.querySelector("[open-nav-menu]").onclick = function(e) {
              heroMenu.classList.toggle("ft-menu--js-show");
              heroMenu.style.height = window.innerHeight + "px";
              bodyScrollLock.lock(heroMenu);
            };
            /* Close mobile Menu & scroll smoothly */
            function closeMenuAndGoTo(query) {
              document
                .querySelector("#hero-menu")
                .classList.toggle("ft-menu--js-show");
              setTimeout(() => {
                const element = document.querySelector(query);
                window.scrollTo({
                  top: element.getBoundingClientRect().top,
                  behavior: "smooth",
                });
              }, 250);
            }
        
            document
              .querySelector("#hero-menu")
              .querySelectorAll("[href*='#']")
              .forEach(function(link) {
                link.onclick = function(event) {
                  event.preventDefault();
                  closeMenuAndGoTo(link.getAttribute("href"));
                };
              });
        
            /* Make the navigation sticky */
            var nav = document.querySelector(".hero-nav");
            window.onscroll = function(e) {
              var logoElement = document.querySelector("[change-src-onscroll]");
              if (window.scrollY > nav.getBoundingClientRect().height) {
                if (!nav.classList.contains("hero-nav--is-sticky")) {
                  window.logoSrc = logoElement.getAttribute("src");
                  logoElement.setAttribute(
                    "src",
                    logoElement.getAttribute("change-src-onscroll")
                  );
                  logoElement.setAttribute("change-src-onscroll", logoSrc);
                }
        
                nav.classList.add("hero-nav--is-sticky");
              } else if (window.scrollY === 0) {
                if (nav.classList.contains("hero-nav--is-sticky")) {
                  window.logoSrc = logoElement.getAttribute("src");
                  logoElement.setAttribute(
                    "src",
                    logoElement.getAttribute("change-src-onscroll")
                  );
                  logoElement.setAttribute("change-src-onscroll", logoSrc);
                }
        
                nav.classList.remove("hero-nav--is-sticky");
              }
            };
        
            /* Language Dropdown */
            var languageDropdown = document.querySelector(
              "[javascript-language-selector]"
            );
            languageDropdown.onclick = function(e) {
              if (e.target.classList.contains("dropdown__link")) {
                languageDropdown
                  .querySelector(".dropdown__link--selected")
                  .classList.remove("dropdown__link--selected");
                e.target.classList.add("dropdown__link--selected");
        
                document
                  .querySelector(".language-image")
                  .setAttribute(
                    "src",
                    e.target.querySelector("img").getAttribute("src")
                  );
              }
            };
          </script><!-- FEATURES -->
          <!------------------------------>
          <!--Section Name---------------->
          <!------------------------------>
          <div class="block-12 space-between-blocks">
            <div class="container-xl">
              <!-- BODY -->
              <div class="row">
                <div class="col-lg-4 mb-2-1rem">
                  <div class="card-1">
                    <div class="card-1__content">
                      <h3 class="card-1__title">Titre</h3>
                      <p class="card-1__paragraph">Votre Contenue</p>
                      <div class="card-1__button-container"><span class="card-1__cta-text"><p class="mb-0">Votre Action</p></span><span class="mx-1"></span><svg class="card-1__cta-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                        </svg></div>
                    </div>
                    <div class="card-1__shapes"><svg xmlns="http://www.w3.org/2000/svg" width="174.462" height="124.886" viewBox="0 0 174.462 124.886">
                        <g>
                          <path d="M0 42.821l81.5 48.07L80.117 0zm2.763 0L78.736 2.252 80.117 88.4zm133.767-12.86l.815 45.777 37.116-23.483zm1.381 2.431l33.856 19.836-33.082 20.982zm-47.7 89.731l29.464 2.763-11.047-27.447zm2.569-1.146l15.457-20.72 9.31 23.068z"></path>
                          <path d="M101.6 22.58L44.63 41.407 68.444 61.63l23.828 20.223z" transform="translate(17.019 8.61)"></path>
                        </g>
                      </svg></div>
                  </div>
                </div>
                <div class="col-lg-4 mb-2-1rem">
                  <div class="card-1 card-1--selected">
                    <div class="card-1__content">
                      <h3 class="card-1__title">Titre</h3>
                      <p class="card-1__paragraph">Votre Contenue</p>
                      <div class="card-1__button-container"><span class="card-1__cta-text"><p class="mb-0">Votre Action</p></span><span class="mx-1"></span><svg class="card-1__cta-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                        </svg></div>
                    </div>
                    <div class="card-1__shapes"><svg xmlns="http://www.w3.org/2000/svg" width="174.462" height="124.886" viewBox="0 0 174.462 124.886">
                        <g>
                          <path d="M0 42.821l81.5 48.07L80.117 0zm2.763 0L78.736 2.252 80.117 88.4zm133.767-12.86l.815 45.777 37.116-23.483zm1.381 2.431l33.856 19.836-33.082 20.982zm-47.7 89.731l29.464 2.763-11.047-27.447zm2.569-1.146l15.457-20.72 9.31 23.068z"></path>
                          <path d="M101.6 22.58L44.63 41.407 68.444 61.63l23.828 20.223z" transform="translate(17.019 8.61)"></path>
                        </g>
                      </svg></div>
                  </div>
                </div>
                <div class="col-lg-4 mb-2-1rem">
                  <div class="card-1">
                    <div class="card-1__content">
                      <h3 class="card-1__title">Titre</h3>
                      <p class="card-1__paragraph">Votre Contenue</p>
                      <div class="card-1__button-container"><span class="card-1__cta-text"><p class="mb-0">Votre Action</p></span><span class="mx-1"></span><svg class="card-1__cta-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                        </svg></div>
                    </div>
                    <div class="card-1__shapes"><svg xmlns="http://www.w3.org/2000/svg" width="174.462" height="124.886" viewBox="0 0 174.462 124.886">
                        <g>
                          <path d="M0 42.821l81.5 48.07L80.117 0zm2.763 0L78.736 2.252 80.117 88.4zm133.767-12.86l.815 45.777 37.116-23.483zm1.381 2.431l33.856 19.836-33.082 20.982zm-47.7 89.731l29.464 2.763-11.047-27.447zm2.569-1.146l15.457-20.72 9.31 23.068z"></path>
                          <path d="M101.6 22.58L44.63 41.407 68.444 61.63l23.828 20.223z" transform="translate(17.019 8.61)"></path>
                        </g>
                      </svg></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-12__shape-for-background"></div>
          </div><!-- RIGHT FEATURE -->
          <!------------------------------>
          <!--Section Name---------------->
          <!------------------------------>
          <div class="block-8-scr space-between-blocks">
            <div class="container position-relative">
              <div class="row px-2 align-items-center flex-column-reverse flex-lg-row">
                <!-- CONTENT -->
                <div class="col-lg-6 position-relative mt-4 mt-lg-0">
                  <h1 class="block__title block__title--big mb-3">Titre</h1>
                  <p class="block__paragraph block__paragraph--big mb-0">Votre Contenue</p>
                </div><!-- IMAGE -->
                <div class="col-lg-6 my-5 my-lg-0 p-lg-5 text-center">
                  <div class="block-8-scr__img-container position-relative"><img class="w-100" src="https://i.imgur.com/ZNDl8Tn.png"><svg class="block-8-scr-scr-dots-svg">
                      <defs>
                        <pattern id="pattern" width="19" height="19" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(90)">
                          <rect id="pattern-background" x="0" y="0" width="400%" height="400%" fill="transparent"></rect>
                          <circle cx="20" cy="20" r="4" fill="currentColor" stroke="currentColor" stroke-width="0"></circle>
                          <circle cx="20" cy="20" r="0" fill="currentColor" stroke="currentColor" stroke-width="0"></circle>
                        </pattern>
                      </defs>
                      <rect fill="url(#pattern)" height="100%" width="100%" y="0" x="0"></rect>
                    </svg></div>
                </div>
              </div>
            </div>
          </div><!-- LEFT FEATURE -->
          <!------------------------------>
          <!--Section Name---------------->
          <!------------------------------>
          <div class="block-8-scr space-between-blocks">
            <div class="container position-relative">
              <div class="row px-2 align-items-center flex-column-reverse flex-lg-row">
                <!-- IMAGE -->
                <div class="col-lg-6 my-5 my-lg-0 p-lg-5 text-center">
                  <div class="block-8-scr__img-container position-relative"><img class="w-100" src="https://i.imgur.com/dupGyXh.png"><svg class="block-8-scr-scr-dots-svg">
                      <defs>
                        <pattern id="pattern" width="19" height="19" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(90)">
                          <rect id="pattern-background" x="0" y="0" width="400%" height="400%" fill="transparent"></rect>
                          <circle cx="20" cy="20" r="4" fill="currentColor" stroke="currentColor" stroke-width="0"></circle>
                          <circle cx="20" cy="20" r="0" fill="currentColor" stroke="currentColor" stroke-width="0"></circle>
                        </pattern>
                      </defs>
                      <rect fill="url(#pattern)" height="100%" width="100%" y="0" x="0"></rect>
                    </svg></div>
                </div><!-- CONTENT -->
                <div class="col-lg-6 position-relative mt-4 mt-lg-0">
                  <h1 class="block__title block__title--big mb-3">Titre</h1>
                  <p class="block__paragraph block__paragraph--big mb-0">Votre Contenue</p>
                </div>
              </div>
            </div>
          </div><!-- RIGHT FEATURE -->
          <!------------------------------>
          <!--Section Name---------------->
          <!------------------------------>
          <div class="block-8-scr space-between-blocks">
            <div class="container position-relative">
              <div class="row px-2 align-items-center flex-column-reverse flex-lg-row">
                <!-- CONTENT -->
                <div class="col-lg-6 position-relative mt-4 mt-lg-0">
                  <h1 class="block__title block__title--big mb-3">Titre</h1>
                  <p class="block__paragraph block__paragraph--big mb-0">Votre Contenue</p>
                </div><!-- IMAGE -->
                <div class="col-lg-6 my-5 my-lg-0 p-lg-5 text-center">
                  <div class="block-8-scr__img-container position-relative"><img class="w-100" src="https://i.imgur.com/2IzDIAe.png"><svg class="block-8-scr-scr-dots-svg">
                      <defs>
                        <pattern id="pattern" width="19" height="19" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(90)">
                          <rect id="pattern-background" x="0" y="0" width="400%" height="400%" fill="transparent"></rect>
                          <circle cx="20" cy="20" r="4" fill="currentColor" stroke="currentColor" stroke-width="0"></circle>
                          <circle cx="20" cy="20" r="0" fill="currentColor" stroke="currentColor" stroke-width="0"></circle>
                        </pattern>
                      </defs>
                      <rect fill="url(#pattern)" height="100%" width="100%" y="0" x="0"></rect>
                    </svg></div>
                </div>
              </div>
            </div>
          </div><!-- GROUP OF FATURES -->
          <!------------------------------>
          <!--Section Name---------------->
          <!------------------------------>
          <div class="features-block container-fluid space-between-blocks">
            <div class="container">
              <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
                <h1 class="block__title mb-3">Titre</h1>
              </div>
              <div class="row">
                <div class="feature col-lg-6">
                  <div><span class="fr-icon fr-icon--medium mx-auto"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hourglass-split" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0 1 11.5 13s-.866-1.299-3-1.48V8.35z"></path>
                      </svg></span></div>
                  <div class="feature__content">
                    <h4 class="feature__title">sous titre</h4>
                    <p class="feature__paragraph">Votre Contenue</p>
                  </div>
                </div>
                <div class="feature col-lg-6">
                  <div><span class="fr-icon fr-icon--medium mx-auto"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bezier" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"></path>
                        <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
                      </svg></span></div>
                  <div class="feature__content">
                    <h4 class="feature__title">sous titre</h4>
                    <p class="feature__paragraph">Votre Contenue</p>
                  </div>
                </div>
                <div class="feature col-lg-6">
                  <div><span class="fr-icon fr-icon--medium mx-auto"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gem" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785l-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004l.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495l5.062-.005L8 13.366 5.47 5.495zm-1.371-.999l-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l2.92-.003 2.193 6.82L1.5 5.5zm7.889 6.817l2.194-6.828 2.929-.003-5.123 6.831z"></path>
                      </svg></span></div>
                  <div class="feature__content">
                    <h4 class="feature__title">sous titre</h4>
                    <p class="feature__paragraph">Votre Contenue</p>
                  </div>
                </div>
                <div class="feature col-lg-6">
                  <div><span class="fr-icon fr-icon--medium mx-auto"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gem" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785l-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004l.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495l5.062-.005L8 13.366 5.47 5.495zm-1.371-.999l-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l2.92-.003 2.193 6.82L1.5 5.5zm7.889 6.817l2.194-6.828 2.929-.003-5.123 6.831z"></path>
                      </svg></span></div>
                  <div class="feature__content">
                    <h4 class="feature__title">sous titre</h4>
                    <p class="feature__paragraph">Votre Contenue</p>
                  </div>
                </div>
                <div class="feature col-lg-6">
                  <div><span class="fr-icon fr-icon--medium mx-auto"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box-seam" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"></path>
                      </svg></span></div>
                  <div class="feature__content">
                    <h4 class="feature__title">sous titre</h4>
                    <p class="feature__paragraph">Votre Contenue</p>
                  </div>
                </div>
                <div class="feature col-lg-6">
                  <div><span class="fr-icon fr-icon--medium mx-auto"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bar-chart-line" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
                      </svg></span></div>
                  <div class="feature__content">
                    <h4 class="feature__title">sous titre</h4>
                    <p class="feature__paragraph">Votre Contenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- TESTIMONIAL -->
          <!------------------------------>
          <!--Section Name---------------->
          <!------------------------------>
          <div class="block-20 space-between-blocks">
            <div class="container">
              <div class="col-lg-8 col-xl-7 mx-auto text-center px-0 mb-5">
                <h1 class="block__title pb-5">Titre</h1>
              </div>
              <div class="row px-2 pt-4">
                <div class="col-lg-4">
                  <div class="testimonial-card-1">
                    <div class="block-20-person">
                      <div class="mb-2"><img class="block-20-person__avatar" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=200&amp;w=200&amp;s=046c29138c1335ef8edee7daf521ba50"></div>
                      <div class="flex-grow-1 d-flex flex-column"><span class="block-20-person__rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span><span class="block-20-person__name my-1">Clara Watson</span><span class="block-20-person__info">MakersSpot Creator</span></div>
                    </div>
                    <p class="testimonial-card-1__paragraph mb-3">Votre Contenue</p><span class="testimonial-card-1__quote-symbol"><i class="fas fa-quote-left"></i></span>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="testimonial-card-1">
                    <div class="block-20-person">
                      <div class="mb-2"><img class="block-20-person__avatar" src="https://uifaces.co/our-content/donated/IPh6PTBx.jpg"></div>
                      <div class="flex-grow-1 d-flex flex-column"><span class="block-20-person__rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span><span class="block-20-person__name my-1">Ali Boukeroui</span><span class="block-20-person__info">Frontendor Creator</span></div>
                    </div>
                    <p class="testimonial-card-1__paragraph mb-3">Votre Contenue</p><span class="testimonial-card-1__quote-symbol"><i class="fas fa-quote-left"></i></span>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="testimonial-card-1">
                    <div class="block-20-person">
                      <div class="mb-2"><img class="block-20-person__avatar" src="https://uifaces.co/our-content/donated/rSuiu_Hr.jpg"></div>
                      <div class="flex-grow-1 d-flex flex-column"><span class="block-20-person__rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span><span class="block-20-person__name my-1">Alex Barnes</span><span class="block-20-person__info">SaasMarketing Creator</span></div>
                    </div>
                    <p class="testimonial-card-1__paragraph mb-3">Votre Contenue</p><span class="testimonial-card-1__quote-symbol"><i class="fas fa-quote-left"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- FORM -->
          <!------------------------------>
          <!--Section Name---------------->
          <!------------------------------>
          <div class="block-29 px-4 space-between-blocks overflow-hidden">
            <div class="container position-relative">
              <div class="row justify-content-center px-lg-5">
                <div class="col-lg-6 col-xl-7 mb-3 mb-lg-0">
                  <h4 class="block-29__title m-0">sous titre</h4>
                  <p class="block-29__paragraph mt-3">Votre Contenue</p>
                </div>
                <div class="col-lg-6 col-xl-5 d-flex flex-row-reverse align-items-center justify-content-center justify-content-lg-start">
                  <div class="text-center px-lg-5 mb-4"><a class="btn btn-primary" href="#"><span class="mx-1"><p class="mb-0">votre action</p></span><svg width="1em" height="1em" viewBox="0 0 16 16" class="mx-1 bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"></path>
                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"></path>
                      </svg></a></div>
                </div>
              </div>
            </div>
          </div>
          <script>
            function submitForm(t) {
              t.preventDefault();
              var n = t.target.querySelector("button");
              if (n.classList.contains("btn--loading")) return !1;
              n.classList.add("btn--loading");
              try {
                setTimeout(function() {
                  n.classList.remove("btn--loading")
                }, 2e3)
              } catch (t) {
                console.log(t), n.classList.remove("btn--loading")
              }
            }
          </script><!-- FOOTER -->
          <!------------------------------>
          <!--Section Name---------------->
          <!------------------------------>
          <div class="block-41">
            <div class="container">
              <div class="row px-2">
                <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0"><img class="block-41__logo mb-3" src="https://svgshare.com/i/RnS.svg">
                  <p class="block-41__brand-story mb-0">Votre Contenue</p>
                </div>
                <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
                  <ul class="block-41__links-list list-unstyled p-0">
                    <li class="block-41__li-heading">Product</li>
                    <li class="block-41__li"><a href="#!" class="block-41__li-link"><p class="mb-0">Entreprise</p></a></li>
                    <li class="block-41__li"><a href="#!" class="block-41__li-link"><p class="mb-0">Affiliation</p></a></li>
                    <li class="block-41__li"><a href="#!" class="block-41__li-link"><p class="mb-0">Prise de Contact</p></a></li>
                  </ul>
                </div>
                <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
                  <ul class="block-41__links-list list-unstyled p-0">
                    <li class="block-41__li-heading">Services</li>
                    <li class="block-41__li"><a href="#!" class="block-41__li-link"><p class="mb-0">Entreprise</p></a></li>
                    <li class="block-41__li"><a href="#!" class="block-41__li-link"><p class="mb-0">Affiliation</p></a></li>
                    <li class="block-41__li"><a href="#!" class="block-41__li-link"><p class="mb-0">Prise de Contact</p></a></li>
                  </ul>
                </div>
                <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
                  <ul class="block-41__links-list list-unstyled p-0">
                    <li class="block-41__li-heading">Community</li>
                    <li class="block-41__li"><a href="#!" class="block-41__li-link"><p class="mb-0">Entreprise<p></a></li>
                    <li class="block-41__li"><a href="#!" class="block-41__li-link"><p class="mb-0">Affiliation<p></a></li>
                    <li class="block-41__li"><a href="#!" class="block-41__li-link"><p class="mb-0">Prise de Contact<p></a></li>
                  </ul>
                </div>
                <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
                  <ul class="block-41__links-list list-unstyled p-0">
                    <li class="block-41__li-heading">Solutions</li>
                    <li class="block-41__li"><a href="#!" class="block-41__li-link"><p class="mb-0">Entreprise<p></a></li>
                    <li class="block-41__li"><a href="#!" class="block-41__li-link"><p class="mb-0">Affiliation<p></a></li>
                    <li class="block-41__li"><a href="#!" class="block-41__li-link"><p class="mb-0">Prise de Contact<p></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <hr class="block-41__divider">
            <div class="container">
              <div class="row px-2">
                <div class="flex-grow-1">
                  <ul class="block-41__extra-links d-flex list-unstyled p-0">
                    <li class="mx-2"><a href="#!" class="block-41__extra-link m-0"><i class="fab fa-twitter"></i></a></li>
                    <li class="mx-2"><a href="#!" class="block-41__extra-link m-0"><i class="fab fa-instagram"></i></a></li>
                    <li class="mx-2"><a href="#!" class="block-41__extra-link m-0"><i class="fas fa-envelope"></i></a></li>
                  </ul>
                </div>
                <p class="block-41__copyrights">© 2020 YourBrandName. All Rights Reserved.</p>
              </div>
            </div>
          </div><!-- Put the blocks HTML here -->
          <style>
          :root {
            --primary: #428973;
            --secondary: #262626;
            --primary-invert: #fff;
            --secondary-invert: #000;
            --gradient-primary: linear-gradient(230deg, #428973, #428973);
            --gradient-secondary: linear-gradient(230deg, #0a1f44, #020024);
            --text-primary: #262626;
            --elements-roundness: 5px;
            --space-between-blocks: 5.3rem;
            --space-between-blocks-small-screens: 3rem
          }
          
          body {
            font-family: Poppins, sans-serif;
            color: var(--text-primary)
          }
          
          .space-between-blocks {
            padding-top: var(--space-between-blocks-small-screens);
            padding-bottom: var(--space-between-blocks-small-screens)
          }
          
          @media (min-width:992px) {
            .space-between-blocks {
              padding-top: var(--space-between-blocks);
              padding-bottom: var(--space-between-blocks)
            }
          }
          
          button {
            color: inherit;
            padding: 0;
            background: 0 0;
            border: none
          }
          
          button:focus {
            outline: 0;
            box-shadow: none
          }
          
          .btn {
            font-size: .87rem;
            padding: .9rem 1.6rem;
            border: none;
            border-radius: var(--elements-roundness);
            transition: .2s all
          }
          
          @media (min-width:992px) {
            .btn {
              padding: .9rem 2rem
            }
          }
          
          .btn,
          .btn:focus,
          .btn:hover {
            border: none;
            box-shadow: none;
            outline: 0
          }
          
          .btn:focus,
          .btn:hover {
            transform: scale(1.05)
          }
          
          .btn-primary,
          .btn-primary:focus,
          .btn-primary:hover {
            background: var(--gradient-primary, --primary);
            color: var(--primary-invert)
          }
          
          .btn-secondary,
          .btn-secondary:focus,
          .btn-secondary:hover {
            background: var(--secondary-invert);
            color: var(--primary-invert)
          }
          
          .btn-primary--empty,
          .btn-primary--empty:focus,
          .btn-primary--empty:hover {
            color: var(--primary)
          }
          
          .btn-sm {
            padding: .8rem
          }
          
          .highlight {
            color: var(--primary)
          }
          
          .block__header {
            margin-bottom: 4rem
          }
          
          .block__title {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.4
          }
          
          @media(min-width:992px) {
            .block__title {
              font-size: 2.5rem
            }
          
            .block__title--big {
              font-size: 3rem;
              line-height: 1.1
            }
          }
          
          @media(min-width:1200px) {
            .block__title--big {
              font-size: 2rem;
              line-height: 1.2
            }
          }
          
          .block__paragraph {
            font-size: 1.1rem;
            line-height: 1.5;
            opacity: .9;
            width: 90%
          }
          
          @media(min-width:992px) {
            .block__paragraph--big {
              font-size: 1rem;
              line-height: 1.6
            }
          }
          
          .fr-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            height: 2.5rem;
            width: 2.5rem;
            border-radius: 5px;
            background: rgba(0, 0, 0, .04);
            margin-bottom: 1.5rem;
            transition: .5s
          }
          
          .fr-icon--medium {
            font-size: 1.5rem;
            height: 3rem;
            width: 3rem
          }
          
          .fr-icon--large {
            font-size: 1.2rem;
            height: 3.25rem;
            width: 3.25rem
          }
          
          @media (min-width:992px) {
            .fr-icon--large {
              height: 3.8rem;
              width: 3.8rem;
              font-size: 1.9rem
            }
          }
          
          .hero {
            --hero-nav-height: 100px;
            --dropdown-background: white;
            --dropdown-text-color: var(--text-primary);
            --block-background: #fdf9f8;
            --block-text-color: var(--text-primary);
            background: var(--block-background);
            color: var(--block-text-color);
            position: relative;
            display: flex;
            flex-direction: column
          }
          
          .hero-nav {
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: var(--hero-nav-height);
            display: flex;
            align-items: center;
            z-index: 2
          }
          
          .hero-nav__item {
            margin: auto;
            font-size: 1.1rem
          }
          
          @media(min-width:992px) {
            .hero-nav__item {
              margin: 0 1rem
            }
          }
          
          @media(min-width:992px) {
            .nav--lg-side {
              flex-direction: row-reverse
            }
          }
          
          .hero-nav__logo {
            height: 35px
          }
          
          .hero-nav__link {
            color: inherit;
            opacity: .9
          }
          
          .hero-nav__link:focus,
          .hero-nav__link:hover {
            color: inherit;
            text-decoration: none;
            opacity: 1
          }
          
          .ft-menu {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 2000;
            -webkit-animation-name: fadeOut;
            animation-name: fadeOut;
            -webkit-animation-duration: .5s;
            animation-duration: .5s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both
          }
          
          @media (print),
          (prefers-reduced-motion:reduce) {
            .ft-menu {
              -webkit-animation-duration: 1ms !important;
              animation-duration: 1ms !important;
              -webkit-transition-duration: 1ms !important;
              transition-duration: 1ms !important;
              -webkit-animation-iteration-count: 1 !important;
              animation-iteration-count: 1 !important
            }
          }
          
          .ft-menu .hero-nav__item {
            width: 100%;
            margin-top: .75rem;
            margin-bottom: .75rem
          }
          
          @media(min-width:992px) {
            .ft-menu .hero-nav__item {
              width: auto;
              margin-top: 0;
              margin-bottom: 0
            }
          }
          
          .ft-menu--js-show {
            -webkit-animation-name: fadeIn;
            animation-name: fadeIn;
            -webkit-animation-duration: .5s;
            animation-duration: .5s
          }
          
          .ft-menu::before {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background: var(--primary);
            opacity: .9;
            z-index: -1
          }
          
          @media(min-width:992px) {
            .ft-menu {
              -webkit-animation-name: none;
              animation-name: none;
              position: static;
              z-index: auto
            }
          
            .ft-menu::before {
              content: none
            }
          }
          
          .ft-menu__slider {
            color: var(--dropdown-text-color);
            background: var(--dropdown-background);
            width: 80%;
            height: 100%;
            overflow: hidden;
            transform: translateX(-100%);
            transition: .5s transform
          }
          
          @media(min-width:992px) {
            .ft-menu__slider {
              --block-background: transparent;
              color: var(--block-text-color);
              width: auto;
              height: auto;
              background: 0 0;
              transform: none;
              display: flex;
              align-items: center
            }
          }
          
          .ft-menu--js-show .ft-menu__slider {
            transform: translateX(0)
          }
          
          .ft-menu__close-btn {
            color: var(--primary-invert);
            position: absolute;
            right: 0;
            top: 0;
            font-size: 2rem;
            margin: 1rem;
            transform: translateX(100%);
            transition: .5s transform
          }
          
          @media(min-width:992px) {
            .ft-menu__close-btn {
              display: none
            }
          }
          
          .ft-menu--js-show .ft-menu__close-btn {
            transform: translateX(0)
          }
          
          .ft-menu__close-btn:focus,
          .ft-menu__close-btn:hover {
            color: var(--primary-invert)
          }
          
          @-webkit-keyframes fadeIn {
            from {
              visibility: hidden;
              opacity: 0
            }
          
            to {
              visibility: visible;
              opacity: 1
            }
          }
          
          @keyframes fadeIn {
            from {
              visibility: hidden;
              opacity: 0
            }
          
            to {
              visibility: visible;
              opacity: 1
            }
          }
          
          @-webkit-keyframes fadeOut {
            from {
              visibility: visible;
              opacity: 1
            }
          
            to {
              visibility: hidden;
              opacity: 0
            }
          }
          
          @keyframes fadeOut {
            from {
              visibility: visible;
              opacity: 1
            }
          
            to {
              visibility: hidden;
              opacity: 0
            }
          }
          
          .fixed-nav-container {
            height: var(--hero-nav-height)
          }
          
          .hero-nav--is-sticky {
            color: var(--dropdown-text-color);
            background: var(--dropdown-background);
            position: fixed !important;
            left: 0;
            right: 0;
            margin: auto;
            box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
            padding: 1rem !important;
            height: 60px;
            transition: .2s height;
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            -webkit-animation-name: slideInDown;
            animation-name: slideInDown
          }
          
          @media(min-width:992px) {
            .hero-nav--is-sticky {
              height: 80px;
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px;
              padding: 1rem .5rem !important
            }
          }
          
          .hero-nav--is-sticky .ft-menu__slider {
            color: var(--dropdown-text-color)
          }
          
          .hero-nav--is-sticky .btn {
            background: var(--gradient-primary);
            color: var(--primary-invert)
          }
          
          @-webkit-keyframes slideInDown {
            from {
              -webkit-transform: translate3d(0, -100%, 0);
              transform: translate3d(0, -100%, 0);
              visibility: visible
            }
          
            to {
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0)
            }
          }
          
          @keyframes slideInDown {
            from {
              -webkit-transform: translate3d(0, -100%, 0);
              transform: translate3d(0, -100%, 0);
              visibility: visible
            }
          
            to {
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0)
            }
          }
          
          .ft-menu__slider .hero-nav__item {
            font-size: 1.1rem;
            padding: 0 1rem
          }
          
          @media(min-width:992px) {
            .ft-menu__slider .hero-nav__item {
              padding: 0
            }
          }
          
          .hero-nav__link {
            display: flex;
            align-items: center;
            outline: 0 !important
          }
          
          .ft-menu__slider {
            overflow-x: hidden;
            overflow-y: auto
          }
          
          @media (min-width:992px) {
            .ft-menu__slider {
              overflow: visible
            }
          }
          
          .hero-nav__item--with-dropdown {
            position: relative;
            cursor: pointer
          }
          
          @media(min-width:992px) {
            .hero-nav__item--with-dropdown::before {
              content: '';
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              height: 176%
            }
          }
          
          .hero-nav__dropdown {
            position: static;
            width: 100%;
            height: auto;
            font-size: .9rem;
            border-top: 1px solid rgba(0, 0, 0, .1);
            max-height: 0;
            overflow: hidden;
            visibility: hidden;
            opacity: 0;
            transition: .3s all;
            color: var(--dropdown-text-color);
            text-align: initial;
            cursor: auto
          }
          
          @media(min-width:992px) {
            .hero-nav__dropdown {
              position: absolute;
              top: 176%;
              left: 0;
              margin-top: 0;
              border-radius: 10px;
              border-top: none;
              box-shadow: 0 14px 50px 0 rgba(0, 0, 0, .1);
              background: var(--dropdown-background);
              z-index: 2;
              max-height: 0;
              padding: 2.3rem 3rem 2rem 2rem;
              overflow: visible;
              transition: .3s all
            }
          }
          
          .dropdown--important {
            position: absolute;
            width: auto !important;
            top: 176%;
            left: 0;
            margin-top: 0;
            border-radius: 10px;
            border-top: none;
            box-shadow: 0 14px 50px 0 rgba(0, 0, 0, .1);
            background: var(--dropdown-background);
            z-index: 2;
            max-height: 0;
            padding: 2rem;
            padding-right: 3rem;
            overflow: visible;
            transition: .3s all
          }
          
          @media(min-width:992px) {
            .dropdown--of-1-columns {
              width: 400px
            }
          
            .dropdown--of-2-columns {
              width: 700px
            }
          
            .dropdown--language-selector {
              width: 250px
            }
          }
          
          .hero-nav__item--show-dropdown .hero-nav__dropdown {
            margin-top: 1rem;
            visibility: visible;
            opacity: 1;
            max-height: 9999px;
            padding-top: 1rem
          }
          
          @media(min-width:992px) {
            .hero-nav__item--show-dropdown .hero-nav__dropdown {
              margin-top: 0;
              padding: 2.3rem 3rem 2rem 2rem
            }
          }
          
          .hero-nav__item-chevron {
            transition: .3s all
          }
          
          .hero-nav__item--show-dropdown .hero-nav__item-chevron {
            transform: rotate(180deg)
          }
          
          .hero-nav__item--dropdown-left .hero-nav__dropdown {
            transform: translateX(-15px) !important
          }
          
          .hero-nav__item--dropdown-left .hero-nav__dropdown::before {
            left: 15%;
            right: auto
          }
          
          .hero-nav__item--dropdown-right .hero-nav__dropdown {
            transform: translateX(15px) !important;
            left: auto;
            right: 0
          }
          
          .hero-nav__item--dropdown-right .hero-nav__dropdown::before {
            left: auto;
            right: 15%
          }
          
          @media(min-width:992px) {
            .hero-nav__item--lg-dropdown-left .hero-nav__dropdown {
              transform: translateX(-15px) !important;
              left: 0;
              right: auto
            }
          
            .hero-nav__item--lg-dropdown-left .hero-nav__dropdown::before {
              left: 15%;
              right: auto
            }
          
            .hero-nav__item--lg-dropdown-right .hero-nav__dropdown {
              transform: translateX(15px) !important;
              left: auto;
              right: 0
            }
          
            .hero-nav__item--lg-dropdown-right .hero-nav__dropdown::before {
              left: auto;
              right: 15%
            }
          }
          
          .dropdown--important::before {
            content: '';
            width: 17.1px;
            height: 6.85px;
            background: var(--dropdown-background);
            clip-path: polygon(50% 0, 0 100%, 100% 100%);
            position: absolute;
            top: -6px;
            left: 0;
            right: 0;
            margin: auto
          }
          
          @media(min-width:992px) {
            .hero-nav__dropdown::before {
              content: '';
              width: 17.1px;
              height: 6.85px;
              background: var(--dropdown-background);
              clip-path: polygon(50% 0, 0 100%, 100% 100%);
              position: absolute;
              top: -6px;
              left: 0;
              right: 0;
              margin: auto
            }
          }
          
          .dropdown__title {
            color: var(--dropdown-text-color);
            opacity: .7;
            font-weight: 600;
            font-size: .9rem;
            display: block;
            margin-top: .5rem;
            margin-bottom: 1.18rem
          }
          
          .dropdown__link {
            display: flex;
            align-items: flex-start;
            position: relative;
            cursor: pointer;
            margin-bottom: 1.3rem;
            color: inherit;
            text-decoration: none
          }
          
          .dropdown__link:focus,
          .dropdown__link:hover {
            color: inherit;
            text-decoration: none
          }
          
          [javascript-language-selector] .dropdown__link {
            border-radius: .5rem;
            padding: .7rem;
            margin-bottom: 3px
          }
          
          .dropdown__link::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%
          }
          
          .dropdown__link:last-child {
            margin: 0
          }
          
          [javascript-language-selector] .dropdown__link--selected,
          [javascript-language-selector] .dropdown__link:focus,
          [javascript-language-selector] .dropdown__link:hover {
            background: rgba(0, 0, 0, .06)
          }
          
          .dropdown__icon {
            width: 35px;
            height: 35px;
            background-image: var(--gradient-primary);
            color: var(--primary-invert);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10rem;
            font-size: 13px
          }
          
          @media(min-width:992px) {
            .dropdown__icon {
              width: 40px;
              height: 40px
            }
          }
          
          .dropdown__item {
            max-width: 250px
          }
          
          .dropdown__item-title {
            font-size: .9rem;
            font-weight: 600;
            line-height: 1.5;
            position: relative;
            z-index: -1
          }
          
          @media(min-width:992px) {
            .dropdown__item-title {
              white-space: nowrap
            }
          }
          
          .dropdown__item-title::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 20%;
            width: 100%;
            background: var(--secondary);
            transform: translateY(2px);
            opacity: 0;
            transition: .2s
          }
          
          [javascript-language-selector] .dropdown__item-title {
            white-space: nowrap
          }
          
          [javascript-language-selector] .dropdown__item-title::before {
            display: none
          }
          
          .dropdown__link:focus .dropdown__item-title::before,
          .dropdown__link:hover .dropdown__item-title::before {
            height: 30%;
            transform: translateY(0);
            opacity: .4
          }
          
          .dropdown__item-description {
            font-size: .9rem;
            opacity: .9;
            margin-top: .3rem;
            margin-bottom: 0
          }
          
          .dropdown__item-description,
          .dropdown__item-title {
            width: 95%
          }
          
          .hero__row {
            height: 300px;
            position: static
          }
          
          @media(min-width:992px) {
            .hero__row {
              height: 100%;
              position: absolute;
              top: 0;
              right: 0;
              left: 0;
              margin: 0
            }
          }
          
          .hero_empty-column {
            height: 100%
          }
          
          .hero__image-column {
            height: 100%;
            background-position: center;
            background-size: cover
          }
          
          .hero__content {
            text-align: initial
          }
          
          .hero__body {
            padding-top: 2rem;
            padding-bottom: 3rem;
            position: relative;
            z-index: 1
          }
          
          @media(min-width:992px) {
            .hero__body {
              padding-top: 4rem;
              padding-bottom: 9rem
            }
          }
          
          .hero__title {
            font-size: 1.8rem;
            font-weight: 600
          }
          
          .hero__paragraph {
            font-size: .9rem;
            font-weight: 400;
            line-height: 1.7;
            opacity: .98
          }
          
          @media (min-width:576px) {
            .hero__title {
              font-size: 2.5rem;
              line-height: 1.17
            }
          
            .hero__paragraph {
              width: 80%
            }
          }
          
          @media (min-width:768px) {
            .hero__title {
              font-size: 3rem;
              line-height: 1.22
            }
          }
          
          @media(min-width:992px) {
            .hero__title {
              width: 95%
            }
          
            .hero__paragraph {
              font-size: 1.2rem;
              width: 70%
            }
          }
          
          .hero__btns-container {
            margin-left: -.5rem;
            margin-right: -.5rem
          }
          
          .block-12 {
            --block-background: white;
            --block-text-color: var(--text-primary);
            background: var(--block-background);
            color: var(--block-text-color);
            position: relative;
            z-index: 1
          }
          
          .block-12__shape-for-background {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 75%;
            z-index: -1;
            clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%)
          }
          
          .card-1 {
            height: 100%;
            padding: 3rem 2.8rem;
            padding-bottom: 5.8rem;
            border-radius: 5px;
            cursor: pointer;
            position: relative;
            z-index: 1;
            transition: transform .5s;
            background: #fff;
            overflow: hidden;
            background: #fcf9f8
          }
          
          .card-1:focus,
          .card-1:hover {
            color: var(--primary-invert);
            background: var(--primary);
            box-shadow: 0 5px 50px 5px rgba(0, 0, 0, .2);
            transform: translateY(-5px) scale(1.02)
          }
          
          .card-1::after,
          .card-1::before {
            content: '';
            position: absolute;
            width: 1px;
            height: 1px;
            background: rgb(255 255 255 / 19%);
            border-radius: 10rem;
            box-shadow: 0 0 115px 52px rgb(255 255 255 / 60%);
            z-index: -1;
            opacity: 0;
            transition: opacity 1s
          }
          
          .card-1::before {
            left: 0;
            bottom: 0;
            transform: translate(-50%, 50%)
          }
          
          .card-1::after {
            right: 0;
            top: 0;
            transform: translate(50%, -50%)
          }
          
          .card-1:hover::after,
          .card-1:hover::before {
            opacity: 1
          }
          
          .card-1__title {
            font-size: 1.3rem;
            font-weight: 600;
            line-height: 1.5;
            margin-bottom: .93rem
          }
          
          .card-1__paragraph {
            font-size: 14.4px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.53;
            margin-bottom: 3.4rem
          }
          
          .card-1__button-container {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            transform: translateX(-15px);
            position: absolute;
            right: 0;
            bottom: 0
          }
          
          .card-1__cta-text {
            font-size: 14px;
            font-weight: 400;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.71;
            letter-spacing: -.27px
          }
          
          .card-1__cta-icon {
            transition: transform .7s
          }
          
          .card-1:focus .card-1__cta-icon,
          .card-1:hover .card-1__cta-icon {
            transform: translateX(5px)
          }
          
          .card-1__content {
            position: relative;
            padding-bottom: 1rem;
            height: 100%;
            z-index: 2
          }
          
          .card-1__shapes {
            position: absolute;
            z-index: 1;
            bottom: 0;
            left: 0;
            overflow: hidden
          }
          
          .card-1__shapes svg {
            opacity: .1;
            transition: transform 1s;
            transform: scale(1.2);
            transform-origin: right
          }
          
          .card-1:hover .card-1__shapes svg {
            transform: rotate(5deg) translateX(-10px)
          }
          
          .card-1:hover .card-1__shapes path {
            transform: translate(10px)
          }
          
          .card-1:focus .card-1__shapes svg,
          .card-1:hover .card-1__shapes svg {
            opacity: .2
          }
          
          .card-1__shapes svg {
            padding-top: 10px;
            padding-right: 10px;
            overflow: visible
          }
          
          .card-1__shapes path {
            transition: transform .7s;
            fill: #fff
          }
          
          .mb-2-1rem {
            margin-bottom: 2.1rem
          }
          
          .block-8-scr {
            --space-between-blocks: 2rem;
            --space-between-blocks-small-screens: 0rem;
            --block-background: white;
            --block-text-color: var(--text-primary);
            background: var(--block-background);
            color: var(--block-text-color)
          }
          
          .block-8-scr__li {
            font-size: 1rem;
            font-weight: 600;
            opacity: .9;
            margin-bottom: .8rem
          }
          
          .block-8-scr__li:last-child {
            margin-bottom: 0
          }
          
          .plan-features__icon {
            width: 1.1rem;
            height: 1.1rem;
            color: #33c58d
          }
          
          .block-8-scr__li-icon {
            color: #33c58d;
            transform: scale(1.5)
          }
          
          .block-8-scr__img {
            position: relative;
            z-index: 1;
            border-radius: 5px;
            box-shadow: 0 10px 36px 0 rgba(0, 0, 0, .1)
          }
          
          .block-8-scr-scr-dots-svg {
            color: var(--primary);
            position: absolute;
            left: 0;
            bottom: 0;
            width: 250px;
            height: 150px;
            transform: translate(-38px, 36px);
            clip-path: polygon(24% 62%, 100% 62%, 100% 100%, 0 100%, 0 0, 24% 0)
          }
          
          @media (min-width:992px) {
            .block-8-scr-scr-dots-svg {
              transform: translate(-38px, 36px);
              clip-path: polygon(24% 62%, 100% 62%, 100% 100%, 0 100%, 0 0, 24% 0)
            }
          }
          
          .features-block {
            --block-background: #fcf9f8;
            --block-text-color: var(--text-primary);
            background: var(--block-background);
            color: var(--block-text-color)
          }
          
          .feature {
            display: flex;
            align-items: flex-start;
            text-align: initial;
            margin-top: 1rem;
            margin-bottom: 1rem
          }
          
          .feature__content {
            padding: 0 1.4rem
          }
          
          .feature__icon {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            height: 3.25rem;
            width: 3.25rem;
            border-radius: var(--elements-roundness);
            border: 1px solid var(--primary);
            background: #fff;
            color: var(--primary)
          }
          
          @media(min-width:992px) {
            .feature__icon {
              height: 4.25rem;
              width: 4.25rem
            }
          }
          
          .feature__title {
            font-size: 1.3rem;
            font-weight: 600;
            line-height: 1.46
          }
          
          @media(min-width:992px) {
            .feature__title {
              font-size: 1.3rem
            }
          }
          
          .feature__paragraph {
            font-size: 1rem;
            line-height: 1.6;
            opacity: .95;
            margin: 0
          }
          
          .block-20 {
            --block-background: white;
            --block-text-color: var(--text-primary);
            background: var(--block-background);
            color: var(--block-text-color)
          }
          
          .testimonial-card-1 {
            border-radius: 5px;
            position: relative;
            padding: 2.3rem 2.2rem 2.2rem 2.2rem;
            background: #fcf9f8;
            margin-bottom: 7rem
          }
          
          @media(min-width:992px) {
            .testimonial-card-1 {
              height: 100%;
              margin-bottom: 0
            }
          }
          
          .testimonial-card-1__paragraph {
            font-size: .95rem;
            opacity: .95;
            line-height: 1.7
          }
          
          .testimonial-card-1__quote-symbol {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background: var(--gradient-primary, --primary);
            color: var(--primary-invert);
            font-size: 1.3rem;
            border-radius: 10rem;
            position: absolute;
            bottom: -25px;
            left: 0;
            right: 0;
            margin: auto
          }
          
          .block-20-person {
            text-align: center;
            transform: translateY(-5.5rem);
            margin-bottom: -4rem
          }
          
          .block-20-person__avatar {
            padding: 6px;
            width: 116px;
            height: 116px;
            background: #fff;
            border-radius: 10rem;
            border-bottom: 1px solid #ccc
          }
          
          .block-20-person__rating {
            font-size: .75rem;
            color: #ffe200
          }
          
          .block-20-person__name {
            font-size: .87rem;
            font-weight: 600
          }
          
          .block-20-person__info {
            font-size: .87rem;
            opacity: .6
          }
          
          .block-15__header {
            --elements-roundness: 5px;
            --block-background: white;
            --block-text-color: var(--text-primary);
            background: var(--block-background);
            color: var(--block-text-color)
          }
          
          .plan-switch {
            font-size: 1.2rem;
            margin-top: 3.6rem
          }
          
          .plan-switch__type {
            font-size: .95rem;
            opacity: .9
          }
          
          .plan-switch__type--selected {
            color: var(--primary);
            opacity: 1
          }
          
          .plan-card {
            padding: 3.5rem 2rem;
            background: #fff;
            box-shadow: 0 0 30px 0 rgba(0, 0, 0, .1);
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            height: 100%
          }
          
          @media(min-width:1200px) {
            .plan-card {
              padding: 3.5rem
            }
          }
          
          .discount {
            transform: scale(1.2)
          }
          
          .discount__old-price {
            font-size: 1.9rem;
            text-decoration: line-through;
            font-weight: 300;
            opacity: .7
          }
          
          .discount__percentage {
            font-size: .87rem;
            color: var(--primary-invert);
            background: var(--gradient-primary, --primary);
            padding: .3rem .9rem;
            border-radius: 10rem
          }
          
          .plan-card--recommended {
            background: var(--gradient-primary, --primary);
            color: var(--primary-invert);
            padding-top: 5rem;
            position: relative;
            z-index: 1
          }
          
          .plan-card--recommended .discount {
            color: var(--primary-invert)
          }
          
          .plan-card--recommended .discount__old-price {
            opacity: .9
          }
          
          .plan-card--recommended .discount__percentage {
            color: var(--primary);
            background: var(--primary-invert)
          }
          
          .plan-card--recommended .btn-primary {
            background: var(--primary-invert);
            color: var(--primary)
          }
          
          .plan-card--recommended .plan-features__icon {
            background-color: rgba(255, 255, 255, .3) !important;
            color: #fff !important
          }
          
          @media(min-width:992px) {
            .plan-card--recommended {
              height: calc(100% + 50px);
              width: calc(100% + 25px);
              margin-left: -12.5px;
              margin-top: -25px;
              padding-bottom: calc(3.5rem + 25px)
            }
          }
          
          .plan-card__tag {
            font-size: .9rem;
            padding: .6rem .8rem;
            border-bottom-left-radius: .8rem;
            border-bottom-right-radius: .8rem;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            width: 60%;
            margin: auto;
            background: var(--secondary);
            color: var(--primary-invert);
            overflow: hidden
          }
          
          .plan-card__tag::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, .2);
            z-index: -1
          }
          
          .plan-card__name {
            font-size: 1.5rem;
            font-weight: 600
          }
          
          .plan-card__price {
            font-size: 4.3rem;
            font-weight: 600
          }
          
          .plan-card__duration {
            font-size: .9rem;
            text-transform: uppercase
          }
          
          .plan-features {
            text-align: initial;
            margin: auto;
            width: auto
          }
          
          .plan-features__li {
            font-size: 1rem;
            margin-bottom: 1.3rem;
            display: flex
          }
          
          .plan-features__li-icon {
            color: #33c58d;
            transform: scale(1.5)
          }
          
          .plan-card--recommended .plan-features__li-icon {
            color: var(--primary-invert)
          }
          
          .plan-features__li--disabled {
            text-decoration: line-through;
            opacity: .7
          }
          
          .plan-features__li--disabled .plan-features__li-icon {
            filter: grayscale(10)
          }
          
          .plan-switch {
            margin-top: 3.6rem
          }
          
          .plan-switch__btn-group {
            border: 7px solid transparent;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, .1);
            border-radius: 20rem
          }
          
          .plan-switch__type {
            font-size: .87rem;
            font-weight: 600;
            padding: .75rem 0;
            width: 140px;
            border-radius: 20rem !important
          }
          
          .plan-switch__type:focus,
          .plan-switch__type:hover {
            color: var(--primary);
            transform: none
          }
          
          .plan-switch__type--selected {
            background: var(--primary);
            color: var(--primary-invert)
          }
          
          .plan-switch__type--selected:focus,
          .plan-switch__type--selected:hover {
            background: var(--primary);
            color: var(--primary-invert)
          }
          
          .block-29 {
            --space-between-blocks: 5rem;
            background: #fcf9f8
          }
          
          .block-29__title {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.3
          }
          
          .block-29__paragraph {
            font-size: 1rem;
            line-height: 1.7;
            opacity: .9
          }
          
          .block-29__paragraph,
          .block-29__title {
            text-align: center
          }
          
          @media (min-width:992px) {
            .block-29__title {
              font-size: 2.5rem
            }
          
            .block-29__paragraph,
            .block-29__title {
              text-align: initial
            }
          
            .block-29__paragraph {
              width: 90%
            }
          }
          
          .cta-input {
            display: inline-flex;
            justify-content: space-between;
            flex-wrap: wrap;
            font-size: .87rem;
            padding: .4rem;
            --elements-roundness: 3px;
            border-radius: var(--elements-roundness);
            background: rgb(187 187 187 / 22%)
          }
          
          @media(min-width:768px) {
            .cta-input {
              flex-wrap: nowrap
            }
          }
          
          @media(min-width:992px) {
            .cta-input {
              --elements-roundness: 10rem
            }
          }
          
          .cta-input__input {
            border: none;
            background: 0 0;
            padding: .8rem 1.5rem
          }
          
          @media(min-width:992px) {
            .cta-input__input {
              max-width: 60%
            }
          }
          
          .cta-input__input:focus {
            border: none;
            outline: 0;
            box-shadow: none
          }
          
          .cta-input__btn {
            width: 100%;
            font-size: .87rem;
            padding: .8rem 2.5rem;
            color: var(--primary-invert);
            background: var(--gradient-primary, --secondary);
            border-radius: var(--elements-roundness)
          }
          
          @media(min-width:768px) {
            .cta-input__btn {
              width: auto
            }
          }
          
          .cta-p {
            text-align: center;
            font-size: .92rem;
            font-weight: 300;
            margin-top: 10px
          }
          
          @media(min-width:992px) {
            .cta-p {
              text-align: initial
            }
          }
          
          .btn--loading {
            opacity: 1;
            cursor: progress;
            position: relative;
            overflow: hidden;
            z-index: 1
          }
          
          .btn--loading::after,
          .btn--loading::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0
          }
          
          .btn--loading::before {
            background: var(--primary);
            width: 100%;
            height: 100%;
            z-index: 1
          }
          
          @-webkit-keyframes spin {
            0% {
              -webkit-transform: rotate(0)
            }
          
            100% {
              -webkit-transform: rotate(360deg)
            }
          }
          
          @keyframes spin {
            0% {
              transform: rotate(0)
            }
          
            100% {
              transform: rotate(360deg)
            }
          }
          
          .btn--loading::after {
            margin: auto;
            border: 2px solid transparent;
            border-radius: 50%;
            border-top: 2px solid var(--primary-invert);
            width: 1.5rem;
            height: 1.5rem;
            -webkit-animation: spin .5s linear infinite;
            animation: spin .5s linear infinite;
            z-index: 2
          }
          
          .block-27 {
            --space-between-blocks: 2rem;
            --elements-roundness: 5px;
            --block-background: white;
            --block-text-color: var(--text-primary);
            background: var(--block-background);
            color: var(--block-text-color);
            overflow: hidden;
            position: relative;
            z-index: 1
          }
          
          .block-27__row {
            height: 300px
          }
          
          @media(min-width:992px) {
            .block-27__row {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: -1;
              height: 100%
            }
          }
          
          .block-27__image-column {
            height: 100%;
            background-position: center;
            background-size: cover
          }
          
          @media(min-width:992px) {
            .block-27__image-column {
              margin: 0 !important
            }
          }
          
          .block-27__content {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0
          }
          
          .block-27__bg-image {
            background-position: center;
            background-size: cover
          }
          
          .contact-form__title {
            font-size: 2.2rem;
            font-weight: 600
          }
          
          .contact-form__paragraph {
            font-size: 1.2rem;
            opacity: .9;
            line-height: 1.7
          }
          
          .contact-form {
            margin: auto
          }
          
          .contact-form__input {
            color: var(--text-primary);
            font-size: .87rem;
            padding: .87rem 1.4rem;
            border-radius: 5px;
            border: 1px solid rgba(0, 0, 0, .1);
            background: rgba(0, 0, 0, .01);
            width: 100%;
            margin-bottom: .87rem
          }
          
          textarea.contact-form__input {
            height: 130px;
            resize: none
          }
          
          .contact-form__input:focus {
            border: 1px solid var(--primary);
            outline: 0;
            box-shadow: none
          }
          
          .btn--loading {
            opacity: 1;
            cursor: progress;
            position: relative;
            overflow: hidden;
            z-index: 1
          }
          
          .btn--loading::after,
          .btn--loading::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0
          }
          
          .btn--loading::before {
            background: var(--primary);
            width: 100%;
            height: 100%;
            z-index: 1
          }
          
          @-webkit-keyframes spin {
            0% {
              -webkit-transform: rotate(0)
            }
          
            100% {
              -webkit-transform: rotate(360deg)
            }
          }
          
          @keyframes spin {
            0% {
              transform: rotate(0)
            }
          
            100% {
              transform: rotate(360deg)
            }
          }
          
          .btn--loading::after {
            margin: auto;
            border: 2px solid transparent;
            border-radius: 50%;
            border-top: 2px solid var(--primary-invert);
            width: 1.5rem;
            height: 1.5rem;
            -webkit-animation: spin .5s linear infinite;
            animation: spin .5s linear infinite;
            z-index: 2
          }
          
          .h-100 {
            height: 100% !important
          }
          
          .block-41 {
            --block-background: var(--secondary);
            --block-text-color: var(--primary-invert);
            background: var(--block-background);
            color: var(--block-text-color);
            font-size: .87rem;
            padding-top: 6rem;
            padding-bottom: 6rem
          }
          
          .block-41__logo {
            height: 36px
          }
          
          .block-41__brand-story {
            font-size: .87rem;
            line-height: 1.7;
            font-weight: 300
          }
          
          @media(min-width:768px) {
            .block-41__brand-story {
              width: 90%
            }
          }
          
          .block-41__li-heading {
            font-weight: 600;
            margin-top: .5rem;
            margin-bottom: 1.2rem;
            font-size: .8rem;
            text-transform: uppercase
          }
          
          .block-41__li {
            margin-bottom: .7rem;
            font-size: 1rem
          }
          
          .block-41__extra-link,
          .block-41__li-link {
            color: var(--block-text-color);
            opacity: .5;
            font-weight: 300
          }
          
          .block-41__extra-link:focus,
          .block-41__extra-link:hover,
          .block-41__li-link:focus,
          .block-41__li-link:hover {
            color: inherit;
            text-decoration: underline
          }
          
          .block-41__divider {
            margin: 2.4rem 0
          }
          
          .block-41__extra-links {
            justify-content: center
          }
          
          @media(min-width:768px) {
            .block-41__extra-links {
              justify-content: flex-start
            }
          }
          
          .block-41__copyrights {
            width: 90%;
            margin: auto;
            text-align: center
          }
          
          @media(min-width:768px) {
            .block-41__copyrights {
              width: auto;
              text-align: initial
            }
          }
          </style>
        </body>
        
        </html>
        `
    })
}