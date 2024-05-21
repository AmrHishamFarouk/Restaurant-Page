function menu(){
    let box = document.createElement('div');
    box.classList.add('box');
    
    let main = document.querySelector('#content');

for(let i=0; i<5;i++){
    let title = document.createElement('h1');
    title.textContent ='salad';
    box.appendChild(title);

    let number = document.createElement('h2');
    number.textContent ='component';
    box.appendChild(number);

    let num = document.createElement('h5');
    num.textContent ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa minima suscipit quidem, amet rerum voluptatem blanditiis doloremque rem praesentium maiores culpa adipisci facere optio porro laborum nobis. Voluptates, perferendis neque!';
    box.appendChild(num);
}
main.appendChild(box);

}

export default menu;