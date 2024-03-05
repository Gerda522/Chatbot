/*
    - Fetch data fra API endpoint
    - Vis data i DOM
    - Vis fejlbesked i console.log
    - EventListener for at sende form data til API endpoint
*/
const form = document.querySelector('#chat-form');
const inputField = document.querySelector('#user-input');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userMessage = inputField.value;
    inputField.value = ''; // Clear the input field

    // Send user input to the PHP API
    const formData = new FormData();
    formData.append('user_input', userMessage);

    fetch('/api/post-message.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Optional: Log the response data
        displayMessage(data.user.message, 'user');
        displayMessage(data.bot.message, 'bot');
    })
    .catch(error => console.log(error));
});

function loadChatHistory() {
    fetch('/api/get-history.php', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Optional: Log the response data

        // Check if the data is an array
        if (Array.isArray(data)) {
            data.forEach(message => {
                if (message && message.message && message.role) {
                    displayMessage(message.message, message.role);
                }
            });
        } else {
            console.log('Invalid chat history data:', data);
        }
    })
    .catch(error => console.log(error));
}

// Load chat history when the page is loaded
loadChatHistory();



// Function to display a message in the browser
function displayMessage(message, role) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add(role);
    messageContainer.textContent = message;
    
    // Append the message directly to the body of the document
    document.body.appendChild(messageContainer);
}
