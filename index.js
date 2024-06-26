import { createEvent, getEventList, viewEventDetail, updateEvent, deleteEvent, getEventTypes, fileToBase64 } from "./js/events.js";


const updateEventById = async (eventId) => {
  let date = document.getElementById('eventDate_input').value
  console.log(date);

  let body = {
    name: document.getElementById('eventName_input').value,
    type: document.getElementById('eventType_select').value,
    host: document.getElementById('eventHost_input').value,
    description: document.getElementById('eventDescription_input').value,
    place: document.getElementById('eventPlace_input').value,
    // views: document.getElementById('eventViews_input').value,
    maxTicketPerBill: document.getElementById('eventMaxTicketPerBill_input').value,
    durationDate: document.getElementById('eventDurationDate_input').value,
    date: date !== "" ? dayjs(date).format("YYYY-MM-DDTHH:mm:ss.SSSZ") : undefined
  }

  let photo = document.getElementById('eventPhoto_input').files["0"]

  if (photo !== undefined) {
    photo = await fileToBase64(photo)
    body.photo = photo;
  }
  console.log(body);
  await updateEvent(eventId, body)
}

const createEventf = async () => {
    let photo = document.getElementById('eventPhoto_input').files["0"]
    let date = document.getElementById('eventDate_input').value
    photo = await fileToBase64(photo)
    let body = {
      name: document.getElementById('eventName_input').value,
      type: document.getElementById('eventType_select').value,
      host: document.getElementById('eventHost_input').value,
      description: document.getElementById('eventDescription_input').value,
      place: document.getElementById('eventPlace_input').value,
      // views: document.getElementById('eventViews_input').value,
      maxTicketPerBill: document.getElementById('eventMaxTicketPerBill_input').value,
      photo: photo,
      durationDate: document.getElementById('eventDurationDate_input').value,
      date: date !== "" ? dayjs(date).format("YYYY-MM-DDTHH:mm:ss.SSSZ") : undefined
      
  }
  await createEvent(body);
}

const renderCreateEvent = async () => {
  const eventTypes = await getEventTypes();
  const eventDetail = document.getElementById('detail-container');
  let content = `
  <form class="mx-4 d-flex flex-wrap justify-content-center" action="">
    <h1>Create Event:</h1>
    <div class='w-100'>
      <label class="form-label" for="eventName">Name:</label>
      <input class="form-control" id="eventName_input" type="text" name="eventName" value="">
    </div>
    <div class='w-100'>
      <label class='form-label' for="eventType">Type:</label>
      <select class='form-control' id="eventType_select" name="eventType">
        ${eventTypes.map(type => `<option value="${type.typeId}"}>${type.typeId}</option>`)}
      </select>
    </div>
    <div class='w-100'>
      <label class='form-label' for="eventHost">Host:</label>
      <input class='form-control' id="eventHost_input" type="text" name="eventHost" value="">
    </div>
    <div class='w-100'>
    <label class='form-label' for="eventDescription">Description:</label>
      <input class='form-control' id="eventDescription_input" type="text" name="eventDescription" value="">
      </div>
    <div class='w-100'>
      <label class='form-label' for="eventPlace">Place:</label>
      <input class='form-control' id="eventPlace_input" type="text" name="eventPlace" value="">
    </div>
    <div class='w-100'>
      <label class='form-label' for="eventViews">Views</label>
      <input class='form-control' id="eventViews_input" type="text" name="eventViews" value="">
    </div>
    <div class='w-100'>
      <label class='form-label' for="eventMaxTicketPerBill">MaxTicketPerBill:</label>
      <input class='form-control' id="eventMaxTicketPerBill_input" type="text" name="eventMaxTicketPerBill" value="">
    </div>
    <div class='w-100'> 
      <label class='form-label' for="EventDate">Date:</label>
      <input class='form-control' id="eventDate_input" type="date" name="eventDate" value="">
    </div>
    <div class='w-100'> 
      <label class='form-label' for="EventDurationDate">DurationDate:</label>
      <input class='form-control' id="eventDurationDate_input" type="number" name="eventDurationDate" value="">
    </div>
    <div class='w-100'>
      <label class='form-label' for="eventPhoto">Photo:</label>
      <input class='form-control' id="eventPhoto_input" type="file" name="eventPhoto" value="">
    </div>
    <div class="d-grid gap-2 w-100 mt-2">
      <button type="button"
        id="createEventButton"  
        class="btn btn-warning w-100"
        submit_update_event_id="">Create</button>
    </div>
    </form>
    `
  eventDetail.innerHTML = content
  const updateEventButton = document.getElementById('createEventButton')
  updateEventButton.addEventListener('click', async () => {
    await createEventf();
    await renderEventTable();
  })
}

const renderEventDetail = async (eventId) => {

  const event = await viewEventDetail(eventId);
  const eventTypes = await getEventTypes();

  const eventDetail = document.getElementById('detail-container');
  let content = `
  <form class="mx-4 d-flex flex-wrap justify-content-center" action="">
    <h1>Update Event:</h1>
    <div class='w-100'>
      <label class="form-label" for="eventName">Name:</label>
      <input class="form-control" id="eventName_input" type="text" name="eventName" value="${event.name}">
    </div>
    <div class='w-100'>
      <label class='form-label' for="eventType">Type:</label>
      <select class='form-control' id="eventType_select" name="eventType">
        ${eventTypes.map(type => `<option value="${type.typeId}" ${type.typeId === event.type ? 'selected' : ''}>${type.typeId}</option>`)}
      </select>
    </div>
    <div class='w-100'>
      <label class='form-label' for="eventHost">Host:</label>
      <input class='form-control' id="eventHost_input" type="text" name="eventHost" value="${event.host}">
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
      <label class='form-label' for="EventDate">Date:</label>
      <input class='form-control' id="eventDate_input" type="date" name="eventDate" value="${dayjs(event.date).format("YYYY-MM-DD")}">
    </div>
    <div class='w-100'> 
      <label class='form-label' for="EventDurationDate">DurationDate:</label>
      <input class='form-control' id="eventDurationDate_input" type="number" name="eventDurationDate" value="${event.durationDate}">
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
  updateEventButton.addEventListener('click', async () => {
    const eventId = updateEventButton.getAttribute('submit_update_event_id');
    await updateEventById(eventId)
    await renderEventTable();
  })
}

const renderEventTable = async () => {
  const events = await getEventList();
  let content = `
  <div class="d-grid gap-2 w-100 mt-2">
    <button type="button"
      id="CreateEvent"  
      class="btn btn-warning w-100"
    >Create Event</button>
  </div>
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
          <button 
            type="button" 
            class="btn btn-danger btn-sm delete-button"
            data-id="${event._id}">
            Delete</button>
        </td>
      </tr>
    `;
  })

  content += `</table>  <div id='detail-container'></div>`;
  document.getElementById('eventlist').innerHTML = content;

  const updateEventButton = document.getElementById('CreateEvent')
  updateEventButton.addEventListener('click', () => {
    renderCreateEvent();
  })

  const viewButtons = document.querySelectorAll('.view-buttons')
  viewButtons.forEach(button => {
    button.addEventListener('click', () => {
      const eventId = button.getAttribute('data-id');
      renderEventDetail(eventId);
    })
  })

  const deleteButton = document.querySelectorAll('.delete-button')
  deleteButton.forEach(button => {
    button.addEventListener('click', async () => {
      const eventId = button.getAttribute('data-id');
      await deleteEvent(eventId);
      await renderEventTable();
    })
  })
}

renderEventTable()