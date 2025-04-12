

// Get the form element
const form = document.getElementById('signup-form');

// Add event listener to form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);

    // Validate form data
    if (validateFormData(formData)) {
        // Send form data to server
        sendFormData(formData);
    }
});

// Validate form data
function validateFormData(formData) {
    // Check if all fields are filled
    if (!formData.get('firstname') || !formData.get('lastname') || !formData.get('practicename') || !formData.get('specialty') || !formData.get('practicesize') || !formData.get('phone') || !formData.get('email') || !formData.get('zipcode') || !formData.get('howdidyouhear')) {
        alert('Please fill in all fields.');
        return false;
    }

    // Check if email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.get('email'))) {
        alert('Invalid email address.');
        return false;
    }

  }

