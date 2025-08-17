// Event Click on menu-mobile
const navMenu=document.querySelector('.nav-menu')
const menuHeader=document.querySelector('.header-menu')
navMenu.addEventListener('click',function(){
    this.classList.toggle('nav-menu--open')
    menuHeader.classList.toggle('header-menu--mobile')
})