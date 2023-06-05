



/*
-----------------
Menu Bar Mobile
-----------------
*/

let btn=document.getElementsByClassName("open")[0];
let menu=document.getElementById("menu_ul");
let btn2=document.getElementsByClassName("close")[0];

if(window.innerWidth<=900){
btn2.style.display="none";
menu.style.display="none";

btn.addEventListener("click",()=>{
    menu.style="display:flex;width:75vw;";
    menu.classList.add("menu_ani1");
    btn.style.display="none";
    btn2.style.display="block";

})

btn2.addEventListener("click",()=>{
    
    
    
        menu.classList.remove("menu_ani1");
        // menu.classList.add("menu_ani2");
    btn2.style.display="none";
    btn.style.display="block";
    
    menu.style.display="none";
    

})
}









