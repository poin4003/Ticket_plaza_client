import { getEventList, viewEventDetail, updateEvent } from "./js/events.js";

const updateEventById = async (eventId) => {
  let body = {
    name: document.getElementById('eventName_input').value,
    //type: document.getElementById('eventType_input').value,
    //host: document.getElementById('eventHost_input').value,
    //description: document.getElementById('eventDescription_input').value,
    //place: document.getElementById('eventPlace_input').value,
    //views: document.getElementById('eventViews_input').value,
    //maxTicketPerBill: document.getElementById('eventMaxTicketPerBill_input').value,
    // photo: document.getElementById('eventPhoto_input').value
  }
  console.log( await updateEvent(eventId, body)) 
}

const renderEventDetail = async (eventId) => {

  const event = await viewEventDetail(eventId); 
  const eventDetail = document.getElementById('detail-container');
  let content = `
  <form class="mx-4 d-flex flex-wrap justify-content-center" action="">
    <div class='w-100'>
      <label class='form-label' for="eventId">Id:</label>
      <input class='form-control' id="eventId_input" type="text" name="eventId" value="${event._id}">
    </div>
    <div class='w-100'>
      <label class="form-label" for="eventName">Name:</label>
      <input class="form-control" id="eventName_input" type="text" name="eventName" value="${event.name}">
    </div>
    <div class='w-100'>
      <label class='form-label' for="eventType">Type:</label>
      <input class='form-control' id="eventType_input" type="text" name="eventType" value="${event.type}">
    </div>
    <div class='w-100'>
      <label class='form-label' for="eventHost">Host:</label>
      <input class='form-control' id="eventHost_input" type="text" name="eventName" value="${event.host}">
    </div>
    <div class='w-100'>
    <label class='form-label' for="eventDescription">Description:</label>
      <input class='form-control' id="eventDescription_input" type="text" name="eventDescription" value="${event.description}">
      </div>
    <div class='w-100'>
      <label class='form-label' for="eventPlace">Place:</label>
      <input class='form-control' id="eventPlace_input" type="text" name="eventPlace" value="${event.place}">
    </div>
    <div class='w-100'>
      <label class='form-label' for="eventViews">Views</label>
      <input class='form-control' id="eventViews_input" type="text" name="eventViews" value="${event.views}">
    </div>
    <div class='w-100'>
      <label class='form-label' for="eventMaxTicketPerBill">MaxTicketPerBill:</label>
      <input class='form-control' id="eventMaxTicketPerBill_input" type="text" name="eventMaxTicketPerBill" value="${event.maxTicketPerBill}">
    </div>
    <div class='w-100'>
      <label class='form-label' for="eventPhoto">Photo:</label>
      <input class='form-control' id="eventPhoto_input" type="file" name="eventPhoto" value="${event.photo}">
    </div>
    <div class='mt-2 w-100 d-flex justify-content-start'>
      <img width='80%' src='${event?.photo}'/>
    </div>
    <div class="d-grid gap-2 w-100 mt-2">
      <button type="button"
        id="updateEventButton"  
        class="btn btn-warning w-100"
        submit_update_event_id="${eventId}">Update</button>
    </div>
    </form>
    ` 
    eventDetail.innerHTML = content
    const updateEventButton = document.getElementById('updateEventButton')
    updateEventButton.addEventListener('click', () => {
      const eventId = updateEventButton.getAttribute('submit_update_event_id');
      updateEventById(eventId)
  })
}

const renderEventTable = async () => {
  const events = await getEventList();
  let content = `
  <table class="table table-stripper table-hover">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Type</th>
        <th scope="col">Action</th>
      <tr>
    </thead>
  `;

  events.forEach(event => {
    content += `
      <tr>
        <td>${event._id}</td>
        <td>${event.name}</td>
        <td>${event.type}</td>
        <td>        
          <button 
            type="button" 
            class="btn btn-primary btn-sm view-buttons" 
            data-id="${event._id}">
            View</button>
          <button type="button" class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    `;
  })

  content += `</table>  <div id='detail-container'></div>`;
  document.getElementById('eventlist').innerHTML = content;
  //document.getElementById('eventList').addEventListener('click', () => renderEventDetail())
  const viewButtons = document.querySelectorAll('.view-buttons')
  viewButtons.forEach(button => {
    button.addEventListener('click', () => {
      const eventId = button.getAttribute('data-id');
      renderEventDetail(eventId)
    })
  })
}

renderEventTable()