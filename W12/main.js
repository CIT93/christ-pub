document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally
    
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = "Starting Workout..."; // Initial message

    // Show "Workout Complete!" after a 3-second delay
    setTimeout(function() {
        outputDiv.innerText = "Workout Complete!";
    }, 3000);
});
