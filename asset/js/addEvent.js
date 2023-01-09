export function addEvent() {
    
    let completEvent = { 
       "name" : "Test", 
       "dates" : ['2024-06-03'], 
       "author" : "Didier", 
       "description" : "Ceci est un test pour voir si tout est ok" }
   
        console.log(completEvent)

     fetch("http://localhost:3000/api/events/", {
       method: "POST",
       body: JSON.stringify({completEvent
       }),
       
       headers: {
         "Content-type": "application/json;"
       }
     })
       .then((response) => response.json())
       .then((json) => console.log(json));
}

