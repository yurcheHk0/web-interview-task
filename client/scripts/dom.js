export default class $ {

    constructor(){};

     static toggleClass(el, className){
        if (el.classList) {
            el.classList.toggle(className);
        } else {
            // For IE9
            let classes = el.className.split(" ");
            let i = classes.indexOf(className);

            if (i >= 0)
                classes.splice(i, 1);
            else
                classes.push(className);
            el.className = classes.join(" ");
        }
    }
}