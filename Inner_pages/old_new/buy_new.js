
/*
------------------
new products
------------------
*/
//format of adding

//[ primary_pic,name,"$",price, condition, id, details , additional image , additional tag ]

let newProduct = [
    ["https://5.imimg.com/data5/SELLER/Default/2021/5/RI/NW/BQ/1756364/cricket-jersey-t-shirt-500x500.jpg ", "Man T-Shirt ", "$", 30, "New", "0123", ["Size:XL", "Brand:Nike", "Washable and Can be used roughly"],["https://5.imimg.com/data5/AV/GN/LY/SELLER-20899037/cricket-t-shirts-500x500.jpg"," https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg"],"man tshirt cloth"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "New", "4895", [],[],"ab"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "New", "25654", [],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "New", "4568", [],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "New", "4654", [],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "New", "564", [],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "New", "456", [],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "New", "4568", [],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "New", "4568", [],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "new", "468", [],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "New", "4568", [],[],"a"],
    ["https://cdn.shopclues.com/images1/thumbnails/116677/640/1/153184505-116677334-1668705045.jpg", "android Phone", "$", 30, "Old", "1234",[],[],"a"],
    ["https://5.imimg.com/data5/AV/GN/LY/SELLER-20899037/cricket-t-shirts-500x500.jpg", "Man T-Shirt", "$", 20, "Old", "564654",[],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "Old", "8746",[],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "old", "8795",[],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "Old", "12354",[],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "Old", "12345",[],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "Old", "7894",[],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "Old", "456321",[],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "Old", "78965",[],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "Old", "6543",[],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "Old", "987654",[],[],"a"],
    ["https://5.imimg.com/data5/BQ/VP/BM/SELLER-11787632/710xsqdg0gl-ul1500--500x500.jpg", "Woman Dress", "$", 13, "Old", "134",[],[],"a"]
    

]

/*
------------------
old products
------------------
*/

let oldProduct = [
    

]



function newFnc() {

    let stuff = document.getElementById("deals");

    

    for (let i = 0; i < newProduct.length; i++) {
        let item = document.createElement("form");
        // item.action = "complitionEnquiry/index.html";
        item.classList.add("box");
        item.id = i;

        let p = document.createElement("p");
        let price = document.createElement("p");
        price.classList.add("price");
        let img = document.createElement("img");


        img.src = newProduct[i][0];
        img.classList.add("pic");

        item.appendChild(p);
        item.appendChild(price);
        item.appendChild(img);


        let pText = document.createTextNode(newProduct[i][1]);
        let priceText = document.createTextNode(newProduct[i][2] + newProduct[i][3]);

        p.appendChild(pText);
        price.appendChild(priceText);


        stuff.appendChild(item);



        //buy and detail now option



        let prdts = document.getElementsByClassName("box")[i];


        let buybtn = document.createElement("input");
        buybtn.type = "submit";
        buybtn.value = "Buy Now";
        buybtn.classList.add("buybtn");

        let details = document.createElement("input");
        details.type = "submit";
        details.id = "details";
        details.classList.add("dtlsBtn");
        details.value = "Details"




        prdts.appendChild(buybtn);
        prdts.appendChild(details);
        buybtn.style.visibility = "hidden";
        buybtn.style.opacity = "0";







        let prId = newProduct[i][5];
        let prName = newProduct[i][1];
        let prPrice = newProduct[i][3];
        let prImg =[newProduct[i][0],newProduct[i][7]];
        let prDetails = newProduct[i][6];
        let condition= newProduct[i][4];
        


        
            buybtn.style.visibility = "visible";
            buybtn.style.opacity = "1";


        

        

        //passing id
        buybtn.addEventListener("click", () => {
            item.action = "complitionEnquiry/index.html";
            localStorage.setItem("productId", prId);
            localStorage.setItem("productName", prName);
            return false;
        })

        details.addEventListener("click", () => {
            item.action = "productDetails/index.html";

            localStorage.setItem("productId", prId);
            localStorage.setItem("productName", prName);
            localStorage.setItem("productImg",prImg);
            localStorage.setItem("productDetails",prDetails);
            localStorage.setItem("price",prPrice);
            localStorage.setItem("condition",condition);
            return false;
        })













    }




    //search engine

    let itm = document.getElementById("items");
    let src = document.getElementById("search");
    let srcbtn = document.getElementById("srcbtn");
    itm.style.display = "none";



    window.onload = function () {

        let itm = document.getElementById("items");
        let w_fil = document.getElementById("filter_opt");
        let f_btn = document.getElementById("f_button");
        document.onclick = function (event) {
    //search option display setting
            if (itm.style.display === "none") {
                if (event.target.id !== "srcbtn") {
                    itm.style.display = "none";
                }
                else {
                    itm.style.display = "block";
                }
            }
            else if(itm.style.display!="none"){
                if (event.target.id !== "srcbtn" && event.target.id != "search") {
                    itm.style.display = "none";
                }
                else {
                    itm.style.display = "block";
                }
            
            }


            //filter menu click option setting

            if(event.target.id==="f_button"){
                w_fil.style.left="0px";
            }
            else if(event.target.id!="f_button"){
                w_fil.style.left="-200vw";
            }


        }
    }





    srcbtn.addEventListener("click", () => {


        itm.innerHTML = "";

        for (let i = 0; i < newProduct.length; i++) {

            let src = document.getElementById("search");
            let itm = document.getElementById("items");
            let a = document.createElement("a");
            a.href = "#" + i;

            let div = document.createElement("div");
            div.classList.add("i_list");
            let img = document.createElement("img");
            img.src = newProduct[i][0];
            let h2 = document.createElement("h2");
            h2.textContent = newProduct[i][1];

            div.appendChild(img);
            div.appendChild(h2);
            a.appendChild(div)
            itm.appendChild(a);

        }
    });

    let btn = document.getElementById("srcbtn");
    
    btn.addEventListener("click", () => {
        let items = document.getElementsByClassName("i_list");
        let box=document.getElementsByClassName("box");
        
        let srcBar = src.value.toUpperCase();

        for (let i = 0; i < newProduct.length; i++) {
            let tag = newProduct[i][1];
            console.log(newProduct[i][8]);
            // console.log(tag.toUpperCase());
            if (tag) {

                if (tag.toUpperCase().indexOf(srcBar) > -1 || newProduct[i][8].toUpperCase().indexOf(srcBar)> -1) {
                    items[i].style.display = "";
                    // box[i].style.display="";
                    box[i].style.display='';
                    
                } else {
                    items[i].style.display = "none";
                    // box.style.display = "none";
                    box[i].style.display='none';
                }

            }
        }
    });


    //filter
    

    
    //filteration function


    let sub_f = document.getElementById("sub");
    sub_f.addEventListener("click", () => {
        let firstP = document.getElementById("f_p").value;
        let lastP = document.getElementById("l_p").value;
        if (firstP === "" || lastP === "") {
            alert("Unexpected Error Came");
        }
        else {
            for (let i = 0; i < newProduct.length; i++) {
                let items = document.getElementsByClassName("box");
                let price = newProduct[i][3];
                // console.log(tag.toUpperCase());
                if (price) {

                    if (newProduct[i][3] >= firstP && newProduct[i][3] <= lastP) {
                        items[i].style.display = ""
                    } else {
                        items[i].style.display = "none";
                    }

                }
            }


        }

    });

//Filtration process by catagories

let catagories=document.getElementsByClassName("catg");

for(let i=0;i<catagories.length;i++){
    catagories[i].addEventListener("click",()=>{
        //choosing products
        let cat = catagories[i].innerHTML.toUpperCase();
        console.log(cat)
            for (let i = 0; i < newProduct.length; i++) {
                let items = document.getElementsByClassName("box");
                let tag = newProduct[i][8];
                
                // console.log(tag.toUpperCase());
                if (tag) {
                    console.log(tag.toUpperCase())
                    if (tag.toUpperCase().indexOf(cat) > -1) {
                        items[i].style.display = ""
                        console.log(tag.toUpperCase().indexOf(cat))
                    } else {
                        items[i].style.display = "none";
                        console.log(tag.toUpperCase().indexOf(cat))
                    }

                }
            }






        



    })

}





//filter by contition

//new filter

let newC=document.getElementById("new")
newC.addEventListener("click",()=>{
    for (let i = 0; i < newProduct.length; i++) {
        let items = document.getElementsByClassName("box");
        let condition = newProduct[i][4];
        
        // console.log(tag.toUpperCase());
        if (condition) {
            // console.log(tag.toUpperCase())
            if (condition.toUpperCase()==="NEW") {
                items[i].style.display = ""
                
            } else {
                items[i].style.display = "none";
                
            }

        }
    }
})


//old filter

let oldC=document.getElementById("old");

oldC.addEventListener("click",()=>{
    for (let i = 0; i < newProduct.length; i++) {
        let items = document.getElementsByClassName("box");
        let condition = newProduct[i][4];
        
        // console.log(tag.toUpperCase());
        if (condition) {
            // console.log(tag.toUpperCase())
            if (condition.toUpperCase()==="OLD") {
                items[i].style.display = ""
                
            } else {
                items[i].style.display = "none";
                
            }

        }
    }
})


}
newFnc()









