
let name = document.querySelector("#name");
let job = document.querySelector("#job");
let bio = document.querySelector("#bio");
let pic = document.querySelector("#pic");

let form = document.querySelector("form");

let cardname = document.querySelector("#username");
let imgg = document.querySelector("#imgg");
let title = document.querySelector("#title");
let detailss = document.querySelector("#details");

form.addEventListener("submit", function(details){
    details.preventDefault();
    
    cardname.textContent= details.srcElement[0].value
    title.textContent = details.srcElement[1].value
    detailss.textContent = details.srcElement[2].value
    imgg. innerHTML = `<img src=details.srcElement[2].value alt="">`
});
