// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".sidebar-hamburger-icon");
//     menu.classList.toggle("open")
//     icon.classList.toggle("open")
// }

let alertBoxContainer = document.querySelector('.alert__box__container');
let viewAlertBtn1 = document.querySelector('.coming-soon-btn-1');
let viewAlertBtn2 = document.querySelector('.coming-soon-btn-2');
let DismissBtn = document.querySelector('.dismiss__btn');

viewAlertBtn1.onclick = () =>{
	alertBoxContainer.style.display = 'flex';
}
viewAlertBtn2.onclick = () =>{
	alertBoxContainer.style.display = 'flex';
}
DismissBtn.onclick = () =>{
	alertBoxContainer.style.display = 'none';
}
