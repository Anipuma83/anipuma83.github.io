function importloc(){
    
    let reservoirP = localStorage.getItem("reservoirP")
    let getdurée  =localStorage.getItem("durée" );

    // console.log(document.querySelector("#CG > tbody:nth-child(1) > tr:nth-child(41) > td:nth-child(3) > input:nth-child(1)").value=="")

    if (document.querySelector("#CG > tbody:nth-child(1) > tr:nth-child(41) > td:nth-child(3) > input:nth-child(1)").value=="") {
   document.querySelector(" #CG > tbody:nth-child(1) > tr:nth-child(41) > td:nth-child(3) > input:nth-child(1)").value=Number(reservoirP)
   console.log(Number(reservoirP))
   if (Number(reservoirP)==0) {
    document.querySelector("#CG > tbody:nth-child(1) > tr:nth-child(41) > td:nth-child(3) > input:nth-child(1)").innerHTML="0"
   }
        }
        else{
            document.querySelector(" #CG > tbody:nth-child(1) > tr:nth-child(41) > td:nth-child(3) > input:nth-child(1)").value=Number(reservoirP)
            console.log(reservoirP)
        }
    

}


function initParam() {
    numeroSerie()
    cgMach()
    eltsPil()
    eltsCopil()
    Opérateur_côté_gauche_équipé()
    Opérateur_côté_droit_équipé()
    treuilliste()
    Chaîne_SAR()
    Rack_chaîne_SAR()
    treuil_droit()
    treuil_gauche()
    FLOTTA()
    Skis()
    FLIR_unité_Ext()
    FLIR_unité_électronique()
    FLIR_rack_opérateur()
    SX_16()
    Ensemble_GETAC()
    Lot_de_campement()
    Lot_VIMAR()
    bagage()
    Matériels_divers_cabine()
    consoHoraire()
    massealt()
    siegeArr()
    siegeArrInv()
    canot()
    Tr0cg()
    MomentzeroFuel()
    calcmomentTotal()
    Tr0consommé()
    zerofuelmoment()
    setdate()
    importloc()



}

function numeroSerie() {
    // if (document.querySelector("#CG > tbody > tr:nth-child(1) > td:nth-child(3) > input").value= " ") {
    //     document.querySelector("#CG > tbody > tr:nth-child(1) > td:nth-child(3) > input").value="FZBGH"
    // }
   
    numser = document.querySelector("#CG > tbody > tr:nth-child(1) > td:nth-child(3) > input").value

    // document.querySelector("#CG > tbody > tr:nth-child(2) > td:nth-child(3)").innerHTML
    // document.querySelector("#CG > tbody > tr:nth-child(1) > td:nth-child(3) > input")

    // if (numser == "") {

    //     numser = "FZBGH"
    //     document.querySelector("#CG > tbody > tr:nth-child(2) > td:nth-child(3)").innerHTML = "525"
    // }


    if (numser == "FZBGF") {
        document.querySelector("#CG > tbody > tr:nth-child(2) > td:nth-child(3)").innerHTML = "507";
        // console.log("succes");
    }
    else if (numser == "FZBGG") {
        document.querySelector("#CG > tbody > tr:nth-child(2) > td:nth-child(3)").innerHTML = "510"

    }
    else if (numser == "FZBGH") {
        document.querySelector("#CG > tbody > tr:nth-child(2) > td:nth-child(3)").innerHTML = "525"
    }
    else if (numser == "FZBGI") {
        document.querySelector("#CG > tbody > tr:nth-child(2) > td:nth-child(3)").innerHTML = "545"
    }
    else {
        document.querySelector("#CG > tbody > tr:nth-child(2) > td:nth-child(3)").innerHTML = "551"
    }
}

function setdate() {
    const date = new Date()
    valdate = date.toLocaleDateString()
    valheure = date.toTimeString()
    splith = date.toTimeString().split("(")

    document.querySelector("#CG > tbody > tr:nth-child(1) > td:nth-child(4)").innerHTML = valdate + "  " + splith[0]
}

function cgMach() {

    numser = document.querySelector("#CG > tbody > tr:nth-child(1) > td:nth-child(3) > input").value

    const cgMachines = [
        [1887.65, 8533298.95, 33175],
        [1877.24, 8455589.55, 18684],
        [1883.78, 8471003.87, 41305.24],
        [1874.64, 8455346.75, 27548.52],
        [1877.579, 8428631.97, 29251.32]
    ]
    if (numser == "FZBGF") {
        // console.log("succes");
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(3)").innerHTML = cgMachines[0][0]
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(4)").innerHTML = ((cgMachines[0][1]) / (cgMachines[0][0])).toFixed(2)
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(5)").innerHTML = cgMachines[0][1]
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(6)").innerHTML = (cgMachines[0][2] / cgMachines[0][0]).toFixed(2)
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(7)").innerHTML = cgMachines[0][2]
    }

    else if (numser == "FZBGG") {
        // console.log("succes");
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(3)").innerHTML = cgMachines[1][0]
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(4)").innerHTML = ((cgMachines[1][1]) / (cgMachines[1][0])).toFixed(2)
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(5)").innerHTML = cgMachines[1][1]
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(6)").innerHTML = (cgMachines[1][2] / cgMachines[1][0]).toFixed(2)
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(7)").innerHTML = cgMachines[1][2]
    }

    else if (numser == "FZBGH") {
        // console.log("succes");
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(3)").innerHTML = cgMachines[2][0]
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(4)").innerHTML = ((cgMachines[2][1]) / (cgMachines[2][0])).toFixed(2)
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(5)").innerHTML = cgMachines[2][1]
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(6)").innerHTML = (cgMachines[2][2] / cgMachines[2][0]).toFixed(2)
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(7)").innerHTML = cgMachines[2][2]
    }

    else if (numser == "FZBGI") {
        // console.log("succes");
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(3)").innerHTML = cgMachines[3][0]
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(4)").innerHTML = ((cgMachines[3][1]) / (cgMachines[3][0])).toFixed(2)
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(5)").innerHTML = cgMachines[3][1]
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(6)").innerHTML = (cgMachines[3][2] / cgMachines[3][0]).toFixed(2)
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(7)").innerHTML = cgMachines[3][2]
    }

    else {
        // console.log("succes");
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(3)").innerHTML = cgMachines[4][0]
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(4)").innerHTML = ((cgMachines[4][1]) / (cgMachines[4][0])).toFixed(2)
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(5)").innerHTML = cgMachines[4][1]
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(6)").innerHTML = (cgMachines[4][2] / cgMachines[4][0]).toFixed(2)
        document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(7)").innerHTML = cgMachines[4][2]
    }
}

function eltsPil() {

    // console.log(document.querySelector("#CG > tbody > tr:nth-child(5) > td:nth-child(3) > input").value)
    if (document.querySelector("#CG > tbody > tr:nth-child(5) > td:nth-child(3) > input") != "0") {
        document.querySelector("#CG > tbody > tr:nth-child(5) > td:nth-child(4)").innerHTML = 2412
        document.querySelector("#CG > tbody > tr:nth-child(5) > td:nth-child(6)").innerHTML = 390
        document.querySelector("#CG > tbody > tr:nth-child(5) > td:nth-child(5)").innerHTML = Number((document.querySelector("#CG > tbody > tr:nth-child(5) > td:nth-child(3) > input").value)) * 2412
        document.querySelector("#CG > tbody > tr:nth-child(5) > td:nth-child(7)").innerHTML = Number((document.querySelector("#CG > tbody > tr:nth-child(5) > td:nth-child(3) > input").value)) * 390
    }
}

function eltsCopil() {
    if (document.querySelector("#CG > tbody > tr:nth-child(6) > td:nth-child(3) > input") != "0") {
        document.querySelector("#CG > tbody > tr:nth-child(6) > td:nth-child(4)").innerHTML = 2412
        document.querySelector("#CG > tbody > tr:nth-child(6) > td:nth-child(6)").innerHTML = -390
        document.querySelector("#CG > tbody > tr:nth-child(6) > td:nth-child(5)").innerHTML = Number((document.querySelector("#CG > tbody > tr:nth-child(6) > td:nth-child(3) > input").value)) * 2412
        document.querySelector("#CG > tbody > tr:nth-child(6) > td:nth-child(7)").innerHTML = Number((document.querySelector("#CG > tbody > tr:nth-child(6) > td:nth-child(3) > input").value)) * (-390)
    }
}

function Opérateur_côté_gauche_équipé() {
    let masse = document.querySelector("#opG").value
    // console.log(masse);
    if (document.querySelector("#SOG").value == "Pas de siège opérateur gauche") {
        document.querySelector("#SOG")
        // alert("passe de siege opérteur a gauche")
        document.querySelector("#opG").value = 0
        document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(4)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(7)").setAttribute("style", "display:none")
        // document.querySelector("#CG > tbody > tr:nth-child(7)").setAttribute("style", "display:none")

        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(3)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(7)").innerHTML = 0

    }

    if (document.querySelector("#SOG").value == "Siège opérateur AV gauche") {

        document.querySelector("#opG")
        // document.querySelector("#opG").value = 0

        // document.querySelector("#CG > tbody > tr:nth-child(7)").removeAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(7)").setAttribute("style", "background-color: white")

        document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(4)").innerHTML = 3684
        document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(5)").innerHTML = 3684 * masse
        document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(6)").innerHTML = (-313)
        document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(7)").innerHTML = (-313) * masse

        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(3)").innerHTML = 11.1
        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(4)").innerHTML = 3884
        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(5)").innerHTML = 43112
        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(6)").innerHTML = (-313)
        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(7)").innerHTML = (-3474)
    }

    if (document.querySelector("#SOG").value == "Siège opérateur AR gauche") {

        // document.querySelector("#opG").value = 0
        document.querySelector("#CG > tbody > tr:nth-child(7)").setAttribute("style", "background-color: white")

        document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(4)").innerHTML = 4223
        document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(5)").innerHTML = 4223 * masse
        document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(6)").innerHTML = (-313)
        document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(7)").innerHTML = (-313) * masse

        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(3)").innerHTML = 11.1
        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(4)").innerHTML = 4243
        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(5)").innerHTML = 47097
        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(6)").innerHTML = (-313)
        document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(7)").innerHTML = (-3474)
    }

}

function Opérateur_côté_droit_équipé() {
    let masse = document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(3) > input").value
    // console.log(masse);

    if (document.querySelector("#SOD").value == "Pas de siège opérateur droite") {

        // alert("passe de siege opérteur à droite")
        document.getElementById(id = "opD").value = 0

        document.querySelector("#CG > tbody > tr:nth-child(8)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(8)").setAttribute("style", "display:none")

        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(3)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(7)").innerHTML = 0

        // document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(3)").innerHTML = "0"
        document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(7)").innerHTML = 0

    }

    if (document.querySelector("#SOD").value == "Siège opérateur AR droite") {

        // document.getElementById(id = "opD").value = 0
        document.querySelector("#CG > tbody > tr:nth-child(8)").setAttribute("style", "background-color: white")


        document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(4)").innerHTML = 4223
        document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(5)").innerHTML = masse * 4223
        document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(6)").innerHTML = 313
        document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(7)").innerHTML = 313 * masse

        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(3)").innerHTML = 11.1
        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(4)").innerHTML = 4243
        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(5)").innerHTML = 47097
        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(6)").innerHTML = 313
        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(7)").innerHTML = 3474
    }

    if (document.querySelector("#SOD").value == "Siège opérateur AV droite") {
        document.querySelector("#SOD")
        // document.getElementById(id = "opD").value = 0
        document.querySelector("#CG > tbody > tr:nth-child(8)").setAttribute("style", "background-color: white")


        document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(4)").innerHTML = 3684
        document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(5)").innerHTML = masse * 3684
        document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(6)").innerHTML = 313
        document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(7)").innerHTML = 313 * masse

        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(3)").innerHTML = 11.1
        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(4)").innerHTML = 3884
        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(5)").innerHTML = 43112
        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(6)").innerHTML = 313
        document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(7)").innerHTML = 3474
    }
}

function treuilliste() {

    let masseTreuilliste = document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(3) > input").value
    const treuilliste = [
        ["Treuilliste droit équipé", 90, 3600, 324000, 950, 85500],
        ["Treuilliste gauche équipé", 90, 3600, 324000, -950, 85500],
    ]

    // console.log(document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(3) > input").value);

    // console.log(masseTreuilliste);
    TreuilDroit = document.querySelector("#TreuilDroit").checked
    TreuilGauche = document.querySelector("#TreuilGauche").checked

    // console.log(TreuilDroit);
    // console.log(TreuilGauche);

    if (TreuilDroit == true) {
        document.querySelector("#CG > tbody > tr:nth-child(9)").setAttribute("style", "background-color:green")

        document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(4)").innerHTML = 3600
        document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(5)").innerHTML = masseTreuilliste * 3600
        document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(6)").innerHTML = 950
        document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(7)").innerHTML = masseTreuilliste * 950
    }

    if (TreuilGauche == true) {
        document.querySelector("#CG > tbody > tr:nth-child(9)").setAttribute("style", "background-color:green")
        document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(4)").innerHTML = 3600
        document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(5)").innerHTML = masseTreuilliste * 3600
        document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(6)").innerHTML = (-950)
        document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(7)").innerHTML = (-950) * masseTreuilliste
    }

    if (TreuilDroit == false && TreuilGauche == false) {

        document.querySelector("#CG > tbody > tr:nth-child(9)").setAttribute("style", "display:none")

        document.querySelector("#treuilliste").value = 0

        document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(7)").innerHTML = 0
    }

    if (TreuilDroit == true && TreuilGauche == true) {
        alert("Faut pas rêver!")

    }
}

function siegeArr() {


    if (document.querySelector("#SA").value == "") {
        document.querySelector("#SA").value = "Pas de siège AR";
    }

    const masseSiegesArr = [
        ["Pas de siège AR", 0, 0, 0, 0, 0],
        ["1 Siège AR droite", 15.5, 4409, 68248, 234, 3623],
        ["1 Siège AR centre", 15.5, 4409, 68248, 0, 0],
        ["1 Siège AR gauche", 15.5, 4409, 68248, -234, -3623],
        ["2 Sièges AR droite et centre", 24.4, 4403, 107258, 149, 3623],
        ["2 Sièges AR gauche et centre", 24.4, 4403, 107258, -149, -3623],
        ["2 Sièges AR droite et gauche", 24.4, 4403, 107258, 0, 0],
        ["3 Sièges AR", 33.2, 4400, 146268, 0, 0],
    ]
    siegeSel = document.querySelector("#SA").value
    // console.log(siegeSel);
    let massePaxArrD = document.querySelector("#paxARD").value
    let massePaxArrC = document.querySelector("#paxARC").value
    let massePaxArrG = document.querySelector("#paxARG").value

    for (let i = 0; i < masseSiegesArr.length; i++) {
        if (masseSiegesArr[i][0] == siegeSel) {

            document.querySelector("#CG > tbody > tr:nth-child(18) > td:nth-child(3)").innerHTML = masseSiegesArr[i][1]
            document.querySelector("#CG > tbody > tr:nth-child(18) > td:nth-child(4)").innerHTML = masseSiegesArr[i][2]
            document.querySelector("#CG > tbody > tr:nth-child(18) > td:nth-child(5)").innerHTML = masseSiegesArr[i][3]
            document.querySelector("#CG > tbody > tr:nth-child(18) > td:nth-child(6)").innerHTML = masseSiegesArr[i][4]
            document.querySelector("#CG > tbody > tr:nth-child(18) > td:nth-child(7)").innerHTML = masseSiegesArr[i][5]
        }
    }
    if (siegeSel == "Pas de siège AR") {
        document.querySelector("#CG > tbody > tr:nth-child(10)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(11)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(12)").setAttribute("style", "display:none")

        document.querySelector("#paxARD").value = "0"
        document.querySelector("#paxARC").value = "0"
        document.querySelector("#paxARG").value = "0"

        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(7)").innerHTML = 0


    }

    if (siegeSel == "1 Siège AR droite") {

        document.querySelector("#CG > tbody > tr:nth-child(10)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(11)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(12)").setAttribute("style", "display:none")

        document.querySelector("#paxARC").value = "0"
        document.querySelector("#paxARG").value = "0"
        console.log(massePaxArrD);

        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(4)").innerHTML = 4243
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(5)").innerHTML = massePaxArrD * 4243
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(6)").innerHTML = 408
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(7)").innerHTML = massePaxArrD * 408

        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(7)").innerHTML = 0
    }

    if (siegeSel == "1 Siège AR centre") {
        console.log(massePaxArrC)
        document.querySelector("#CG > tbody > tr:nth-child(10)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(11)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(12)").setAttribute("style", "display:none")

        document.querySelector("#paxARD").value = "0"
        document.querySelector("#paxARG").value = "0"

        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(4)").innerHTML = 4243
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(5)").innerHTML = massePaxArrC * 4243
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(7)").innerHTML = 0



    }
    if (siegeSel == "1 Siège AR gauche") {
        console.log(massePaxArrG);
        document.querySelector("#CG > tbody > tr:nth-child(10)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(11)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(12)").setAttribute("style", "background-color:white")

        document.querySelector("#paxARD").value = "0"
        document.querySelector("#paxARC").value = "0"

        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(4)").innerHTML = 4243
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(5)").innerHTML = massePaxArrG * 4243
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(6)").innerHTML = -408
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(7)").innerHTML = massePaxArrG * -408

    }
    if (siegeSel == "2 Sièges AR droite et centre") {
        console.log(massePaxArrD);
        console.log(massePaxArrC);

        document.querySelector("#paxARG").value = "0"

        document.querySelector("#CG > tbody > tr:nth-child(10)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(11)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(12)").setAttribute("style", "display:none")

        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(4)").innerHTML = 4243
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(5)").innerHTML = massePaxArrD * 4243
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(6)").innerHTML = 408
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(7)").innerHTML = massePaxArrD * 408

        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(4)").innerHTML = 4243
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(5)").innerHTML = massePaxArrC * 4243
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(7)").innerHTML = 0
    }

    if (siegeSel == "2 Sièges AR gauche et centre") {

        document.querySelector("#paxARD").value = "0"


        document.querySelector("#CG > tbody > tr:nth-child(10)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(11)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(12)").setAttribute("style", "background-color:white")

        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(4)").innerHTML = 4243
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(5)").innerHTML = massePaxArrC * 4243
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(4)").innerHTML = 4243
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(5)").innerHTML = massePaxArrG * 4243
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(6)").innerHTML = -408
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(7)").innerHTML = massePaxArrG * -408
    }

    if (siegeSel == "2 Sièges AR droite et gauche") {

        document.querySelector("#paxARC").value = "0"


        document.querySelector("#CG > tbody > tr:nth-child(10)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(11)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(12)").setAttribute("style", "background-color:white")

        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(4)").innerHTML = 4243
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(5)").innerHTML = massePaxArrD * 4243
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(6)").innerHTML = 408
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(7)").innerHTML = massePaxArrD * 408

        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(4)").innerHTML = 4243
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(5)").innerHTML = massePaxArrG * 4243
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(6)").innerHTML = -408
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(7)").innerHTML = massePaxArrG * -408
    }

    if (siegeSel == "3 Sièges AR") {
        document.querySelector("#CG > tbody > tr:nth-child(10)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(11)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(12)").setAttribute("style", "background-color:white")

        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(4)").innerHTML = 4243
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(5)").innerHTML = massePaxArrD * 4243
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(6)").innerHTML = 408
        document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(7)").innerHTML = massePaxArrD * 408

        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(4)").innerHTML = 4243
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(5)").innerHTML = massePaxArrC * 4243
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(4)").innerHTML = 4243
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(5)").innerHTML = massePaxArrG * 4243
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(6)").innerHTML = -408
        document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(7)").innerHTML = massePaxArrG * -408
    }
}

function canot() {

    const canot = [
        ["Pas de canot équipage", 0, 0, 0, 0, 0],
        ["Canot équipage sur plancher", 20, 3216, 64320, 0, 0],
        ["Canot équipage sur Rack", 23.61, 4388, 87760, 0, 0],
    ]
    canotSel = document.querySelector("#CG > tbody > tr:nth-child(20) > td:nth-child(2) > input").value
    if (canotSel == "Pas de canot équipage") {
        document.querySelector("#CG > tbody > tr:nth-child(20) > td:nth-child(3)").innerHTML = "0"
        document.querySelector("#CG > tbody > tr:nth-child(20) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(20) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(20) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(20) > td:nth-child(7)").innerHTML = 0
    }
    // console.log(siegeSelArr);


    for (let i = 0; i < canot.length; i++) {
        if (canot[i][0] == canotSel) {

            document.querySelector("#CG > tbody > tr:nth-child(20) > td:nth-child(3)").innerHTML = canot[i][1]
            document.querySelector("#CG > tbody > tr:nth-child(20) > td:nth-child(4)").innerHTML = canot[i][2]
            document.querySelector("#CG > tbody > tr:nth-child(20) > td:nth-child(5)").innerHTML = canot[i][3]
            document.querySelector("#CG > tbody > tr:nth-child(20) > td:nth-child(6)").innerHTML = canot[i][4]
            document.querySelector("#CG > tbody > tr:nth-child(20) > td:nth-child(7)").innerHTML = canot[i][5]
        }
    }

}

function Chaîne_SAR() {


    const checkbox = document.querySelector("#Chaîne\\ SAR")
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.querySelector("#CG > tbody > tr:nth-child(21) > td:nth-child(3)").innerHTML = 21.0
            document.querySelector("#CG > tbody > tr:nth-child(21) > td:nth-child(4)").innerHTML = 4388
            document.querySelector("#CG > tbody > tr:nth-child(21) > td:nth-child(5)").innerHTML = 92148
            document.querySelector("#CG > tbody > tr:nth-child(21) > td:nth-child(6)").innerHTML = -390
            document.querySelector("#CG > tbody > tr:nth-child(21) > td:nth-child(7)").innerHTML = -8190
        }
        else {
            document.querySelector("#CG > tbody > tr:nth-child(21) > td:nth-child(3)").innerHTML = "0"
            document.querySelector("#CG > tbody > tr:nth-child(21) > td:nth-child(4)").innerHTML = 0
            document.querySelector("#CG > tbody > tr:nth-child(21) > td:nth-child(5)").innerHTML = 0
            document.querySelector("#CG > tbody > tr:nth-child(21) > td:nth-child(6)").innerHTML = 0
            document.querySelector("#CG > tbody > tr:nth-child(21) > td:nth-child(7)").innerHTML = 0
        }
    })
}

function Rack_chaîne_SAR() {
    const checkbox = document.querySelector("#Rack\\ chaîne\\ SAR")
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.querySelector("#CG > tbody > tr:nth-child(22) > td:nth-child(3)").innerHTML = 3.6
            document.querySelector("#CG > tbody > tr:nth-child(22) > td:nth-child(4)").innerHTML = 4388
            document.querySelector("#CG > tbody > tr:nth-child(22) > td:nth-child(5)").innerHTML = 15841
            document.querySelector("#CG > tbody > tr:nth-child(22) > td:nth-child(6)").innerHTML = -390
            document.querySelector("#CG > tbody > tr:nth-child(22) > td:nth-child(7)").innerHTML = -1408
        }
        else {
            document.querySelector("#CG > tbody > tr:nth-child(22) > td:nth-child(3)").innerHTML = "0"
            document.querySelector("#CG > tbody > tr:nth-child(22) > td:nth-child(4)").innerHTML = 0
            document.querySelector("#CG > tbody > tr:nth-child(22) > td:nth-child(5)").innerHTML = 0
            document.querySelector("#CG > tbody > tr:nth-child(22) > td:nth-child(6)").innerHTML = 0
            document.querySelector("#CG > tbody > tr:nth-child(22) > td:nth-child(7)").innerHTML = 0
        }
    })
}

function treuil_droit() {
    const checkbox = document.querySelector("#TreuilDroit")
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.querySelector("#CG > tbody > tr:nth-child(23) > td:nth-child(3)").innerHTML = 60.9
            document.querySelector("#CG > tbody > tr:nth-child(23) > td:nth-child(4)").innerHTML = 3678
            document.querySelector("#CG > tbody > tr:nth-child(23) > td:nth-child(5)").innerHTML = 223806
            document.querySelector("#CG > tbody > tr:nth-child(23) > td:nth-child(6)").innerHTML = 834
            document.querySelector("#CG > tbody > tr:nth-child(23) > td:nth-child(7)").innerHTML = 50749
        }
        else {
            document.querySelector("#CG > tbody > tr:nth-child(23) > td:nth-child(3)").innerHTML = "0"
            document.querySelector("#CG > tbody > tr:nth-child(23) > td:nth-child(4)").innerHTML = 0
            document.querySelector("#CG > tbody > tr:nth-child(23) > td:nth-child(5)").innerHTML = 0
            document.querySelector("#CG > tbody > tr:nth-child(23) > td:nth-child(6)").innerHTML = 0
            document.querySelector("#CG > tbody > tr:nth-child(23) > td:nth-child(7)").innerHTML = 0
        }
    })
}

function treuil_gauche() {
    const checkbox = document.querySelector("#TreuilGauche")
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.querySelector("#CG > tbody > tr:nth-child(24) > td:nth-child(3)").innerHTML = 60.9
            document.querySelector("#CG > tbody > tr:nth-child(24) > td:nth-child(4)").innerHTML = 3678
            document.querySelector("#CG > tbody > tr:nth-child(24) > td:nth-child(5)").innerHTML = 223806
            document.querySelector("#CG > tbody > tr:nth-child(24) > td:nth-child(6)").innerHTML = -834
            document.querySelector("#CG > tbody > tr:nth-child(24) > td:nth-child(7)").innerHTML = -50749
        }
        else {
            document.querySelector("#CG > tbody > tr:nth-child(24) > td:nth-child(3)").innerHTML = "0"
            document.querySelector("#CG > tbody > tr:nth-child(24) > td:nth-child(4)").innerHTML = 0
            document.querySelector("#CG > tbody > tr:nth-child(24) > td:nth-child(5)").innerHTML = 0
            document.querySelector("#CG > tbody > tr:nth-child(24) > td:nth-child(6)").innerHTML = 0
            document.querySelector("#CG > tbody > tr:nth-child(24) > td:nth-child(7)").innerHTML = 0
        }
    })
}


function FLOTTA() {
    const checkbox = document.querySelector("#FLOTTA")

    if (document.querySelector("#FLOTTA").checked == true) {

        document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(3)").innerHTML = 49.5
        document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(4)").innerHTML = 4358
        document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(5)").innerHTML = 215721
        document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(6)").innerHTML = 226
        document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(7)").innerHTML = 11187

    }
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(3)").innerHTML = 49.5
            document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(4)").innerHTML = 4358
            document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(5)").innerHTML = 215721
            document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(6)").innerHTML = 226
            document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(7)").innerHTML = 11187
        }
        else {
            document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(3)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(4)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(5)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(6)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(7)").innerHTML = ""
        }
    })
}


function Skis() {
    const checkbox = document.querySelector("#Skis")
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.querySelector("#CG > tbody > tr:nth-child(26) > td:nth-child(3)").innerHTML = 16.9
            document.querySelector("#CG > tbody > tr:nth-child(26) > td:nth-child(4)").innerHTML = 4471
            document.querySelector("#CG > tbody > tr:nth-child(26) > td:nth-child(5)").innerHTML = 75605
            document.querySelector("#CG > tbody > tr:nth-child(26) > td:nth-child(6)").innerHTML = 0
            document.querySelector("#CG > tbody > tr:nth-child(26) > td:nth-child(7)").innerHTML = 0
        }
        else {
            document.querySelector("#CG > tbody > tr:nth-child(26) > td:nth-child(3)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(26) > td:nth-child(4)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(26) > td:nth-child(5)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(26) > td:nth-child(6)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(26) > td:nth-child(7)").innerHTML = ""
        }
    })
}

function FLIR_unité_Ext() {

    const checkbox = document.querySelector("#FLIR_unité_Ext")
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.querySelector("#CG > tbody > tr:nth-child(27) > td:nth-child(3)").innerHTML = 39.5
            document.querySelector("#CG > tbody > tr:nth-child(27) > td:nth-child(4)").innerHTML = 1879
            document.querySelector("#CG > tbody > tr:nth-child(27) > td:nth-child(5)").innerHTML = 74304
            document.querySelector("#CG > tbody > tr:nth-child(27) > td:nth-child(6)").innerHTML = 967
            document.querySelector("#CG > tbody > tr:nth-child(27) > td:nth-child(7)").innerHTML = 38235
        }
        else {
            document.querySelector("#CG > tbody > tr:nth-child(27) > td:nth-child(3)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(27) > td:nth-child(4)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(27) > td:nth-child(5)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(27) > td:nth-child(6)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(27) > td:nth-child(7)").innerHTML = ""
        }
    })
}

function FLIR_unité_électronique() {
    const checkbox = document.querySelector("#FLIR_unité_électronique")
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.querySelector("#CG > tbody > tr:nth-child(28) > td:nth-child(3)").innerHTML = 12.5
            document.querySelector("#CG > tbody > tr:nth-child(28) > td:nth-child(4)").innerHTML = 5000
            document.querySelector("#CG > tbody > tr:nth-child(28) > td:nth-child(5)").innerHTML = 62650
            document.querySelector("#CG > tbody > tr:nth-child(28) > td:nth-child(6)").innerHTML = 313
            document.querySelector("#CG > tbody > tr:nth-child(28) > td:nth-child(7)").innerHTML = 3922
        }
        else {
            document.querySelector("#CG > tbody > tr:nth-child(28) > td:nth-child(3)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(28) > td:nth-child(4)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(28) > td:nth-child(5)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(28) > td:nth-child(6)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(28) > td:nth-child(7)").innerHTML = ""
        }
    })
}

function FLIR_rack_opérateur() {
    const checkbox = document.querySelector("#FLIR_rack_opérateur")
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.querySelector("#CG > tbody > tr:nth-child(29) > td:nth-child(3)").innerHTML = 28.2
            document.querySelector("#CG > tbody > tr:nth-child(29) > td:nth-child(4)").innerHTML = 3475
            document.querySelector("#CG > tbody > tr:nth-child(29) > td:nth-child(5)").innerHTML = 98026
            document.querySelector("#CG > tbody > tr:nth-child(29) > td:nth-child(6)").innerHTML = 313
            document.querySelector("#CG > tbody > tr:nth-child(29) > td:nth-child(7)").innerHTML = 8830
        }
        else {
            document.querySelector("#CG > tbody > tr:nth-child(29) > td:nth-child(3)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(29) > td:nth-child(4)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(29) > td:nth-child(5)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(29) > td:nth-child(6)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(29) > td:nth-child(7)").innerHTML = ""
        }
    })
}

function SX_16() {
    const checkbox = document.querySelector("#SX_16")
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.querySelector("#CG > tbody > tr:nth-child(30) > td:nth-child(3)").innerHTML = 40.4
            document.querySelector("#CG > tbody > tr:nth-child(30) > td:nth-child(4)").innerHTML = 2009
            document.querySelector("#CG > tbody > tr:nth-child(30) > td:nth-child(5)").innerHTML = 81251
            document.querySelector("#CG > tbody > tr:nth-child(30) > td:nth-child(6)").innerHTML = -977
            document.querySelector("#CG > tbody > tr:nth-child(30) > td:nth-child(7)").innerHTML = -39507
        }
        else {
            document.querySelector("#CG > tbody > tr:nth-child(30) > td:nth-child(3)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(30) > td:nth-child(4)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(30) > td:nth-child(5)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(30) > td:nth-child(6)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(30) > td:nth-child(7)").innerHTML = ""
        }
    })
}

function Ensemble_GETAC() {
    const checkbox = document.querySelector("#Ensemble_GETAC")
    if (document.querySelector("#Ensemble_GETAC").checked == true) {

        document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(3)").innerHTML = 10.0
        document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(4)").innerHTML = 3740
        document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(5)").innerHTML = 37397
        document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(6)").innerHTML = -154
        document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(7)").innerHTML = -1543
    }
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(3)").innerHTML = 10.0
            document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(4)").innerHTML = 3740
            document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(5)").innerHTML = 37397
            document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(6)").innerHTML = -154
            document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(7)").innerHTML = -1543
        }
        else {
            document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(3)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(4)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(5)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(6)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(7)").innerHTML = ""
        }
    })
}

function Lot_de_campement() {
    const checkbox = document.querySelector("#Lot_de_campement")
    if (document.querySelector("#Lot_de_campement").checked == true) {
        document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(3)").innerHTML = 7.0
        document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(4)").innerHTML = 5000
        document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(5)").innerHTML = 35000
        document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(6)").innerHTML = -479
        document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(7)").innerHTML = -3353
    }

    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(3)").innerHTML = 7.0
            document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(4)").innerHTML = 5000
            document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(5)").innerHTML = 35000
            document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(6)").innerHTML = -479
            document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(7)").innerHTML = -3353
        }
        else {
            document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(3)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(4)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(5)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(6)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(7)").innerHTML = ""
        }
    })
}

function Lot_VIMAR() {
    const checkbox = document.querySelector("#Lot_VIMAR")
    if (document.querySelector("#Lot_VIMAR").checked == true) {
        document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(3)").innerHTML = 5.0
        document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(4)").innerHTML = 3717
        document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(5)").innerHTML = 18583
        document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(6)").innerHTML = -91
        document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(7)").innerHTML = -453
    }
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(3)").innerHTML = 5.0
            document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(4)").innerHTML = 3717
            document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(5)").innerHTML = 18583
            document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(6)").innerHTML = -91
            document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(7)").innerHTML = -453
        }
        else {
            document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(3)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(4)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(5)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(6)").innerHTML = ""
            document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(7)").innerHTML = ""
        }
    })
}

function bagage() {
    const masse = Number(document.querySelector("#bagage").value)

    document.querySelector("#CG > tbody > tr:nth-child(36) > td:nth-child(4)").innerHTML = 5000
    document.querySelector("#CG > tbody > tr:nth-child(36) > td:nth-child(5)").innerHTML = masse * 5000
}

function Matériels_divers_cabine() {
    const masse = Number(document.querySelector("#Matériels_divers_cabine").value)

    document.querySelector("#CG > tbody > tr:nth-child(37) > td:nth-child(4)").innerHTML = 3880
    document.querySelector("#CG > tbody > tr:nth-child(37) > td:nth-child(5)").innerHTML = masse * 3880
}

function consoHoraire() {
    let ch = document.getElementById("ConsoH").value
    // console.log(ch);
    let durée = (document.getElementById("durée").value)
    // console.log(durée);
    let majoumin = durée.indexOf("h")
    // console.log(majoumin);


    if (majoumin == 1) {
        let HM = durée.split("h")
        // alert("minuscule");
        // console.log(typeof (HM));
        // console.log(HM);
        let MM = Number(HM[0] * 60) + Number(HM[1])
        // console.log(MM);
        let TRO = MM * (ch / 60)
        // console.log(TRO);
        document.querySelector("#CG > tbody > tr:nth-child(47) > td:nth-child(4)").innerHTML = TRO
        document.querySelector("#CG > tbody > tr:nth-child(43) > td:nth-child(3)").innerHTML = TRO
    }

    else {
        let HM = durée.split("H")
        // alert("majuscule");
        // console.log(typeof (HM));
        // console.log(HM);
        let MM = Number(HM[0] * 60) + Number(HM[1])
        // console.log(MM);
        let TRO = MM * (ch / 60)
        // console.log(TRO);
        document.querySelector("#CG > tbody > tr:nth-child(47) > td:nth-child(4)").innerHTML = TRO
        document.querySelector("#CG > tbody > tr:nth-child(43) > td:nth-child(3)").innerHTML = TRO

    }
}


function massealt() {

    mav = (Number(document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(3)").innerHTML));

    arrmasseinput = []
    for (let i = 5; i <= 15; i++) {


        masseinput = (document.querySelector("#CG > tbody > tr:nth-child(" + i + ") > td:nth-child(3) > input").value)
        bb = Number(masseinput)

        arrmasseinput.push(bb)

        sommeMassesinput = 0
        for (let i = 0; i < arrmasseinput.length; i++) {
            sommeMassesinput += arrmasseinput[i];

        }
    }

    arrmasselink = []
    for (let i = 16; i <= 33; i++) {
        masseLink = document.querySelector("#CG > tbody > tr:nth-child(" + i + ") > td:nth-child(3)").innerHTML
        bb = Number(masseLink)
        // console.log(bb);
        arrmasselink.push(bb)
        massetotlink = 0
        for (let i = 0; i < arrmasselink.length; i++) {
            massetotlink += arrmasselink[i]

        }

        sommeMassesoute =
            Number(document.querySelector("#bagage").value) +
            Number(document.querySelector("#Matériels_divers_cabine").value)

        ZFM = mav + sommeMassesinput + massetotlink + sommeMassesoute
        // console.log("ZFM = " + Math.round(ZFM));

        document.querySelector("#CG > tbody > tr:nth-child(38) > td:nth-child(4)").innerHTML = Math.round(ZFM)

        ECM = Math.round(2910 - Number(ZFM) - 93.5)
        // console.log(ECM);
        document.querySelector("#CG > tbody > tr:nth-child(49) > td:nth-child(4)").innerHTML = ECM

        nourrices = document.querySelector("#CG > tbody > tr:nth-child(40) > td:nth-child(3)").innerHTML
        document.querySelector("#CG > tbody > tr:nth-child(40) > td:nth-child(4)").innerHTML = 5026
        document.querySelector("#CG > tbody > tr:nth-child(40) > td:nth-child(5)").innerHTML = 469931
        document.querySelector("#CG > tbody > tr:nth-child(40) > td:nth-child(6)").innerHTML = -20
        document.querySelector("#CG > tbody > tr:nth-child(40) > td:nth-child(7)").innerHTML = -1870

        reservoirP = document.querySelector("#CG > tbody > tr:nth-child(41) > td:nth-child(3) > input").value
        TRO = Number(nourrices) + Number(reservoirP)
        // console.log(TRO);


        MasseTotale = Math.round(Number(ZFM) + Number(TRO))
        document.querySelector("#CG > tbody > tr:nth-child(42) > td:nth-child(4)").innerHTML = MasseTotale
        ECR = 2910 - MasseTotale
        document.querySelector("#CG > tbody > tr:nth-child(50) > td:nth-child(4)").innerHTML = ECR
        consoMission = Number(document.querySelector("#CG > tbody > tr:nth-child(43) > td:nth-child(3)").innerHTML)
        // console.log(consoMission);
        MasseAtt = MasseTotale - consoMission
        document.querySelector("#CG > tbody > tr:nth-child(44) > td:nth-child(4)").innerHTML = MasseAtt
        MasseDeg = Math.round(Number(ZFM) + Number(nourrices))
        // console.log(MasseDeg);
        durée = (document.getElementById("durée").value)

        localStorage.setItem("MasseTotale", MasseTotale)
        localStorage.setItem("MasseAtt", MasseAtt)
        localStorage.setItem("MasseDeg", MasseDeg)
        localStorage.setItem("reservoirP", reservoirP)
        localStorage.setItem("durée", durée)
    }
}


function MomentzeroFuel() {

    let momentzeroFuel = ((
        Number((document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(5) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(6) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(18) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(19) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(20) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(21) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(22) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(23) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(24) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(26) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(27) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(28) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(29) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(30) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(36) > td:nth-child(5)").innerHTML)) +
        Number((document.querySelector("#CG > tbody > tr:nth-child(37) > td:nth-child(5)").innerHTML))

    ))
    document.querySelector("#CG > tbody > tr:nth-child(38) > td:nth-child(6)").innerHTML = momentzeroFuel.toFixed(0)
    document.querySelector("#CG > tbody > tr:nth-child(38) > td:nth-child(5)").innerHTML = (momentzeroFuel / ZFM).toFixed(0)
    // console.log(ZFM);
}

function zerofuelmoment() {
    const sommezerofuelmoment =
        Number(document.querySelector("#CG > tbody > tr:nth-child(4) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(5) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(6) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(7) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(8) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(9) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(10) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(11) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(12) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(16) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(17) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(18) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(19) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(20) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(21) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(22) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(23) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(24) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(25) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(26) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(27) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(28) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(29) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(30) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(31) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(32) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(33) > td:nth-child(7)").innerHTML) +

        Number(document.querySelector("#CG > tbody > tr:nth-child(36) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(37) > td:nth-child(7)").innerHTML)

    document.querySelector("#CG > tbody > tr:nth-child(38) > td:nth-child(8)").innerHTML = sommezerofuelmoment.toFixed(2)
    document.querySelector("#CG > tbody > tr:nth-child(38) > td:nth-child(7)").innerHTML = (sommezerofuelmoment / ZFM).toFixed(2)
}

function Tr0cg() {

    const tabTr0 = [
        [10, 8, 4953, 39624],
        [20, 16, 4960, 79360],
        [30, 24, 4969, 119256],
        [40, 32, 4978, 159296],
        [50, 40, 4987, 199480],
        [60, 48, 4996, 239808],
        [70, 56, 5004, 280224],
        [80, 64, 5011, 320704],
        [90, 72, 5019, 361368],
        [100, 80, 5026, 402080],
        [110, 88, 5033, 442904],
        [120, 96, 5040, 483840],
        [130, 104, 4953, 515112],
        [140, 112, 4877, 546224],
        [150, 120, 4809, 577080],
        [160, 128, 4751, 608128],
        [170, 136, 4702, 639472],
        [180, 144, 4659, 670896],
        [190, 152, 4618, 701936],
        [200, 160, 4583, 733280],
        [210, 168, 4551, 764568],
        [220, 176, 4523, 796048],
        [230, 184, 4495, 827080],
        [240, 192, 4471, 858432],
        [250, 200, 4449, 889800],
        [260, 208, 4429, 921232],
        [270, 216, 4410, 952560],
        [280, 224, 4393, 984032],
        [290, 232, 4377, 1015464],
        [300, 240, 4362, 1046880],
        [310, 248, 4348, 1078304],
        [320, 256, 4335, 1109760],
        [330, 264, 4322, 1141008],
        [340, 272, 4310, 1172320],
        [350, 280, 4299, 1203720],
        [360, 288, 4289, 1235232],
        [370, 296, 4279, 1266584],
        [380, 304, 4270, 1298080],
        [390, 312, 4261, 1329432],
        [400, 320, 4252, 1360640],
        [410, 328, 4244, 1392032],
        [420, 336, 4237, 1423632],
        [430, 344, 4230, 1455120],
        [440, 352, 4223, 1486496],
        [450, 360, 4216, 1517760],
        [460, 368, 4210, 1549280],
        [470, 376, 4204, 1580704],
        [480, 384, 4198, 1612032],
        [490, 392, 4193, 1643656],
        [500, 400, 4187, 1674800],
        [510, 408, 4182, 1706256],
        [520, 416, 4179, 1738464],
        [530, 424, 4182, 1773168],
        [540, 432, 4185, 1807920],
        [550, 440, 4188, 1842720],
        [560, 448, 4190, 1877120],
        [570, 456, 4193, 1912008],
        [580, 464, 4195, 1946480],
        [590, 472, 4198, 1981456],
        [600, 480, 4200, 2016000],
        [610, 488, 4202, 2050576],
        [620, 496, 4204, 2085184],
        [630, 504, 4206, 2119824],
        [640, 512, 4209, 2155008],
        [650, 520, 4211, 2189720],
        [660, 528, 4213, 2224464],
        [670.55, 536.4, 4215, 2261095],
        [680, 544, 4217, 2294048],
        [690, 552, 4218, 2328336],
        [700, 560, 4220, 2363200],
        [700.55, 560.4, 4220, 2364888],
    ]
    aa = tabTr0[1][1]

    let newtab = []

    for (let i = 0; i < tabTr0.length - 1; i++) {

        let res = (tabTr0[(i + 1)][2]) - (tabTr0[i][2])

        tabTr0[i].push(res)
    }

    masseTROkg = Number(document.querySelector("#CG > tbody > tr:nth-child(41) > td:nth-child(3) > input").value)

    // localStorage.setItem("masseTROkg", masseTROkg)
    for (let i = 0; i < tabTr0.length; i++) {
        if (tabTr0[i][1] == masseTROkg) {
            // alert("bingo! " + i)
            document.querySelector("#braTro").innerHTML = tabTr0[i][2]
            document.querySelector("#CG > tbody > tr:nth-child(41) > td:nth-child(5)").innerHTML = tabTr0[i][3]
        }
        if (tabTr0[i][1] < masseTROkg && tabTr0[i + 1][1] > masseTROkg) {
            // alert("trouvé" + i)
            newvalue = Math.round(((masseTROkg - tabTr0[i][1]) * ((tabTr0[i][4]) / 10)) + tabTr0[i][2])
            newtab.push([, masseTROkg, newvalue,])

            // console.log(newvalue);

            document.querySelector("#braTro").innerHTML = newvalue
            document.querySelector("#CG > tbody > tr:nth-child(41) > td:nth-child(5)").innerHTML = masseTROkg * Number(newvalue)
        }
    }
}

function calcmomentTotal() {

    momentTotal = (
        Number(document.querySelector("#CG > tbody > tr:nth-child(38) > td:nth-child(6)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(40) > td:nth-child(5)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(41) > td:nth-child(5)").innerHTML))


    let brasTotal = momentTotal / MasseTotale
    // console.log(momentTotal);
    document.querySelector("#CG > tbody > tr:nth-child(42) > td:nth-child(6)").innerHTML = momentTotal
    // console.log(brasTotal);
    document.querySelector("#CG > tbody > tr:nth-child(42) > td:nth-child(5)").innerHTML = brasTotal.toFixed(0)

    momentLatTotal = (
        Number(document.querySelector("#CG > tbody > tr:nth-child(40) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(41) > td:nth-child(7)").innerHTML) +
        Number(document.querySelector("#CG > tbody > tr:nth-child(38) > td:nth-child(8)").innerHTML))
    // console.log(momentLatTotal);
    document.querySelector("#CG > tbody > tr:nth-child(42) > td:nth-child(8)").innerHTML = momentLatTotal
    document.querySelector("#CG > tbody > tr:nth-child(42) > td:nth-child(7)").innerHTML = (momentLatTotal / MasseTotale).toFixed(2)

    document.querySelector("#CG > tbody > tr:nth-child(44) > td:nth-child(7)").innerHTML = (momentLatTotal / MasseAtt).toFixed(2)
    document.querySelector("#CG > tbody > tr:nth-child(44) > td:nth-child(8)").innerHTML = momentLatTotal

}

function Tr0consommé() {

    const tabTr0 = [
        [10, 8, 4953, 39624],
        [20, 16, 4960, 79360],
        [30, 24, 4969, 119256],
        [40, 32, 4978, 159296],
        [50, 40, 4987, 199480],
        [60, 48, 4996, 239808],
        [70, 56, 5004, 280224],
        [80, 64, 5011, 320704],
        [90, 72, 5019, 361368],
        [100, 80, 5026, 402080],
        [110, 88, 5033, 442904],
        [120, 96, 5040, 483840],
        [130, 104, 4953, 515112],
        [140, 112, 4877, 546224],
        [150, 120, 4809, 577080],
        [160, 128, 4751, 608128],
        [170, 136, 4702, 639472],
        [180, 144, 4659, 670896],
        [190, 152, 4618, 701936],
        [200, 160, 4583, 733280],
        [210, 168, 4551, 764568],
        [220, 176, 4523, 796048],
        [230, 184, 4495, 827080],
        [240, 192, 4471, 858432],
        [250, 200, 4449, 889800],
        [260, 208, 4429, 921232],
        [270, 216, 4410, 952560],
        [280, 224, 4393, 984032],
        [290, 232, 4377, 1015464],
        [300, 240, 4362, 1046880],
        [310, 248, 4348, 1078304],
        [320, 256, 4335, 1109760],
        [330, 264, 4322, 1141008],
        [340, 272, 4310, 1172320],
        [350, 280, 4299, 1203720],
        [360, 288, 4289, 1235232],
        [370, 296, 4279, 1266584],
        [380, 304, 4270, 1298080],
        [390, 312, 4261, 1329432],
        [400, 320, 4252, 1360640],
        [410, 328, 4244, 1392032],
        [420, 336, 4237, 1423632],
        [430, 344, 4230, 1455120],
        [440, 352, 4223, 1486496],
        [450, 360, 4216, 1517760],
        [460, 368, 4210, 1549280],
        [470, 376, 4204, 1580704],
        [480, 384, 4198, 1612032],
        [490, 392, 4193, 1643656],
        [500, 400, 4187, 1674800],
        [510, 408, 4182, 1706256],
        [520, 416, 4179, 1738464],
        [530, 424, 4182, 1773168],
        [540, 432, 4185, 1807920],
        [550, 440, 4188, 1842720],
        [560, 448, 4190, 1877120],
        [570, 456, 4193, 1912008],
        [580, 464, 4195, 1946480],
        [590, 472, 4198, 1981456],
        [600, 480, 4200, 2016000],
        [610, 488, 4202, 2050576],
        [620, 496, 4204, 2085184],
        [630, 504, 4206, 2119824],
        [640, 512, 4209, 2155008],
        [650, 520, 4211, 2189720],
        [660, 528, 4213, 2224464],
        [670.55, 536.4, 4215, 2261095],
        [680, 544, 4217, 2294048],
        [690, 552, 4218, 2328336],
        [700, 560, 4220, 2363200],
        [700.55, 560.4, 4220, 2364888],
    ]
    aa = tabTr0[1][1]

    let newtab = []

    for (let i = 0; i < tabTr0.length - 1; i++) {

        let res = (tabTr0[(i + 1)][2]) - (tabTr0[i][2])

        tabTr0[i].push(res)
    }

    masseTROconsommekg = Number(document.querySelector("#CG > tbody > tr:nth-child(43) > td:nth-child(3)").innerHTML)
    // console.log(masseTROconsommekg);
    for (let i = 0; i < tabTr0.length; i++) {
        if (tabTr0[i][1] == masseTROconsommekg) {
            // alert("bingo! " + i)
            document.querySelector("#CG > tbody > tr:nth-child(43) > td:nth-child(4)").innerHTML = tabTr0[i][2]
            document.querySelector("#CG > tbody > tr:nth-child(43) > td:nth-child(5)").innerHTML = tabTr0[i][3]
        }
        if (tabTr0[i][1] < masseTROconsommekg && tabTr0[i + 1][1] > masseTROconsommekg) {
            // alert("trouvé" + i)
            newvalue = Math.round(((masseTROconsommekg - tabTr0[i][1]) * ((tabTr0[i][4]) / 10)) + tabTr0[i][2])
            newtab.push([, masseTROkg, newvalue,])

            // console.log(newvalue);

            document.querySelector("#CG > tbody > tr:nth-child(43) > td:nth-child(4)").innerHTML = newvalue
            document.querySelector("#CG > tbody > tr:nth-child(43) > td:nth-child(5)").innerHTML = masseTROconsommekg * Number(newvalue)
        }
    }
    momentTroConso = masseTROconsommekg * Number(newvalue)
    // console.log(typeof (momentTroConso));
    // console.log((Number(document.querySelector("#CG > tbody > tr:nth-child(42) > td:nth-child(6)")).innerHTML))
    // console.log(typeof (momentTotal));
    momentTotal
    let momentAtt = momentTotal - momentTroConso
    // console.log(Number(momentAtt));


    document.querySelector("#CG > tbody > tr:nth-child(44) > td:nth-child(6)").innerHTML = momentAtt

    brasAtt = momentAtt / MasseAtt


    document.querySelector("#CG > tbody > tr:nth-child(44) > td:nth-child(5)").innerHTML = brasAtt.toFixed(0)
    braszerofuel = document.querySelector("#CG > tbody > tr:nth-child(38) > td:nth-child(5)").innerHTML
    // console.log(braszerofuel)

    brasTotal = document.querySelector("#CG > tbody > tr:nth-child(42) > td:nth-child(5)").innerHTML
    // console.log(brasTotal)

    brasLatZFM = document.querySelector("#CG > tbody > tr:nth-child(38) > td:nth-child(7)").innerHTML
    brasLatMasseTotale = document.querySelector("#CG > tbody > tr:nth-child(42) > td:nth-child(7)").innerHTML
    brasLatAtt = document.querySelector("#CG > tbody > tr:nth-child(44) > td:nth-child(7)").innerHTML

    // console.log(ZFM)

    localStorage.setItem("ZFM", ZFM)
    localStorage.setItem("brasTotal", brasTotal)
    localStorage.setItem("brasAtt", brasAtt)
    localStorage.setItem("braszerofuel", braszerofuel)
    localStorage.setItem("brasLatZFM", brasLatZFM)
    localStorage.setItem("brasLatMasseTotale", brasLatMasseTotale)
    localStorage.setItem("brasLatAtt", brasLatAtt)


}

function inputKROMax() {
console.log(ECM)

document.querySelector("#CG > tbody:nth-child(1) > tr:nth-child(41) > td:nth-child(3) > input:nth-child(1)").value = Number(ECM)
}


