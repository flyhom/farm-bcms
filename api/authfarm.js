import axios from "axios";

const authRequest = axios.create({
    baseURL: 'https://farm-api.flyhom.com/api/',
    headers: { 'Content-Type': 'application/json' },
})

export const getfarm = data => authRequest.post("/data", data);

export const getchart = data => authRequest.post("/chart", data);

export const getanalytics = data => authRequest.post("/analytics/correlation", data);