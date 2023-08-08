import grapesjs from 'grapesjs';
import components from './components';
import trait from './trait';


export default grapesjs.plugins.add("tailwindcss", (editor, opts) => {
    let options = {};
    for (let name in opts) {
        if(!name in options) {
            options[name] = opts[name];
        }
    }
    components(editor, options);
    trait(editor, options);
})