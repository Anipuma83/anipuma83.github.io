async function main() {
    var input = document.getElementById("saisisieVille").value

    let ville = input
    console.log(ville);
    const rqt = await fetch("https://api.api-ninjas.com/v1/geocoding?city=" + ville + "&country=FR", {
        headers: {
            "X-Api-Key": "K+z9j2R528e4FvFoRVkQTQ==ek1tnmJWqj6l7d3l"
        }
    })
        .then(response => response.json())
        .then(json => json[0])
        .then(json => json)


    console.log(rqt);
    lat = rqt.latitude
    long = rqt.longitude
    cityname = rqt.name
    region = rqt.state
    console.log(lat + " " + long + " " + cityname + " " + region);

    const meteo = await fetch("https://api.meteo-concept.com/api/forecast/daily?latlng="
        + lat + "%2C" + long + "&world=false&start=0&end=1&token=cb8ddff5cdcceb672840dd564058b3fdf40dbd83d275d0e2acc4a254749270fe")
        .then(response => response.json())
        .then(json => json)
    console.log(meteo);

    displayWeatherInfos(meteo)

}

function displayWeatherInfos(data) {
    const name = data.city.name
    console.log(name);
    const cp = data.city.cp
    console.log(cp);
    const tempAujourdhui = data.forecast[0].tmax
    console.log(tempAujourdhui);

}
