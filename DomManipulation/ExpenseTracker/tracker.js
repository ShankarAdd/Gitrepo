const myform=document.querySelector('#expenseForm');
const expense=document.querySelector('#expense');
const description=document.querySelector('#description');
const value1=document.getElementById('choose');
const addButton=document.querySelector('#clickOnIt');
const noofUsers=document.querySelector('#users');

addButton.addEventListener('click', onSubmit);

function onSubmit(){
    //taking data when user fill the form
    const expenseData=expense.value;
    const descriptionData=description.value;
    const text = value1.options[value1.selectedIndex].text;
    
    if(expenseData === '' ||descriptionData === '' || text === '' ){
        alert('Please enter all fields')
    }
    else{
        //Displaying the data in the page
        const li=document.createElement('li');
        li.textContent = expenseData + " : " + descriptionData + " : " +text;
        noofUsers.appendChild(li);

        //Storing the data in local storage
        const allData = expenseData + " : " + descriptionData + " : " +text;
        localStorage.setItem(expenseData, allData);

        //adding delete button
        const deleteButton = document.createElement('input');
		deleteButton.type = 'button';
		deleteButton.value = 'Delete';
        deleteButton.className='btn-outline-danger m-lg-1 delete';

        deleteButton.onclick = () =>{
            localStorage.removeItem(expenseData);
            noofUsers.removeChild(li);
        }
        li.appendChild(deleteButton);

        //edit button to edit
        const editButton = document.createElement('input');
		editButton.type = 'button';
		editButton.value = 'Edit';
        editButton.className='btn-outline-danger m-lg-1 delete';

        editButton.onclick = () =>{
            localStorage.removeItem(expenseData);
            noofUsers.removeChild(li);
            document.querySelector('#expense').value=expenseData;
            document.querySelector('#description').value=descriptionData;
            document.getElementById('choose').value=text;
        };
        li.appendChild(editButton);
    }
}