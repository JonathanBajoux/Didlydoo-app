export function addEvent() {

    let completEvent = {
        name: "Test",
        dates: ['2024-06-03', '2025-07-03'],
        author: "Didier",
        description: "Ceci est un test pour voir si tout est ok"
    };

    console.log(JSON.stringify(completEvent));


    fetch('http://localhost:3000/api/events/', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(completEvent
        ),

       
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => { console.error('Error', error) })
}

