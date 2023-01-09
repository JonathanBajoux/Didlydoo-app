export function addDate() {
    let datescontainer = document.getElementById('datescontainer')
    let aDate = document.createElement("input");
     aDate.type = "date";
     aDate.className = "date";
     aDate.required = true;
    datescontainer.appendChild(aDate);
    //document.body.appendChild(aDate)
}