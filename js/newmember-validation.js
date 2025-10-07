// Formulärvalidering för newmember.html
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("membershipForm");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const membership = document.getElementById("membership");

    // Lägg till realtidsvalidering när användaren skriver
    firstName.addEventListener("blur", () => validateFirstName());
    lastName.addEventListener("blur", () => validateLastName());
    email.addEventListener("blur", () => validateEmail());
    membership.addEventListener("change", () => validateMembership());

    // Huvudvalidering när formuläret skickas
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Förhindra standardformulärinlämning
        
        const isValid = validateForm();
        if (isValid) {
            showSuccessMessage();
        }
    });

    // Validera hela formuläret
    function validateForm() {
        const isFirstNameValid = validateFirstName();
        const isLastNameValid = validateLastName();
        const isEmailValid = validateEmail();
        const isMembershipValid = validateMembership();

        return isFirstNameValid && isLastNameValid && isEmailValid && isMembershipValid;
    }

    // Validera förnamn
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

    // Validera efternamn
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

    // Validera email
    function validateEmail() {
        const value = email.value.trim();
        const errorElement = document.getElementById("emailError");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (value === "") {
            showError(email, errorElement, "Email är obligatoriskt");
            return false;
        } else if (!emailRegex.test(value)) {
            showError(email, errorElement, "Ange en giltig email-adress");
            return false;
        }
        
        showSuccess(email, errorElement);
        return true;
    }

    // Validera medlemskap
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

    // Visa felmeddelande
    function showError(inputElement, errorElement, message) {
        inputElement.classList.remove("valid");
        inputElement.classList.add("invalid");
        errorElement.textContent = message;
    }

    // Visa framgång
    function showSuccess(inputElement, errorElement) {
        inputElement.classList.remove("invalid");
        inputElement.classList.add("valid");
        errorElement.textContent = "";
    }

    // Visa framgångsmeddelande
    function showSuccessMessage() {
        const popup = document.getElementById("popupFrame");
        popup.classList.remove("hidden");
        
        // Rensa formuläret
        form.reset();
        
        // Ta bort alla valideringsklasser
        [firstName, lastName, email, membership].forEach(input => {
            input.classList.remove("valid", "invalid");
        });
    }
});

// Stäng popup-funktion (global)
function closePopup() {
    const popup = document.getElementById("popupFrame");
    popup.classList.add("hidden");
}