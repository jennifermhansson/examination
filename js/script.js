  
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });


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


