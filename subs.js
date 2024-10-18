document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Here, you can add code to send the subscription data to your server

    message.textContent = `Welcome, ${name}! Your subscription is confirmed.;`
    document.getElementById('subscription-form').reset(); // Clear the form
});