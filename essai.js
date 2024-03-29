const weatherIcons = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Clear": "wi wi-day-sunny",
    "Snow": "wi wi-day-snow",
    "mist": "wi wi-day-fog",
    "Drizle": "wi wi-day-sleet",
}

function capitalize(str) {

    return str[0].toUpperCase() + str.slice(1)
}

async function main(withIP = true) {

    let ville;

    if (withIP) {
        const ip = await fetch('https://api.ipify.org?format=json')
            .then(resultat => resultat.json())
            .then(json => json.ip)
        console.log(ip)

        ville = await fetch("http://ip-api.com/json/" + ip)
            .then(response => response.json())
            .then(json => json.city)
        console.log(ville)
    }
    else {
        ville = document.querySelector('#ville').textContent;
        console.log(document.querySelector('#ville').textContent);
    }

    console.log(ville);
    const meteo = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=b87df70e7119157b972d40698039b6d3&units=metric&lang=fr")
        .then(resultat => resultat.json())
        .then(json => json)
    console.log(meteo);
    displayWeatherInfos(meteo)

}

function displayWeatherInfos(data) {
    const name = data.name
    const temperature = data.main.temp
    const conditions = data.weather[0].main
    const description = data.weather[0].description
    document.querySelector("#ville").textContent = name
    document.querySelector("#températue").textContent = Math.round(temperature)
    document.querySelector("#conditions").textContent = capitalize(description)
    document.querySelector("i.wi").className =
        weatherIcons[conditions];
    document.body.className = conditions.toLowerCase()
}
const ville = document.querySelector("#ville")
ville.addEventListener('click', () => {
    ville.contentEditable = true;
});
ville.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault()
        ville.contentEditable = false;
        main(false)
    }
})


main()



// b87df70e7119157b972d40698039b6d3
// lat=43.3062
// lon=6.0698
