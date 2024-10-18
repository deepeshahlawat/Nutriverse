function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();

    if (hour < 12) {
        greetingElement.textContent = 'Good Morning';
    } else if (hour < 18) {
        greetingElement.textContent = 'Good Afternoon';
    } else {
        greetingElement.textContent = 'Good Evening';
    }
}

// Call the function when the page loads
updateGreeting();
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    // Hide all slides
    slides.forEach((slide) => slide.style.display = "none");
    // Remove active class from dots
    dots.forEach((dot) => dot.classList.remove('active'));

    // Show the current slide
    currentIndex = (currentIndex + 1) % slides.length; // Cycle through the slides
    slides[currentIndex].style.display = "block";
    dots[currentIndex].classList.add('active');
}

// Move to a specific slide
function currentSlide(n) {
    currentIndex = n - 1;
    showSlides();
}

// Move the slide left or right
function moveSlide(n) {
    currentIndex += n;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlides();
}

// Auto-slide every 3 seconds
let autoSlide = setInterval(showSlides, 3000);

// Initial load
showSlides();

// Getting the context of the canvas where the chart will be drawn
const ctx = document.getElementById('goalProgressChart').getContext('2d');

// Creating the bar chart
const goalProgressChart = new Chart(ctx, {
    type: 'bar',  // Chart type
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],  // X-axis labels
        datasets: [
            {
                label: 'Carbs',
                backgroundColor: '#00d8e0', // Teal color
                data: [250, 150, 370, 250, 330, 160, 240], // Workout data
                barPercentage: 0.5,
            },
            {
                label: 'Protein',
                backgroundColor: '#ff7b1a', // Orange color
                data: [60, 20, 50, 70, 60, 40, 30], // Calories data
                barPercentage: 0.5,
            },
            {
                label: 'Fats',
                backgroundColor: '#a27af9', // Purple color
                data: [150, 140, 60, 130, 70, 150, 160], // Steps data
                barPercentage: 0.5,
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false  // Hide gridlines on x-axis
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#e0e0e0' // Light grey grid lines on y-axis
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true, // Dots instead of line legends
                }
            }
        },
        maintainAspectRatio: false
    }
});
