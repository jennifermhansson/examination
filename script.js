
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");

let width = carousel.offsetWidth;
let index = 0;

window.addEventListener("resize", function () {
  width = carousel.offsetWidth;
});
next.addEventListener("click", function (e) {
  e.preventDefault();
  index = index + 1;
  prev.classList.add("show");
  track.style.transform = "translateX(" + index * -width + "px)";
  if (track.offsetWidth - index * width < index * width) {
    next.classList.add("hide");
  }
});
prev.addEventListener("click", function () {
  index = index - 1;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = "translateX(" + index * -width + "px)";
});


let popupFrame = document.getElementById("popupFrame") 
let popupName = document.getElementById("inputname") 

const openPopup = () => { 
  popupFrame.classList.add("open-popup") 

  const popupTitle = popupFrame.document.createElement("h2") 
  const popupMessage = popupFrame.document.createElement("p2") 
  
  const closePopup = () => { 
    popupFrame.classList.remove("open-popup") }
}


function calculateBMI() {
let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;

if (weight === "" || height === "") {
    document.getElementById("result").innerHTML = "⚠️ Please enter both values.";
    return;
}


height = height / 100;

let bmi = (weight / (height * height)).toFixed(2);
let category = "";

if (bmi < 18.5) {
    category = "Undervikt";
} else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normalvikt";
} else if (bmi >= 25 && bmi < 29.9) {
    category = "Övervikt";
} else {
    category = "Fetma";
}

document.getElementById("result").innerHTML = 
 `Ditt BMI är <strong>${bmi}</strong> (${category})`;
}


