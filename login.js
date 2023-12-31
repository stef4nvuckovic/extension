const api_url = 'https://ebtisam-project.onrender.com/api_v1/auth/sign_in';

const formData = new FormData();
formData.append('grant_type', '');
formData.append('username', '');
formData.append('password', '');
formData.append('scope', '');
formData.append('client_id', '');
formData.append('client_secret', '');

function getInfo(){
    var username = document.getElementById('username');
    var password = document.getElementById("password");

    formData.set('username', username);
    formData.set('password', password);

    fetch(api_url, {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('API Response:', data);
          // Handle the API response as needed
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle errors
        });

    document.write("here")
    window.location.href = "https://github.com/stef4nvuckovic/extension/blob/main/index.html";
}
