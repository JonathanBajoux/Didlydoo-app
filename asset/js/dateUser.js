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