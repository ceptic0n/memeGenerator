const memeForm = document.querySelector(".memeForm");
const memeImage = document.querySelector(".memeImage");
const topText = document.querySelector(".topText");
const bottomText = document.querySelector(".bottomText");
const memeCollection = document.querySelector(".memeCollection");


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
        let imageLink = memeImage.value;


        //create new div, img, and p tags for new Meme to be added
        let newMeme = document.createElement("div");
        let newImage = document.createElement("img");
        let newTopText = document.createElement("p");
        let newBottomText = document.createElement("p");

        //change value of new elements, and change size of image;
        newImage.src=imageLink;
        newImage.width = 300;
        newImage.height = 200;
        newTopText.textContent = top;
        newBottomText.textContent = bottom;

        //change attributes to overlay text on top of newMeme

        

        //append topText and bottomText to newMeme div
        newMeme.appendChild(newTopText);
        newMeme.appendChild(newImage);
        newMeme.appendChild(newBottomText);

        memeCollection.appendChild(newMeme);
        


        // //combine image and memeText into an li
        // let newMeme = document.createElement("li");
        // // newMeme.appendChild(memeText);
        // newMeme.appendChild(imageCreate(newImage, imageLink));
        // memeList.appendChild(newMeme);



        //reset Inputs
        memeImage.value = "";
        topText.value = "";
        bottomText.value = "";
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