import { apigetfarm, apigetchart } from "../api";
export const state = () => ({
    farmArr: [],

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
});
export const actions = {
    handClearfarm({commit}){
        commit('clearfarm');
    },
    async farmdata({ commit }, payload){
        const { type, start_time, end_time, time } = payload;
        // console.log(type, start_time, end_time, time);
        try {
            const res = await apigetfarm({ type, start_time, end_time, time });
            commit('getfarmdata',res);
        } catch (error) {
            console.log(error);
        }
    },
    async chartdata({ commit }, payload){
        const { type, start_time, end_time, time } = payload;
        // console.log(type, start_time, end_time, time);
        try {
            const res = await apigetchart({ type, start_time, end_time, time });
            commit('getchartdata',res);
        } catch (error) {
            console.log(error);
        }
    },
};
export const mutations = {
    clearfarm(state){
        state.farmArr = [];
    },
    getfarmdata(state, res){
        console.log(res.data);
        if (res.data.status == 200){
            this.$toast.success(res.data.msg, { icon: 'check_circle' });
            state.farmArr = res.data.datas;
        }
        else {
            this.$toast.error(res.data.msg, { icon: 'error' });
            state.farmArr = [];
        }
    },
    getchartdata(state, res){
        console.log(res.data);
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
        }
        else {
            this.$toast.error(res.data.msg, { icon: 'error' });
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
};