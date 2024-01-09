const memeForm = document.querySelector(".memeForm");
const memeImage = document.querySelector(".memeImage");
const topText = document.querySelector(".topText");
const bottomText = document.querySelector(".bottomText");
const memeList = document.querySelector("memeList");

memeForm.addEventListener("click", function(e){

    let top = topText.value;
    let bottom = bottomText.value;
    let image = memeImage.value;

    //this is what happens when you click SUBMIT
    if(e.target.type === "submit"){
        console.log("You clicked Submit!" + e.target.type);
    }


})