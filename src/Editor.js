import React from 'react';
import { useState, useEffect} from 'react';
import grapesjs from 'grapesjs';
import axios from 'axios';
import "./styles/main.scss";
import gjsBlockBasic from 'grapesjs-blocks-basic';
import 'grapesjs/dist/css/grapes.min.css';
import { useParams } from 'react-router-dom';
import { API_HOST } from './API/index';
import { layerManager, traitManager, selectorManager, panels, deviceManager, styleManager } from './API/api_Utils';
import $, { data } from 'jquery';
import fr from 'grapesjs/locale/fr';
import tr from 'grapesjs/locale/tr';
import tailwindcss from './plugins/tailwind/index'
import gjsForms from 'grapesjs-plugin-forms';
import thePlugin from 'grapesjs-plugin-export';
import styleFilter from 'grapesjs-style-filter';
import plugin from 'grapesjs-style-bg';
import download from 'grapesjs-plugin-export';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapick/dist/grapick.min.css';
import gradiant from 'grapesjs-style-gradient';
import typed from 'grapesjs-typed';
import ckeditor from 'grapesjs-plugin-ckeditor'
import parserPostCSS from 'grapesjs-parser-postcss';
import {header} from './plugins/ecoconception/ecoBlocks';
import { headerDeroulant } from './plugins/ecoconception/ecoHeader';
import { heroHeader } from './plugins/ecoconception/heroHeader';
import { heroV2, heroV3 } from './plugins/ecoconception/heroV2';
import { bandeauPreuvesocial, picto } from './plugins/ecoconception/bandeauPreuvesocial';
import { faq } from './plugins/ecoconception/faq';
import { footer } from './plugins/ecoconception/bandeauCryptogramme';
import {faqV2, CTA} from './plugins/modify/modifyTags';
import ChatGPT from './API/ChatGPT';
import { landing_page, Landing_page3 } from './plugins/ecoconception/Landing_page';
import logo from './assets/Logo_Kaiman.png';


const Editor = () => {
  const [editor, setEditor] = useState(null);
  const [assets, setAssets] = useState([]);
  const { pageID } = useParams();
  const projectID = pageID;
  const projectEndpoint = `${API_HOST}pages/${projectID}/change`;
  const handleClick = () => {
    const sidebar = document.getElementById("navbar");
    const mainContent = document.getElementById("main-content");
    if(sidebar.classList.contains("d-flex")) {
      sidebar.classList.remove("d-flex");
      sidebar.classList.add("d-none");
      mainContent.classList.remove("w-85", "start-15");
    } else {
      sidebar.classList.remove("d-none");
      sidebar.classList.add("d-flex");
      mainContent.classList.add("w-85", "start-15");
    }
  }


  useEffect(() => {
    async function getAssets() {
        try {
            const response = await axios.get(`${API_HOST}assets/`);
            setAssets(response.data);
        } catch (error) {
            console.log(error);
            setAssets(error.message);
        }
    }
    getAssets();
  }, [pageID]);

  useEffect(() => {
    $(".panel__devices").html("");
    $(".panel__basic-actions").html("");
    $(".panel__editor").html("");
    $(".panel__important-actions").html("");
    $("#blocks").html("");
    $("#styles-container").html("");
    $("#trait-container").html("");
    $("#layers-container").html("");
    const navbar = $("#navbar");
    const mainContent = $("#main-content");
    const panelTopBar = $("main-content > .navbar-light");

    if (editor) {
      editor.destroy(); // Détruit l'instance de l'éditeur existante
    }
    const newEditor = grapesjs.init({
      i18n: {
        // locale: 'en', // default locale
        // detectLocale: true, // by default, the editor will detect the language
        // localeFallback: 'en', // default fallback
        messages: { fr, tr },
      },

      container: '#editor',
      blockManager: {
        appendTo: '#blocks',
      },
      styleManager: styleManager,
      layerManager: layerManager,
      traitManager: traitManager,
      selectorManager: selectorManager,
      panels: panels,
      deviceManager: deviceManager,
      storageManager: {
        type: 'remote',
        stepsBeforeSave: 3,
        options: {
          remote: {
            urlLoad: projectEndpoint,
            urlStore: projectEndpoint,
            // The `remote` storage uses the POST method when stores data but
            // the json-server API requires PATCH.
            fetchOptions: opts => (opts.method === 'POST' ?  { method: 'PATCH' } : {}),
            // As the API stores projects in this format `{id: 1, data: projectData }`,
            // we have to properly update the body before the store and extract the
            // project data from the response result.
            onStore: data => ({ id: projectID, data }),
            onLoad: result => result.data,
          }
        }
      },
      assetManager: {
        assets: assets,
        upload: false,
      },

      plugins: [gjsBlockBasic, tailwindcss, gjsForms, thePlugin, styleFilter, plugin, gradiant, typed, download, ckeditor, parserPostCSS, header, headerDeroulant, heroHeader, heroV2, heroV3, bandeauPreuvesocial, picto, faq, footer, faqV2,
        CTA,  landing_page, Landing_page3       
      ],
      pluginsOpts: {
        gjsBlockBasic: {},
        tailwindcss: {},
        gjsForms: {},
        thePlugin: {},
        styleFilter: {},
        plugin: {},
        gradiant: {},
        typed: {},
        navbar: {},
        ckeditor: {},
        parserPostCSS: {},
        heroV3: {},
        bandeauPreuvesocial: {},
        picto: {},
        faq: {},
        footer: {},
        faqV2: {},
        CTA: {},
        landing_page: {},
        Landing_page3: {
        },

        header: {
          menuItems: ['Custom Item 1', 'Custom Item 2', 'Custom Item 3'],
          editable: true, // Options personnalisées pour modifier les balises <li>
        },

        headerDeroulant: {
          editable: true, // Options personnalisées pour modifier les balises <li>
        },

        heroHeader: {
          editable: true, // Options personnalisées pour modifier les balises <li>
        },

        heroV2: {
          editable: true, // Options personnalisées pour modifier les balises <li>
        },

      },
      canvas: {
        styles:["https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"],
        scripts: [],
      }
    });

    

        // ajoutez des commandes ici

    // vue ordi
    newEditor.Commands.add('set-device-desktop', {
      run: (editor) => editor.setDevice('Desktop'),
    });

    // vue mobile
    newEditor.Commands.add('set-device-mobile', {
      run: (editor) => editor.setDevice('Mobile'),
    });

    //vue tablette
    newEditor.Commands.add('set-device-tablet', {
      run: (editor) => editor.setDevice('Tablet'),
    })

    // clear
    newEditor.Commands.add('clear', {
      run: (editor) => {
        editor.DomComponents.clear();
        editor.CssComposer.clear();
      },
    });

    // undo
    newEditor.Commands.add('undo', {
      run: (editor) => editor.UndoManager.undo(),
    });

    newEditor.Commands.add('export', {
      run: (editor) => { editor.runCommand('gjs-export-zip');
      }
    })

    newEditor.Commands.add('saveDb', {
      run: (editor) => {
        // Enregistrer les données de l'éditeur dans une variable
        const data = editor.getHtml();
        const cleanedData = cleanImageData(data); // Appel à une fonction pour nettoyer les données
        
        axios.defaults.maxContentLength = 50 * 1024 * 1024;
    
        // Envoyer les données nettoyées à votre API backend
        axios.post(`${API_HOST}pages/${pageID}/change/content`, { data: cleanedData })
          .then(response => {
            // Gérer la réponse de l'API
            const responseData = response.data; // Récupérer les données souhaitées
            console.log(JSON.stringify(responseData));
            // Afficher un message de succès ou effectuer d'autres actions nécessaires
          })
          .catch(error => {
            // Gérer les erreurs de l'API
            console.error(error);
            // Afficher un message d'erreur ou effectuer d'autres actions nécessaires
          });
      },
    });
    
    // Fonction pour nettoyer les données en excluant le contenu de la balise <img>
    function cleanImageData(data) {
      const tempElement = document.createElement('div');
      tempElement.innerHTML = data;
    
      const imgElements = tempElement.getElementsByTagName('img');
      for (let i = 0; i < imgElements.length; i++) {
        const imgElement = imgElements[i];
        imgElement.removeAttribute('src'); // Supprimer l'attribut src de chaque balise <img>
      }
    
      const cleanedData = tempElement.innerHTML;
      return cleanedData;
    }
    


    // redo
    newEditor.Commands.add('redo', {
      run: (editor) => editor.UndoManager.redo(),
    });

    newEditor.StyleManager.addProperty('decorations', {
      type: 'gradient', // <- new type
      name: 'Gradient',
      property: 'background-image',
      defaults: 'none',
      full: true,
    });
    
    newEditor.on("run:preview", () => {
      newEditor.stopCommand("sw-visibility");
      navbar.removeClass("sidebar");
      mainContent.removeClass("main-content");
      panelTopBar.addClass("d-none");
    })
    newEditor.on("stop:preview", () => {
      newEditor.runCommand("sw-visibility");
      navbar.addClass("sidebar");
      mainContent.addClass("main-content");
      panelTopBar.removeClass("d-none");
    })
  
    setEditor(newEditor);
    return () => {
      newEditor.destroy(); // Détruit l'instance de l'éditeur lors du démontage du composant
    };
  }, [pageID]);


  return (
    <div>
      <ChatGPT />
       <div id="navbar" className="sidenav d-flex flex-column overflow-scroll position-fixed">
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <img src={logo} id="logo" alt="Logo" style={{ width: "150px", height: "70px", paddingLeft: " 50px" }} />
        </div>
      </nav>
      <div className="">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="block-tab"
              data-bs-toggle="tab"
              data-bs-target="#block"
              type="button"
              role="tab"
              aria-controls="block"
              aria-selected="true"
            >
              <i className="fa fa-cubes" style={{ color: "#2b3a8c" }}></i>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="layer-tab"
              data-bs-toggle="tab"
              data-bs-target="#layer"
              type="button"
              role="tab"
              aria-controls="layer"
              aria-selected="false"
            >
              <i className="fa fa-tasks" style={{ color: "#2b3a8c" }}></i>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="style-tab"
              data-bs-toggle="tab"
              data-bs-target="#style"
              type="button"
              role="tab"
              aria-controls="style"
              aria-selected="false"
            >
              <i className="fa fa-paint-brush" style={{ color: "#2b3a8c" }}></i>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="trait-tab"
              data-bs-toggle="tab"
              data-bs-target="#trait"
              type="button"
              role="tab"
              aria-controls="trait"
              aria-selected="false"
            >
              <i className="fa fa-cog" style={{ color: "#2b3a8c" }}></i>
            </button>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="block"
            role="tabpanel"
            aria-labelledby="block-tab"
          >
          <div id="blocks"></div>
          </div>
          <div className="tab-pane fade" id="layer" role="tabpanel" aria-labelledby="layer-tab">
            <div id="layers-container"></div>
          </div>
          <div className="tab-pane fade" id="style" role="tabpanel" aria-labelledby="style-tab">
            <div id="styles-container"></div>
          </div>
          <div className="tab-pane fade" id="trait" role="tabpanel" aria-labelledby="trait-tab">
            <div id="trait-container"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="main-content position-relative w-85 start-15" id="main-content">
      <nav className="navbar navbar-light">
        <div className="container">
          <button className='btn btn-sm btn-outline-primary' onClick={handleClick}>
            <i className="fa fa-bars"></i>
          </button>
          <div className="panel__devices"></div>
          <div className="panel__editor"></div>
          <div className="panel__basic-actions"></div>
          <div className="panel__important-actions" style={{color: "#e72f3e"}}></div>
        </div>
      </nav>
      <div id="editor"></div>
    </div>
    </div>
  );
}

export default Editor;