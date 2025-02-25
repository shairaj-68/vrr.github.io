// Handle photo upload and preview
document.getElementById("upload-photo").addEventListener("change", function(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        const reader = new FileReader(); // Create a new FileReader instance
        reader.onload = function(e) {
        
            document.getElementById("profile-pic").src = e.target.result;
        };
        reader.readAsDataURL(file); // Read the file as a Data URL
    }
});

// Handle form submission
document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form fields
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const bio = document.getElementById("bio").value;
    function login ()
    {
    var email = document.getElementById("Username") .value;
    var pass = document.getElementById("email").value;
if (username == "shai" && email == "shairaj@gmail.com")
{    
     window.location.href = 'web.html';
}
else
{
alert("Wrong entry invalid");
}
}


    // Corrected alert syntax with proper string interpolation using backticks
    alert("Profile updated:\nUsername: ${username}\nEmail: ${email}\nBio: ${bio}");
// Call the login function
        }
);