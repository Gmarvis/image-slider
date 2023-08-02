// get the DOM elements 


const wrapper = document.querySelector(".wrapper"),
carousel = document.querySelector(".carousel"),
images = document.getElementsByTagName("img"),
buttons = document.querySelectorAll(".button");

let imageIndex = 1,
    intervalId;

    // Define function to automatic image slider

const autoSlide = () => {
    // start slide by calling slideImage() every 2 seconds
    intervalId = setInterval(()=> slideImage(++imageIndex),2000)
};
// call autoSlider
autoSlide()

    //A function a that updates the carousel display to show the specified image
    const slideImage = () => {
        // console.log(imageIndex);
        // Update the carousel display to show the specified image
        carousel.style.transform = `translate(-${imageIndex * 100}%)`


        const slideImage = ()=>{
        //calculate the image object index
        // imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length -1 : imageIndex;
        }

        if (imageIndex===images.length-1){
            imageIndex = 0
            carousel.style.transform = `translate(-${0 * 100}%)`
        }

    };