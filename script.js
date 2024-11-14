const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  alert('Button clicked!');
}, { once: true });