/*
* minimenu
* v.1.0.0
*/
var miniMenu = {

  menu: document.querySelector('.js-minimenu'),
  menuToggleBtn: document.querySelector('.js-minimenu-opener'),
  classMenuVisible: 'o-minimenu--visible',

  init: function() {
    miniMenu.menuToggleBtn.addEventListener('click', miniMenu.toggleMenu, true)
    miniMenu.menu.addEventListener('click', miniMenu.closeMenu, true)
  },

  toggleMenu: function() {
    console.log('Toggling miniMenu')
    if (miniMenu.menu.classList.contains(miniMenu.classMenuVisible)) {
      miniMenu.closeMenu()
    } else {
      miniMenu.openMenu()
    }
  },
  
  openMenu: function() {
    console.log('Opening miniMenu')
    miniMenu.menu.classList.add(miniMenu.classMenuVisible)
  },

  closeMenu: function() {
    console.log('Closing miniMenu')
    miniMenu.menu.classList.remove(miniMenu.classMenuVisible)
  }

}
miniMenu.init()
