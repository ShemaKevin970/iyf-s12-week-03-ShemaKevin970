// Button interaction
document.getElementById('changeBtn').addEventListener('click', function() {
    const greeting = document.getElementById('greeting');
    greeting.textContent = "Hello Kevin! JavaScript is working! 🚀 - " + new Date().toLocaleTimeString();
    greeting.style.color = "#238636";
    greeting.style.fontWeight = "bold";
});

// Form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    document.getElementById('formStatus').textContent = `Thanks ${name}! Your message has been received (demo).`;
    document.getElementById('formStatus').style.color = "green";
    this.reset();
});

console.log("Week 3 loaded successfully - ShemaKevin970");