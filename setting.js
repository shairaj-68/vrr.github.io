// Handle photo upload and preview
document.getElementById("upload-photo").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profile-pic").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Handle settings form submission
document.getElementById("settings-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const notifications = document.getElementById("notifications").checked;

    // Display confirmation message
    alert("Settings updated:\nUsername: ${username}\nEmail: ${email}\nPassword: ${password ? '********' : 'Not changed'}\nNotifications: ${notifications ? 'Enabled' : 'Disabled'}");
});

// Handle preferences form submission
document.getElementById("preferences-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const language = document.getElementById("language").value;
    const timezone = document.getElementById("timezone").value;

    // Display preferences update message
    alert("Preferences updated:\nLanguage: ${language}\nTimezone: ${timezone}");
});