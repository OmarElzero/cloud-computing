document.getElementById('userDataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    fetch(`/getUserData?name=${name}`)
        .then(response => response.json())
        .then(data => {
            displayUserData(data);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
});

function displayUserData(data) {
    const userDataDiv = document.getElementById('userData');
    if (data.exists) {
        userDataDiv.innerHTML = `<p>Welcome back, ${data.name}!</p>`;
        if (data.userData) {
            userDataDiv.innerHTML += `
                <h2>User Data</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Age</th>
                        <th>Favorite Hobby</th>
                    </tr>
                    <tr>
                        <td>${data.userData.name}</td>
                        <td>${data.userData.id}</td>
                        <td>${data.userData.age}</td>
                        <td>${data.userData.hobby}</td>
                    </tr>
                </table>
            `;
        }
    } else {
        userDataDiv.innerHTML = `<p>User not found.</p>`;
    }
}
