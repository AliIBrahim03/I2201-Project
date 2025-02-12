console.log("Script loaded");

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enter_button').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission
                                // and in the process validate the form

        // Redirect to the Welcome/Home page
        window.location.href = 'welcome.html';
    });
});