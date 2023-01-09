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

  //créa delButton
//   let id = elem.id
//   let delButton = document.createElement('button')
//   delButton.setAttribute("type", "button");
//   delButton.classList.add("delButton");
//   delButton.addEventListener("click", () => {
//       delEvent(id)
//   });
//   newEventTitle.appendChild(delButton)

