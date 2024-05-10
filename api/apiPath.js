const getDefaultPath = (path) => {
    return `http://localhost:8000/${path}`
}

export const ApiPath = {
    GET_ALL_EVENT: getDefaultPath('events'),
    UPDATE_EVENT: getDefaultPath('events/updateEvent')
}

export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJQY0h1eSIsInN1YiI6IjY2MDExYTFlOWVlMjUwNTI4MTAzNzk1NyIsImlhdCI6MTcxNTMyOTE3Mjc4NywiZXhwIjoxNzIzOTY5MTcyNzg3fQ.IOzaVV_WTE3jxaARzNTsZmeg7geCZkYFoMnUo3dPOq4"