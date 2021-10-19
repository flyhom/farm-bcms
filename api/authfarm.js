import axios from "axios";

const authRequest = axios.create({
    baseURL: 'https://farm-api.flyhom.com/api/',
    headers: { 'Content-Type': 'application/json' },
})

export const postfarm = data => authRequest.post("/data", data);

export const postchart = data => authRequest.post("/chart", data);

export const postanalytics = data => authRequest.post("/analytics/correlation", data);

export const postupdate = data => authRequest.post("/update", data);