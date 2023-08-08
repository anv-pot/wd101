document.getElementById("registration-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const terms = document.getElementById("terms").checked;

  // Perform validation and registration logic here

  const messageElement = document.getElementById("registration-message");
  messageElement.textContent = "Registration successful!";
});
