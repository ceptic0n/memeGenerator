const memeForm = document.querySelector(".memeForm");
const memeLink = document.querySelector(".memeLink");
const topTextForm = document.querySelector(".topTextForm");
const bottomTextForm = document.querySelector(".bottomTextForm");
const memeCollection = document.querySelector(".memeCollection");


//event Delegate for the Meme Form
memeForm.addEventListener("click", function(e){

    //prevent page from reloading
    e.preventDefault();

    

    //this is what happens when you click SUBMIT
    if(e.target.type === "submit"){
        console.log("You clicked Submit!");

        //store top, bottom, and link in string variables
        let top = topTextForm.value;
        let bottom = bottomTextForm.value;
        let imageLink = memeLink.value;


        //create new div, img, and p tags for new Meme to be added
        let newMeme = document.createElement("div");
        let newImage = document.createElement("img");
        let newTopText = document.createElement("p");
        let newBottomText = document.createElement("p");

        //change value of new elements
        newImage.src=imageLink;
        newTopText.textContent = top;
        newBottomText.textContent = bottom;

        //change attributes to overlay text on top of newMeme
        newImage.classList.toggle("memeImage");
        newTopText.classList.toggle("topText");
        newBottomText.classList.toggle("bottomText");
        

        //append topText and bottomText to newMeme div
        newMeme.appendChild(newTopText);
        newMeme.appendChild(newImage);
        newMeme.appendChild(newBottomText);

        //add entire meme to memeCollection
        memeCollection.appendChild(newMeme);
        


        // //combine image and memeText into an li
        // let newMeme = document.createElement("li");
        // // newMeme.appendChild(memeText);
        // newMeme.appendChild(imageCreate(newImage, imageLink));
        // memeList.appendChild(newMeme);



        //reset Inputs
        memeLink.value = "";
        topTextForm.value = "";
        bottomTextForm.value = "";
    }


})


//convert String to meme
function memeify(top, bottom, image){
    let memeText = `${top}${bottom}`;
    return memeText;
}

//convert image link to an image for the website, take in img element
function imageCreate(newImage, imageLink){
    newImage.src = imageLink;
    newImage.width = 300;
    newImage.height = 200;
    return newImage;

}