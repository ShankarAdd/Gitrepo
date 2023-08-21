// const ul=document.querySelector('.items');
// ul.firstElementChild.textContent='HELLO';
// ul.children[1].innerText='Brad';
// ul.lastElementChild.innerHTML='<h1>Hi Buddy<h1>';
// ul.firstElementChild.style.color='red';
// ul.children[1].style.color='green';
// ul.lastElementChild.style.color='#ccc';

const btn2=document.querySelector('.btn');

btn2.addEventListener('mouseout',(e) =>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='#ccc'
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML= '<h1>ITS AMAZING</h1>';
    document.querySelector('.items').lastElementChild.style.color='red';
})