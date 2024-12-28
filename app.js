const lengthInput = document.getElementById('length');
const numbersCheckbox = document.getElementById('numbers');
const specialCheckbox = document.getElementById('special');
const generateButton = document.getElementById('generate');
const passwordField = document.getElementById('password');
const copyButton = document.getElementById('copy');


lengthInput.value = 8;
lengthInput.max = 8;

function generatePassword(length, includeNumbers, includeSpecial) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let allChars = lowercaseChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSpecial) allChars += specialChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return password;
}

generateButton.addEventListener('click', () => {
  const length = parseInt(lengthInput.value, 10);
  const includeNumbers = numbersCheckbox.checked;
  const includeSpecial = specialCheckbox.checked;

  const password = generatePassword(length, includeNumbers, includeSpecial);
  passwordField.value = password;

  
  localStorage.setItem('generatedPassword', password);
});

copyButton.addEventListener('click', () => {
  passwordField.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
});
