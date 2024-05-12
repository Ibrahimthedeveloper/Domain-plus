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






const slideshow = document.getElementById('slideshow');
const images = [
    '/images/slider-mainbg-01.jpg',
    '/images/slider-mainbg-02.jpg',
    '/images/pagetitle-bg.jpg',
    // Add more image URLs as needed
];
let index = 0;

function changeBackground() {
    index = (index + 1) % images.length;
    slideshow.style.backgroundImage = "url('" + images[index] + "')";
    setTimeout(changeBackground, 5000); // Change image every 5 seconds
}

changeBackground(); // Start the slideshow
  

//arrow up section
// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to toggle button visibility based on scroll position
window.addEventListener('scroll', function() {
    var button = document.getElementById('go-up');
    if (window.scrollY > 200) { // Adjust the scroll position threshold as needed
        button.style.opacity = '1';
    } else {
        button.style.opacity = '0';
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const elements = [
        { id: "years-experience", initialValue: 20 },
        { id: "industry-deployment", initialValue: 20 },
        { id: "projects-completed", initialValue: 180 },
        { id: "certified-consultants", initialValue: 70 },
        { id: "countries-servicing", initialValue: 3 }
    ];

    elements.forEach(el => {
        const element = document.getElementById(el.id);
        let count = 0;
        const interval = setInterval(() => {
            count++;
            element.textContent = count;
            if (count === el.initialValue) {
                clearInterval(interval);
            }
        }, 10); // Change the interval to adjust the speed (lower value for faster)
    });
});













