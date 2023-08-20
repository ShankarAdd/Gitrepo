// // console.log('Hello git');
// // console.log('This is first commit into main branch');
// // const header=document.getElementById('main-header');
// // header.style.borderBottom='solid 3px #000';
// // const sc=document.querySelector('h2');
// // sc.style.color='green';
// // console.log(typeof(getElementById));

// //getelemetbyclasssname
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[2].textContent = 'Javascript';

// items[2].style.backgroundColor='green';

// //this will give error
// //items.style.backgroundColor='#f4f4f4';

// //to over come from this we need to iterate for loop to change each color
// //  for(var i=0;i<items.length;i++){
// //     items[i].style.backgroundColor='grey';
// //  }
// //Making the font bold and color 2
// for(var i=0;i<items.length;i++){
//      items[i].style.fontWeight='bold';
//      items[i].style.color='red';
// }

//GetElementByTagName
// var li=document.getElementsByTagName('li');
// li[1].textContent='AlgoData';
// li[1].style.fontWeight= 'bold';
// li[1].style.backgroundColor= 'yellow';

// //we get error if we use
// //li.style.backgroundColor='#f4f4f4';

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }

//QuerySelector
// var hd=document.querySelector('#main-header');
// hd.style.borderBottom= 'solid 4px #ccc';

// var input= document.querySelector('input');
// input.value ='Please add item';

// var submit=document.querySelector('input[type="submit"]');
// submit.value="Send";

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var item2=document.querySelector('.list-group-item:last-child');
// item2.style.color='blue';

// var item3=document.querySelector('.list-group-item:nth-child(2)');
// item3.style.color='white';


// //making background color to green
// item3.style.backgroundColor='green';



//QuerySelectorAll 
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello programmer';

// var od = document.querySelectorAll('li:nth-child(odd)');

// var od1 = document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<od1.length;i++){
//     od1[i].style.backgroundColor='#ccc';
// }

//making the font color to green


// var d2=document.querySelectorAll('.list-group-item');
// d2[1].style.color='green'
//making the odd background color to green
// var make = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<make.length;i++){
//     make[i].style.backgroundColor='green';
// }

//Traversing The DOM
var itemList=document.querySelector('#items');
//parentNode
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode);

//parentElement
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement);
// console.log(itemList.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='red';

//firstChild
// console.log(itemList.firstChild);
//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Cart 1';

//LASTCHILD
// console.log(itemList.lastChild);
//LASTELEMENTCHILD
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Cart 4';

//NEXT SIBLINGS
// console.log(itemList.nextSibling);
//NEXT ELEMENT SIBLINGS
// console.log(itemList.nextElementSibling);

//previous siblings
// console.log(itemList.previousSibling);
//previous element siblings
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='red';


//CREATE ELEMENT

//create a div
// var newDiv=document.createElement('div');
// //add class
// newDiv.className='Hello';
// //add id
// newDiv.id='hello1';
// //add attributes
// newDiv.setAttribute('title','Hello div');
// //create a text node
// var newDivText=document.createTextNode('Hello');
// //add text to div
// newDiv.appendChild(newDivText);

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');
// console.log(newDiv);
// //increases the font size of "frontpage"
// newDiv.style.fontSize='30px';
// container.insertBefore(newDiv,h1);

//adding Hello before the ITEM 1
var newDiv=document.createElement('li');
//add class
newDiv.className='Hello';
//add id
newDiv.id='Hello1';
//add attributes
newDiv.setAttribute('title','Hello li');
//create a text node
var newDivText=document.createTextNode('Hello');
//add text to div
newDiv.appendChild(newDivText);

var container=document.getElementById('items');
newDiv.style.fontSize='15px';
container.insertBefore(newDiv,container.children[0]);


