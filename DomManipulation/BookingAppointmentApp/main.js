const myform=document.querySelector('#my-form');
const firstName=document.querySelector('#name');
const firstEmail=document.querySelector('#email');
const msg=document.querySelector('.msg');
const usser=document.querySelector('#users');

//myform.addEventchildElestener('submit', onSubmit);

// function onSubmit(e){
//     e.preventDefault();
//     if(firstName.value === ''|| firstEmail.value ===''){
//         msg.classchildElest.add('error');
//         msg.innerHTML=('Please enter all fields');
//         setTimeout(() =>msg.remove(),3125);
//     }else{
//         const childEle=document.createElement('childEle');
//         childEle.appendChild(document.createTextNode(`${firstName.value} : ${firstEmail.value}`));
//         parentEle.appendChild(childEle);
//         //Clear fields
//         firstName.value='';
//         firstEmail.value='';
//     }
// }


//STORING DATA IN THE LOCAL STORAGE 
function saveData(event) {
	event.preventDefault();
	const userName = event.target.name.value;
	const mail = event.target.email.value;
	const userData = {
		userName,
		mail
	};
	localStorage.setItem(userData.userName, JSON.stringify(userData));

    if (userData.userName === '' || userData.mail === '') {
		
		var msg = document.querySelector('.msg');
		msg.classchildElest.add('error');
		msg.innerHTML = 'Please enter all fields';

		// Remove error after 3 seconds
		setTimeout(() => msg.remove(), 3000);
	} else {
		const parentEle = document.querySelector('#users');
        const childEle = document.createElement('childEle');
        childEle.textContent = userData.userName + " : " + userData.mail ;

        const deleteButton = document.createElement('input');
        deleteButton.type = 'button';
        deleteButton.value = 'Delete';
        deleteButton.className = 'btn-danger';

        //We need to add update button
        var updateButton=document.createElement('input');
        updateButton.type='button';
        updateButton.className='btn-update';
        updateButton.value='Edit';
        

        deleteButton.onclick = () => {
            localStorage.removeItem(userData.userName);
            parentEle.removeChild(childEle);
        };
        updateButton.onclick = () =>{
            localStorage.removeItem(userData.userName);
            parentEle.removeChild(childEle);
            document.getElementById('name').value = userData.userName;
            document.getElementById('email').value = userData.mail;

        };

        childEle.appendChild(updateButton);
        childEle.appendChild(deleteButton);
        parentEle.appendChild(childEle);
	}
}