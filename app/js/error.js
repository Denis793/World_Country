export function showError(errorMessageElement, message) {
  if (!errorMessageElement) return;
  errorMessageElement.querySelector('p').textContent = message;
  errorMessageElement.classList.remove('error-message--hidden');
  errorMessageElement.classList.add('error-message--visible');
}

export function hideError(errorMessageElement) {
  if (!errorMessageElement) return;
  errorMessageElement.classList.remove('error-message--visible');
  errorMessageElement.classList.add('error-message--hidden');
}
