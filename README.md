Age calculator App

Junior project on frontendmentors.io

link on site: (https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub)

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I used](#what-i-learned)
- [Author](#author)

## Overview
This application takes the date of  one's birth and calculates their age

### Screenshot



### Links
-Netlify: https://fanciful-sherbet-7f2071.netlify.app/

## My process
To calculate the years, months and days of a person's life, I first calculated the date of birth in milliseconds and then subtracted it from the Unix Epoch. Then I converted the remaining number to a date and subtracted it from January 1, 1970. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript

### What I used

Here is a glimps of what I used to built this mini project.

CSS
## for removing arrows in number inputs 

.no-arrows::-webkit-inner-spin-button,
.no-arrows::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.no-arrows {
  -moz-appearance: textfield; /* Firefox */
}

@keyframes pop-up {
    0% { transform: scale(0); }
  100% { transform: scale(1); }
}

JavaScript
## Invalid numbers for day input
if (!dayInput.value) {
        dayTitleInput.style.color =  "hsl(0, 100%, 67%)"
        dayInput.style.backgroundColor = "hsl(0, 100%, 67%, 50%)"
        dayAlert.classList.remove("hidden")
        dayOutput.innerHTML = "--"
        monthOutput.innerHTML = "--"
        yearOutput.innerHTML = "--"
    } else if ( thirtyOne.includes(parseInt(monthInput.value)) && parseInt(dayInput.value) > 31){
        dayTitleInput.style.color =  "hsl(0, 100%, 67%)"
        dayInput.style.backgroundColor = "hsl(0, 100%, 67%, 50%)"
        dayInvalid.classList.remove("hidden")
        dayOutput.innerHTML = "--"
        monthOutput.innerHTML = "--"
        yearOutput.innerHTML = "--"
    } else if ( thirty.includes(parseInt(monthInput.value)) && parseInt(dayInput.value) > 30 ) {
        dayTitleInput.style.color =  "hsl(0, 100%, 67%)"
        dayInput.style.backgroundColor = "hsl(0, 100%, 67%, 50%)"
        dayInvalid.classList.remove("hidden")
        dayOutput.innerHTML = "--"
        monthOutput.innerHTML = "--"
        yearOutput.innerHTML = "--"
    } else if (twentyEight.includes(parseInt(monthInput.value)) && parseInt(dayInput.value) > 28) {
        dayTitleInput.style.color =  "hsl(0, 100%, 67%)"
        dayInput.style.backgroundColor = "hsl(0, 100%, 67%, 50%)"
        dayInvalid.classList.remove("hidden")
        dayOutput.innerHTML = "--"
        monthOutput.innerHTML = "--"
        yearOutput.innerHTML = "--"
    }   else {
        dayTitleInput.style.color =  "hsl(0, 1%, 44%)"
        dayInput.style.backgroundColor = "hsl(0, 0%, 100%)"
        dayAlert.classList.add("hidden")
        dayInvalid.classList.add("hidden")
    }

````
## Author
Mahdi Karimian
- linkedin (www.linkedin.com/in/mahdi-karimian-116643273)
- Frontend Mentor – @Mahdii-Kariimiian (https://www.frontendmentor.io/profile/Mahdii-Kariimiian)


