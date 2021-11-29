let menu = document.querySelector('.hamburger-menubar');
let navbar = document.querySelector('.main-navigationlinks');

menu.onclick = () => {
    menu.classList.toggle('active');
    navbar.classList.toggle('active2');
}
window.onscroll = () => {
    menu.classList.remove('active');
    navbar.classList.remove('active2');
    
}

const text =  document.querySelector('.text');
const checkbox  = document.getElementById('checkbox');

checkbox.addEventListener('click', () => {
	document.body.classList.toggle('dark');
});