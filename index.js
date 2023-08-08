registrationForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // ... (validation and input processing)

  // Add the entry to the table
  const entry = {
    name,
    email,
    password,
    dob,
    terms
  };
  addEntryToTable(entry);

  // Save the entry to web storage
  saveEntryToStorage(entry);

  // Clear form fields
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  dobInput.value = "";
  termsCheckbox.checked = false;

  messageElement.textContent = "Registration successful!";
});
