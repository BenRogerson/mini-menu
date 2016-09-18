(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/*
* minimenu
* v.1.0.0
*/
var miniMenu = {

  menu: document.querySelector('.js-minimenu'),
  menuToggleBtn: document.querySelector('.js-minimenu-opener'),
  classMenuVisible: 'o-minimenu--visible',

  init: function init() {
    miniMenu.menuToggleBtn.addEventListener('click', miniMenu.toggleMenu, true);
    miniMenu.menu.addEventListener('click', miniMenu.closeMenu, true);
  },

  toggleMenu: function toggleMenu() {
    console.log('Toggling miniMenu');
    if (miniMenu.menu.classList.contains(miniMenu.classMenuVisible)) {
      miniMenu.closeMenu();
    } else {
      miniMenu.openMenu();
    }
  },

  openMenu: function openMenu() {
    console.log('Opening miniMenu');
    miniMenu.menu.classList.add(miniMenu.classMenuVisible);
  },

  closeMenu: function closeMenu() {
    console.log('Closing miniMenu');
    miniMenu.menu.classList.remove(miniMenu.classMenuVisible);
  }

};
miniMenu.init();

},{}]},{},[1])


//# sourceMappingURL=../maps/minimenu.js.map
