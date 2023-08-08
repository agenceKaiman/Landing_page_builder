export function faqV2(editor, options = {}) {
  editor.Blocks.add('faqV2', {
    label : 'faqV2',
    content: `
    <!------------------------------>
    <!--Section Name---------------->
    <!------------------------------>
    <div class="block-39 space-between-blocks">
      <div class="container">
        <!-- HEADER -->
        <div class="block__header col-lg-8 col-xl-7 mx-auto text-center mb-5">
          <h1 class="block__title">Questions posées</h1>
        </div>
        <div class="row px-2">
          <div class="col-lg-6">
            <div class="content-block">
              <h4 class="content-block__title">Sous-titre</h4>
              <p class="content-block__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content-block">
              <h4 class="content-block__title">Sous-titre</h4>
              <p class="content-block__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content-block">
              <h4 class="content-block__title">Sous-titres</h4>
              <p class="content-block__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content-block">
              <h4 class="content-block__title">Sous-titres</h4>
              <p class="content-block__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>
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

@media(min-width:992px) {
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

@media(min-width:992px) {
  .content-block__title {
    font-size: 1.5rem
  }
}

.content-block__paragraph {
  font-size: 1rem;
  opacity: .9;
  line-height: 1.7
}
    </style>
    `
  })
}

export function CTA(editor, options = {}) {
  editor.Blocks.add('cta', {
    label: 'Template_1',
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
  <link rel="stylesheet" href="./Template02.css">
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
            <li class="hero-nav__item"><a href="/"><img class="hero-nav__logo" src="https://svgshare.com/i/RmR.svg" change-src-onscroll="https://svgshare.com/i/RmR.svg" alt="our logo"></a><!-- Don't remove this empty p --><p class="mx-2"></p></li>
            <li id="hero-menu" class="flex-grow-1 hero__nav-list hero__nav-list--mobile-menu ft-menu">
              <ul class="hero__menu-content nav flex-column flex-lg-row ft-menu__slider animated list-unstyled p-2 p-lg-0">
                <li class="flex-grow-1">
                  <ul class="nav nav--lg-side flex-column-reverse flex-lg-row-reverse list-unstyled align-items-center p-0">
                    <li class="flex-grow-1">
                      <ul class="nav nav--lg-side flex-column-reverse flex-lg-row-reverse list-unstyled align-items-center p-0">
                        <li class="hero-nav__item"><a href="https://twitter.com/intent/tweet?text=30%2B%20HTML%20BLOCKS%20TO%20BUILD%20OUTSTANDING%20LANDING%20PAGES&amp;url=https%3A%2F%2Ffrontendor.com%2F" target="_blank" class="btn btn-primary"><p class="mb-0">Sign in</p></a></li>
                      </ul>
                    </li>
                    <li class="hero-nav__item"><a href="#!" class="hero-nav__link"><p class="mb-0">Contactez nous</p></a></li>
                    <li class="hero-nav__item"><a href="#!" class="hero-nav__link"><button>Prix</button></a></li>
                    <li class="hero-nav__item"><a href="#!" class="hero-nav__link"><button>Services</button></a></li>
                      <div class="hero-nav__dropdown dropdown dropdown--of-1-columns">
                        <div class="row flex-wrap">
                          <div class="col-lg-12"><p class="dropdown__title mt-0">COMMUNITY</p><a href="https://google.com" target="_blank" class="dropdown__link">
                              <div><p class="dropdown__icon"><i class="fas fa-eye"></i></p></div><!-- Don't remove this empty "p" --><p class="mx-2"></p><!-- ------------------------------ -->
                              <div class="dropdown__item"><p class="dropdown__item-title">Service</p>
                                <p class="dropdown__item-description">votre contenues</p>
                              </div>
                            </a><a href="#" class="dropdown__link">
                              <div><p class="dropdown__icon"><i class="far fa-comment-alt"></i></p></div><!-- Don't remove this empty "p" --><p class="mx-2"></p><!-- ------------------------------ -->
                              <div class="dropdown__item"><p class="dropdown__item-title">Renseignements</p>
                                <p class="dropdown__item-description">votre contenues</p>
                              </div>
                            </a><p class="dropdown__title mt-0">OTHERS</p><a href="#" class="dropdown__link">
                              <div><p class="dropdown__icon"><i class="far fa-envelope-open"></i></p></div><!-- Don't remove this empty "p" --><p class="mx-2"></p><!-- ------------------------------ -->
                              <div class="dropdown__item"><p class="dropdown__item-title">Vos retour</p>
                                <p class="dropdown__item-description">votre contenues</p>
                              </div>
                            </a></div>
                        </div>
                      </div>
                    </li>
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
            <p class="hero__paragraph mb-5">Votre contenues</p>
            <div class="hero__btns-container"><a class="hero__btn btn btn-primary mb-2 mb-lg-0 mx-1 mx-lg-2" href="#!">votre action</a><a class="hero__btn btn btn-secondary mb-2 mb-lg-0 mx-1 mx-lg-2" href="#!">votre action</a></div>
          </div>
          <div class="col-lg-6 mt-5 mt-lg-0">
            <div class="hero__img-container"><img class="hero__img w-100" src="https://fellow.app/wp-content/uploads/2020/07/1-5.svg"></div>
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
  </script>
  <!------------------------------>
  <!-- BRANDS ---------------->
  <!------------------------------>
  <div class="block-24 space-between-blocks">
    <div class="block-24__header col-lg-8 col-xl-7 mx-auto text-center px-0">
      <h1 class="block-24__title">Titre</h1>
    </div>
    <div class="block-24__logos"><img class="block-24__img" src="https://frontendor.com/preview/assets/ui-library/Blocks/blocks__assets/images/brand1.png"> <img class="block-24__img" src="https://frontendor.com/preview/assets/ui-library/Blocks/blocks__assets/images/brand2.png"> <img class="block-24__img" src="https://frontendor.com/preview/assets/ui-library/Blocks/blocks__assets/images/brand3.png"> <img class="block-24__img" src="https://frontendor.com/preview/assets/ui-library/Blocks/blocks__assets/images/brand5.png"> <img class="block-24__img" src="https://frontendor.com/preview/assets/ui-library/Blocks/blocks__assets/images/brand7.png"></div>
  </div><!-- FEATURE CENTER -->
  <!------------------------------>
  <!--Section Name---------------->
  <!------------------------------>
  <div class="block-33 space-between-blocks">
    <div class="container">
      <div class="col-lg-8 col-xl-7 mx-auto text-center mb-4">
        <h1 class="block__title">Titre</h1>
        <p class="block__paragraph mb-0">Votre contenue</p>
      </div>
      <div class="text-center mt-1"><a href="#!" class="btn btn-primary"><p class="mb-0">Votre action</p></a></div>
      <div class="block-33__img-container col-lg-8 col-xl-10 mx-auto position-relative"><img class="block-33__img" src="https://fellow.app/wp-content/uploads/2020/07/1-6.png"></div>
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
          <h1 class="block__title block__title--big mb-3">Votre titre</h1>
          <p class="block__paragraph block__paragraph--big mb-0">Votre contenue</p>
        </div><!-- IMAGE -->
        <div class="col-lg-6 my-5 my-lg-0 p-lg-5 text-center">
          <div class="block-8-scr__img-container position-relative"><img class="w-100" src="https://fellow.app/wp-content/uploads/2020/07/2-3.png"><svg class="block-8-scr-scr-dots-svg">
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
          <div class="block-8-scr__img-container position-relative"><img class="w-100" src="https://fellow.app/wp-content/uploads/2020/07/4.png"><svg class="block-8-scr-scr-dots-svg">
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
          <p class="block__paragraph block__paragraph--big mb-0">Votre contenue</p>
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
          <p class="block__paragraph block__paragraph--big mb-0">Votre contenue</p>
        </div><!-- IMAGE -->
        <div class="col-lg-6 my-5 my-lg-0 p-lg-5 text-center">
          <div class="block-8-scr__img-container position-relative"><img class="w-100" src="https://fellow.app/wp-content/uploads/2020/11/guest-users-feature-image1.png"><svg class="block-8-scr-scr-dots-svg">
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
  </div><!-- INTEGRATIONS -->
  <!------------------------------>
  <!--Section Name---------------->
  <!------------------------------>
  <div class="block-25 space-between-blocks">
    <div class="container">
      <div class="row align-items-center">
        <div class="block-25__header col-lg-6">
          <h1 class="block-25__title mb-3">Titre</h1>
          <p class="block-25__paragraph">Votre contenue</p>
        </div>
        <div class="col-lg-6 logos">
          <div class="row">
            <div class="col-6 px-0">
              <div class="logos__img-container"><img class="logos__img" src="https://frontendor.com/preview/assets/ui-library/Blocks/blocks__assets/images/brand1.png"></div>
            </div>
            <div class="col-6 px-0">
              <div class="logos__img-container"><img class="logos__img" src="https://frontendor.com/preview/assets/ui-library/Blocks/blocks__assets/images/brand2.png"></div>
            </div>
            <div class="col-6 px-0">
              <div class="logos__img-container"><img class="logos__img" src="https://frontendor.com/preview/assets/ui-library/Blocks/blocks__assets/images/brand3.png"></div>
            </div>
            <div class="col-6 px-0">
              <div class="logos__img-container"><img class="logos__img" src="https://frontendor.com/preview/assets/ui-library/Blocks/blocks__assets/images/brand5.png"></div>
            </div>
            <div class="col-6 px-0">
              <div class="logos__img-container"><img class="logos__img" src="https://frontendor.com/preview/assets/ui-library/Blocks/blocks__assets/images/brand6.png"></div>
            </div>
            <div class="col-6 px-0">
              <div class="logos__img-container"><img class="logos__img" src="https://frontendor.com/preview/assets/ui-library/Blocks/blocks__assets/images/brand4.png"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><!-- TESTIMONIAL -->
  <!------------------------------>
  <!--Section Name---------------->
  <!------------------------------>
  <div class="block-61 space-between-blocks">
    <div class="container">
      <div class="block__header col-lg-8 col-xl-7 mx-auto text-center px-0">
        <h1 class="block__title">Titre</h1>
      </div>
      <div class="row px-2 pt-4">
        <div class="col-lg-6 pb-5">
          <div class="testimonial-card-1">
            <p class="testimonial-card-1__paragraph">Votre contenue</p>
            <div class="block-61-person">
              <div><img class="block-61-person__avatar" src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"></div>
              <div class="px-2"></div>
              <div class="flex-grow-1 d-flex flex-column"><p class="block-61-person__rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p><p class="block-61-person__name my-1">Ali Boukeroui</p><p class="block-61-person__info">votre poste</p></div>
            </div><p class="testimonial-card-1__quote-symbol"><i class="fas fa-quote-left"></i></p>
          </div>
        </div>
        <div class="col-lg-6 pb-5">
          <div class="testimonial-card-1">
            <p class="testimonial-card-1__paragraph">Votre contenue</p>
            <div class="block-61-person">
              <div><img class="block-61-person__avatar" src="https://uifaces.co/our-content/donated/ukegoVAy.jpg"></div>
              <div class="px-2"></div>
              <div class="flex-grow-1 d-flex flex-column"><p class="block-61-person__rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p><p class="block-61-person__name my-1">Ali Boukeroui</p><p class="block-61-person__info">votre poste</p></div>
            </div><p class="testimonial-card-1__quote-symbol"><i class="fas fa-quote-left"></i></p>
          </div>
        </div>
      </div>
    </div>
  </div><!-- CTA-->
  <!------------------------------>
  <!--Section Name---------------->
  <!------------------------------>
  <div class="block-32 space-between-blocks">
    <div class="container">
      <div class="col-lg-8 col-xl-7 mx-auto text-center mb-4">
        <h1 class="block__title">Titre</h1>
      </div>
      <div class="text-center mt-1"><a href="#!" class="btn btn-primary">votre action</a></div>
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
        <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0"><img class="block-41__logo mb-3" src="https://svgshare.com/i/RmR.svg">
          <p class="block-41__brand-story mb-0">description</p>
        </div>
        <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
          <ul class="block-41__links-list list-unstyled p-0">
            <li class="block-41__li-heading"><p>Product<p></li>
            <li class="block-41__li"><a href="#!" class="block-41__li-link"><p>Entreprise</p></a></li>
            <li class="block-41__li"><a href="#!" class="block-41__li-link"><p>Affiliation</p></a></li>
            <li class="block-41__li"><a href="#!" class="block-41__li-link"><p>Contactez nous</p></a></li>
          </ul>
        </div>
        <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
          <ul class="block-41__links-list list-unstyled p-0">
            <li class="block-41__li-heading">Services</li>
            <li class="block-41__li"><a href="#!" class="block-41__li-link"><p>Entreprise</p></a></li>
            <li class="block-41__li"><a href="#!" class="block-41__li-link"><p>Affiliation</p></a></li>
            <li class="block-41__li"><a href="#!" class="block-41__li-link"><p>Contactez nous</p></a></li>
          </ul>
        </div>
        <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
          <ul class="block-41__links-list list-unstyled p-0">
            <li class="block-41__li-heading">Community</li>
            <li class="block-41__li"><a href="#!" class="block-41__li-link"><p>Entreprise</p></a></li>
            <li class="block-41__li"><a href="#!" class="block-41__li-link"><p>Affiliation</p></a></li>
            <li class="block-41__li"><a href="#!" class="block-41__li-link"><p>Contactez nous</p></a></li>
          </ul>
        </div>
        <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
          <ul class="block-41__links-list list-unstyled p-0">
            <li class="block-41__li-heading">Solutions</li>
            <li class="block-41__li"><a href="#!" class="block-41__li-link"><p>Entreprise</p></a></li>
            <li class="block-41__li"><a href="#!" class="block-41__li-link"><p>Affiliation</p></a></li>
            <li class="block-41__li"><a href="#!" class="block-41__li-link"><p>Contactez nous</p></a></li>
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
  </div>
  <style>
  :root {
    --primary: #596fff;
    --secondary: #141d21;
    --primary-invert: #fff;
    --secondary-invert: #000;
    --gradient-primary: linear-gradient(230deg, #596fff, #596fff);
    --gradient-secondary: linear-gradient(230deg, #0a1f44, #020024);
    --text-primary: #141d21;
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
    --block-background: #d7e0fc;
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
  
  .block-24 {
    margin-bottom: 4rem;
    background: #ffede1
  }
  
  @media(min-width:500px) {
    .block-24__header {
      margin-bottom: 3rem
    }
  }
  
  .block-24__title {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.4
  }
  
  @media(min-width:992px) {
    .block-24__title {
      font-size: 1.2rem
    }
  }
  
  .block-24__logos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap
  }
  
  .block-24__img {
    height: 35px;
    max-width: 50%;
    max-height: 150px;
    opacity: .8;
    transition: .2s all;
    margin: 0 2rem;
    margin-bottom: 2rem
  }
  
  @media(max-width:500px) {
    .block-24__img {
      max-width: 60%
    }
  }
  
  @media(min-width:768px) {
    .block-24__img {
      max-width: 36%
    }
  }
  
  .block-24__img:focus,
  .block-24__img:hover {
    opacity: 1
  }
  
  .block-33 {
    --block-background: white;
    --block-text-color: var(--text-primary);
    background: var(--block-background);
    color: var(--block-text-color)
  }
  
  .block__header {
    margin-bottom: 4rem
  }
  
  .block-33__img-container {
    margin-top: 5rem;
    text-align: center
  }
  
  .block-33__img {
    width: 100%;
    border-radius: 10px
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
  
  .block-25 {
    --block-background: white;
    --block-text-color: var(--text-primary);
    background: var(--block-background);
    color: var(--block-text-color)
  }
  
  .block-25__header {
    margin-bottom: 4rem
  }
  
  .block-25__title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.4
  }
  
  @media(min-width:992px) {
    .block-25__title {
      font-size: 3rem
    }
  }
  
  .block-25__paragraph {
    font-size: 1.1rem;
    line-height: 1.5;
    opacity: .95;
    width: 90%
  }
  
  .logos__img-container {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, .03);
    border: 2px solid #fff
  }
  
  .logos__img {
    width: auto;
    max-width: 57%;
    max-height: 70%;
    margin: auto;
    transition: .2s all
  }
  
  .block-61 {
    --block-background: white;
    --block-text-color: var(--text-primary);
    background: var(--block-background);
    color: var(--block-text-color)
  }
  
  .testimonial-card-1 {
    padding: 3rem 2.2rem 2.2rem 2.2rem;
    border-radius: 5px;
    position: relative;
    background: var(--block-background);
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, .09);
    display: flex;
    flex-direction: column;
    height: 100%
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
    left: 30px
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
  
  .block-16__header {
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
    background: var(--gradient-secondary);
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
  
  .switch {
    font-size: 1em;
    position: relative;
    --switch-background--default: var(--primary);
    --switch-btn-background: white;
    --switch-background--checked: var(--primary);
    --switch-background--disabled: #ccc
  }
  
  .switch input {
    position: absolute;
    height: 1px;
    width: 1px;
    background: 0 0;
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    padding: 0
  }
  
  .switch input+label {
    position: relative;
    min-width: calc(calc(2.375em * .8) * 2);
    border-radius: calc(2.375em * .8);
    height: calc(2.375em * .8);
    line-height: calc(2.375em * .8);
    display: inline-block;
    cursor: pointer;
    outline: 0;
    user-select: none;
    vertical-align: middle;
    text-indent: calc(calc(calc(2.375em * .8) * 2) + .5em)
  }
  
  .switch input+label::after,
  .switch input+label::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(calc(2.375em * .8) * 2);
    bottom: 0;
    display: block
  }
  
  .switch input+label::before {
    right: 0;
    background-color: var(--switch-background--default);
    border-radius: calc(2.375em * .8);
    transition: .2s all
  }
  
  .switch input+label::after {
    top: .25em;
    left: .25em;
    width: calc(calc(2.375em * .8) - calc(.25em * 2));
    height: calc(calc(2.375em * .8) - calc(.25em * 2));
    border-radius: 50%;
    background-color: var(--switch-btn-background);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .45);
    transition: .2s all
  }
  
  .switch input:checked+label::before {
    background-color: var(--switch-background--checked)
  }
  
  .switch input:checked+label::after {
    margin-left: calc(2.375em * .8)
  }
  
  .switch input:focus+label::before {
    outline: 0;
    box-shadow: 0 0 0 .2em rgba(0, 0, 0, .1)
  }
  
  .switch input:disabled+label {
    color: #868e96;
    cursor: not-allowed
  }
  
  .switch input:disabled+label::before {
    background-color: var(--switch-background--disabled)
  }
  
  .switch+.switch {
    margin-left: 1em
  }
  
  .block-32 {
    --block-background: #ffede1;
    --block-text-color: var(--text-primary);
    background: var(--block-background);
    color: var(--block-text-color)
  }
  
  .block__header {
    margin-bottom: 4rem
  }
  
  .block__pre-title {
    color: var(--primary);
    font-size: 1rem;
    font-weight: 600
  }
  
  .block-41 {
    --block-background: white;
    --block-text-color: var(--secondary-invert);
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
    `,
  });
}
