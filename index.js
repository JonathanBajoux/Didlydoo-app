import { eventsComplet } from "./asset/js/EventComplet.js";
import { dateUser } from "./asset/js/dateUser.js";
import { vis } from "./asset/js/vis.js";
import { addDate } from "./asset/js/addDate.js";
import { addEvent } from "./asset/js/addEvent.js";
import { delEvent } from "./asset/js/delEvent.js";

eventsComplet()
dateUser()
vis()

document.getElementById('newEvent').addEventListener('click' , vis)
document.getElementById('cancelButton').addEventListener('click' , vis)
document.getElementById("newDateBtn").addEventListener("click", addDate)
document.getElementById('createButton').addEventListener('click' , addEvent)
