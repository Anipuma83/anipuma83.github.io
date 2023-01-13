function recupOaci() {
    const OACI = document.querySelector("#OACI").value
    coderecup = OACI
    console.log(coderecup);
    // localStorage.setItem("OACI", OACI)

    metar(coderecup)
}


async function metar(coderecup) {

    let codeOaci = coderecup


    const meteo = await fetch("https://api.checkwx.com/metar/" + codeOaci + "/decoded", {
        headers: { "X-Api-Key": "2a0636ad72bf43ae8347af7ba7" }
    })
        .then(response => response.json())
        .then(json => json.data)
        .then(data => data[0])
        .then(metar => metar)



    console.log(meteo);
    pression = meteo.barometer.hpa
    console.log("Qnh " + pression);
    flight_category = meteo.flight_category
    console.log(flight_category)
    h_obs = meteo.observed
    console.log(h_obs);
    temp = meteo.temperature.celsius
    console.log(temp);
    ventdir = meteo.wind.degrees
    ventforce = meteo.wind.speed_kts
    console.log(meteo.wind.degrees + "° " + meteo.wind.speed_kts + " Kts");
    document.querySelector("#raw").innerHTML = meteo.raw_text
    // let part=metar.split(" ")

}