export function delEvent(id) {

    fetch(`http://localhost:3000/api/events/${id}/`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
}



