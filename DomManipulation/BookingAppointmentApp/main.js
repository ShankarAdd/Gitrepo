const myform = document.querySelector('#my-form');
const firstName = document.querySelector('#name');
const firstEmail = document.querySelector('#email');
const msg = document.querySelector('.msg');
const usser = document.querySelector('#users');

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
    const userEmail = event.target.email.value;
    console.log(userName)
    console.log(userEmail);
    const userData = {
        userName,
        userEmail
    };
    console.log(userData.userEmail);
    //localStorage.setItem(userData.userName, JSON.stringify(userData));
    //display(userData)

    axios.post("http://localhost:3000/user/add-user", userData)
        .then((response) => display(response.data))
        .catch((err) => {
            console.log(err);
        })

    event.target.name.value = '';
    event.target.email.value = '';
}
function display(userData) {
    if (userData.userName === '' || userData.userEmail === '') {

        var msg = document.querySelector('.msg');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const parentEle = document.querySelector('#users');
        const childEle = document.createElement('li');
        childEle.textContent = userData.userName + " : " + userData.userEmail;
        parentEle.appendChild(childEle);

        const deleteButton = document.createElement('input');
        deleteButton.type = 'button';
        deleteButton.value = 'Delete';
        deleteButton.className = 'btn-danger';

        //We need to add update button
        var updateButton = document.createElement('input');
        updateButton.type = 'button';
        updateButton.className = 'btn-update';
        updateButton.value = 'Edit';
        

        deleteButton.onclick = () => {

            //This is to delete data from local storage
            //localStorage.removeItem(userData.userName);

            //the main part to delete the user details from API
            const id = userData.id;
            axios.delete('http://localhost:3000/user/delete-user/' + id)
                .catch((err) => console.log(err));

            parentEle.removeChild(childEle);
        };

        childEle.appendChild(deleteButton);

        updateButton.onclick = () => {
            //localStorage.removeItem(userData.userName);
            const id1 = userData._id;
            if (id1) {
                axios.put("https://crudcrud.com/api/22254b64f3294a1b9eb246b51ca95521/appointmentData/" + id1, userData)
                    .then((response) => {
                        userData._id = id1;
                        display(userData)
                    })
                    .catch((err) => console.log(err))
                userData._id = '';
                parentEle.removeChild(childEle);
                document.getElementById('name').value = userData.userName;
                document.getElementById('email').value = userData.userEmail;
            }
            else {
                axios.post("http://localhost:3000/user/add-user", userData)
                    .then((response) => display(response.data))
                    .catch((err) => console.log(err))
            }
        };
        childEle.appendChild(updateButton);
    }
}
//Showing the user's details from the local storage
// window.addEventListener("DOMContentLoaded",() =>{
//     const localStorageObj=localStorage;
//     const localstoragekeys= Object.keys(localStorageObj)

//     for(var i=0;i<localstoragekeys.length;i++){
//         const key = localstoragekeys[i]
//         const userDetailsString = localStorageObj[key];
//         const userDetailsObj = JSON.parse(userDetailsString);
//         display(userDetailsObj);
//     }
// })
//getting the user's details when the whole html loads using GET request
window.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000/user/get-user")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                display(response.data[i]);
            }
        })
        .catch((err) => console.log(err));
})