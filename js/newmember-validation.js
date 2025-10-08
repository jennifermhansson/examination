
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("membershipForm");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const membership = document.getElementById("membership");

    
    firstName.addEventListener("blur", () => validateFirstName());
    lastName.addEventListener("blur", () => validateLastName());
    email.addEventListener("blur", () => validateEmail());
    membership.addEventListener("change", () => validateMembership());

 
    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        
        const isValid = validateForm();
        if (isValid) {
            showSuccessMessage();
        }
    });

    function validateForm() {
        const isFirstNameValid = validateFirstName();
        const isLastNameValid = validateLastName();
        const isEmailValid = validateEmail();
        const isMembershipValid = validateMembership();

        return isFirstNameValid && isLastNameValid && isEmailValid && isMembershipValid;
    }

    function validateFirstName() {
        const value = firstName.value.trim();
        const errorElement = document.getElementById("firstNameError");
        
        if (value === "") {
            showError(firstName, errorElement, "Förnamn är obligatoriskt");
            return false;
        } else if (value.length < 2) {
            showError(firstName, errorElement, "Förnamn måste vara minst 2 tecken");
            return false;
        } else if (!/^[a-öA-Ö\s-]+$/.test(value)) {
            showError(firstName, errorElement, "Förnamn får bara innehålla bokstäver");
            return false;
        }
        
        showSuccess(firstName, errorElement);
        return true;
    }

    function validateLastName() {
        const value = lastName.value.trim();
        const errorElement = document.getElementById("lastNameError");
        
        if (value === "") {
            showError(lastName, errorElement, "Efternamn är obligatoriskt");
            return false;
        } else if (value.length < 2) {
            showError(lastName, errorElement, "Efternamn måste vara minst 2 tecken");
            return false;
        } else if (!/^[a-öA-Ö\s-]+$/.test(value)) {
            showError(lastName, errorElement, "Efternamn får bara innehålla bokstäver");
            return false;
        }
        
        showSuccess(lastName, errorElement);
        return true;
    }

    function validateEmail() {
        const value = email.value.trim();
        const errorElement = document.getElementById("emailError");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
   
        if (value === "") {
            showError(email, errorElement, "Email är obligatoriskt");
            return false;
        } 
        
       
        if (!emailRegex.test(value)) {
            showError(email, errorElement, "Ange en giltig email-adress");
            return false;
        }
   
        if (localStorage.getItem(value)) {
            showError(email, errorElement, `Mailadressen ${value} är redan använd`);
            return false;
        }
        
        showSuccess(email, errorElement);
        return true;
    }

    function validateMembership() {
        const value = membership.value;
        const errorElement = document.getElementById("membershipError");
        
        if (value === "") {
            showError(membership, errorElement, "Du måste välja ett medlemskap");
            return false;
        }
        
        showSuccess(membership, errorElement);
        return true;
    }

    function showError(inputElement, errorElement, message) {
        inputElement.classList.remove("valid");
        inputElement.classList.add("invalid");
        errorElement.textContent = message;
    }

    function showSuccess(inputElement, errorElement) {
        inputElement.classList.remove("invalid");
        inputElement.classList.add("valid");
        errorElement.textContent = "";
    }

    function showSuccessMessage() {
        
        const userFirstName = firstName.value.trim();
        const userEmail = email.value.trim();
        
      
        localStorage.setItem(userEmail, "registered");
       
        const successTitle = document.getElementById("successTitle");
        const successMessage = document.getElementById("successMessage");
        
        successTitle.textContent = `Tack ${userFirstName}!`;
        successMessage.textContent = `Välkommen som medlem hos Pure Fitness! Du får snart ett mail med en bekräftelse på ditt medlemskap. Vi ser fram emot att träffa dig snart.`;
        

        const popup = document.getElementById("popupFrame");
        popup.classList.remove("hidden");
      
        form.reset();
        

        [firstName, lastName, email, membership].forEach(input => {
            input.classList.remove("valid", "invalid");
        });
    }

});

function closePopup() {
    const popup = document.getElementById("popupFrame");
    popup.classList.add("hidden");
}