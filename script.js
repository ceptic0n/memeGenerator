const memeForm = document.querySelector(".memeForm");
const memeImage = document.querySelector(".memeImage");
const topText = document.querySelector(".topText");
const bottomText = document.querySelector(".bottomText");


const memeList = document.querySelector(".memeList");


//event Delegate for the Meme Form
memeForm.addEventListener("click", function(e){

    //prevent page from reloading
    e.preventDefault();

    

    //this is what happens when you click SUBMIT
    if(e.target.type === "submit"){
        console.log("You clicked Submit!");

        //store top, bottom, and link in string variables
        let top = topText.value;
        let bottom = bottomText.value;
        let image = memeImage.value;

        //combine strings to a single string
        let meme = memeify(top, bottom, image);

        //add memeString as a new li to the "memeList";
        let newMeme = document.createElement("li");
        newMeme.innerText = meme;
        memeList.appendChild(newMeme);

        //reset Inputs
        // memeImage.setAttribute("placeholder","Enter the Link of your Photo");
        // topText.setAttribute("placeholder","(Optional) What Text do you want to display on top?");
        // bottomText.setAttribute("placeholder","(Optional) What text do you want to display on the Bottom?");
        memeImage.value = "";
        topText.value = "";
        bottomText.value = "";
    }


})


//convert String to meme
function memeify(top, bottom, image){
    let meme = `${top}${bottom}${image}`;
    return meme;
}