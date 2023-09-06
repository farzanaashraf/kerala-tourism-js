var emailInp = document.getElementById("InputEmail1");
var emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var emailPara = document.getElementById("emailPara");

var pwdInp = document.getElementById("InputPassword1");
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
var passMed = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/;
var passPara =document.getElementById("pwdPara");
// var passPara =document.getElementById("pwdPara");

var pwdInp2 = document.getElementById("InputPassword2");
    // var pwdInp = document.getElementById("exampleInputPassword1");
var repeatPara = document.getElementById("repeatPara");
    

var phoneNum = document.getElementById("phoneId");
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var phonePara = document.getElementById("phonePara");

function emailFunction(){
   
    if(!emailInp.value){      
        emailPara.innerText = "";
    }

    else if(!emailInp.value.match(emailVal)){
        emailPara.innerText="Enter valid email";
        return false;     
    }
}
function newFunction(){
   
    if(!pwdInp.value){
        passPara.innerText= "";
    } else if (pwdInp.value.match(passw)) {
        passPara.style.background = "green";
         passPara.innerText= "Strong";
    }
    else if (pwdInp.value.match(passMed)) {
         passPara.style.background = "orange";
         passPara.innerText= "Medium";
    } else {
        
        passPara.style.background = "red";
        passPara.innerText= "Poor";
    }
    
} 
function repeatPassword(){
    
    if(!pwdInp2.value){
        repeatPara.innerText = "";
    }

    else if((pwdInp.value) !== (pwdInp2.value)){
        repeatPara.innerText="Password not matching";
    }
    
}
function phoneFunction(){
   
    if((!phoneNum.value) || (phoneNum.value.match(phoneno))) {
        phonePara.innerText= " ";

    }
    else if(!phoneNum.value.match(phoneno)){
        phonePara.innerText= "Enter valid phone number";
    } 
}
function registerValidation(){
    if((emailInp.value.match(emailVal)) && (pwdInp.value.match(passw)) && ((pwdInp2.value) == (pwdInp.value)) && (phoneNum.value.match(phoneno))) {
        alert ("Registration successfull");
    } else {
        return false;
    }
}
