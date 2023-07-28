// Function to set the dark mode cookie
function setDarkModeCookie(isDarkMode) {
  const expirationDate = new Date();
  // Cookie will expire in 365 days
  expirationDate.setDate(expirationDate.getDate() + 365);

  // Store the dark mode preference in the cookie
  document.cookie = `darkMode=${isDarkMode ? 'true' : 'false'}; expires=${expirationDate.toUTCString()}; path=/`;
}

// Function to get the dark mode preference from the cookie
function getDarkModePreference() {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'darkMode') {
      return value === 'true';
    }
  }
  return false; // Default to false if the cookie is not found
}

// Function to enable or disable dark mode
function setDarkMode(isDarkMode) {
  const body = document.body;
  if (isDarkMode) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

// Check the dark mode preference from the cookie and apply it on page load
const darkModePreference = getDarkModePreference();
setDarkMode(darkModePreference);

// Add event listener to the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  setDarkModeCookie(isDarkMode);
});
