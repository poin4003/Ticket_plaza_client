import { ApiPath, token } from "../api/apiPath.js";

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
		return dataRes.data[0].data;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export {
	getEventList,
	viewEventDetail,
	updateEvent
}