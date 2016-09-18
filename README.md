# Mini Menu v1.0.0

*Mini Menu* is a lightweight, snappy menu made for small screens.
It can be easily customised and doesn't require jQuery.

[View the demo](http://ben-rogerson.github.io/mini-menu/)

## Customise

Included in `src/scss/minimenu.scss` are two common show transitions. One that rolls down from the top of the screen and one from the left.

Simply switch the modifier on the `menu` element to `c-minimenu--left` or `c-minimenu--top` or make your own.

## File Layout

See `src` folder for source files. 
Compiled files are in public.

## Todo

- Smoother animations (less jank)
- Remove default mobile touch action lag
- Add sample media queries for desktop use
- Further simplify the styles

# About my Build System

My build system can be run in two modes - *development* and *production*. 

`npm start`
- Starts *development* mode
- Listens and recompiles assets on change
- Refreshes browser automatically

`npm run build`
- Starts *production* mode
- Similar to start with added uglification

## Features

- ES6+ with Babel. The niffty ES6+ features transpile down to ES5
- Browserify: ES6 modules
- Uglify minification
- BrowserSync
- Sass / flexbox ready (IE10+), layout for evergreen browsers
- Bourbon: A lightweight sass tool set
