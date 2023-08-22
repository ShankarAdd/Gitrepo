const myform=document.querySelector('#my-form');
const firstName=document.querySelector('#name');
const firstEmail=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

// function onSubmit(e){
//     e.preventDefault();
//     if(firstName.value === ''|| firstEmail.value ===''){
//         msg.classList.add('error');
//         msg.innerHTML=('Please enter all fields');
//         setTimeout(() =>msg.remove(),3125);
//     }else{
//         const li=document.createElement('li');
//         li.appendChild(document.createTextNode(`${firstName.value} : ${firstEmail.value}`));
//         userList.appendChild(li);
//         //Clear fields
//         firstName.value='';
//         firstEmail.value='';
//     }
// }


//STORING DATA IN THE LOCAL STORAGE 
function onSubmit(e){
    e.preventDefault();
    if(firstName.value===''||firstEmail.value===''){
        msg.classList.add('error');
        msg.innerHTML=('Please enter all fields');
        setTimeout(() => msg.remove(),2500);
    }
    else{
        localStorage.setItem('name',firstName.value);
        
        localStorage.setItem('email',firstEmail.value);
        
    }
}