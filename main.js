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