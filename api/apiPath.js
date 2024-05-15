const getDefaultPath = (path) => {
	return `http://localhost:8000/${path}`
}

export const ApiPath = {
	CREATE_EVENT: getDefaultPath('events'),
	GET_ALL_EVENT: getDefaultPath('events'), 
	UPDATE_EVENT: getDefaultPath('events/updateEvent'),
	DEACTIVATE_EVENT: getDefaultPath('events/deactivateEvent'),
	GET_EVENT_TYPE: getDefaultPath('eventTypes/')
}

export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJQY0h1eSIsInN1YiI6IjY2MDExYTFlOWVlMjUwNTI4MTAzNzk1NyIsImlhdCI6MTcxNTMyOTE3Mjc4NywiZXhwIjoxNzIzOTY5MTcyNzg3fQ.IOzaVV_WTE3jxaARzNTsZmeg7geCZkYFoMnUo3dPOq4"