import { apigetfarm, apigetchart, apigetanalytics } from "../api";
export const state = () => ({
    farmArr: [],
    old_type: [],
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
    leftArr:[],
    rightArr:[],

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
    async farmdata({ commit }, payload){
        const { type, advanced, start_time, end_time, time } = payload;
        // console.log(type, start_time, end_time, time);
        try {
            const res = await apigetfarm({ type, advanced, start_time, end_time, time });
            commit('getfarmdata',res);
        } catch (error) {
            console.log(error);
        }
    },
    async chartdata({ commit }, payload){
        const { type, advanced, start_time, end_time, time } = payload;
        // console.log(type, start_time, end_time, time);
        try {
            const res = await apigetchart({ type, advanced, start_time, end_time, time });
            commit('getchartdata',res);
        } catch (error) {
            console.log(error);
        }
    },
    async analyticsdata({ commit }, payload){
        const { start_time, end_time, time } = payload;
        // console.log(type, start_time, end_time, time);
        try {
            const res = await apigetanalytics({ start_time, end_time, time });
            commit('getanalyticsdata',res);
        } catch (error) {
            console.log(error);
        }
    },
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
        state.leftArr = [];
        state.rightArr = [];
        state.isChart = false;
    },
    type(state, arr){
        if (arr.length == 2) {
            state.type1 = arr[0];
            state.type2 = arr[1];
            //type1
            if (state.type1 == "temp") {
                state.type1 = "溫度";
            } 
            else if (state.type1 == "humidity") {
                state.type1 = "濕度";
            }
            else if (state.type1 == "luminance") {
                state.type1 = "光照";
            }
            else if (state.type1 == "atp") {
                state.type1 = "大氣壓力";
            }
            else if (state.type1 == "ec") {
                state.type1 = "EC值";
            }
            else if (state.type1 == "ph") {
                state.type1 = "PH值";
            }
            else if (state.type1 == "soil_temp") {
                state.type1 = "土壤溫度";
            }
            else if (state.type1 == "soil_humid") {
                state.type1 = "土壤濕度";
            }
            else if (state.type1 == "uv") {
                state.type1 = "UV值";
            }
            //type2
            if (state.type2 == "temp") {
                state.type2 = "溫度";
            } 
            else if (state.type2 == "humidity") {
                state.type2 = "濕度";
            }
            else if (state.type2 == "luminance") {
                state.type2 = "光照";
            }
            else if (state.type2 == "atp") {
                state.type2 = "大氣壓力";
            }
            else if (state.type2 == "ec") {
                state.type2 = "EC值";
            }
            else if (state.type2 == "ph") {
                state.type2 = "PH值";
            }
            else if (state.type2 == "soil_temp") {
                state.type2 = "土壤溫度";
            }
            else if (state.type2 == "soil_humid") {
                state.type2 = "土壤濕度";
            }
            else if (state.type2 == "uv") {
                state.type2 = "UV值";
            }
        }
    },
    getfarmdata(state, res){
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
    getchartdata(state, res){
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
            //type1
            if (state.type1 == "溫度") {
                state.leftArr = state.tempArr;
            } 
            else if (state.type1 == "濕度") {
                state.leftArr = state.humidityArr;
            }
            else if (state.type1 == "光照") {
                state.leftArr = state.luminanceArr;
            }
            else if (state.type1 == "大氣壓力") {
                state.leftArr = state.atpArr;
            }
            else if (state.type1 == "EC值") {
                state.leftArr = state.ecArr;
            }
            else if (state.type1 == "PH值") {
                state.leftArr = state.phArr;
            }
            else if (state.type1 == "土壤溫度") {
                state.leftArr = state.soil_tempArr;
            }
            else if (state.type1 == "土壤濕度") {
                state.leftArr = state.soil_humidArr;
            }
            else if (state.type1 == "UV值") {
                state.leftArr = state.uvArr;
            }
            //type2
            if (state.type2 == "溫度") {
                state.rightArr = state.tempArr;
            } 
            else if (state.type2 == "濕度") {
                state.rightArr = state.humidityArr;
            }
            else if (state.type2 == "光照") {
                state.rightArr = state.luminanceArr;
            }
            else if (state.type2 == "大氣壓力") {
                state.rightArr = state.atpArr;
            }
            else if (state.type2 == "EC值") {
                state.rightArr = state.ecArr;
            }
            else if (state.type2 == "PH值") {
                state.rightArr = state.phArr;
            }
            else if (state.type2 == "土壤溫度") {
                state.rightArr = state.soil_tempArr;
            }
            else if (state.type2 == "土壤濕度") {
                state.rightArr = state.soil_humidArr;
            }
            else if (state.type2 == "UV值") {
                state.rightArr = state.uvArr;
            }
            state.isChart = true;
        }
        else {
            this.$toast.error(res.data.msg, { icon: 'error' });
            state.isChart = false;
        }
    },
    getanalyticsdata(state, res){
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

                // if (state.analyticsArr[i].temp == 2) {
                //     state.analyticsArr[i].temp = "";
                // } 
                // else if (state.analyticsArr[i].humidity == 2) {
                //     state.analyticsArr[i].humidity = "";
                // }
                // else if (state.analyticsArr[i].luminance == 2) {
                //     state.analyticsArr[i].luminance = "";
                // }
                // else if (state.analyticsArr[i].atp == 2) {
                //     state.analyticsArr[i].atp = "";
                // }
                // else if (state.analyticsArr[i].ec == 2) {
                //     state.analyticsArr[i].ec = "";
                // }
                // else if (state.analyticsArr[i].ph == 2) {
                //     state.analyticsArr[i].ph = "";
                // }
                // else if (state.analyticsArr[i].soil_temp == 2) {
                //     state.analyticsArr[i].soil_temp = "";
                // }
                // else if (state.analyticsArr[i].soil_humid == 2) {
                //     state.analyticsArr[i].soil_humid = "";
                // }
                // else if (state.analyticsArr[i].uv == 2) {
                //     state.analyticsArr[i].uv = "";
                // }
            }
            
        }
        else {
            this.$toast.error(res.data.msg, { icon: 'error' });
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
    LeftData: state => state.leftArr,
    RightData: state => state.rightArr,
    IsFarm: state => state.isFarm,
    IsChart: state => state.isChart,
    Type1: state => state.type1,
    Type2: state => state.type2,
    Old_type: state => state.old_type,
    AnalyticsData: state => state.analyticsArr,
};