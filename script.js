const button = document.getElementById('myButton');
const link = document.getElementById('myLink');


button.addEventListener('click', () => {
  alert('pajdpaojdpwojdpsadasdasd');
}, { once: true });

link.addEventListener('click', (event) => {
    event.preventDefault(); 
    alert('try again');
    alert('No distractions! I’m coding!');
});