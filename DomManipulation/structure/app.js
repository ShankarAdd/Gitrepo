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
var li=document.getElementsByTagName('li');
li[1].textContent='AlgoData';
li[1].style.fontWeight= 'bold';
li[1].style.backgroundColor= 'yellow';

//we get error if we use
//li.style.backgroundColor='#f4f4f4';

for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}