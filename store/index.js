import { apigetfarm, apigetchart } from "../api";
export const state = () => ({
    farmArr: [],
    chartArr:[],
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
        // console.log(res.data);
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
        console.log(res.data.datas);
        state.chartArr = res.data.datas;
        console.log(state.chartArr);
    }
};
export const getters = {
    FarmData: state => state.farmArr,
    ChartData: state => state.chartArr,
};