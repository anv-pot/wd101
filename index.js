const registrationForm = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const dobInput = document.getElementById("dob");
const termsCheckbox = document.getElementById("terms");
const messageElement = document.getElementById("registration-message");
const tableBody = document.getElementById("entries");

// Load entries from local storage on page load
document.addEventListener("DOMContentLoaded", function() {
  loadEntries();
});

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
  
  if (!emailIsValid(email)) {
    messageElement.textContent = "Please enter a valid email address.";
    return;
  }

  if (age < 18 || age > 55) {
    messageElement.textContent = "Please enter a valid date of birth (age must be between 18 and 55).";
    return;
  }

  // Add the entry to the table and save to local storage
  const entry = {
    name,
    email,
    password,
    dob,
    terms
  };
  addEntryToTable(entry);
  saveEntryToStorage(entry);

  // Clear form fields
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  dobInput.value = "";
  termsCheckbox.checked = false;

  messageElement.textContent = "Registration successful!";
});

function addEntryToTable(entry) {
  const newRow = tableBody.insertRow();
  const nameCell = newRow.insertCell();
  const emailCell = newRow.insertCell();
  const passwordCell = newRow.insertCell();
  const dobCell = newRow.insertCell();
  const termsCell = newRow.insertCell();

  nameCell.textContent = entry.name;
  emailCell.textContent = entry.email;
  passwordCell.textContent = entry.password;
  dobCell.textContent = entry.dob;
  termsCell.textContent = entry.terms ? "Yes" : "No";
}

function saveEntryToStorage(entry) {
  const entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.push(entry);
  localStorage.setItem("entries", JSON.stringify(entries));
}

function loadEntries() {
  const entries = JSON.parse(localStorage.getItem("entries")) || [];
  for (const entry of entries) {
    addEntryToTable(entry);
  }
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
