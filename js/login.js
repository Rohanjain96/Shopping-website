const signin = document.querySelector('.signinbtn');
const signup = document.querySelector('.signupbtn');
const formbox = document.querySelector('.formbox');
const body = document.querySelector('body')
signup.onclick = function () {
    formbox.classList.add('active');
    body.style.backgroundColor = 'red';
}
signin.onclick = function () {
    formbox.classList.remove('active');
    body.style.backgroundColor = ' #48dbfb';
}

function showerror(id, error) {
    console.log("we are in error");
    let element = document.getElementById(id).parentElement;
    element.children[2].innerHTML=error;

}
function clearerror()
{
 
    let formerrors=document.querySelectorAll(".formerror");
    console.log(formerrors);
    for(let item of formerrors)
    {
        console.log("we are in clear error");
        console.log( item.textContent);
        item.textContent="";
        console.log( item.textContent);
    }
}
function validatesigninform() {
    clearerror();
    let returnval = 'true';
    let Email = document.forms['signinform']['signinEmail'].value;
    if (Email.length > 20) {
        showerror("signinEmail","*Email is Too long");
        returnval=false ;
    }
    else if (Email.search(/.com/)==-1) {
        showerror("signinEmail","* Email is not complete");
        returnval=false;
    }
    let pswrd = document.forms['signinform']['signinPassword'].value;
     if (pswrd.length<3)
    {
        showerror("signinPassword","* Password should be atleast 3 character long");
        returnval=false;
    }
    return returnval;
}
function validatesignupform(){
    clearerror();
    let returnval = true;
    let Name = document.forms['signupform']['Name'].value;
    if (Name.length > 15) {
        showerror("Name","Name cannot be Too long");
        returnval=false;
    }
    let Email = document.forms['signupform']['signupEmail'].value;
    if (Email.length > 20) {
        showerror("signupEmail","*Email is Too long");
        returnval=false;
    }
     if (Email.search(/.com/)==-1) {
        showerror("signupEmail","* Email is not complete");
        returnval=false;
    }
    let pswd = document.forms['signupform']['signupPassword'].value;
    let cnfrmpswd = document.forms['signupform']['signupconfirmPassword'].value;
    if (pswd.length<3)
    {
        showerror("signupPassword","* Password should be atleast 3 character long");
        returnval=false;
    }
    if(pswd.search(/[A-Z]/)==-1)
    {
        showerror("signupPassword","* Password should have one uppercase");
        returnval=false;  
    }
    if(pswd.search(/[0-9]/)==-1)
    {
        showerror("signupPassword","* Password should have one number");
        returnval=false;  
    }
    if(pswd.search(/[\@\.\-\_]/)==-1)
    {
        showerror("signupPassword","* Password should have one special character");
        returnval=false;  
    }
    if(pswd!=cnfrmpswd)
    {
        showerror("signupconfirmPassword","* Password not match");
        returnval=false;
    }
    return returnval;
}

