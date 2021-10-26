import { apipostfarm, apipostchart, apipostanalytics, apipostupdate } from "../api";
export const state = () => ({
    farmArr: [],
    type_ch: [],
    type1: "",
    type2: "",
    timeArr:[],
    tempArr:[],
    humidityArr:[],
    luminanceArr:[],
    atpArr:[],
    ecArr:[],
    phArr:[],
    soil_tempArr:[],
    soil_humidArr:[],
    uvArr:[],
    rainfallArr:[],
    leftArr:[],
    rightArr:[],
    barArr: [],
    type: [],

    isFarm: false,
    isChart: false,

    analyticsArr: [],
});
export const actions = {
    handClearfarm({commit}){
        commit('clearfarm');
    },
    handClearchart({commit}){
        commit('clearchart');
    },
    handType({commit}, arr){
        commit('type', arr);
    },
    handTypeCh({commit}, arr){
        commit('type_ch', arr);
    },
    async farmdata({ commit }, payload){
        const { type, advanced, start_time, end_time, time } = payload;
        // console.log(type, start_time, end_time, time);
        try {
            const res = await apipostfarm({ type, advanced, start_time, end_time, time });
            commit('postfarmdata', res);
        } catch (error) {
            console.log(error);
            this.$toast.error("連線超時，請縮短查詢區間", { 
                icon: 'error' ,
                duration: null,
                action : {
                    text : '關閉',
                    onClick : (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                },
            });
        }
    },
    async chartdata({ commit }, payload){
        const { type, advanced, start_time, end_time, time } = payload;
        // console.log(type, start_time, end_time, time);
        try {
            const res = await apipostchart({ type, advanced, start_time, end_time, time });
            commit('postchartdata',res);
        } catch (error) {
            console.log(error);
            this.$toast.error("連線超時，請縮短查詢區間", { 
                icon: 'error' ,
                duration: null,
                action : {
                    text : '關閉',
                    onClick : (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                },
            });
        }
    },
    async chartbardata({ commit }, payload){
        const { type, advanced, start_time, end_time, time } = payload;
        // console.log(type, start_time, end_time, time);
        try {
            const res = await apipostchart({ type, advanced, start_time, end_time, time });
            commit('postchartbardata', res);
        } catch (error) {
            console.log(error);
            this.$toast.error("連線超時，請縮短查詢區間", { 
                icon: 'error' ,
                duration: null,
                action : {
                    text : '關閉',
                    onClick : (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                },
            });
        }
    },
    async analyticsdata({ commit }, payload){
        const { start_time, end_time, time } = payload;
        // console.log(type, start_time, end_time, time);
        try {
            const res = await apipostanalytics({ start_time, end_time, time });
            commit('postanalyticsdata',res);
        } catch (error) {
            console.log(error);
            this.$toast.error("連線超時，請縮短查詢區間", { 
                icon: 'error' ,
                duration: null,
                action : {
                    text : '關閉',
                    onClick : (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                },
            });
        }
    },
    async update({ commit }, payload){
        // const { FormFile } = payload;
        // console.log(payload);
        try {
            const res = await apipostupdate(payload);
            commit('postupdate', res);
        } catch (error) {
            console.log(error);
            this.$toast.error("連線超時，請等待更新完畢", { 
                icon: 'error' ,
                duration: null,
                action : {
                    text : '關閉',
                    onClick : (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                },
            });
        }
    }
};
export const mutations = {
    clearfarm(state){
        state.farmArr = [];
    },
    clearchart(state){
        state.timeArr = [];
        state.tempArr = [];
        state.humidityArr = [];
        state.luminanceArr = [];
        state.atpArr = [];
        state.ecArr = [];
        state.phArr = [];
        state.soil_tempArr = [];
        state.soil_humidArr = [];
        state.uvArr = [];
        state.rainfallArr = [];
        state.leftArr = [];
        state.rightArr = [];
        state.isChart = false;
    },
    type(state, arr){
        state.type1 = arr[0];
        state.type2 = arr[1];
        //type1
        if (state.type1 == "temp") {
            state.type1 = "溫度(°C)";
        } 
        else if (state.type1 == "humidity") {
            state.type1 = "濕度(%)";
        }
        else if (state.type1 == "luminance") {
            state.type1 = "光照(Lux)";
        }
        else if (state.type1 == "atp") {
            state.type1 = "大氣壓力(hPa)";
        }
        else if (state.type1 == "ec") {
            state.type1 = "EC值(uS/cm)";
        }
        else if (state.type1 == "ph") {
            state.type1 = "PH值(ph)";
        }
        else if (state.type1 == "soil_temp") {
            state.type1 = "土壤溫度(°C)";
        }
        else if (state.type1 == "soil_humid") {
            state.type1 = "土壤濕度(%)";
        }
        else if (state.type1 == "uv") {
            state.type1 = "UV值(mw/cm²)";
        }
        else if (state.type1 == "rainfall") {
            state.type1 = "雨量(mm)";
        }
        //type2
        if (state.type2 == "temp") {
            state.type2 = "溫度(°C)";
        } 
        else if (state.type2 == "humidity") {
            state.type2 = "濕度(%)";
        }
        else if (state.type2 == "luminance") {
            state.type2 = "光照(Lux)";
        }
        else if (state.type2 == "atp") {
            state.type2 = "大氣壓力(hPa)";
        }
        else if (state.type2 == "ec") {
            state.type2 = "EC值(uS/cm)";
        }
        else if (state.type2 == "ph") {
            state.type2 = "PH值(ph)";
        }
        else if (state.type2 == "soil_temp") {
            state.type2 = "土壤溫度(°C)";
        }
        else if (state.type2 == "soil_humid") {
            state.type2 = "土壤濕度(%)";
        }
        else if (state.type2 == "uv") {
            state.type2 = "UV值(mw/cm²)";
        }
        else if (state.type2 == "rainfall") {
            state.type2 = "雨量(mm)";
        }
    },
    type_ch(state, arr){
        state.type_ch = [];
        if (arr.length > 2) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].text == '溫度') {
                    state.type_ch.push("溫度(°C)");
                } 
                else if (arr[i].text == '濕度') {
                    state.type_ch.push("濕度(%)");
                }
                else if (arr[i].text == "光照") {
                    state.type_ch.push("光照(Lux)");
                }
                else if (arr[i].text == "大氣壓力") {
                    state.type_ch.push("大氣壓力(hPa)");
                }
                else if (arr[i].text == "導電度") {
                    state.type_ch.push("導電度(uS/cm)");
                }
                else if (arr[i].text == "PH值") {
                    state.type_ch.push("PH值(ph)");
                }
                else if (arr[i].text == "土壤溫度") {
                    state.type_ch.push("土壤溫度(°C)");
                }
                else if (arr[i].text == "土壤濕度") {
                    state.type_ch.push("土壤濕度(%)");
                }
                else if (arr[i].text == "UV值") {
                    state.type_ch.push("UV值(mw/cm²)");
                }
                else if (arr[i].text == "雨量") {
                    state.type_ch.push("雨量(mm)");
                }
            }
        } 
        else if (arr.length == 2) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].text == '溫度') {
                    state.type_ch.push("溫度(°C)");
                } 
                else if (arr[i].text == '濕度') {
                    state.type_ch.push("濕度(%)");
                }
                else if (arr[i].text == "光照") {
                    state.type_ch.push("光照(Lux)");
                }
                else if (arr[i].text == "大氣壓力") {
                    state.type_ch.push("大氣壓力(hPa)");
                }
                else if (arr[i].text == "導電度") {
                    state.type_ch.push("導電度(uS/cm)");
                }
                else if (arr[i].text == "PH值") {
                    state.type_ch.push("PH值(ph)");
                }
                else if (arr[i].text == "土壤溫度") {
                    state.type_ch.push("土壤溫度(°C)");
                }
                else if (arr[i].text == "土壤濕度") {
                    state.type_ch.push("土壤濕度(%)");
                }
                else if (arr[i].text == "UV值") {
                    state.type_ch.push("UV值(mw/cm²)");
                }
                else if (arr[i].text == "雨量") {
                    state.type_ch.push("雨量(mm)");
                }
            }
        }        
        else {
            if (arr[0].text == '溫度') {
                state.type_ch.push("溫度(°C)");
            } 
            else if (arr[0].text == '濕度') {
                state.type_ch.push("濕度(%)");
            }
            else if (arr[0].text == "光照") {
                state.type_ch.push("光照(Lux)");
            }
            else if (arr[0].text == "大氣壓力") {
                state.type_ch.push("大氣壓力(hPa)");
            }
            else if (arr[0].text == "導電度") {
                state.type_ch.push("導電度(uS/cm)");
            }
            else if (arr[0].text == "PH值") {
                state.type_ch.push("PH值(ph)");
            }
            else if (arr[0].text == "土壤溫度") {
                state.type_ch.push("土壤溫度(°C)");
            }
            else if (arr[0].text == "土壤濕度") {
                state.type_ch.push("土壤濕度(%)");
            }
            else if (arr[0].text == "UV值") {
                state.type_ch.push("UV值(mw/cm²)");
            }
            else if (arr[0].text == "雨量") {
                state.type_ch.push("雨量(mm)");
            }
        }
    },
    postfarmdata(state, res){
        // console.log(res.data);
        if (res.data.status == 200){
            this.$toast.success(res.data.msg, { icon: 'check_circle' });
            state.farmArr = res.data.datas;
            state.isFarm = true;
        }
        else {
            this.$toast.error(res.data.msg, { icon: 'error' });
            state.isFarm = false;
        }
    },
    postchartdata(state, res){
        // console.log(res.data.datas);
        if (res.data.status == 200){
            this.$toast.success(res.data.msg, { icon: 'check_circle' });
            state.timeArr = res.data.datas[0].time;
            state.tempArr = res.data.datas[0].temp;
            state.humidityArr = res.data.datas[0].humidity;
            state.luminanceArr = res.data.datas[0].luminance;
            state.atpArr = res.data.datas[0].atp;
            state.ecArr = res.data.datas[0].ec;
            state.phArr = res.data.datas[0].ph;
            state.soil_tempArr = res.data.datas[0].soil_temp;
            state.soil_humidArr = res.data.datas[0].soil_humid;
            state.uvArr = res.data.datas[0].uv;
            state.rainfallArr = res.data.datas[0].rainfall;
            //type1
            if (state.type1 == "溫度(°C)") {
                state.leftArr = state.tempArr;
            } 
            else if (state.type1 == "濕度(%)") {
                state.leftArr = state.humidityArr;
            }
            else if (state.type1 == "光照(Lux)") {
                state.leftArr = state.luminanceArr;
            }
            else if (state.type1 == "大氣壓力(hPa)") {
                state.leftArr = state.atpArr;
            }
            else if (state.type1 == "EC值(uS/cm)") {
                state.leftArr = state.ecArr;
            }
            else if (state.type1 == "PH值(ph)") {
                state.leftArr = state.phArr;
            }
            else if (state.type1 == "土壤溫度(°C)") {
                state.leftArr = state.soil_tempArr;
            }
            else if (state.type1 == "土壤濕度(%)") {
                state.leftArr = state.soil_humidArr;
            }
            else if (state.type1 == "UV值(mw/cm²)") {
                state.leftArr = state.uvArr;
            }
            else if (state.type1 == "雨量(mm)") {
                state.leftArr = state.rainfallArr;
            }
            //type2
            if (state.type2 == "溫度(°C)") {
                state.rightArr = state.tempArr;
            } 
            else if (state.type2 == "濕度(%)") {
                state.rightArr = state.humidityArr;
            }
            else if (state.type2 == "光照(Lux)") {
                state.rightArr = state.luminanceArr;
            }
            else if (state.type2 == "大氣壓力(hPa)") {
                state.rightArr = state.atpArr;
            }
            else if (state.type2 == "EC值(uS/cm)") {
                state.rightArr = state.ecArr;
            }
            else if (state.type2 == "PH值(ph)") {
                state.rightArr = state.phArr;
            }
            else if (state.type2 == "土壤溫度(°C)") {
                state.rightArr = state.soil_tempArr;
            }
            else if (state.type2 == "土壤濕度(%)") {
                state.rightArr = state.soil_humidArr;
            }
            else if (state.type2 == "UV值(mw/cm²)") {
                state.rightArr = state.uvArr;
            }
            else if (state.type2 == "雨量(mm)") {
                state.rightArr = state.rainfallArr;
            }
            state.isChart = true;
        }
        else {
            this.$toast.error(res.data.msg, { icon: 'error' });
            state.isChart = false;
        }
    },
    postchartbardata(state, res){
        // console.log(res.data.datas);
        if (res.data.status == 200){
            this.$toast.success(res.data.msg, { icon: 'check_circle' });
            state.timeArr = res.data.datas[0].time;
            if (state.type1 == "溫度(°C)") {
                state.barArr = res.data.datas[0].temp;
            } 
            else if (state.type1 == "濕度(%)") {
                state.barArr = res.data.datas[0].humidity;
            }
            else if (state.type1 == "光照(Lux)") {
                state.barArr = res.data.datas[0].luminance;
            }
            else if (state.type1 == "大氣壓力(hPa)") {
                state.barArr = res.data.datas[0].atp;
            }
            else if (state.type1 == "EC值(uS/cm)") {
                state.barArr = res.data.datas[0].ec;
            }
            else if (state.type1 == "PH值(ph)") {
                state.barArr = res.data.datas[0].ph;
            }
            else if (state.type1 == "土壤溫度(°C)") {
                state.barArr = res.data.datas[0].soil_temp;
            }
            else if (state.type1 == "土壤濕度(%)") {
                state.barArr = res.data.datas[0].soil_humid;
            }
            else if (state.type1 == "UV值(mw/cm²)") {
                state.barArr = res.data.datas[0].uv;
            }
            else if (state.type1 == "雨量(mm)") {
                state.barArr = res.data.datas[0].rainfall;
            }
            state.isChart = true;
        }
        else {
            this.$toast.error(res.data.msg, { icon: 'error' });
            state.isChart = false;
        }
    },
    postanalyticsdata(state, res){
        // console.log(res.data);
        if (res.data.status == 200){
            this.$toast.success(res.data.msg, { icon: 'check_circle' });
            state.analyticsArr = res.data.datas;
            for (let i = 0; i < state.analyticsArr.length; i++) {
                if (state.analyticsArr[i].header == "temp") {
                    state.analyticsArr[i].header = "溫度";
                } 
                else if (state.analyticsArr[i].header == "humidity") {
                    state.analyticsArr[i].header = "濕度";
                }
                else if (state.analyticsArr[i].header == "luminance") {
                    state.analyticsArr[i].header = "光照";
                }
                else if (state.analyticsArr[i].header == "atp") {
                    state.analyticsArr[i].header = "大氣壓力";
                }
                else if (state.analyticsArr[i].header == "ec") {
                    state.analyticsArr[i].header = "EC值";
                }
                else if (state.analyticsArr[i].header == "ph") {
                    state.analyticsArr[i].header = "PH值";
                }
                else if (state.analyticsArr[i].header == "soil_temp") {
                    state.analyticsArr[i].header = "土壤溫度";
                }
                else if (state.analyticsArr[i].header == "soil_humid") {
                    state.analyticsArr[i].header = "土壤濕度";
                }
                else if (state.analyticsArr[i].header == "uv") {
                    state.analyticsArr[i].header = "UV值";
                }
            }
            
        }
        else {
            this.$toast.error(res.data.msg, { icon: 'error' });
        }
    },
    postupdate(state, res){
        // console.log(res);
        if (res.data.status == 200){
            this.$toast.success(res.data.msg, { icon: 'check_circle' });
        }
        else {
            this.$toast.error(res.data.msg, { 
                icon: 'error' ,
                duration: null,
                action : {
                    text : '關閉',
                    onClick : (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                },
            });
        }
    }
};
export const getters = {
    FarmData: state => state.farmArr,
    TimeData: state => state.timeArr,
    TempData: state => state.tempArr,
    HumidityData: state => state.humidityArr,
    LuminanceData: state => state.luminanceArr,
    AtpData: state => state.atpArr,
    EcData: state => state.ecArr,
    PhData: state => state.phArr,
    Soil_tempData: state => state.soil_tempArr,
    Soil_humidData: state => state.soil_humidArr,
    UvData: state => state.uvArr,
    RainfallData: state => state.rainfallArr,
    LeftData: state => state.leftArr,
    RightData: state => state.rightArr,
    BarData: state => state.barArr,
    IsFarm: state => state.isFarm,
    IsChart: state => state.isChart,
    Type1: state => state.type1,
    Type2: state => state.type2,
    Old_type: state => state.old_type,
    AnalyticsData: state => state.analyticsArr,
    Type_ch: state => state.type_ch,
};