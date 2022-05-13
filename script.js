const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")



function outputVal(){

    const userInput = inputEl.value 
    // Length Conversion
    const meterToFeet =  (userInput * 3.281).toFixed(2)
    const feetToMeter = (userInput / 3.281).toFixed(2) 

    //Volume Conversion
    const litersToGallons = (userInput / 3.785).toFixed(2)
    const GallonsToLiters = (userInput * 3.785).toFixed(2)

    //Mass conversion
    const kiloToPound = (userInput * 2.205).toFixed(2)
    const poundToKilo = (userInput / 2.205).toFixed(2)

    //Output for length
    lengthEl.textContent = `${(userInput)} meters = ${meterToFeet} feet | ${userInput} feet = ${feetToMeter} meters`

    //Output for volume
    volumeEl.textContent = `${userInput} liters = ${litersToGallons} gallons | ${userInput} gallons = ${GallonsToLiters} liters`

    //output for mass
    massEl.textContent = `${userInput} kilos = ${kiloToPound} pounds | ${userInput} pounds = ${poundToKilo} kilos`
}


inputEl.addEventListener("input" , outputVal)

