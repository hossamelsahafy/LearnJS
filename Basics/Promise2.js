#!/usr/bin/node
function checkingWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const weatherData = {
                temp: 24,
                condition: "sunny",
                city: "cairo", 
            };
            if (weatherData.temp > 20){
                resolve(`the Weather in ${weatherData.city} is ${weatherData.condition} with temperature of ${weatherData.temp}°C.`)
            } else {
                reject('Failed to check weather data');
            }
        }, 3000);
    });
}
checkingWeather().then((successMessage) => {
    console.log(successMessage);
}).catch((errorMessage) => {
    console.log(errorMessage);
});
console.log('Fetching the weather data...');