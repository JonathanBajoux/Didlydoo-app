

export function addDate() {
    let datescontainer = document.getElementById('datescontainer')
    let aDate = document.createElement("input");
     aDate.type = "date";
     aDate.className = "date";
    datescontainer.appendChild(aDate);
    //document.body.appendChild(aDate)
}