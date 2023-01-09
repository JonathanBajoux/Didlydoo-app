export function patch(id) {

    let nameEdited = prompt("New event name:");
    let authorEdited = prompt("New author:");
    let descriptionEdited = prompt("New description:")

    if (nameEdited == "") {
        let editEvent = {
            "author": authorEdited,
            "description": descriptionEdited
        }

        fetch(`http://localhost:3000/api/events/${id}`, {
            method: "PATCH",
            body: JSON.stringify(editEvent),

            headers: {
                "Content-type": "application/json"
            }
        })

            .then((response) => response.json())
            .then((json) => console.log(json));
    } else if (authorEdited == "") {
        let editEvent = {
            "name": nameEdited,
            "description": descriptionEdited
        }

        fetch(`http://localhost:3000/api/events/${id}`, {
            method: "PATCH",
            body: JSON.stringify(editEvent),

            headers: {
                "Content-type": "application/json"
            }
        })

            .then((response) => response.json())
            .then((json) => console.log(json));
    } else if (descriptionEdited == "") {
        let editEvent = {
            "author": nameEdited,
            "name": nameEdited
        }

        fetch(`http://localhost:3000/api/events/${id}`, {
            method: "PATCH",
            body: JSON.stringify(editEvent),

            headers: {
                "Content-type": "application/json"
            }
        })

            .then((response) => response.json())
            .then((json) => console.log(json));
    } else {
        let editEvent = {
            "name": nameEdited,
            "author": authorEdited,
            "description": descriptionEdited
        }

        fetch(`http://localhost:3000/api/events/${id}`, {
            method: "PATCH",
            body: JSON.stringify(editEvent),

            headers: {
                "Content-type": "application/json"
            }
        })

    }
}