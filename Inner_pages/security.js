let userId=document.getElementById("userId");
let password=document.getElementById("password").value;
let button=document.getElementById("loginbtn");
let wrong=document.getElementById("wrong");

let code="123"

let codeenc=code[2]+code[0]+code[1]

button.addEventListener("click",()=>{
    if(password[2]+password[0]+password[1]===codeenc && userId.value==="sarthak123"){
        console.log("Correct")
    }
    else if(userId.value!="sarthak123" && password[2]+password[0]+password[1]!=codeenc ){
        console.log("Incorrect")
        userId.style="border-bottom:2px solid red;"
        password.style="border-bottom:2px solid red;"
        wrong.innerHTML="Wrong input"

    }

    else if(password[2]+password[0]+password[1]!=codeenc){
        console.log("Incorrect")
        userId.style="border-bottom:2px solid red;"
        password.style="border-bottom:2px solid red;"
        wrong.innerHTML="Wrong Password"
    }

    else if(userId.value!="sarthak123"){
        console.log("Incorrect")
        userId.style="border-bottom:2px solid red;"
        password.style="border-bottom:2px solid red;"
        wrong.innerHTML="Wrong User Id"

    }
    
})
console.log(codeenc)
