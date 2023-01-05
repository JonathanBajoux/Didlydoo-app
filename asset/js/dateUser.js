export async function dateUser(){

const response = await fetch(
    `http://localhost:3000/api/attendees/`,
{
method: 'GET'
}
 );
let stock = await response.json();

console.log(stock);

}

// import { eventsComplet } from "./asset/js/EventComplet.js";
// import { dateUser } from "./asset/js/dateUser.js";

// eventsComplet()
// dateUser()
// document.getElementById('test').addEventListener('click' , eventsComplet)