export function addEvent() {

  const eventName = document.getElementById("eventName");
  const eventAuthor = document.getElementById("author");
  const eventDescription = document.getElementById("description");
  const eventDate = document.getElementsByClassName("date");
  let arrayOfDates = [];

  for (let date of eventDate) {
    arrayOfDates.push(date.value);    
  }

  console.log(arrayOfDates)
    
    let completEvent = { 
       "name" : eventName.value, 
       "dates" : arrayOfDates, 
       "author" : eventAuthor.value, 
       "description" : eventDescription.value }
   
        console.log(completEvent)

     fetch("http://localhost:3000/api/events/", {
       method: "POST",
       body: JSON.stringify(completEvent),

       headers: {
         "Content-type": "application/json"
       }
     })
     
       .then((response) => response.json())
       .then((json) => console.log(json));
}

