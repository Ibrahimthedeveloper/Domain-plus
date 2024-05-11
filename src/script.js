function openNav() {
    document.getElementById("sideBar").style.width = "100%";
    document.getElementById("sideNav").style.width = "45%";
  }
  
  /*Close navigation*/
  function exitNav() {
    document.getElementById("sideBar").style.width = "0%";
    document.getElementById("sideNav").style.width = "0%";
  }

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Perform form validation
        // Example: Check if input fields are not empty
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const select = document.getElementById('select').value.trim();

        if (!name || !email || !message || !select) {
            alert('Please fill out all fields.'); // Display an error message
            return;
        }

        // Form data is valid, you can submit the form data or perform other actions here
        alert('Form submitted successfully!'); // Display success message
        // Clear all form fields
        form.reset();
    });
});




  