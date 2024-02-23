const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
const data = await res.json()
document.body.style.backgroundImage = `url(${data.urls.full})`
document.getElementById("about").innerHTML = `
    <p class="name">📷: ${data.user.name}</p>
    <p class="location">📍: ${data.location.name || "Somewhere on Earth"}</p>
`
    
//     .catch(err => {
//         // Use a default background image/author
//         document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1492273840898-6102ad35701e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDg3MjEwMjZ8&ixlib=rb-4.0.3&q=80&w=1080
// )`
//         document.getElementById("about").innerHTML = `
//             <p class="name">By: Andre Benz</p>
//             <p class="location">At: Wisdom Tree, Los Angeles, United States</p>
//         `
// 		// document.getElementById("author").textContent = `By: Dodi Achmad`
//     })

const crypto = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
if (!res.ok) {
    throw Error("Something went wrong")
}
const cryptoData = await crypto.json()
// return res.json()
document.getElementById("crypto-top").innerHTML = `
    <img src=${cryptoData.image.small} />
    <span>${cryptoData.name}</span>
`
document.getElementById("crypto").innerHTML += `
    <p>🎯: $${cryptoData.market_data.current_price.usd}</p>
    <p>👆: $${cryptoData.market_data.high_24h.usd}</p>
    <p>👇: $${cryptoData.market_data.low_24h.usd}</p>
`
    // .catch(err => console.error(err))

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "medium"})
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(async position => {
    const location = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    if (!res.ok) {
        throw Error("Weather data not available")
    }
    // return res.json()
    const locationData = await location.json()
    const iconUrl = `http://openweathermap.org/img/wn/${locationData.weather[0].icon}@2x.png`
    document.getElementById("weather").innerHTML = `
        <div class="weather-img-temp">
            <img src=${iconUrl} />
            <p class="temp">${Math.round(locationData.main.temp)}º</p>
        </div>
        <p class="weather-city">${locationData.name}</p>
    `
        // .catch(err => console.error(err))
});

/**
 * Challenge: Try to lay out the weather similar to how
 * Momentum does it.
 */
