const myform=document.querySelector('#expenseForm');
const expense1=document.querySelector('#expense');
const description1=document.querySelector('#description');
const value1=document.getElementById('choose');
const addButton=document.querySelector('#clickOnIt');
const noofUsers=document.querySelector('#users');
const expens = document.querySelector('#expenseId');

addButton.addEventListener('click', onSubmit);

function onSubmit(){
    //taking data when user fill the form
    const amount=expense1.value;
    const description=description1.value;
    const category = value1.options[value1.selectedIndex].text;
    const expe = expens.value;

    const expense = {
        amount,
        description,
        category,
    }
    axios.post("http://localhost:3000/expense/add-expense", expense)
        .then((response) => showOnScreen(response.data))
        .catch((err) => {
            console.log(err);
    })
      
}
function showOnScreen(expense){
    if(expense.amount === '' ||expense.description === '' || expense.category === '' ){
        alert('Please enter all fields')
    }
    else{
        //Displaying the data in the page
        const li=document.createElement('li');
        li.textContent = expense.amount + " : " + expense.description + " : " +expense.category;
        noofUsers.appendChild(li);
    
        //Storing the data in local storage
        //localStorage.setItem(expense.amount, JSON.stringify(expense));
    
        //adding delete button
        const deleteButton = document.createElement('input');
        deleteButton.type = 'button';
        deleteButton.value = 'Delete';
        deleteButton.className='btn-outline-danger m-lg-1 delete';
    
        deleteButton.onclick = () =>{
            //localStorage.removeItem(amount);
            const id = expense.expe;
            axios.delete('http://localhost:3000/expense/delete-expense/' + id)
                .catch((err) => console.log(err));
            noofUsers.removeChild(li);
        }
        li.appendChild(deleteButton);
    
        //edit button to edit
        const editButton = document.createElement('input');
        editButton.type = 'button';
        editButton.value = 'Edit';
        editButton.className='btn-outline-danger m-lg-1 delete';
    
        editButton.onclick = () =>{
            //localStorage.removeItem(amount);
                const id1 = expense.id;
                noofUsers.removeChild(li);
                document.querySelector('#expense').value=expense.amount;
                document.querySelector('#description').value=expense.description;
                document.getElementById('choose').value=expense.category;
                document.getElementById('expenseId').value=expense.expenseId;
                axios.delete('http://localhost:3000/expense/delete-expense/' + id1)
                .catch(err => console.log(err));
        };
        li.appendChild(editButton);
    }
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000/expense/get-expense")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                showOnScreen(response.data[i]);
            }
        })
        .catch((err) => console.log(err));
})