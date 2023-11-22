let userName = document.getElementById("userName");
let password = document.getElementById("password");
let flag = 1;




function validateForm(){
    if(userName.value === ""){
        document.getElementById("userError").innerHTML = "User name is empty"
        flag = 0;

    }else if(userName.value.length < 3){
        document.getElementById("userError").innerHTML = "User name required minimum 3 characters"
        flag = 0;

    }else{
        document.getElementById("userError").innerHTML = ""
        flag = 1;
    }
    if(password.value === ""){
        document.getElementById("psdError").innerHTML = "password is empty"
        flag = 0;

    }else if(password.value.length < 4){
        document.getElementById("psdError").innerHTML = "password must be minimum 4 characters"
        flag = 0;

    }else{
        document.getElementById("psdError").innerHTML = ""
        flag = 1;
    }
    if(flag){ // we set already by default flag is 1
        return true
    }else{
        return false
    }
}