//Access the Element and store in variable
var head1=document.getElementById('head1');
head1.style.textAlign="center";
head1.style.color="red";
// head1.textContent='HEADING CHANGED!!!!!!'
head1.innerText='HEADING CHANGED!!!!!!'

let group=document.getElementById('grp1');
group.innerHTML='<p> I am a para </p>'// either '' or `` it will works
group.innerHTML='<img src="download (1).jpg" alt="DOG">';

var list=document.getElementsByClassName('lchild');
// console.log(list)
list[0].textContent='Pineapple';
list[2].style.backgroundColor='lightblue';

var par=document.getElementsByTagName('p');
par[0].style.fontFamily='Calibri';


var query1=document.querySelector('input[type=date]');
query1.style.backgroundColor='brown'

// Class
// var query1=document.querySelector('.(classname)');
// query1.style.backgroundColor='brown'

// id
// var query1=document.querySelector('#(id)');
// query1.style.backgroundColor='brown'

//     Events
//==================================
// Mouse Events
// Form Events
// Scroll Events
// Keyboard Events

