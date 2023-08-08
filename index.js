const registrationForm = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const dobInput = document.getElementById("dob");
const termsCheckbox = document.getElementById("terms");
const messageElement = document.getElementById("registration-message");
const tableBody = document.getElementById("entries");

registrationForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const dob = dobInput.value;
  const terms = termsCheckbox.checked;

  // Additional validations
  const today = new Date();
  const dobDate = new Date(dob);
  const age = today.getFullYear() - dobDate.getFullYear();
  
  if (age < 18 || age > 55) {
    messageElement.textContent = "Please enter a valid date of birth (age must be between 18 and 55).";
    return;
  }

  // Add the entry to the table
  const newRow = tableBody.insertRow();
  const nameCell = newRow.insertCell();
  const emailCell = newRow.insertCell();
  const passwordCell = newRow.insertCell();
  const dobCell = newRow.insertCell();
  const termsCell = newRow.insertCell();

  nameCell.textContent = name;
  emailCell.textContent = email;
  passwordCell.textContent = password;
  dobCell.textContent = dob;
  termsCell.textContent = terms ? "Yes" : "No";

  // Clear form fields
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  dobInput.value = "";
  termsCheckbox.checked = false;

  messageElement.textContent = "Registration successful!";
});

