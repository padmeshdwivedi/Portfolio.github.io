let ten = document.querySelector(".ten");
ten.addEventListener("click", (pre) => {  // Change "onclick" to "click"
    document.querySelector("#cls").innerText="Class 10th Summary :"
    document.querySelector("#sub").innerText="Subjects : Mathematics,English,Science,Sanskrit,Hindi,Social Science"
    document.querySelector("#sco").innerText="Scored : 85.83%"
    document.querySelector("#School").innerText="School : Saraswati Vidya Mandir Inter College"
    console.log("clicked");
    pre.preventDefault();
    let edudetail=document.querySelector("#edudetail");
    edudetail.classList.toggle("d-none");
    // document.querySelector("#edudetail").style.display = "block";
    let content=document.querySelector("#content");
    content.classList.toggle("hide");
});
document.getElementById("cross").addEventListener("click", function() {
    document.getElementById("edudetail").classList.toggle("d-none"); // Hides the element
    let content=document.querySelector("#content");
    content.classList.toggle("hide");
});
// class 12th
let twe = document.querySelector(".twe");
twe.addEventListener("click", (pre) => {  // Change "onclick" to "click"
    document.querySelector("#cls").innerText="Class 12th Summary :"
    document.querySelector("#sub").innerText="Subjects : Mathematics,Physics,Chemistry,Engilsh,Samanya Hindi"
    document.querySelector("#sco").innerText="Scored : 84.60%"
    document.querySelector("#School").innerText="School : Saraswati Vidya Mandir Inter College"
    console.log("clicked");
    pre.preventDefault();
    let edudetail=document.querySelector("#edudetail");
    edudetail.classList.toggle("d-none");
    // document.querySelector("#edudetail").style.display = "block";
    let content=document.querySelector("#content");
    content.classList.toggle("hide");
});
// for graduation
let gra= document.querySelector(".gra");
gra.addEventListener("click", (pre) => {  // Change "onclick" to "click"
    document.querySelector("#cls").innerText="Graduation Summary :"
    document.querySelector("#sub").innerText="Good At: C,DSA,DBMS,OOPS,Operating System,Computer Network"
    document.querySelector("#sco").innerText="Scored : 8.8 SGPA"
    document.querySelector("#School").innerText="University : Dr A.P.J. Abdul Kalam Technical University";
    console.log("clicked");
    pre.preventDefault();
    let edudetail=document.querySelector("#edudetail");
    edudetail.classList.toggle("d-none");
    // document.querySelector("#edudetail").style.display = "block";
    let content=document.querySelector("#content");
    content.classList.toggle("hide");
});
