// Event Click on menu-mobile
const navMenu=document.querySelector('.nav-menu')
const menuHeader=document.querySelector('.header-menu')
const headerSearch=document.querySelector('.header__search')
const headerProfile=document.querySelector('.header__profile')
navMenu.addEventListener('click',function(){
    this.classList.toggle('nav-menu--open')
    menuHeader.classList.toggle('header-menu--mobile')
    headerSearch.classList.toggle('header-menu--mobile')
    headerProfile.classList.toggle('header-menu--mobile')
})