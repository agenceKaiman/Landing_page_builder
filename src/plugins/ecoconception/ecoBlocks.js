export function header(editor, options = {}) {
    const {
        menuItems = ['Nos actions', "L'association", 'Actualité', 'Équipe', 'Contact'],
      } = options;
    
      const menuItemsHTML = menuItems
        .map((item) => `<li>${item}</li>`)
        .join('');
    
      editor.Blocks.add('eco-header', {
        label: 'Header éco-conçu',
        content: `
          <div class="eco-header" data-gjs-editable="true">
            <nav class="menu-type-1 customize-option-bloc customizable-menu customizable-wrapper clearfix" style="display: block;">
              <div class="menu-logo gauche clearfix">
                <image viewBox="0 0 200 200" class="gauche"></image>
              </div>
              <div class="droite hamburger-button">
                <span class="hamburger-1 hamburger-line" style="background-color: rgb(6, 6, 142);"></span>
                <span class="hamburger-2 hamburger-line" style="background-color: rgb(6, 6, 142);"></span>
                <span class="hamburger-3 hamburger-line" style="background-color: rgb(6, 6, 142);"></span>
              </div>
              <div class="one-line-menu droite" data-gjs-type="custom-ul" data-gjs-editable="true">
                ${menuItemsHTML}
              </div>
              <div class="menu-type-1-responsive menu-responsive-wrapper" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">
                <div class="close-icon close-icon-2">&nbsp;</div>
                <div class="responsive-menu" data-gjs-type="custom-ul" data-gjs-editable="true">
                  ${menuItemsHTML}
                </div>
              </div>
            </nav>
          </div>
    
            <style data-gjs-editable="true">
            input, textarea, form, button{
                margin: 0;
                padding: 0;
                border: 0;
            }
            
            table{
                border-collapse: collapse;
                border-spacing: 0;
                border: none;
            }
            
            td, tr, th{
                border-collapse: collapse;
                border-spacing: 0;
                border: none;
            }
            
            img{
                border: none;
                margin: 0;
                padding: 0;
                max-width: 100%;
            }
            
            input, textarea{
                font-size: 1em;
            }
            
            a:focus{border: none; outline:none !important; }
            
            .noscroll{
                overflow-y: hidden;
            }
            
            .gauche{
                float: left;
            }
            
            .droite{
                float: right;
            }
            
            .separation{
                clear: both;
                visibility:hidden;
            }
            
            .clearfix{
            }
            
            .clearfix:after {
                content: ".";
                height: 0;
                line-height: 0;
                display: block;
                visibility: hidden;
                clear: both;
            }
            
            .texte-droite{
                text-align: right;
            }
            
            .texte-gauche{
                text-align: left;
            }
            
            .texte-centre{
                text-align: center;
            }
            
            .white{color: #FFF}
            .black{color: #000}
            .blue{color: #06068E}
            .green{color: #00B050}
            .orange{color: #FF4014}
            .yellow{color: #FFCC00}
            
            .border-separator{
                border-top: 1px solid #06068E;
                border-bottom: 1px solid #06068E;
                padding: 50px 0;
                box-sizing: border-box;
            }
            
            /**********************************************/
            
            .colonne1{margin-left:1.5625%;margin-right:1.5625%;width:5.2083333333%;padding:0;}
            .colonne2{margin-left:1.5625%;margin-right:1.5625%;width:13.5416666667%;padding:0;}
            .colonne3{margin-left:1.5625%;margin-right:1.5625%;width:21.875%;padding:0;}
            .colonne4{margin-left:1.5625%;margin-right:1.5625%;width:30.2083333333%;padding:0;}
            .colonne5{margin-left:1.5625%;margin-right:1.5625%;width:38.5416666667%;padding:0;}
            .colonne6{margin-left:1.5625%;margin-right:1.5625%;width:46.875%;padding:0;}
            .colonne7{margin-left:1.5625%;margin-right:1.5625%;width:55.2083333333%;padding:0;}
            .colonne8{margin-left:1.5625%;margin-right:1.5625%;width:63.5416666667%;padding:0;}
            .colonne9{margin-left:1.5625%;margin-right:1.5625%;width:71.875%;padding:0;}
            .colonne10{margin-left:1.5625%;margin-right:1.5625%;width:80.2083333333%;padding:0;}
            .colonne11{margin-left:1.5625%;margin-right:1.5625%;width:88.5416666667%;padding:0;}
            .colonne12{margin-left:1.5625%;margin-right:1.5625%;width:96.875%;padding:0;}
            
            /**********************************************/
            /**********************************************/
            /**********************************************/
            .main-logo-content{
                position: absolute;
                left: 40px;
                top: 30px;
                z-index: 25;
            }
            
            .main-logo-content a {
                font-size: 250%;
                font-weight: bold;
                color: transparent;
                -webkit-text-stroke: 1px #FFFFFF;
                text-decoration: none;
                display: table-cell;
                vertical-align: bottom;
            }
            
            .lateral-button{
                background-color: #FFCC00;
                color: #000;
                display: inline-block;
                transform: rotate(-90deg);
                transform-origin: 50% 50%;
                position: fixed;
                width: 150px;
                height: 60px;
                text-align: center;
                line-height: 85px;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                cursor: pointer;
                left: -70px;
                font-weight: bold;
                z-index: 21;
            }
            
            .lateral-button:hover{
                left: -50px;
                transition: all .1s ease-in-out;
            }
            
                
            .menu-configuration-button{
                top: 20%;
                margin-top: -20px;
            }
            
            .function-menu-button{
                top: 50%;
                margin-top: -20px;
            }
            
            .menu-about-button{
                top: 80%;
                margin-top: -20px;
            }
            
            .lateral-menu{
                width: 100%;
                height: 100%;
                position: fixed;
                z-index: 22;
                left: -100%;
                top: 0;
                color: #FFF;
                background-color: #000;
                transition: all .2s ease-in-out;
            }
            
            .close-button {
                position: absolute;
                right: 20px;
                top: 25px;
                width: 30px;
                height: 30px;
                cursor: pointer;
                opacity: 1;
                transition: all .2s ease-in-out;
            }
            
            .close-button:before, .close-button:after {
              position: absolute;
              left: 15px;
              content: ' ';
              height: 30px;
              width: 2px;
              background-color: #FFF;
            }
            
            .close-button:before, .close-button:after {
                position: absolute;
                left: 15px;
                content: ' ';
                height: 30px;
                width: 2px;
                background-color: #FFF;
              }
            
            .close-button:before {
              transform: rotate(45deg);
            }
            
            .close-button:after {
              transform: rotate(-45deg);
            }
            
            .lateral-menu-open{
                left: 0;
            }
            
            .lateral-menu-content{
                width: 90%;
                position: absolute;
                left: 5%;
                top: 50%;
                transform: translateY(-50%)
            }
            
            .lateral-menu-title{
                font-family: 'Red Hat Display', serif;
                color: #FFCC00;
                margin-bottom: 25px;
                width: calc(100% - 55px);
            }
            
            .lateral-menu-content p{
                margin-bottom: 25px;
            }
            
            .setting-navigation{
                position: absolute;
                right: -80px;
                top: 0;
                width: 40px;
                padding: 10px 10px 0;
            }
            
            .setting-navigation li{
                opacity: .5;
                transition: all .2s ease-in-out;
            }
            
            .setting-navigation li:hover{
                opacity: 1;
            }
            
            .setting-navigation ul li{
                list-style-type: none;
                margin-bottom: 10px;
                cursor: pointer;
            }
            
            .setting-navigation img{
                width: 100%;
                display: block;
            }
            
            .right-border{
                border-right: 1px solid #FFF;
                padding-right: 25px;
                box-sizing: border-box;
            }
            
            .lateral-validate-button{
                display: inline-block;
                padding: 10px 75px;
                background-color: #FFCC00;
                border-radius: 5px;
                color: #000;
                cursor: pointer;
            }
            
            /*.customizable-container:hover > .setting-navigation{
                opacity: .8;
            }*/
            
            .custom-configuration-bloc{
                margin-bottom: 50px;
            }
            
            .lateral-menu-validate{
                text-align: center;
                transition: all .2s ease-in-out;
            }
            
            .setting-button-wrap{
                border-radius: 25px;
            }
            
            .configuration-button-unclickable{
                opacity: .15;
                pointer-events: none;
            }
            
            .unclickable-button{
                pointer-events: none;
            }
            
            .opacity-button{
                opacity: .15;
            }
            
            .result-validate-button{
                text-align: center;
                transition: all .2s ease-in-out;
                margin-top: 50px;
                margin-bottom: 75px;
            }
            
            .end-validate-button{
                display: inline-block;
                padding: 10px 75px;
                background-color: #FFCC00;
                border-radius: 5px;
                color: #000;
                cursor: pointer;
            }
            
            .about-menu-container{
                z-index: 23;
            }
            
            .game-introduction{
                font-size: 125%;
            }
            
            .game-title{
                font-size: 400%;
                line-height: 100%;
                margin-bottom: 25px;
                font-family: 'Red Hat Display', Serif;
                color: #00B050;
                font-weight: normal;
            }
            
            .game-introduction hr{
                width: 25px;
                margin-bottom: 25px;
                margin-left: 0;
            }
            
            .close-prehome{
                font-size: 150%;
                background-color: #00B050;
                padding: 2px 30px;
                /* text-transform: uppercase; */
                font-weight: bold;
                display: inline-block;
                border-radius: 10px;
                color: #000;
                cursor: pointer;
            }
            
            .rules-wrapper{
                margin-bottom: 25px;
                font-size: 125%;
            }
            
            .rules-wrapper li{
                list-style-type: none;
                margin-bottom: 25px;
            }
            
            .lateral-rules-title{
                line-height: 300%;
            }
            
            /**********************************************/
            /**********************************************/
            /**********************************************/
            
            /*#menu, #footer{
                min-height: 130px;
            }
            
            #header, #services, #image, #texte, #team, #actualite, #presentation, #contact, #adresse{
                min-height: 75vh;
            }*/
            
            .menu-wrapper, .footer-wrapper{
                min-height: 130px;
            }
            
            .header-wrapper, .services-wrapper, .image-wrapper, .texte-wrapper, .team-wrapper, .actualite-wrapper, .presentation-wrapper, .contact-wrapper, .adresse-wrapper{
                min-height: 75vh;
            }
            
            .custom-texte{
                min-height: 110px;
            }
            
            .customizable-site-container{
                width: 85%;
                margin: 0 auto;
                display: none;
            }
            
            .customizable-container{
                border: 2px dashed #CCCCCC;
                box-sizing: border-box;
                position: relative;
                /*margin-top: 50px;*/
                margin-bottom: 25px;
            }
            
            .customizable-container-clicked{
                border: transparent;
                position: relative;
            }
            
            .customizer-bloc{
                position: absolute;
                right: 0;
                top: 0px;
                display: none;
                z-index: 11;
            }
            
            .setting-bloc{
                background-color: #000;
                position: relative;
                width: 300px;
                height: 230px;
                padding: 10px 20px;
                box-sizing: border-box;
                z-index: 2;
                color: #FFF;
            }
            
            .setting-bloc-question{
                font-size: 125%;
                font-family: 'Red Hat Display', serif;
                color: #FF4014;
                margin-bottom: 20px;
                font-weight: normal;
            }
            
            .customizer-validate{
                position: absolute;
                right: 20px;
                bottom: 10px;
                font-size: 80%;
                font-weight: bold;
                cursor: pointer;
                display: inline-block;
                padding: 5px 15px;
                background-color: #FF4014;
                color: #000;
                border-radius: 5px;
            }
            
            .customizer-bloc:before {
                  content: '';
                width: 0; 
                height: 0;
                position: absolute;
                right: -20px;
                top: 15px;
                border-top: 15px solid transparent;
                border-bottom: 15px solid transparent;
                border-left: 20px solid #000;
            }
            
            /* Customize the label (the container) */
            .choice-container {
                  display: block;
                  position: relative;
                  padding-left: 25px;
                  margin-bottom: 15px;
                  cursor: pointer;
                line-height: 15px;
                -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
                  user-select: none;
            }
            
            .value{
                margin-left: 5px;
            }
            
            /* Hide the browser's default radio button */
            .choice-container input {
              position: absolute;
              opacity: 0;
              cursor: pointer;
              height: 0;
              width: 0;
            }
            
            /* Create a custom radio button */
            .checkmark, .yellow-checkmark{
              position: absolute;
              top: 0;
              left: 0;
              height: 15px;
              width: 15px;
              border-radius: 50%;
              border: 1px solid #FFFFFF;
              box-sizing: border-box;
            }
            
            /* On mouse-over, add a grey background color */
            .choice-container:hover input ~ .checkmark, .choice-container:hover input ~ .yellow-checkmark{
              background-color: #2B222A;
            }
            
            /* When the radio button is checked, add a blue background */
            .choice-container input:checked ~ .checkmark, .choice-container:hover input ~ .yellow-checkmark{
              background-color: #2B222A;
            }
            
            /* Create the indicator (the dot/circle - hidden when not checked) */
            .checkmark:after, .yellow-checkmark:after{
              content: "";
              position: absolute;
              display: none;
            }
            
            
            
            /* Show the indicator (dot/circle) when checked */
            .choice-container input:checked ~ .checkmark:after{
              display: block;
              background-color: #FF4014;
              height: 7px;
              width: 7px;
              top: 3px;
              left: 3px;
            }
            
            .checkmark.without-after-element:after{
                background-color: #00B050 !important;
            
            }
            
            .choice-container input:checked ~ .yellow-checkmark:after{
              display: block;
              background-color: #FFCC00;
              height: 7px;
              width: 7px;
              top: 3px;
              left: 3px;
            }
            
            /* Style the indicator (dot/circle) */
            .choice-container .checkmark:after, .choice-container .yellow-checkmark:after{
              top: 9px;
              left: 9px;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: white;
            }
            
            .description-bloc{
                position: absolute;
                top:0;
                left:-30px;
                width: 330px;
                height: 230px;
                transition: all .2s ease-in-out;
                cursor: pointer;
            }
            
            .description-bloc-open{
                left: -330px;
            }
            
            .description-bloc-opener{
                width: 30px;
                height: 100%;
                background: #000;
                border-right: 1px solid #FFF;
                box-sizing: border-box;
                position: relative;
            }
            
            .description-opener-tag{
                color: #FF4014;
                transform: rotate(-90deg);
                transform-origin: 50% 50%;
                display: block;
                width: 200px;
                position: absolute;
                left: -85px;
                top: 112px;
                text-align: center;
                font-size: 90%;
            }
            
            .description-bloc-content{
                background: #000;
                width: calc(100% - 30px);
                min-height: 100%;
                padding: 10px 20px;
                box-sizing: border-box;
                border-right: 1px solid #FFF;
                color: #FFF;
            }
            
            .customizable-bloc-name{
                position: absolute;
                top: 50%;
                left: 50%;
                padding: 100px;
                box-sizing: border-box;
                transform: translate(-50%, -50%);
                font-size: 300%;
                color: #CCCCCC;
                z-index: -1;
                user-select: none;
            }
            
            .menu-organize-button, .header-organize-button, .image-organize-button, .texte-organize-button, .services-organize-button,
            .presentation-organize-button, .actualite-organize-button, .team-organize-button, .contact-organize-button, .adresse-organize-button, .footer-organize-button{
                /*visibility: hidden;*/
                display: none;
            }
            
            .index-list-links{
                width: 50%;
            }
            
            .index-list-links li{
                list-style-type: none;
                margin-top: 25px;
                margin-bottom: 25px;
                font-size: 125%;
                border-bottom: 1px solid #FFF;
                box-sizing: border-box;
                padding: 10px;
                font-weight: bold;
            }
            
            .index-list-links li a{
                text-decoration: none;
                color: inherit;
            }
            
            /**********************************************/
            /**********************************************/
            /**********************************************/
            
            .customizer-open{
                display: block;
            }
            
            .header-customizer-open{
                display: block;
            }
            
            .customize-option-bloc{
                font-size: .9em;
                position: relative;
                bottom: 0;
            }
            
            .menu-type-1, .menu-type-2, .menu-type-3{
                display: none;
                position: relative;
                bottom: 0;
                width: 100%;
                height: 80px;
            }
            
            .one-line-menu{
                list-style-type: none;
                line-height: 80px;
            }
            
            .one-line-menu li{
                display: inline-block;
                margin-left: 20px;
                font-size: 150%;
                cursor: pointer;
                font-weight: bold;
            }
            
             .menu-responsive-wrapper{
                width: 100%;
                height: 100%;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 22;
                 background-color: inherit;
                 display: none;
            }
            
            .responsive-menu{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);	
            }
            
            .responsive-menu li{
                display: block;
                font-size: 200%;
                text-align: center;
                cursor: pointer;
                font-weight: bold;
                width: 100%;
                padding: 20px 0;
                box-sizing: border-box;
                margin-top: 25px;
                margin-bottom: 25px;
            }
            
            .close-icon{
                position:absolute;
                right:20px;
                top:20px;
                width:40px;
                height:40px;
                cursor:pointer;
                display:block
            }
            
            .close-icon:before,.close-icon:after{
                position:absolute;
                left:20px;
                content:' ';
                height:40px;
                width:2px;
                background-color:#000
            }
            
            .close-icon-1:before,.close-icon-1:after{
                background-color:#FFF;
            }
            
            .close-icon-2:before,.close-icon-2:after{
                background-color:#06068E;
            }
            
            .close-icon-3:before,.close-icon-3:after{
                background-color:#FFF;
            }
            
            .close-icon:before{
                transform:rotate(45deg)
            }
            
            .close-icon:after{
                transform:rotate(-45deg)
            }
            
            .menu-logo{
                height: 80px;
                display: block;
            }
            
            .menu-logo svg{
                height: 100%;
            }
            
            .main-logo{
                fill:#06068E;
            }
            
            .donation-button{
                line-height: 80px;
                padding: 15px 20px;
                background-color: #06068E;
                border-radius: 50px;
                box-sizing: border-box;
                color: #FFF;
                margin-left: 20px;
                font-size: 100%;
                cursor: pointer;
                font-weight: bold;
                text-decoration: none;
            }
            
            .first-level-menu:hover > .submenu{
                display: block;
            }
            
            .first-level-menu{
                position: relative;
            }
            
            .submenu{
                position: absolute;
                background-color: #FFF;
                left: 50%;
                font-size: 50%;
                text-align: center;
                line-height: normal;
                width: 150px;
                margin-left: -75px;
                display: none;
                border: 1px solid #CCC;
                border-bottom: none;
                z-index: 10;
                box-sizing: border-box;
            }
            
             .mega-submenu{
                position: absolute;
                top: 100px;
                border: 1px solid #CCC;
                z-index: 10;
                text-align: center;
                width: 100%;
                padding-top: 30px;
                padding-bottom: 30px;
                background-color: #FFF;
                display: none;
                box-sizing: border-box;
            }
             
            .mega-submenu li{
                display: inline-block;
                list-style-type: none;
                margin-left: 20px;
                margin-right: 20px;
                box-sizing: border-box;
                font-weight: bold
            }
            
            .megamenu-2{
                top: 170px;
            }
            
            .megamenu-3{
                top: 245px;
            }
            
            .megamenu-4{
                top: 320px;
            }
            
            .one-line-menu .submenu li{
                display: list-item;
                list-style-type: none;
                padding-top: 15px;
                padding-bottom: 15px;
                box-sizing: border-box;
                margin-left: 0;
                border-bottom: 1px solid #CCC;
            }
            
            .megamenu-nav{
                width: calc(100% - 320px);
                margin-left: 80px;
            }
            
            .logo-text{
                font-size: 200%;
                text-transform: uppercase;
                font-weight: bold;
                margin-left: 20px;
                transform: translateY(-50%);
                top: 50%;
                position: relative;
                color: #06068E;
                line-height: 1.2;
            }
            
            .outline{
                -webkit-text-stroke: 1px #06068E;
                color: transparent;
                font-size: 110%;
            }
            
            .white-outline{
                -webkit-text-stroke: 1px #FFF;
                color: transparent;
            }
            
            .blue-outline{
                -webkit-text-stroke: 1px #06068E;
                color: transparent;
            }
            
            .blue{
                color: #06068E;
            }
            
            /*****************/
            
            .header-type-1, .header-type-2, .header-type-4{
                display: none;
            }
            
            .header-type-3{
                visibility: hidden;
            }
            
            .customizable-header{
                height: 75vh;
                color: #FFF;
            }
            
            .customizable-header h1{
                font-size: 350%;
                text-transform: uppercase;
            }
            
            .customizable-header p{
                font-size: 150%;
            }
            
            
            .background-container{
                background-image: url('images/header-ocean-1.jpg');
                background-position: top center;
                background-repeat: no-repeat;
                background-size: cover;
                height: 75vh;
                display: table;
                width: 100%;
            }
            
            .background-content, .slide-content, .video-texte-content, .header-texte-content{
                vertical-align: middle;
                display: table-cell;
                padding: 20px;
                box-sizing: border-box;
            }
            
            .header-type-1 .background-content hr, .header-type-4 .video-texte-content hr{
                margin-left: auto;
                margin-right: auto;
            }
            
            .header-type-2 .slide-content hr{
                margin-left: 0;
            }
            
            .background-content hr,.slide-content hr, .video-texte-content hr{
                margin-top: 30px;
                margin-bottom: 30px;
                width: 30px;
                border: 1px solid #FFF;
                box-shadow: none;
            }
            
            .header-type-2{
                position: relative;
            }
            
            .header-slider-title{
                position: absolute;
                top:0;
                left: 0;
                z-index: 1;
                display: table;
            }
            
            .header-slider-container{
                height: 75vh;
            }
            
            .header-slide{
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }
            
            .header-slide-1{
                background-image: url('images/header-ocean-2.jpg');
            }
            
            .header-slide-2{
                background-image: url('images/header-ocean-3.jpg');
            }
            
            .header-slide-3{
                background-image: url('images/header-ocean-4.jpg');
            }
            
            .slide-container{
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                display: table;
                width: 100%;
                height: 100%;
            }
            
            .header-type-3{
                position: relative;
            }
            
            .header-texte-container{
                color: #000;
            }
            
            .header-texte-content hr{
                margin-top: 30px;
                margin-bottom: 30px;
                width: 30px;
                border: none;
                box-shadow: none;
                margin-left: 0;
            }
            
            .header-type-4, .presentation-type-2{
                overflow: hidden;
                position: relative;
            }
            
            .header-video-container{
                width: 100%;
                min-height: 100%;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
            }
            
            .video-texte-container, .header-texte-container{
                position: absolute;
                top: 0;
                left:0;
                width: 100%;
                height: 100%;
                z-index: 2;
                display: table;
            }
            
            /*****************/
            
            .image-type-1, .image-type-2, .image-type-3, .image-type-4{
                display: none;
            }
            
            .customizable-image-container{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-image: url('images/plastic-visual.jpg');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                
            }
            
            /*****************/
            
            .customizable-texte{
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                display: none;
            }
                
            .customizable-texte-container{
                display: table-cell;
                vertical-align: middle;
                font-size: 125%;
            }
            
            .customizable-texte-container h2{
                font-size: 250%;
                margin-bottom: 25px;
            }
            
            /*****************/
            
            .services-type-1, .services-type-2, .services-type-3, .services-type-4{
                display: none;
            }
            
            .colonne-third{
                width: 33.3%;
                padding: 50px 25px;
                box-sizing: border-box;
                text-align: center;
            }
            
            .services-type-1 .services-visual{
                width: 100%;
                margin-bottom: 30px;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
            
            .services-type-2 svg{
                width: 60%;
                margin-bottom: 30px;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
            
            .customizable-services h3{
                margin-bottom: 5px;
                text-transform: uppercase;
                font-size: 200%;
            }
            
            .services-icon{
                fill:#06068E;
            }
            
            .services-type-1 h3, .services-type-2 h3{
                margin-bottom: 20px;
            }
            
            
            /*****************/
            
            .presentation-type-2, .presentation-type-3{
                display: none;
            }
            
            .presentation-type-1{
                visibility: hidden;
            }
            
            .customizable-presentation{
                height: 75vh;
                position: relative;
            }
            
            .presentation-type-1, .presentation-type-2{
                color: #FFF;
                text-align: center;
            }
            
            .presentation-type-3{
                text-align: center;
            }
            
            .customizable-presentation .slide-content, .customizable-presentation .video-texte-content{
                background-color: rgba(6,6,142,.25);
            }
            
            .customizable-presentation .slide-content hr{
                margin-top: 30px;
                margin-bottom: 30px;
                width: 30px;
                border: 1px solid #FFF;
                box-shadow: none;
                margin-left: auto;
                margin-right: auto;
            }
            
            .customizable-presentation h1, .customizable-presentation p{
                width: 75%;
                margin: 0 auto;
            }
            
            .customizable-presentation h1{
                /*-webkit-text-stroke: 1px #FFF;
                color: transparent;*/
                font-size: 350%;
            }
            
            .customizable-presentation .header-slide-2{
                background-image: url('images/presentation-visual-vivant.jpg');
            }
            
            .customizable-presentation .header-slide-3{
                background-image: url('images/header-ocean-4.jpg');
            }
            
            
            /*****************/
            
            .actualite-type-1, .actualite-type-2 , .actualite-type-4{
                display: none;
            }
            
            .actualite-type-3{
                visibility: hidden;
            }
            
            .slick-fix-height{
                height: 0;
            }
            
            .actualite-wrapper{
                min-height: 50vh;
            }
            
            .customizable-actualite h2{
                font-size: 250%;
                margin-bottom: 50px;
            }
            
            .sliders-nav li{
                display: inline-block;
                margin-left: 25px;
                cursor: pointer;
            }
            
            .actualite-type-1{
                padding-top: 50px;
                padding-bottom: 50px;
            }
            
            .social-icon-container{
                width: 80%;
                margin: 0 auto;
            }
            
            .actualite-type-1 svg{
                width: 33.3%;
                margin: 0 auto;
            }
            
            .actualite-type-2 h3{
                margin-bottom: 15px;
                font-size: 200%;
            }
            
            .actualite-type-2 p{
                margin-bottom: 25px;
            }
            
            .read-more-button{
                /*padding: 5px 15px;
                border: 1px solid #06068E;
                box-sizing: border-box;
                border-radius: 20px;*/
            }
            
            .actualite-line-container{
                padding-bottom: 25px;
                border-bottom: 1px solid #000;
                margin-bottom: 10px;
            }
            
            .colonne6 .actualite-line-container:last-child{
                border-bottom: none;
            }
            
            .actualite-type-2{
                margin-top: 50px;
            }
            
            .actualite-type-3, .actualite-type-4{
                padding-top: 50px;
                padding-bottom: 50px;
            }
            
            .news-slider-wrap{
                width: 85%;
                margin: 0 auto;
            }
            
            .news-slider-wrap h3, .actualite-type-4 h3{
                margin-top: 25px;
                margin-bottom: 20px;
                font-size: 200%;
                /*color: #06068E;*/
            }
            
            .news-slider-wrap p, .actualite-type-4 p{
                margin-bottom: 20px;
            }
            
            .actualite-slider-wrapper{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            
            .actualite-slider-wrap{
                width: 90%;
            }
            
            .news-next-button, .news-prev-button{
                font-size: 175%;
                cursor: pointer;
                width: 5%;
            }
            
            /*****************/
            
            .team-type-1, .team-type-2, .team-type-3, .team-type-4{
                display: none;
            }
            
            .team-overlay-wrapper{
                position: relative;
                height: 400px;
                background-position: top center;
                background-repeat: no-repeat;
                background-size: cover;
                overflow: hidden;
            }
            
            .team-overlay-1{
                background-image: url("images/team-1.jpg");
            }
            
            .team-overlay-2{
                background-image: url("images/team-2.jpg");
            }
            
            .team-overlay-3{
                background-image: url("images/team-3.jpg");
            }
            
            .team-overlay-wrapper h3{
                position: absolute;
                bottom: 25px;
                color: #FFF;
            }
            
            .team-overlay-wrapper:hover > .team-overlay-wrap{
                top: 0;
            }
            
            .team-overlay-wrap{
                height: 100%;
                width: 100%;
                background-color: rgba(0,0,0,0.5);
                position: absolute;
                vertical-align: middle;
                top: -100%;
                left: 0;
                color: #FFF;
                padding: 15px;
                box-sizing: border-box;
                transition: all .1s ease-in-out;
            }
            
            .team-type-1 img{
                display: block;
                margin-bottom: 25px;
            }
            
            .customizable-team h3{
                font-size: 250%;
                margin-bottom: 25px;
            }
            
            .customizable-team h3 span{
                font-size: 50%;
                margin-top: 15px;
                display: inline-block;
            }
            
            .team-overlay-wrapper{
                padding: 30px 10px;
                box-sizing: border-box
            }
            
            .customizable-team .team-type-3 h3{
                margin-top: 0;
            }
            
            .team-type-3 h2{
                font-size: 250%;
                margin-bottom: 50px;
            }
            
            /*****************/
            
            .contact-type-1, .contact-type-2, .contact-type-3, .contact-type-4{
                display: none;
            }
            
            .customizable-contact p{
                margin: 20px auto;
                width: 80%
            }
            
            .form-container{
                padding-top: 20px; 
                box-sizing: border-box;
                width: 80%;
                margin: 40px auto 0;
                border-top: 1px solid #000;
            }
            
            .form-block{
                border: 1px solid #000;
                color: inherit;
                box-sizing: border-box;
                padding: 15px 10px;
                margin-top: 20px;
                margin-bottom: 20px;
                width: 100%;
                background-color: transparent;
            }
            
            #mail{
                background-color: transparent;
                padding: 15px 10px;
            }
            
            textarea.form-block{
                height: 250px;
                font-family: inherit;
            }
            
            .contact-wrapper h2{
                font-size: 250%;
            }
            
            .customizable-contact{
                padding-top: 50px;
                padding-bottom: 50px;
            }
            
            .contact-title-separator{
                margin-top: 30px;
                margin-bottom: 30px;
                width: 30px;
                border: 1px solid #000;
                box-shadow: none;
                margin-left: auto;
                margin-right: auto;
            }
            
            .contact-cta{
                margin-top: 20px;
                padding: 15px 50px;
                color: #FFF;
                background-color: #06068E;
                display: inline-block;
                font-weight: bold;
                border-radius: 25px;
            }
            
            .form-container .contact-cta{
                margin-left: auto;
                margin-right: auto;
            }
            
            /*****************/
            
            .adresse-type-1, .adresse-type-2, .adresse-type-3{
                display: none;
                padding-top: 50px;
                padding-bottom: 50px;
            }
            
            .customizable-adresse img{
                width: 100%;
                display: block;
            }
            
            .adresse-type-3 p{
                width: 80%;
                margin: 0 auto 50px;
            }
            
            .adresse-type-3 img{
                width: 100%;
                margin: 0 auto;
                display: block;
                border: 1px solid #06068E;
            }
            
            .customizable-adresse h2{
                font-size: 250%;
                color: #06068E;
                margin-bottom: 25px;
            }
            
            .adress-map-svg{
                border: 1px solid #06068E;
                box-sizing: border-box;
            }
            
            /*****************/
            
            .footer-type-1, .footer-type-2, .footer-type-3{
                display: none;
            }
            
            .customizable-footer ul li{
                list-style-type: none;
            }
            
            .footer-nav{
                margin-right: 50px;
            }
            
            .footer-nav h4{
                margin-bottom: 15px;
                font-size: 125%;
            }
            
            .footer-logo{
                height: 50px;
                display: block;
                margin-right: 50px;
            }
            
            .footer-logo svg{
                height: 100%;
            }
            
            .customizable-footer{
                padding-top: 25px;
                border-top: 1px solid #06068E;
            }
            
            .social-name{
                padding: 10px;
                width: 100%;
                font-weight: bold;
                background-color: #06068E;
                color: #FFF;
                box-sizing: border-box;
            }
            
            .tweet-container{
                padding-top: 25px;
                padding-bottom: 25px;
                border-bottom: 1px solid #06068E;
                box-sizing: border-box;
            }
            
            .insta-container{
                width: 100%;
                border: 1px solid #06068E;
                box-sizing: border-box;
            }
            
            .insta-container img{
                width: 100%;
                display: block;
            }
            
            .footer-type-3 .footer-nav{
                margin-right: 0;
            }
            
            
            .footer-type-3 .footer-nav li{
                display: inline-block;
                margin-left: 10px;
                font-weight: bold;
                font-size: 90%;
            }
            
            .footer-type-3 .logo-text{
                font-size: 150%;
            }
            
            .result-menu h2{
                font-family: 'Red Hat Display', serif;
                font-size: 300%;
                margin-bottom: 75px;
                color: #FF4014;
                font-weight: normal;
            }
            
            .score-round{
                font-size: 200%;
                font-weight: bold;
                padding: 30px;
                box-sizing: border-box;
                border-radius: 100px;
                border: 1px solid #FFF;
                margin-top: 25px;
                margin-bottom: 25px;
            }
            
            .score-round span, .score-round-orange span{
                font-size: 150%;
            }
                
            .score-round-orange{
                font-size: 200%;
                font-weight: bold;
                padding: 30px;
                box-sizing: border-box;
                border-radius: 100px;
                border: 1px solid #FF4014;
                color: #FF4014;
                margin-top: 25px;
                margin-bottom: 75px;
            }
            
            .score-print{
                font-size: 200%;
                font-weight: bold;
                padding: 40px;
                box-sizing: border-box;
                /*margin-top: 25px;*/
                margin-bottom: 25px;
            }
            
            .grade-text-carbon, .grade-text-water{
                font-size: 200%;
            }
            
            .inscription-container{
                background-color: rgba(0,0,0,0.95)
            }
            
            .inscription-form{
                width: 50%;
                position: absolute;
                left: 25%;
                top: 50%;
                transform: translateY(-50%);
                border: white solid 1px;
                padding: 25px;
            }
            
            .skip-inscription{
                width: 100%;
                padding: 15px;
                background-color: black;
                border: #FFF 1px solid;
                color: #FFF;
                cursor: pointer;
            }
            
            .inscription-form h2{
                font-family: 'Red Hat Display', Serif;
                font-size: 250%;
                padding-bottom: 50px;
            }
            
            .inscription-form form{
                display: flex;
                flex-direction: column;
            }
            
            .inscription-form input[type=text], input[type=email], input[type=submit], .skip-inscription {
                padding: 10px 25px;
                box-sizing: border-box;
                font-weight: bold;
                border: none;
                cursor:pointer;
                background-color: black;
                border-bottom: white solid 1px;
                width: 100%;
                color: white;
                margin-bottom: 20px;
            }
            
            .inscription-form input[type=submit], .skip-inscription {
                border: white solid 1px;
                padding: 15px 25px;
                margin-top: 20px;
            }
            
            .inscription-form input[type=submit] {
                background-color: white;
                color: black;
                border-radius: 5px;
            }
            
            .inscription-flex-nom{
                display: flex;
            }
            
            .inscription-nom-espace{
                margin-right: 40px;
            }
            
            .helper-container{
                display: flex;
                position: relative
            }
            
            .helper-button{
                position: absolute;
                right: 0;
                top: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 25px;
                color: white;
                background-color: #666666;
                height: 30px;
                width: 30px;
                text-align: center;
                font-weight: bold;
                border-radius: 50%;
                cursor: pointer;
            }
            
            .helper-button-correction{
                background-color: #FFCC00;
                color: #000;
            }
            
            .helper-button:hover + .helper-content {
                display: flex;
            }
            
            .helper-content{
                display: none;
                position: absolute;
                background-color: black;
                border: #666666 1px solid;
                height: fit-content;
                padding: 10px;
                box-sizing: border-box;
                z-index: 10;
                width: 100%;
                margin-top: 40px;
                border-radius: 10px;
            }
            
            .helper-content p{
                width: 100%;
                max-width: 100%;
                height: 100%;
            }
            
            .checkpoints-configuration{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 50px;
            }
            
            .checkpoint{
                display: flex;
                width: 30%;
                background-color: #FFCC00;
                justify-content: center;
                border-radius: 50px;
                font-weight: bold;
                color: black;
            }
            
            .checkpoint p{
                margin-bottom: 0;
                padding: 20px 20px;
                text-align: center;
            }
            
            .checkpoint span{
                font-family: 'Red Hat Display', serif;
                font-weight: normal;
                font-size: 120%;
                margin-bottom: 10px;
                display: block;
            }
            
            .checkpoint-3, .checkpoint-2{
                background-color: black;
                color: #FFCC00;
                border: #FFCC00 1px solid;
            }
            
            .checkpoint-on{
                background-color: #FFCC00;
                color: black;
                border: none;
            }
            
            .checkpoint-off{
                background-color: black;
                color: #FFCC00;
                border: #FFCC00 1px solid;
            }
            
            .setting-container-1 img{
                position: absolute;
                right: 90%;
                top: 40%;
            }
            
            .setting-helper{
                display: flex;
                align-items: center;
                color: #FFF;
                position: absolute;
                border-radius: 10px;
                right: 115%;
                width: 320px;
                background-color: #000;
                padding: 25px;
                z-index: 21;
                cursor: pointer;
            }
            
            /*.setting-helper::before{
                content: '';
                width: 0;
                height: 0;
                position: absolute;
                right: -20px;
                top: 15px;
                border-top: 15px solid transparent;
                border-bottom: 15px solid transparent;
                border-left: 20px solid #000;
            }*/
            
            .setting-helper h4, .setting-helper-2 h4 , .setting-helper-3 h4{
                font-weight: normal;
                font-size: 125%;
                margin-bottom: 15px;
                color: #FFCC00;
                font-family: 'Red Hat Display', sans-serif;
            }
            
            .setting-helper p{
                width: 291px;
            }
            
            .setting-helper p:nth-child(1){
                width: 250px;
                margin-right: 25px;
            }
            
            .setting-container-2 img{
                position: absolute;
                right: 115%;
                top: 40%;
            }
            
            .setting-helper-2{
                position: absolute;
                width: 250px;
                background-color: #000;
                color: white;
                padding: 25px;
                right: 120%;
                border-radius: 10px;
                cursor: pointer;
            }
            
            .setting-container-3{
                display: none;
            }
            
            .setting-container-3 img{
                transform: rotate(270deg);
                position: absolute;
                top: 70%;
            }
            
            
            .setting-helper-3{
                position: absolute;
                display: block;
                width: 250px;
                background-color: #000;
                color: white;
                padding: 25px;
                top: 110%;
                right: 0;
                border-radius: 10px;
                cursor: pointer;
            }
            
            .setting-helper-t button, .setting-helper-2 button, .setting-helper-3 button{
                margin-top: 15px;
                background-color: #FFCC00;
                font-weight: bold;
                padding: 5px 10px;
                border-radius: 5px;
            }
            
            /*********	Résultats	********************/
            .resultat{
                width: 100vw;
                height: 100vh;
                background-color: #000;
                color: #FFF;
                position: fixed;
                top: 0;
                left: 0;
                font-family: 'Red Hat Display', sans-serif;
                z-index: 30;
            }
            
            .resultat-content{
                display: flex;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 90%;
            }
            
            .resultat-gauche{
                position: relative;
                width: 50%;
                border-right: 1px solid #FFF;
                box-sizing: border-box;
                padding: 0 50px;
            }
            
            .reponses-eco-concu{
                display: flex;
                justify-content: space-between;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 110%;
                margin-bottom: 15px;
                width: 100%;
            }
            
            .reponses-eco-concu p:nth-child(2){
                font-size: 150%;
            }
            
            .plus-eco-concu{
                margin-top: 25px;
                color: #00B050;
            }
            
            
            .graphique-moyenne{
                width: 100%;
                position: relative;
            }
            
            .graphique-fleche{
                text-align: center;
                position: absolute;
                bottom: 100%;
                font-size: 125%;
            }
            
            .max-graphique{
                color: #00B050;
            }
            
            .min-graphique{
                color: #FF4014;
                right: 0;
            }
            
            
            .user-graphique{
            top: 100%;
            }
            
            .graphique-lignes{
                display: flex;
                margin-top: 15%;
            }
            
            .graphique-ligne{
                width: 33.3%;
                height: 10px;
            }
            
            .graphique-color-1{
                background-color: #00B050;
                border-radius: 5px 0 0 5px;
            }
            
            .graphique-color-2{
                background-color: #FFCC00;
            }
            
            .graphique-color-3{
                background-color: #FF4014;
                border-radius: 0 5px 5px 0;
            }
            
            .moyennement-eco-concu{
                color: #FFCC00;
            }
            
            .moins-eco-concu{
                color: #FF4014;
            }
            
            .note-moyenne{
                text-align: center;
                font-size: 165%;
                margin-top: 5%;
            }
            
            .note-tech-design{
                display: flex;
                width: 100%;
                justify-content: center;
                font-size: 150%;
                margin-top: 100px;
                font-weight: bold;
            }
            
            .note-tech{
                margin-left: 22%;
            }
            
            .note-tech, .note-design{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .note-tech-design p:nth-child(2){
                margin-top: 15px;
                font-size: 150%;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .note-equivalent{
                width: 100%;
                border-radius: 5px;
                font-size: 130%;
                border: #FFF solid 1px;
                padding: 16px;
                box-sizing: border-box;
                text-align: center;
            }
            
            .resultat-droite{
                width: 50%;
                padding: 0 50px;
                box-sizing: border-box;
                position: relative;
            }
            
            .note-global{
                width: 100%;
                font-weight: bold;
                font-size: 200%;
            }
            
            .note-global-td{
                width: 100%;
                display: flex;
            }
            
            .note-global-score{
                width: 100%;
                display: flex;
                justify-content: center;
            }
            
            .note-global-score p{
                margin-top: 25px;
                font-size: 250%;
                width: 250px;
                height: 250px;
                border-radius: 50%;
                border: white 3px solid;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .note-carbone-eau{
                width: 100%;
                font-size: 130%;
                text-transform: uppercase;
                margin-bottom: 50px
            }
            
            .resultat-eau-carbone-chiffre{
                display: flex;
                font-size: 150%;
            }
            
            .note-unite{
                margin-left: 10px;
                font-size: 70%;
                text-transform: none;
                display: inline-block;
                margin-top: 10px;
            }
            
            .note-carbone, .note-eau{
                display: flex;
                justify-content: space-between;
            }
            
            .note-eau{
                margin-top: 2%;
            }
            
            .correction-block{
                position: absolute;
                width: calc(95% - 75px);
                bottom: 0;
            }
            
            .correction-titre{
                font-size: 175%;
            }
            
            .bonnes-pratiques{
                display: flex;
                /*flex-direction: column;*/
                margin-top: 50px;
                font-size: 110%;
                text-transform: initial;
            }
            
            .bonnes-pratiques a, .bonnes-pratiques a:focus{
                color: #000;
                text-decoration: none;
                background-color: #00B050;
                box-sizing: border-box;
                padding: 10px 74px;
                border-radius: 5px;
                width: 45%;
                margin-left: 2.5%;
                margin-right: 2.5%;
                margin-bottom: 10px;
                cursor: pointer;
                text-align: center;
            }
            
            .note-carbonne-svg, .note-eau-svg{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            .note-carbonne-svg img, .note-eau-svg img{
                width: 48px;
                height: 48px;
            }
            
            .note-carbonne-svg p{
                margin-left: 50px;
            }
            
            .note-eau-svg p{
            margin-left: 50px;
            }
            
            .close-button{
                display: none;
            }
            
            .border-gauche{
                border: white 1px solid;
                width: 30%;
                transform: rotate(90deg);
                position: absolute;
                right: 30%;
            }
            
            .border-right{
                top: 10%;
                left: 95%;
                width: 1px;
                height: 75%;
                border: #FFFFFF 1px solid;
                position: absolute;
            }
            
            .lang-items{
                position: absolute;
                right: 40px;
                top: 30px;
                color: #FFF;
                z-index: 9999;
                font-size: 125%;
            }
            
            .lang-item{
                display: inline-block;
            }
            
            .lang-item a{
                text-decoration: none;
                color: #FFF;
                font-weight: bold;
            }
            
            .hamburger-button{
                display: none;
                width: 32px;
                height: 32px;
                margin-top: 40px;
                transform: translateY(-16px);
            }
            
            .hamburger-line{
                display:block;
                width: 100%;
                height: 4px;
                background-color: #FFF;
                border-radius: 5px;
            }
            
            /******************************/
            .correction-helper-container{
                width: 100vw;
                height: 100vh;
                z-index: 23;
                background-color: rgba(0,0,0,.8);
                position: fixed;
                top: 0;
                left: 0;	
            }
            
            .correction-helper{
                font-weight: bold;
                font-size: 125%;
                text-align: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);	
            }
            
            .correction-helper button{
                margin-top: 25px;
                display: inline-block;
                padding: 10px 75px;
                background-color: #FFCC00;
                border-radius: 5px;
                color: #000;
                cursor: pointer;
                margin-top: 25px;
                font-weight: bold;
            }
            
            .correction-helper p:nth-child(1){
                margin-bottom: 15px;
            }
            
            .download-container{
                display: flex;
                justify-content: center;
            }
            
            .donwload-correction{
                background-color: #FFCC00;
                padding: 15px;
                border-radius: 5px;
                font-weight: bold;
            }
            
            /*******************************
            *******************************/
            
            .result-menu{
                z-index: 30;
            }
            
            @media screen and (max-width: 1440px){
                .bonnes-pratiques a, .bonnes-pratiques a:focus {
                    padding: 10px 5%;
                }
            }
            
            @media screen and (max-width: 1025px){
                
                .customize-option-bloc{
                    font-size: .7em;
                }
                
                /*.header-wrapper, .services-wrapper, .image-wrapper, .texte-wrapper, .team-wrapper, .actualite-wrapper, .presentation-wrapper, .contact-wrapper, .adresse-wrapper, .header-slider-container, .background-container, .customizable-presentation{
                    min-height: 50vh;
                }*/
                
                .mega-submenu li{
                    font-size: 120%;
                }
            
                .customizable-texte-container{
                    font-size: 100%;
                }
                
                .team-type-4 .colonne4, .team-type-4 .colonne6{
                        margin-left: 1.5625%;
                        margin-right: 1.5625%;
                        width: 38.5416666667%;
                        padding: 0;
                }
            
                .bonnes-pratiques a, .bonnes-pratiques a:focus {
                    padding: 10px 34px;
                    width: 45%;
                    text-align: center;
                }
            }
            
            @media screen and (max-width: 820px){
                .lateral-menu-content{
                    grid-template-columns: repeat(1, 1fr);
                    grid-template-rows: repeat(1, 100px);
                }
                
                .checkpoint{
                    width: 100%;
                    margin-bottom: 25px;
                }
                
                .checkpoints-configuration{
                    display: block;
                }
            
                .lateral-menu-title{
                    font-size: 125%;
                }
            
                .bonnes-pratiques{
                    width: 100%;
                }
            
                .note-carbonne-svg p{
                    margin-left: 10px;
                }
            
                .note-eau-svg p{
                    margin-left: 10px;
                }
            
                .note-global-score p{
                    font-size: 175%;
                    width: 200px;
                    height: 200px;
                }
            
                .note-moyenne{
                    margin-bottom: 100px;
                }
            
                .resultat-eau-carbone-chiffre {
                    font-size: 115%;
                }
            
                .custom-configuration-bloc.colonne4{
                    margin-left: 1.5625%;
                    margin-right: 1.5625%;
                    width: 30.2083333333%;
                    padding: 0;
                }
                
                .colonne4{
                    width: auto;
                }
            
                .separation{
                    display: none;
                }
                
                .right-border{
                    border: none;
                }
            
                .colonne5, .colonne6{
                    width: 96.875%;
                }
                
                .setting-navigation{
                    right: -70px;
                }
            
                .megamenu-nav{
                    width: auto;
                    margin: 0;
                }
            
                .social-icon-container{
                    display: flex;
                }
            
                .colonne3{
                    margin-left: 0;
                }
            
                .social-bloc{
                    width: calc(50% - 11px);
                    margin-top: 50px
                }
            
                .correction-block{
                    position: relative;
                    width: auto;
                }
            
                .resultat{
                    position: relative;
                    height: 100vh;
                }
            
                .resultat-content{
                    flex-direction: column;
                    top: 0%;
                    transform: translate(-50%, 0%);
                }
            
                .resultat-gauche, .resultat-droite{
                    width: 100%;
                }
            
                .resultat-gauche{
                    border: none;
                    margin-top: 50px;
                }
            
                .note-tech-design{
                    margin-bottom: 100px;
                }
            
                .note-equivalent{
                    margin-bottom: 50px;
                }
            
                .bonnes-pratiques{
                    margin-bottom: 100px;
                }
            
                .index-content{
                    display: flex;
                    flex-direction: column;
                    transform: none;
                    top: 0;
                    margin-top: 10%;
                }
            
                .index-content-container{
                    position: relative;
                    margin-top: 50px;
                }
            
                .team-overlay-1, .team-overlay-2, .team-overlay-3{
                    width: 100%;
                    margin-bottom: 10px;
                }
            
                .team-type-4 > div{
                    width: 100%!important;
                }
            
                .footer-type-1 .footer-logo.gauche{
                    float: none;
                    margin-bottom: 25px; 
                    margin-right: 0;
                    text-align: center;
                }
                
                .footer-type-1 .footer-logo svg.gauche{
                    float: none;
                }
                
                .footer-type-1 ul.gauche{
                    float: none;
                    margin-right: 0;
                    width: 100%;
                    text-align: center
                }
            
                .footer-type-1 ul:nth-child(3), .footer-type-1 ul:nth-child(4), .footer-type-1 ul:nth-child(5){
                    margin-right: 10px;
                    margin-top: 25px;
                }
            
                .footer-type-3 .footer-logo.gauche{
                    float: none;
                }
                
                .footer-type-3 .footer-nav.droite{
                    float: none;
                }
                
                .footer-type-3 .footer-nav li {
                    display: block;
                    margin-left: 0;
                    margin-bottom: 10px;
                }
                
                .donation-button{
                    display: none;
                }
            
                .customizer-bloc:before{
                    display: none;
                }
                
                .hamburger-button{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                }
            
                .one-line-menu li{
                    display: block;
                    color: #FFF;
                    background-color: #06068E;
                    margin-bottom: 15px;
                    text-align: center;
                    width: 100%;
                    border-bottom: 1px solid #FFF;
                    margin-left: 0;
                    box-sizing: border-box;
                }
            
                .one-line-menu{
                    display: none;
                }
                
                .megamenu-nav{
                    float: right;
                }
            
                .jeu-first-part{
                    position: absolute;
                    top: 0; 
                    transform: none;
                    height: 120%;
                    
                }
                
                .first-part-content{
                    top: 0; 
                    transform: none;
                    padding-top: 5%;
                }
            
                .social-icon-container svg{
                    width: 66.6%;
                }
            
                .mega-submenu{
                    display: none;
                }
            
                .menu-type-3-responsive .first-level-menu{
                    padding: 5px 0;
                }
            
                .inscription-flex-nom{
                    display: block;
                }
            
                .submenu{
                    left: -250%;
                    width: 100vw;
                }
            
                /*.configuration-validate-button{
                    margin-top: -100px;
                }*/
            
            }
            
            @media screen and (max-width: 425px){
                .lateral-menu-content{
                    grid-template-columns: repeat(1, 1fr);
                    grid-template-rows: repeat(1, 100px);
                }
                
                .main-logo-content a {
                    color: #FFF;
                    -webkit-text-stroke: transparent;
                }
                
                .checkpoint{
                    width: 100%;
                    margin-bottom: 25px;
                }
            
                .custom-configuration-bloc.colonne4{
                    width: 100%;
                    margin-bottom: 50px;
                }
                
                #page{
                    padding-top: 0;
                }
            
                .customizable-site-container{
                    padding-top: 50px;
                }
            
                .right-border{
                    padding-right: 0;
                }
            
                .description-bloc-open{
                    top: 230px;
                    left: 0;
                    position: relative;
                    border-right: none;
                    border-top: #FFF 1px solid;
                }
            
                .description-bloc-content{
                    transition: all .2s ease-in-out;
                }
            
                .jeu-first-part{
                    padding-top: 100%;
                    height: 160%;
                }
            
                .setting-helper-2{
                    right: 0;
                    top: 110%;
                }
            
                .setting-container-2 img {
                    position: absolute;
                    right: 20px;
                    top: 159px;
                    transform: rotate(270deg);
                }
            
                .customizer-bloc{
                    right: 10px;
                    top: 25px;
                }
            
                .setting-navigation{
                    right: -30px;
                    top: -30px;
                }
            
                .lateral-button{
                    display: none;
                }
            
                .setting-helper{
                    right: 0;
                }
            
                .background-container{
                    display: block;
                    width: 100%;
                }
            
                .customizable-header h1 {
                    font-size: 250%;
                    text-transform: uppercase;
                }
            
                .services-type-1 div:nth-child(2), .services-type-1 div:nth-child(3), .services-type-2 div:nth-child(2), .services-type-2 div:nth-child(3), .services-type-3 div:nth-child(2), .services-type-3 div:nth-child(3){
                    display: none;
                }
            
                .services-type-1 div:nth-child(1), .services-type-2 div:nth-child(1), .services-type-3 div:nth-child(1){
                    width: 100%;
                }
            
                .header-video-container{
                    object-fit: cover;
                }
            
                .team-overlay-1, .team-overlay-2, .team-overlay-3{
                    width: 100%;
                    margin-bottom: 10px;
                }
            
                .team-type-4 > div{
                    width: 100%!important;
                }
            
                .presentation-type-1{
                    min-height: 0;
                }
                
                .team-type-1 img{
                    margin-top: 25px;
                }
            
                .footer-logo p{
                    display: block;
                }
            
                .footer-logo ul{
                    margin-top: 25px;
                }
            
                .social-bloc{
                    width: 100%;
                }
            
                .footer-type-2 ul{
                    margin-right: 0;
                }
            
                
            
                .footer-type-3 ul{
                    margin-top: 25px;
                }
            
                .main-logo-content {
                    position: absolute;
                    left: 6.40625%;
                    top: 26px;
                    z-index: 25;
                }
            
                .game-introduction{
                    margin-top: 25px;
                    margin-bottom: 50px;
                }
            
                .comment-jouer{
                    border-top: #FFF 1px solid;
                    padding-top: 25px;
                    padding-bottom: 25px;
                    box-sizing: border-box;
                }
            
                .custom-configuration-bloc{
                    margin-bottom: 0;
                }
            
                .resultat-gauche, .resultat-droite{
                    padding: 0;
                }
            
                .resultat-gauche{
                    border-bottom: #FFF 1px solid;
                    margin-bottom: 50px;
                    margin-top: 0;
                }
            
                .correction-block{
                    border-top: #FFF 1px solid;
                    padding-top: 50px;
                }
            
                .resultat-mails{
                    display: flex;
                    align-items: center;
                }
            
                .configuration-validate-button{
                    margin-top: 0;
                }
            
                .customizable-presentation h1{
                    font-size: 250%;
                }
            
                .inscription-form {
                    width: 75%;
                    left: 5%;
                }
            
                .submenu{
                    left: -250%;
                    width: 100vw;
                }
            }
            </style>
        `,
        options: options,
    });

    editor.DomComponents.addType('custom-ul', {
        model: {
          defaults: {
            tagName: 'ul',
            editable: true,
            droppable: true,
          },
        },
      });
    
      editor.DomComponents.addType('custom-li', {
        model: {
          defaults: {
            tagName: 'li',
            editable: true,
            draggable: true,
            droppable: true,
          },
        },
      });
}

