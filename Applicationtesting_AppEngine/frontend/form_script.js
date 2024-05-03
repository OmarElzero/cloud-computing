document.getElementById('userDataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        id: document.getElementById('id').value,
        age: document.getElementById('age').value,
        hobby: document.getElementById('hobby').value
    };

    // Send form data to backend server
    fetch('/saveUserData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            console.log('Data saved successfully!');
        } else {
            console.error('Failed to save data:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error saving data:', error);
    });
});
