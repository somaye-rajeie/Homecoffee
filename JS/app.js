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
// Event click on latest-products-list__item
let contentId;
let contentSelected;
const latestProducts=document.querySelectorAll('.latest-products-list__item')

latestProducts.forEach(function(item){
item.addEventListener('click',function(){
document.querySelector('.active').classList.remove('active')
document.querySelector('.latest-products__wrapper--show').classList.remove('latest-products__wrapper--show')
this.classList.add('active')
contentId=this.getAttribute('data-content-id')
contentSelected=document.querySelector(contentId)
contentSelected.classList.add('latest-products__wrapper--show')
})
})
