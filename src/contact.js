function contactpage(){
    let box = document.createElement('div');
    box.classList.add('box');

    let main = document.querySelector('#content');

    let title = document.createElement('h1');
    title.textContent ='Contact us';
    box.appendChild(title);

    let number = document.createElement('h2');
    number.textContent ='number';
    box.appendChild(number);

    let num = document.createElement('h3');
    num.textContent ='098765432345678';
    box.appendChild(num);

    let location = document.createElement('h2');
    location.textContent = 'number'
    box.appendChild(location);

    let paragraph = document.createElement('h3');
    paragraph.textContent ='Lorem, ipsum dolor sit amet consectetur adipisicing elit.';
    box.appendChild(paragraph);

    main.appendChild(box);
}

export default contactpage;