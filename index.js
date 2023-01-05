import { eventsComplet } from "./asset/js/EventComplet.js";
//import { dateUser } from "./asset/js/dateUser.js";

eventsComplet()
//dateUser()
document.getElementById('test').addEventListener('click' , eventsComplet)



const newEvent = document.getElementById("newEvent")
const submitBtn = document.getElementById("createButton")
const newDate = document.getElementById("newDateBtn")
const datescontainer = document.getElementsByClassName("datescontainer")


newEvent.addEventListener("click", () => { document.getElementById("form").style.display = "block";
})

/*newDate.addEventListener("click", () => {
    let aDate = document.createElement("input");
    aDate.type = "date";
    aDate.className = "datelist";
    datescontainer.appendChild(aDate);
})*/

document.getElementById("newDateBtn").addEventListener("click", addDate)

function addDate() {
    let aDate = document.createElement("input");
    aDate.type = "date";
    aDate.className = "datelist";
    //datescontainer.appendChild(aDate);
    document.body.appendChild(aDate)
}

submitBtn.addEventListener("click", () => {

})

function createEvent(name, author, description, dates) {
    let event = document.createElement("div")
    let name = document.getElementById("eventName").value
    let nameField = document.createTextNode(name)
    let author = document.getElementById("author").value
    let authorField = document.createTextNode(author)
    let description = document.getElementById("description").value
    let descField = document.createTextNode(description)
    let dates = []
    event.appendChild(nameField)
    event.appendChild(authorField)
    event.appendChild(descField)
}

 