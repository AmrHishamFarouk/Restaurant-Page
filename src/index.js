import initialload from "./loadpage";
import contactpage from "./contact";
import menu from "./menu";

let main = document.querySelector('#content');


document.querySelector('#home').addEventListener('click',()=>{
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    initialload();
})

document.querySelector('#menu').addEventListener('click',()=>{
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }    
    menu();
})

document.querySelector('#about').addEventListener('click',()=>{
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }    
    contactpage();
})



