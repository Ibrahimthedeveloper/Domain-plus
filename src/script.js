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
    const options = {
        threshold: 0.5 // Change the threshold as needed (0.5 means halfway into the viewport)
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
            }
        });
    }, options);

    const elements = document.querySelectorAll("#years-experience, #industry-deployment, #projects-completed, #certified-consultants");
    elements.forEach(element => {
        observer.observe(element);
    });

    function startCounting(element) {
        const initialValue = parseInt(element.textContent);
        let count = 0;
        const interval = setInterval(() => {
            count++;
            element.textContent = count + "+";
            if (count === initialValue) {
                clearInterval(interval);
            }
        }, 1); // Adjust the interval as needed
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const supportButton = document.getElementById('supportButton');
    const supportModal = document.getElementById('supportModal');
    const closeModalButton = document.getElementById('closeModalButton');

    supportButton.addEventListener('click', () => {
        supportModal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', () => {
        supportModal.classList.add('hidden');
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === supportModal) {
            supportModal.classList.add('hidden');
        }
    });
});







document.addEventListener('DOMContentLoaded', () => {
    const supportOptions = document.querySelectorAll('.support-option');

    supportOptions.forEach(option => {
        option.addEventListener('mouseenter', () => {
            option.classList.add('transform', 'scale-105');
        });
        option.addEventListener('mouseleave', () => {
            option.classList.remove('transform', 'scale-105');
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const supportForm = document.getElementById('supportForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    supportForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Clear form fields
        supportForm.reset();

        // Display confirmation message
        confirmationMessage.classList.remove('hidden');

        // Hide confirmation message after 5 seconds
        setTimeout(() => {
            confirmationMessage.classList.add('hidden');
        }, 5000);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const summaries = document.querySelectorAll('summary');

    summaries.forEach(summary => {
        summary.addEventListener('click', function() {
            this.parentNode.querySelector('details').toggleAttribute('open');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('supportModal');
    const openModalButton = document.getElementById('openModalButton');
    const closeModalButton = document.getElementById('closeModalButton');

    openModalButton.addEventListener('click', function() {
        modal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', function() {
        modal.classList.add('hidden');
    });
});



// Add any necessary JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.querySelector('button');
    subscribeButton.addEventListener('click', function() {
      const emailInput = document.querySelector('input[name="email"]');
      if (emailInput.value) {
        alert(`Subscribed with email: ${emailInput.value}`);
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    });
  });
  
















