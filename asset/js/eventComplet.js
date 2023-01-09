import { delEvent } from "./delEvent.js";

export async function eventsComplet() {
    //récupération des données Json pour les events
    const response = await fetch(
        `http://localhost:3000/api/events/`,
        {
            method: 'GET'
        }
    );
    let stock = await response.json();

    console.log(stock);

    for (let elem of stock) {

        //créa la carte complète
        let newEvent = document.createElement('div')
        newEvent.classList.add('event')
        document.getElementById('main').appendChild(newEvent)

        //créa titre 
        let newEventTitle = document.createElement('h2')
        newEventTitle.classList.add('eventTitle')
        newEventTitle.appendChild(document.createTextNode(elem.name))
        newEvent.appendChild(newEventTitle)

        //créa auteur 
        let newEventAuteur = document.createElement('span')
        newEventAuteur.classList.add('eventAuteur')
        newEventAuteur.appendChild(document.createTextNode(" (" + elem.author + ") "))
        newEventTitle.appendChild(newEventAuteur)

        //créa description 
        let newEventDesc = document.createElement('p')
        newEventDesc.classList.add('eventDesc')
        newEventDesc.appendChild(document.createTextNode(elem.description))
        newEvent.appendChild(newEventDesc)

        //créa date 
        let newEventAllDate = document.createElement('div')
        newEventAllDate.classList.add('eventAllDate')
        newEvent.appendChild(newEventAllDate)


        //créa div boutons
        let divBtn = document.createElement('div')
        divBtn.classList.add('boutons')
        newEvent.appendChild(divBtn)

        //créa poubelle
        let newEventBin = document.createElement('button')
        newEventBin.classList.add('poubelle')
        divBtn.appendChild(newEventBin)
        let id = elem.id
        newEventBin.addEventListener("click", () => {
            delEvent(id);})
        let poubelleImg = document.createElement('img')
        poubelleImg.src = "/asset/icone_poubelle/disposition.png"
        poubelleImg.classList.add('imagebtn')
        newEventBin.appendChild(poubelleImg)
        
        //créa flèche
        let newEventArrow = document.createElement('button')
        newEventArrow.classList.add('fleche_haut')
        divBtn.appendChild(newEventArrow)
        let arrowImg = document.createElement('img')
        arrowImg.src = "/asset/icone_fleche_haut/fleches-vers-le-haut.png"
        arrowImg.classList.add('imagebtn')
        newEventArrow.appendChild(arrowImg)

        for (let dates of elem.dates) {

            let newEventDate = document.createElement('div')
            newEventDate.classList.add('eventDate')
            newEventAllDate.appendChild(newEventDate)
            newEventDate.appendChild(document.createTextNode(dates.date))


            for (let attendees of dates.attendees) {

                let newEventAttendees = document.createElement('div')
                newEventAttendees.classList.add('eventAttendees')
                newEventAllDate.appendChild(newEventAttendees)
                newEventAttendees.appendChild(document.createTextNode(attendees.name))


            }

        }

        // créa user 



    }


}