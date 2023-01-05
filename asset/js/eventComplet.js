export async function eventsComplet () {
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
    newEventAuteur.appendChild(document.createTextNode( " (" + elem.author + ") "))
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


         
        for (let dates of elem.dates) {
            
            let newEventDate = document.createElement('div')
                newEventDate.classList.add('eventDate')
                newEventAllDate.appendChild(newEventDate)
                newEventDate.appendChild(document.createTextNode(dates.date))
        }

// créa user 



}


}