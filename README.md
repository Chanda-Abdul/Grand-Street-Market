# Grand Street Market
This is a solution to the [Canal Street Market challenge on Frontend Practice](https://www.frontendpractice.com/projects/canal-street-market).  


<!-- # Frontend Practice - Canal Street Market challenge -->


## 
View live demo of my solution <s>[here](#)</s> 

View [#](#)

##

![Design preview for the Canal Street Market coding challenge](https://www.frontendpractice.com/_next/image?url=%2Fcard%2FC1-Canal-Street.png&w=640&q=100)
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Demo](#demo)
  - [Screenshots](#screenshots)
- [Features](#features)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
## Overview
### The Challenge
Code a pixel perfect replication of the [Canal Street Market](https://canalstreet.market/)  site created by [Agency Zero](https://zero.nyc/)

![preview for the Canal Street Market coding challenge](https://www.frontendpractice.com/_next/image?url=%2Ffullsize%2FC1-Canal-Street.png&w=1200&q=90)

### Users Should be able to: 

- [ ] View the optimal layout for the interface depending on their device's screen size
  - [x] Mobile @ `375px`

  <!-- TO-DO => add animations -->
    - [x] Navigation with dropdown menu options
    <!-- TO-DO => Review styles -->
  <!-- TO-DO => add animations -->
  - [ ] Tablet/Desktop @ `768px`
    - [x] Navigation with  sliding vertical panels
- [ ] See animations for all animated elements on the page
  - [x] Animate the dashed border as seen on the live website.
## Demo
View live demo [here](https://storied-gingersnap-bd6312.netlify.app)
<!--Solution URL:</b> [here](https://github.com/Chanda-Abdul/Angular-Multi-step-form) | <b>Live Site URL:</b> [here](https://dazzling-crisp-559db7.netlify.app/) -->



## Screenshots
<details>
<summary><b> Mobile Screenshots @ 375px</b></summary>
<img src="src/assets/screens/mobile_booking_confirm.png"  width="375px"/>
</details>

## Features
### Animations
- [Desktop Navigation with  sliding vertical panels](#desktop-navigation-with-sliding-vertical-panels)
  <!-- - [Draggable Image Slider](#draggable-slider-using-gsap)
  - [Swap image on hover](#swap-image-on-hover)
  - [Marquee](#marquee-animation)
  - [Circle SVG with rotating text and hover animation](#) -->
### Styling
  - [Custom Styles](#custom-styles)
  <!-- 
  - [Dropdown Search](#)
  - [Random color generation](#) -->
### Angular/JavaScript
  <!-- - [Custom Currency Pipe](#)
  - [Content filtering](#)
  - [Shopping Cart](#)
  - [User Reviews/Ratings (Bonus)](#)
  - [Size Chart (Bonus)](#) -->
## Desktop Navigation with sliding vertical panels
## Custom Styles

<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass icon" height="28" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS icon" height="28" />

### Custom Color Palette
<img src="/src/assets/screens/palette.png"  width="420"/>

## Custom fonts <i><b>["Tino"](#)</b></i> and  <i><b>["PT Mono"](#)</b></i>. 

<img src="/src/assets/screens/fonts.png" >

# My Process
## Built with
<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular icon" height="28" />![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript icon" height="28" />![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass icon" height="28" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS icon" height="28" />![Green Sock](https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white)<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML icon" height="28" />![BEM](https://img.shields.io/static/v1?style=for-the-badge&message=BEM&color=000000&logo=BEM&logoColor=FFFFFF&label=)![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)<img src="https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat-square" alt="Axios Badge" height="28" >![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify icon" height="28" /><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma icon" height="28" />![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)


##
- Mobile
  - Drop down Navigation, using `<MobileDropdownMenuComponent/>`
    - Angular Template Driven Form
    <!-- TO-DO => add loader -->
  <!-- TO-DO => animations for dropdown -->
  - `/home` component
  - `/food` component
     - `/food/:foodVendorid` component
  - `/retail` component
     - `/retail/:retailVendorid` component
  - `/features` component
    - `/feature/:id` component
      <!-- TO-DO => update routes -->
      <!-- TO-DO => Review styles -->
  - `/become-a-vendor` component
    <!-- TO-DO => Review styles -->
    <!-- TO-DO => add animations -->
    <!-- TO-DO => add vendor form close functionality -->
    - Angular Reactive Form
    <!-- TO-DO => add form functionality -->
    <!-- TO-DO => update favicon -->
  <!-- TO-DO => add animations -->
<!-- TO-DO => attribution layout -->
<!-- TO-DO => Newletter signup -->
- Desktop
  - Vertical Slider Panel Navigation using `<DesktopVerticalMenuComponent/>`
      - Angular Template Driven Form
 
<!-- TO-DO => accessibilty -->
<!-- TO-DO => polish & deploy -->

## Continued development

## What I learned
## JSON Proxy server to store and retrieve data
During <i>development</i> I used <b>JSON Proxy server</b> to store and retrieve data, which could be substituted with an express/node server and a database at a later date.

## API
For <i>production</i> I built an API using <b>Node</b> and <b>Express</b>, hosted through <b>[Vercel](https://vercel.com/)</b>, and accessed the API with <b>[RapidAPI](https://rapidapi.com/)</b>.
### API Endpoints
<!-- #### `/products`
returns a list of `PRODUCTS`
#### `/products/:filter`
returns list of `PRODUCTS` filtered by `tag`
#### `/products/search/:searchTerm` 
returns list of `PRODUCTS` filtered by `searchTerm`
#### `/products/featured`
returns list of featured `PRODUCTS`
#### `/product/:productId`
returns a `product` from the `PRODUCT` list by `:productId`
#### `/reviews/:tag`
returns up to 8 random `reviews` and ratings based on `product:tag`
#### `/rates`
returns most recent `exchangeRates` from the [CurrencyBeacon API](https://currencybeacon.com/api-documentation) -->
<!-- - used template form input checkbox for mobile menu
```html
```
```css
```
```ts
```
- used form input radio for desktop menu
```html
```
```css
```
```ts
```
- green sock for scroll animations
  - scrolll trigger -->
## Continued development

## Useful resources
- [ScrollTrigger in Angular](https://stackblitz.com/edit/angular-ivy-cpnzfx?file=src/app/app.component.ts) - [GreenSock Animation](https://greensock.com/docs/) `ScrollTrigger` in Angular
- [Vertical Panels](https://codepen.io/ash-loudon/pen/JxPajz) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
- [On Scroll Header](https://www.w3schools.com/howto/howto_js_sticky_header.asp) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [How to use radio buttons in Angular](https://www.educative.io/answers/how-to-use-radio-buttons-in-angular)


## Author

- Portfolio - [Portfolio](https://www.ChandaAbdul.dev/)
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)
