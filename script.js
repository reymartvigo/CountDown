
const daysId = document.getElementById('days')
const hoursId = document.getElementById('hours')
const minutesId = document.getElementById('minutes')
const secondsId = document.getElementById('seconds')

const newYears = "1 Jan 2023"   

function countdown(){

    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = ( newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600 ) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60


    daysId.innerHTML = days ;
    hoursId.innerHTML = hours ;
    minutesId.innerHTML = minutes ;
    secondsId.innerHTML = seconds ; 
    
}
countdown();

setInterval(countdown, 1000)