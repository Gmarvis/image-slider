// get the DOM elements

const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.getElementsByTagName("img")[0],
  buttons = document.querySelectorAll(".button"),
  prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next");

const arrImages = [
  "./assets/images/img1.jpg",
  "./assets/images/img2.jpg",
  "./assets/images/img3.jpg",
  "./assets/images/img4.jpg",
  "./assets/images/img5.jpg",
];

let imageIndex = 0,
  intervalId;

// Define function to automatic image slider

const autoSlide = () => {
  // start slide by calling slideImage() every 2 seconds
  intervalId = setInterval(() => slideImage(), 2000);
};
// call autoSlider
autoSlide();

//A function a that updates the carousel display to show the specified image
const slideImage = () => {
  images.src = arrImages[imageIndex];
  imageIndex = imageIndex === arrImages.length - 1 ? 0 : imageIndex + 1;

    if (imageIndex === arrImages.length - 1) {
      imageIndex = 0;
    } 
};

// add eventlistener to wrapper to stop slide on mouseover
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// add eventlistener to wrapper to resume slide on mouseleave
wrapper.addEventListener("mouseleave", autoSlide);


// add the click event listener to update images onclick
nextBtn.addEventListener("click", () => {
  images.src = arrImages[(imageIndex += 1)];
  // implementing the restart when images reaches the last
  if (imageIndex === arrImages.length - 1) {
    imageIndex = 0;
  }
//   console.log(imageIndex);
});


prevBtn.addEventListener("click", () => {
    images.src = arrImages[(imageIndex -= 1)];
    if (imageIndex === 0){
        imageIndex=arrImages.length-1
  console.log(imageIndex);

    }
});
