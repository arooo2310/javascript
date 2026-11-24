function show(){
    alert('Button is clicked !!!......')
}
var head=document.getElementById('head1');
head.addEventListener('mouseover',()=>{
    head.style.color='brown';
},
head.addEventListener('mouseleave',()=>{
    head.style.color='black';
})
)

function display(eve){
    console.log(eve);
    console.log(eve.target.value)
    
}

var text=document.getElementById('text3')
function focusn(){
    text.style.backgroundColor='blue';
}

var blu=document.getElementById('text1')
function focusn(){
    text.style.backgroundColor='green';
}
function submitted(){
    alert('The form is submitted successfully');
}

let email=document.getElementById('email');
let error=document.getElementById('error');
let regex=/^([a-zA-Z0-9\.-_#]+)@([a-zA-Z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/
function validate() {
    if (regex.test(email.value)) {
        error.textContent='Email is valid';
        error.style.color='green';
        return true;
    }
    else{
        error.textContent='Email is invalid';
        error.style.color='red';
        return false;
    }
}


function verify(){
    let value=document.getElementById('num');
    let errmssg=document.getElementById('errmssg')
    try{
        let x=num.value
        if (x<5) throw 'Number is too low';
        if(x>10) throw 'Number is too high';
    }
    catch(error){
        //console.log(`The error is ${error}`);
        errmssg.textContent=`The error is ${error}`;

    }
}