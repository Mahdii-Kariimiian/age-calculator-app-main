/* age variables */
const dayInput = document.querySelector(".day-input")
const monthInput = document.querySelector(".month-input")
const yearInput = document.querySelector(".year-input")

// days of months 
const thirtyOne = [1 , 3 , 5 , 7 , 8 , 10 , 12]
const thirty = [ 4 , 6 , 9 , 11]
const twentyEight = [2]

// button 
const btn = document.querySelector(".button")

// outputs 
const dayOutput = document.querySelector(".day-result")
const monthOutput = document.querySelector(".month-result")
const yearOutput = document.querySelector(".year-result")

// clear inputs
dayInput.value = "";
monthInput.value = "";
yearInput.value = "";

// click event
btn.addEventListener( "click" , ageCalculation )

// age calculator function
function ageCalculation() {
    // variables for empty inputs 
    const dayTitleInput = document.querySelector(".day-title")
    const dayAlert = document.querySelector(".day-alert")
    const monthTitleInput = document.querySelector(".month-title")
    const monthAlert = document.querySelector(".month-alert")
    const yearTitleInput = document.querySelector(".year-title")
    const yearAlert = document.querySelector(".year-alert")
    
    // variables for invalid inputs 
    const monthInvalid = document.querySelector(".month-invalid")
    const yearInvalid = document.querySelector(".year-invalid")
    const dayInvalid = document.querySelector(".day-invalid")

    // input values 
    // day with zero for numbers under 10
    const primaryDay = dayInput.value 
    const day = primaryDay <= 10 ? `0${primaryDay}` : primaryDay
    
    // month with zero for numbers under 10  
    const primaryMonth = monthInput.value
    const month = primaryMonth <= 10 ? `0${primaryMonth}` : primaryMonth
    
    // year 
    const year = yearInput.value
    
    // Convert Date to milliseconds
    const birthdate = new Date(`${year} , ${month} , ${day}`);
    const birthMili =(birthdate.getTime());
    const now = Date.now();
    const miliseconds = now - birthMili
    const ageDif = new Date(miliseconds)
    const Y = Math.abs(ageDif.getFullYear() - 1970)
    const M = ageDif.getMonth()
    const D = ageDif.getDate()

    dayOutput.innerHTML = D - 1
    monthOutput.innerHTML = M
    yearOutput.innerHTML = Y

    
    // empty and invalid inputs 
    // day 
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

    // month 
    if (!monthInput.value) {
        monthTitleInput.style.color = "hsl(0, 100%, 67%)"
        monthInput.style.backgroundColor = "hsl(0, 100%, 67%, 50%)"
        monthAlert.classList.remove("hidden")
        monthInvalid.classList.add("hidden")
        dayOutput.innerHTML = "--"
        monthOutput.innerHTML = "--"
        yearOutput.innerHTML = "--"
    } else if (monthInput.value > 12) {
        monthAlert.classList.add("hidden")
        monthTitleInput.style.color = "hsl(0, 100%, 67%)"
        monthInput.style.backgroundColor = "hsl(0, 100%, 67%, 50%)"
        monthInvalid.classList.remove("hidden")
        dayOutput.innerHTML = "--"
        monthOutput.innerHTML = "--"
        yearOutput.innerHTML = "--"
    } else {
        monthTitleInput.style.color = "hsl(0, 1%, 44%)"
        monthInput.style.backgroundColor = "hsl(0, 0%, 100%)"
        monthAlert.classList.add("hidden")
        monthInvalid.classList.add("hidden")
    }

    // year 
    if (!yearInput.value) {
        yearTitleInput.style.color =  "hsl(0, 100%, 67%)"
        yearInput.style.backgroundColor = "hsl(0, 100%, 67%, 50%)"
        yearAlert.classList.remove("hidden")
        yearInvalid.classList.add("hidden")
        dayOutput.innerHTML = "--"
        monthOutput.innerHTML = "--"
        yearOutput.innerHTML = "--"
    } else if (birthdate > new Date()) {
        yearTitleInput.style.color =  "hsl(0, 100%, 67%)"
        yearInput.style.backgroundColor = "hsl(0, 100%, 67%, 50%)"
        yearAlert.classList.add("hidden")
        yearInvalid.classList.remove("hidden")
        dayOutput.innerHTML = "--"
        monthOutput.innerHTML = "--"
        yearOutput.innerHTML = "--"
    } else {
        yearTitleInput.style.color =  "hsl(0, 1%, 44%)"
        yearInput.style.backgroundColor = "hsl(0, 0%, 100%)"
        yearAlert.classList.add("hidden")
        yearInvalid.classList.add("hidden")
    }
}
    