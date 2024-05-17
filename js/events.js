import { ApiPath, token } from "../api/apiPath.js";

// CallApi create event function
const createEvent = async (body) => {
	try {
		const res = await fetch(`${ApiPath.CREATE_EVENT}`, {
			method: "POST",
			headers: {
				"Authorization": `Bearer ${token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		});
		const dataRes = await res.json();
		return dataRes.data[0].data;
	} catch (error) {
		console.error(error);
		return []
	}
}

// CallApi get eventtype list function
const getEventTypes = async () => {
	try {
		const res = await fetch(`${ApiPath.GET_EVENT_TYPE}`, {
			method: "GET"
		});
		const dataRes = await res.json();
		return dataRes.data[0].data;
	} catch (error) {
		console.error(error);
		return [];
	}
}

const getEventList = async () => {
	try {
		const res = await fetch(`${ApiPath.GET_ALL_EVENT}?status=0`, {
			method: "GET"
		});
		const dataRes = await res.json();
		return dataRes.data[0].data;
	} catch (error) {
		console.error(error);
		return [];
	}
}

const viewEventDetail = async (eventId) => {
	try {
		const res = await fetch(`${ApiPath.GET_ALL_EVENT}?eventId=${eventId}`, {
			method: "GET"
		})
		const dataRes = await res.json();
		return dataRes.data[0].data[0];
	} catch (error) {
		console.log(error);
		return [];
	}
}

const deleteEvent = async (eventId) => {
	try {
		const res = await fetch(`${ApiPath.DEACTIVATE_EVENT}?eventId=${eventId}`, {
			method: "PATCH",
			headers: {
				"Authorization": `Bearer ${token}`,
				"Content-Type": "application/json"
			}
		})
		const dataRes = await res.json();
		return dataRes = await res.json();
	} catch (error) {
		console.log(error);
		return [];
	}
}

const updateEvent = async (eventId, body) => {
	try {
		const res = await fetch(`${ApiPath.UPDATE_EVENT}?eventId=${eventId}`, {
			method: "PATCH",
			headers: {
				"Authorization": `Bearer ${token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		})
		const dataRes = await res.json();
		console.log(dataRes);
		return dataRes.data[0].data;
	} catch (error) {
		console.log(error);
		return [];
	}
}

function fileToBase64(file) {
	console.log(file)
	return new Promise((resolve, reject) => {
		if (!file || !file instanceof File) {
			reject(new Error('Invalid file'));
			return;
		}
		const reader = new FileReader();
		reader.onload = function (event) {
			const base64String = event.target.result;
			resolve(base64String);
		};
		reader.readAsDataURL(file);
	});
}

export {
	fileToBase64,
	createEvent,
	getEventTypes,
	getEventList,
	viewEventDetail,
	deleteEvent,
	updateEvent
}