function initialload(){
    
    let box = document.createElement('div');
    box.classList.add('box');

    let main = document.querySelector('#content');
    
    let title = document.createElement('h1');
    title.textContent ='my butifule resturant';
    box.appendChild(title);

    let theme = document.createElement('img');
    theme.src='/pictures/istockphoto-1081422898-1024x1024.jpg';
    box.appendChild(theme);

    let paragraph = document.createElement('h4');
    paragraph.textContent ='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae, consequuntur, id veniam nostrum commodi tempore fuga unde nihil dolorem rerum modi odio esse ullam. Ullam tempore nulla veritatis saepe?';
    box.appendChild(paragraph);

    main.appendChild(box);

}

export default initialload;