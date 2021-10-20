import axios from "axios";

const authRequest = axios.create({
    baseURL: 'https://farm-api.flyhom.com/api/',
})

export const postfarm = data => { authRequest.defaults.headers.common['Content-Type'] = "application/json";
                                    return authRequest.post("/data", data)};

export const postchart = data => { authRequest.defaults.headers.common['Content-Type'] = "application/json";
                                    return authRequest.post("/chart", data)};   

export const postanalytics = data => { authRequest.defaults.headers.common['Content-Type'] = "application/json";
                                        return authRequest.post("/analytics/correlation", data)};

export const postupdate = data => authRequest.post("/update", data);