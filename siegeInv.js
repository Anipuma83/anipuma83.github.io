function siegeArrInv() {

    // console.log(document.querySelector("#SAI").value);
    if (document.querySelector("#SAI").value == "") {
        document.querySelector("#SAI").value = "Pas de siège inversé"
        // alert("zzzz")
    }

    let massepaxInvD = document.querySelector("#paxInvD").value
    let massepaxInvC = document.querySelector("#paxInvC").value
    let massepaxInvG = document.querySelector("#paxInvG").value

    // console.log(massepaxInvD)
    // console.log(massepaxInvC)
    // console.log(massepaxInvG)

    let siegeArrInv = document.querySelector("#SAI").value
    // console.log(siegeArrInv);

    // console.log(siegeArrInv);

    const SiegesArrInverses = [
        ["Pas de siège inversé", 0, 0, 0, 0, 0],
        ["1 Siège inversé droite", 16.6, 3231, 53564, 300, 4972,],
        ["1 Siège inversé centre", 16.6, 3282, 54415, 0, 0],
        ["1 Siège inversé gauche", 16.6, 3231, 53564, -300, -4972],
        ["2 Sièges inversés droite et centre", 27.0, 3262, 87953, 184, 4972],
        ["2 Sièges inversés gauche et centre", 27.0, 3262, 87953, -184, -4972],
        ["2 Sièges inversés droite et gauche", 27.0, 3231, 87102, 0, 0],
        ["3 Sièges inversés", 37.3, 3254, 121491, 0, 0]
    ]


    // console.log(siegeSelArr);

    for (let i = 0; i < SiegesArrInverses.length; i++) {
        if (SiegesArrInverses[i][0] == siegeArrInv) {

            document.querySelector("#CG > tbody > tr:nth-child(19) > td:nth-child(3)").innerHTML = SiegesArrInverses[i][1]
            document.querySelector("#CG > tbody > tr:nth-child(19) > td:nth-child(4)").innerHTML = SiegesArrInverses[i][2]
            document.querySelector("#CG > tbody > tr:nth-child(19) > td:nth-child(5)").innerHTML = SiegesArrInverses[i][3]
            document.querySelector("#CG > tbody > tr:nth-child(19) > td:nth-child(6)").innerHTML = SiegesArrInverses[i][4]
            document.querySelector("#CG > tbody > tr:nth-child(19) > td:nth-child(7)").innerHTML = SiegesArrInverses[i][5]
        }
    }

    if (siegeArrInv == "Pas de siège inversé") {
        document.querySelector("#CG > tbody > tr:nth-child(13)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(14)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(15)").setAttribute("style", "display:none")

        document.querySelector("#paxInvD").value = "0"
        document.querySelector("#paxInvC").value = "0"
        document.querySelector("#paxInvG").value = "0"


        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(7)").innerHTML = 0

    }

    if (siegeArrInv == "1 Siège inversé droite") {
        document.querySelector("#CG > tbody > tr:nth-child(13)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(14)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(15)").setAttribute("style", "display:none")

        document.querySelector("#paxInvC").value = 0
        document.querySelector("#paxInvG").value = 0


        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(4)").innerHTML = 3331
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(5)").innerHTML = 3331 * massepaxInvD
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(6)").innerHTML = 479
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(7)").innerHTML = 479 * massepaxInvD

        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(7)").innerHTML = 0


    }

    if (siegeArrInv == "1 Siège inversé centre") {
        document.querySelector("#CG > tbody > tr:nth-child(13)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(14)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(15)").setAttribute("style", "display:none")

        document.querySelector("#paxInvD").value = 0
        document.querySelector("#paxInvG").value = 0


        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(4)").innerHTML = 3413
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(5)").innerHTML = massepaxInvC * 3413
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(7)").innerHTML = 0
    }

    if (siegeArrInv == "1 Siège inversé gauche") {
        document.querySelector("#CG > tbody > tr:nth-child(13)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(14)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(15)").setAttribute("style", "background-color:white")

        document.querySelector("#paxInvD").value = 0
        document.querySelector("#paxInvC").value = 0


        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(7)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(4)").innerHTML = 3331
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(5)").innerHTML = massepaxInvG * 3331
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(6)").innerHTML = -479
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(7)").innerHTML = massepaxInvG * -479
    }

    if (siegeArrInv == "2 Sièges inversés droite et centre") {
        document.querySelector("#CG > tbody > tr:nth-child(13)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(14)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(15)").setAttribute("style", "display:none")

        document.querySelector("#paxInvG").value = 0


        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(4)").innerHTML = 3331
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(5)").innerHTML = 3331 * massepaxInvD
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(6)").innerHTML = 479
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(7)").innerHTML = 479 * massepaxInvD

        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(4)").innerHTML = 3413
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(5)").innerHTML = 3413 * massepaxInvC
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(7)").innerHTML = 0
    }

    if (siegeArrInv == "2 Sièges inversés gauche et centre") {
        document.querySelector("#CG > tbody > tr:nth-child(13)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(14)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(15)").setAttribute("style", "background-color:white")

        document.querySelector("#paxInvD").value = 0


        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(4)").innerHTML = 3413
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(5)").innerHTML = 3413 * massepaxInvC
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(4)").innerHTML = 3331
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(5)").innerHTML = 3331 * massepaxInvG
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(6)").innerHTML = -479
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(7)").innerHTML = -479 * massepaxInvG
    }

    if (siegeArrInv == "2 Sièges inversés droite et gauche") {
        document.querySelector("#CG > tbody > tr:nth-child(13)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(14)").setAttribute("style", "display:none")
        document.querySelector("#CG > tbody > tr:nth-child(15)").setAttribute("style", "background-color:white")

        document.querySelector("#paxInvC").value = 0


        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(4)").innerHTML = 3331
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(5)").innerHTML = 3331 * massepaxInvD
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(6)").innerHTML = 479
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(7)").innerHTML = 479 * massepaxInvD

        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(4)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(5)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(4)").innerHTML = 3331
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(5)").innerHTML = 3331 * massepaxInvG
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(6)").innerHTML = -479
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(7)").innerHTML = -479 * massepaxInvG
    }

    if (siegeArrInv == "3 Sièges inversés") {
        document.querySelector("#CG > tbody > tr:nth-child(13)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(14)").setAttribute("style", "background-color:white")
        document.querySelector("#CG > tbody > tr:nth-child(15)").setAttribute("style", "background-color:white")



        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(4)").innerHTML = 3331
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(5)").innerHTML = 3331 * massepaxInvD
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(6)").innerHTML = 479
        document.querySelector("#CG > tbody > tr:nth-child(13) > td:nth-child(7)").innerHTML = 479 * massepaxInvD

        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(4)").innerHTML = 3413
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(5)").innerHTML = 3413 * massepaxInvC
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(6)").innerHTML = 0
        document.querySelector("#CG > tbody > tr:nth-child(14) > td:nth-child(7)").innerHTML = 0

        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(4)").innerHTML = 3331
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(5)").innerHTML = 3331 * massepaxInvG
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(6)").innerHTML = -479
        document.querySelector("#CG > tbody > tr:nth-child(15) > td:nth-child(7)").innerHTML = -479 * massepaxInvG
    }
}