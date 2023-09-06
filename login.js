function loginValidation(){
    var emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailInp = document.getElementById("exampleInputEmail1");
    var pwdInp = document.getElementById("exampleInputPassword1");

    if((emailInp.value.match(emailVal)) && (pwdInp.value)){
        alert("valid login");
        return true;
    }

    else if (!emailInp.value.match(emailVal)){
        alert("invalid email");
        return false;
    }
    
    else if (!pwdInp.value){
        alert("enter password");
        return false;
    }
}