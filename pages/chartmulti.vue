<script>
import OriDataChart from '@/components/OriDataChart.vue';
import OriDataChartTwoSer from '~/components/OriDataChartTwoSer.vue';
export default {
    components:{
        OriDataChart,
        OriDataChartTwoSer,
    },
    data(){
        return {
            loading: false,
            chartloading: false,
            charttwoloading: false,
            width: '98%',
            height: '700px',
            title: [],
            charttitle: [],
            //查詢工具列
            old_type: [],
            type: [],
            type_ch: [],
            advanced: [],
            chipAdvanced: [],
            selecttime:'day',
            activePicker: null,
            menustart: false,
            menuend: false,
            starttime: '00:00',
            startdate: '2021-03-01',
            start: '2021-03-01 00:00:00',
            enddate: '2021-04-01',
            endtime: '00:00',
            end: '2021-04-01 00:00:00',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            datetime: null,
            tempcolor: "dark", 
            humiditycolor: "dark",
            atpcolor: "dark",
            luminancecolor: "dark",
            eccolor: "dark",
            phcolor: "dark",
            soil_tempcolor: "dark",
            soil_humidcolor: "dark",
            uvcolor: "dark",
            rainfallcolor:"dark",
            rainbtn: false,
            dialogfunc: false,
            idx: 0,
            funcdone: false,
            timeday: "success",
            timehour: "dark",
            timemin: "dark",
            startDate: '2021-03-01 00:00',
            endDate: '2021-04-01 00:00',
            chartnormal: 'primary',
            chartsmall: 'dark',

            tab: 'tab-1',
            editdialog: false,
            chartItem: [],
            editidx: 0,
            editadvanced: [],
            edittype: [],
            edittype_ch: [],
            edittime: 'day',
            editadvanced: [],
            charttype: 'line',
            chartLineColor: 'amber darken-3',
            chartBarColor: 'dark',
        }
    },
    mounted(){
        this.$store.dispatch('handClearchart');
    },
    computed:{
        LeftData(){
            return this.$store.getters.LeftData;
        },
        RightData(){
            return this.$store.getters.RightData;
        },
        Type1(){
            return this.$store.getters.Type1;
        },
        Type2(){
            return this.$store.getters.Type2;
        },
        TimeData(){
            return this.$store.getters.TimeData;
        },
        TempData(){
            return this.$store.getters.TempData;
        },
        HumidityData(){
            return this.$store.getters.HumidityData;
        },
        LuminanceData(){
            return this.$store.getters.LuminanceData;
        },
        AtpData(){
            return this.$store.getters.AtpData;
        },
        EcData(){
            return this.$store.getters.EcData;
        },
        PhData(){
            return this.$store.getters.PhData;
        },
        Soil_tempData(){
            return this.$store.getters.Soil_tempData;
        },
        Soil_humidData(){
            return this.$store.getters.Soil_humidData;
        },
        UvData(){
            return this.$store.getters.UvData;
        },
        RainfallData(){
            return this.$store.getters.RainfallData;
        },
        Title(){
            return this.$store.getters.Type_ch;
        },
        Charttitle(){
            for (let i = 0; i < this.type_ch.length; i++) {
                const element = this.type_ch[i].text;
                this.charttitle.push(element);
            }
            return `${this.charttitle} & ${this.start} - ${this.end}`;
        },
        startcheck(){
            if (this.starttime == '' || this.startdate == '') {
                return true;
            }
            return false;
        },
        endcheck(){
            if (this.endtime == '' || this.enddate == '') {
                return true;
            }
            return false;
        },
        //chartbar
        PlusEditbtn(){
            if (this.chartItem.length == 4) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    methods:{
        advanced_plus(){
            if (!this.chartItem[this.idx].advanced.idx) {
                this.chartItem[this.idx].advanced.idx = 0;
                this.chartItem[this.idx].funcdone = false;
            }
            this.chartItem[this.idx].advanced.push(
                {
                    'idx': this.chartItem[this.idx].advanced.idx,
                    'sensor': this.chartItem[this.idx].type,
                    'operation': this.selectoption,
                    'value': this.value,
                }
            );
            this.chartItem[this.idx].chip.push(
                {
                    'idx': this.chartItem[this.idx].advanced.idx,
                    'sensor': '',
                    'operation': this.selectoption,
                    'value': this.value,
                }
            );
            // this.advanced =  this.chartItem[this.idx].advanced;
            this.chartItem[this.idx].advanced.idx += 1;
        },
        advanced_close(y,item){
            this.chartItem[item.idx].advanced.splice(y.idx,1);
            this.chartItem[item.idx].advanced.forEach(i => {
                if (i.idx > y.idx) {
                    i.idx = i.idx - 1;
                }
            })
            this.chartItem[item.idx].chip.splice(y.idx,1);
            this.chartItem[item.idx].chip.forEach(i => {
                if (i.idx > y.idx) {
                    i.idx = i.idx - 1;
                }
            })
            this.chartItem[item.idx].advanced.idx -= 1;
            if (this.chartItem[item.idx].advanced.length == 0) {
                this.chartItem[item.idx].funcdone = false;
            }
        },
        dialogfunc_finish(){
            this.dialogfunc = false;
            this.chartItem[this.idx].funcdone = true;
            this.chartItem[this.idx].chipAdvanced =  this.chartItem[this.idx].chip;
        },
        dialogfunc_close(){
            this.dialogfunc = false;
        },
        morefunc(item){
            this.idx = item.idx;
            this.advanced =  this.chartItem[this.idx].advanced;
            this.dialogfunc = true;
        },
        openstart(){
            this.menustart = true;
        },
        openend(){
            this.menuend = true;
        },
        closestart(){
            this.menustart = false;
        },
        closeend(){
            this.menuend = false;
        },
        clear(){
            this.$store.dispatch("handClearchart");
            this.tempcolor = "dark"; 
            this.humiditycolor = "dark";
            this.atpcolor = "dark";
            this.luminancecolor = "dark";
            this.eccolor = "dark";
            this.phcolor = "dark";
            this.soil_tempcolor = "dark";
            this.soil_humidcolor = "dark";
            this.uvcolor = "dark";
            this.rainfallcolor = "dark";
            this.type = [];
            this.type_ch = [];
            this.advanced = [];
            this.chipAdvanced = [];
            this.funcdone = false;
            this.idx = 0;
            this.chartloading = false;
            this.charttwoloading = false;
            this.old_type = [];
            this.title = [];
            this.charttitle = [];
            this.chartItem = [];
            this.editidx = 0;
        },
        //search
        async searchdata(){
            console.log(this.chartItem);
            // this.loading = true;
            // this.editdialog = false;
            // this.chartloading = false;
            // this.charttwoloading = false;
            // this.title = [];
            // this.charttitle = [];
            // for (let i = 0; i < this.chartItem.length; i++) {
            //     await this.$store.dispatch('handType', this.chartItem[i].type);
            //     await this.$store.dispatch('handTypeCh', this.chartItem[i].type_ch);
            //     await this.$store.dispatch('chartdata', {
            //         type: this.chartItem[i].type, 
            //         advanced: this.chartItem[i].advanced,
            //         start_time: this.start, 
            //         end_time: this.end, 
            //         time: this.chartItem[i].time
            //     });                   
            // }
            // // console.log(this.type.length);
            // if (this.$store.getters.IsChart == true) {
            //     this.old_type = this.type;
            //     if (this.type.length == 2) {
            //         this.charttwoloading = true;
            //     }
            //     else {
            //         this.chartloading = true;
            //     }
            // }
            // else {
            //     if (this.old_type.length == 2) {
            //         this.charttwoloading = true;
            //     }
            //     else if (this.old_type.length == 0){
            //         this.chartloading = false;
            //         this.charttwoloading = false;
            //     }
            //     else{
            //         this.chartloading = true;
            //     }
            // }
            // this.loading = false;
        },
        temp(item){
            if (item.color.tempcolor === "dark"){
                item.color.tempcolor = "primary";   
                this.chartItem[item.idx].type.push("temp");
                this.chartItem[item.idx].type_ch.push({ 'id':'temp', 'text':'溫度' });            
            }
            else{
                item.color.tempcolor = "dark"; 
                this.chartItem[item.idx].type = this.chartItem[item.idx].type.filter(e => e !== "temp");
                this.chartItem[item.idx].type_ch = this.chartItem[item.idx].type_ch.filter(e => e.id !== "temp");
            }
        },
        humidity(item){
            if (item.color.humiditycolor === "dark"){
                item.color.humiditycolor = "primary";
                this.chartItem[item.idx].type.push("humidity");
                this.chartItem[item.idx].type_ch.push({ 'id':'humidity', 'text':'濕度' });
            }
            else{
                item.color.humiditycolor = "dark";
                this.chartItem[item.idx].type = this.chartItem[item.idx].type.filter(e => e !== "humidity");
                this.chartItem[item.idx].type_ch = this.chartItem[item.idx].type_ch.filter(e => e.id !== "humidity");
            }
        },
        atp(item){
            if (item.color.atpcolor === "dark"){
                item.color.atpcolor = "primary";
                this.chartItem[item.idx].type.push("atp");
                this.chartItem[item.idx].type_ch.push({ 'id':'atp', 'text':'大氣壓力' });
            }
            else{
                item.color.atpcolor = "dark";
                this.chartItem[item.idx].type = this.chartItem[item.idx].type.filter(e => e !== "atp");
                this.chartItem[item.idx].type_ch = this.chartItem[item.idx].type_ch.filter(e => e.id !== "atp");
            }  
        },
        luminance(item){
            if (item.color.luminancecolor === "dark"){
                item.color.luminancecolor = "primary";
                this.chartItem[item.idx].type.push("luminance");
                this.chartItem[item.idx].type_ch.push({ 'id':'luminance', 'text':'光照' }); 
            }
            else{
                item.color.luminancecolor = "dark";
                this.chartItem[item.idx].type = this.chartItem[item.idx].type.filter(e => e !== "luminance");
                this.chartItem[item.idx].type_ch = this.chartItem[item.idx].type_ch.filter(e => e.id !== "luminance");
            }  
        },
        ec(item){
            if (item.color.eccolor === "dark"){
                item.color.eccolor = "primary";
                this.chartItem[item.idx].type.push("ec");
                this.chartItem[item.idx].type_ch.push({ 'id':'ec', 'text':'導電度' });
            }
            else{
                item.color.eccolor = "dark";
                this.chartItem[item.idx].type = this.chartItem[item.idx].type.filter(e => e !== "ec");
                this.chartItem[item.idx].type_ch = this.chartItem[item.idx].type_ch.filter(e => e.id !== "ec");
            }  
        },
        ph(item){
            if (item.color.phcolor === "dark"){
                item.color.phcolor = "primary";
                this.chartItem[item.idx].type.push("ph");
                this.chartItem[item.idx].type_ch.push({ 'id':'ph', 'text':'PH值' });
            }
            else{
                item.color.phcolor = "dark";
                this.chartItem[item.idx].type = this.chartItem[item.idx].type.filter(e => e !== "ph");
                this.chartItem[item.idx].type_ch = this.chartItem[item.idx].type_ch.filter(e => e.id !== "ph");
            }  
        },
        soil_temp(item){
            if (item.color.soil_tempcolor === "dark"){
                item.color.soil_tempcolor = "primary";
                this.chartItem[item.idx].type.push("soil_temp");
                this.chartItem[item.idx].type_ch.push({ 'id':'soil_temp', 'text':'土壤溫度' });
            }
            else{
                item.color.soil_tempcolor = "dark";
                this.chartItem[item.idx].type = this.chartItem[item.idx].type.filter(e => e !== "soil_temp");
                this.chartItem[item.idx].type_ch = this.chartItem[item.idx].type_ch.filter(e => e.id !== "soil_temp");
            }  
        },
        soil_humid(item){
            if (item.color.soil_humidcolor === "dark"){
                item.color.soil_humidcolor = "primary";
                this.chartItem[item.idx].type.push("soil_humid");
                this.chartItem[item.idx].type_ch.push({ 'id':'soil_humid', 'text':'土壤濕度' });
            }
            else{
                item.color.soil_humidcolor = "dark";
                this.chartItem[item.idx].type = this.chartItem[item.idx].type.filter(e => e !== "soil_humid");
                this.chartItem[item.idx].type_ch = this.chartItem[item.idx].type_ch.filter(e => e.id !== "soil_humid");
            }  
        },
        uv(item){
            if (item.color.uvcolor === "dark"){
                item.color.uvcolor = "primary";
                this.chartItem[item.idx].type.push("uv"); 
                this.chartItem[item.idx].type_ch.push({ 'id':'uv', 'text':'UV值' });
            }
            else{
                item.color.uvcolor = "dark";
                this.chartItem[item.idx].type = this.chartItem[item.idx].type.filter(e => e !== "uv");
                this.chartItem[item.idx].type_ch = this.chartItem[item.idx].type_ch.filter(e => e.id !== "uv");
            } 
        },
        rainfall(item){
            if (item.color.rainfallcolor === "dark"){
                item.color.rainfallcolor = "primary";
                this.chartItem[item.idx].type.push("rainfall"); 
                this.chartItem[item.idx].type_ch.push({ 'id':'rainfall', 'text':'雨量' });
            }
            else{
                item.color.rainfallcolor = "dark";
                this.chartItem[item.idx].type = this.chartItem[item.idx].type.filter(e => e !== "rainfall");
                this.chartItem[item.idx].type_ch = this.chartItem[item.idx].type_ch.filter(e => e.id !== "rainfall");
            } 
        },
        setday(item){
            item.time = "day";
            item.timecolor.timeday = "success";
            item.timecolor.timehour = "dark";
            item.timecolor.timemin = "dark";
            item.rainbtn = false;
        },
        sethour(item){
            item.time = "hour"; 
            item.timecolor.timeday = "dark";
            item.timecolor.timehour = "success";
            item.timecolor.timemin = "dark";
            item.rainbtn = false;
        },
        setmin(item){
            item.time = "min";
            item.timecolor.timeday = "dark";
            item.timecolor.timehour = "dark";
            item.timecolor.timemin = "success";
            item.rainbtn = true;
            item.color.rainfallcolor = "dark";
            item.type = item.type.filter(e => e !== "rainfall");
            item.type_ch = item.type_ch.filter(e => e.id !== "rainfall");
        },
        setchartnormal(){
            this.chartloading = false;
            this.charttwoloading = false;
            this.width = '98%';
            this.chartnormal = 'primary';
            this.chartsmall = 'dark';
        },
        async setchartsmall(){
            this.chartloading = false;
            this.charttwoloading = false;
            this.width = '1185px';
            this.chartnormal = 'dark';
            this.chartsmall = 'primary';
        },
        starttextset(){
            this.start = this.startDate + ':00';
            const a = this.startDate.split(" ");
            this.startdate = a[0];
            this.starttime = a[1];
        },
        startdatetime(){
            this.startDate = this.startdate + " " + this.starttime;
            this.start = this.startdate + " " + this.starttime + ":00";
            this.menustart = false;
        },
        endtextset(){
            this.end = this.endDate + ':00';
            const a = this.endDate.split(" ");
            this.enddate = a[0];
            this.endtime = a[1];
        },
        enddatetime(){
            this.endDate = this.enddate + " " + this.endtime;
            this.end = this.enddate + " " + this.endtime + ":00";
            // console.log(this.endDate);
            this.menuend = false;
        },
        advanced_selecttype(x){
            this.chartItem[this.idx].advanced.splice(x.idx,1,x);
            this.chartItem[this.idx].chip.splice(x.idx,1,x);
        },
        advanced_selectoption(x){
            this.chartItem[this.idx].advanced.splice(x.idx,1,x);
            this.chartItem[this.idx].chip.splice(x.idx,1,x);
        },
        advanced_value(x){
            this.chartItem[this.idx].advanced.splice(x.idx,1,x);
            this.chartItem[this.idx].chip.splice(x.idx,1,x);
        },
        //chartbar.vue
        setEditdialog(){
            this.editdialog = true;
        },
        closeEditdialog(){
            this.editdialog = false;
        },
        plusEditCol(){
            // console.log(this.chartItem);
            if (this.chartItem.length < 4) {
                this.chartItem.push(
                    {
                        'idx': this.editidx,
                        'type': [],
                        'type_ch': [],
                        'charttype': 'line',
                        'time': 'day',
                        'advanced': [],
                        'funcdone': false,
                        'chip': [],
                        'chipAdvanced': [],
                        'rainbtn': false,
                        'color': {
                            tempcolor: "dark",
                            humiditycolor: "dark",
                            atpcolor: "dark",
                            luminancecolor: "dark",
                            eccolor: "dark",
                            phcolor: "dark",
                            soil_tempcolor: "dark",
                            soil_humidcolor: "dark",
                            uvcolor: "dark",
                            rainfallcolor:"dark",
                        },
                        timecolor: {
                            timeday: 'success',
                            timehour: 'dark',
                            timemin: 'dark',
                        },
                        charttypecolor:{
                            line: 'amber darken-3',
                            bar: 'dark'
                        }
                    }
                )
                this.editidx += 1;
            }
        },
        closeEditCol(item){
            this.chartItem.splice(item.idx,1);
            this.chartItem.forEach(i => {
                if (i.idx > item.idx) {
                    i.idx = i.idx - 1;
                }
            })
            this.editidx -= 1;
        },
        setchartLine(item){
            item.charttype = 'line';
            item.charttypecolor.line = 'amber darken-3';
            item.charttypecolor.bar = 'dark';
        },
        setchartBar(item){
            item.charttype = 'bar';
            item.charttypecolor.line = 'dark';
            item.charttypecolor.bar = 'amber darken-3';
        },
    }
}
</script>

<template>
    <v-app>
        <v-main>
            <v-container fluid>
                <v-row justify="center">
                    <v-col cols="12">
                        <v-dialog v-model="editdialog" width="1300">
                            <v-card dark>
                                <v-toolbar
                                    flat
                                    height="70"
                                    bottom
                                    dark
                                    class="mb-2"
                                >
                                    <v-toolbar-title><h3>編輯</h3></v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-text-field
                                        v-model="startDate"
                                        label="開始日"
                                        hide-details
                                        prepend-icon="mdi-calendar"
                                        @click:prepend="openstart"
                                        class="shrink"
                                        @change="starttextset"
                                    ></v-text-field>
                    <!-- 起始日 --> <v-dialog
                                        v-model="menustart"
                                        persistent
                                        width="600px"
                                    >
                                        <v-card dark>
                                            <v-card-title>
                                                <h3>開始日</h3>
                                            </v-card-title>
                                            <v-container>
                                                <v-row>
                                                    <v-col
                                                    cols="12"
                                                    sm="6"
                                                    >
                                                        <v-date-picker
                                                        v-model="startdate"
                                                        scrollable
                                                        locale="zh-tw"
                                                        full-width
                                                        :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                                                        >
                                                        </v-date-picker>
                                                    </v-col>
                                                    <v-col
                                                    cols="12"
                                                    sm="6"
                                                    >
                                                        <v-time-picker
                                                        v-model="starttime"
                                                        ampm-in-title
                                                        full-width
                                                        ></v-time-picker>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                            <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                dark
                                                @click="closestart"
                                            >
                                                取消
                                            </v-btn>
                                            <v-btn
                                                color="success"
                                                @click="startdatetime()"
                                                :disabled="startcheck"
                                            >
                                                確定
                                            </v-btn>
                                            </v-card-actions>
                                        </v-card>                        
                                    </v-dialog>
                                    <v-spacer></v-spacer>
                                    <v-text-field
                                        v-model="endDate"
                                        label="結束日"
                                        prepend-icon="mdi-calendar"
                                        @click:prepend="openend"
                                        hide-details
                                        @change="endtextset"
                                        class="shrink"
                                    ></v-text-field>
                    <!-- 結束日 --> <v-dialog
                                        v-model="menuend"
                                        persistent
                                        width="600px"
                                    >
                                    <v-card dark>
                                        <v-card-title>
                                            <h3>結束日</h3>
                                        </v-card-title>
                                            <v-container>
                                            <v-row>
                                                <v-col
                                                cols="12"
                                                sm="6"
                                                >
                                                    <v-date-picker
                                                    v-model="enddate"
                                                    scrollable
                                                    locale="zh-tw"
                                                    full-width
                                                    :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                                                    >
                                                    </v-date-picker>
                                                </v-col>
                                                <v-col
                                                cols="12"
                                                sm="6"
                                                
                                                >
                                                    <v-time-picker
                                                    v-model="endtime"
                                                    ampm-in-title
                                                    full-width
                                                    ></v-time-picker>
                                                </v-col>
                                            </v-row>
                                            </v-container>      
                                            <v-card-actions>
                                            <v-spacer></v-spacer>
                                                <v-btn
                                                    dark
                                                    @click="closeend"
                                                >
                                                    取消
                                                </v-btn>
                                                <v-btn
                                                    color="success"
                                                    @click="enddatetime()"
                                                    :disabled="endcheck"
                                                >
                                                    確認
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>                        
                                    </v-dialog>
                                    <v-spacer></v-spacer>
                                    <v-btn :color="chartnormal" fab small elevation="3" @click="setchartnormal">原圖</v-btn>    
                                    <v-btn :color="chartsmall" fab small elevation="3" @click="setchartsmall" class="mx-3">小圖</v-btn> 
                                    <v-spacer></v-spacer>
                                    <v-btn :disabled="PlusEditbtn" color="primary" fab dark small @click="plusEditCol">
                                        <v-icon dark>mdi-plus</v-icon>
                                    </v-btn>
                                </v-toolbar>
                                <v-card-text>
                                    <v-row v-for="item in chartItem" :key="item.idx" class="border">
                                        <v-col cols="1">
                                            <v-btn color="red lighten-2" small text icon @click="closeEditCol(item)" class="mt-5"> 
                                                <v-icon>
                                                    mdi-close
                                                </v-icon>
                                            </v-btn>
                                        </v-col>
                                        <v-col lg="5" md="5" sm="4" cols="4">
                                            <v-btn   
                                                class="ma-1"
                                                :color="item.color.tempcolor"
                                                @click="temp(item)"
                                                elevation="10"
                                            >溫度</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.humiditycolor"
                                                @click="humidity(item)"
                                                elevation="10"
                                            >濕度</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.soil_tempcolor"
                                                @click="soil_temp(item)"
                                                elevation="10"
                                            >土壤溫度</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.soil_humidcolor"
                                                @click="soil_humid(item)"
                                                elevation="10"
                                            >土壤濕度</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.phcolor"
                                                @click="ph(item)"
                                                elevation="10"
                                            >PH值</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.eccolor"
                                                @click="ec(item)"
                                                elevation="10"
                                            >導電度</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.luminancecolor"
                                                @click="luminance(item)"
                                                elevation="10"
                                            >光照</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.uvcolor"
                                                @click="uv(item)"
                                                elevation="10"
                                            >UV值</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.atpcolor"
                                                @click="atp(item)"
                                                elevation="10"
                                            >大氣壓力</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.rainfallcolor"
                                                @click="rainfall(item)"
                                                elevation="10"
                                                :disabled="item.rainbtn"
                                            >雨量</v-btn>
                                        </v-col>
                                        <v-col lg="2" md="2" sm="3" cols="2">
                                            <v-btn :color="item.charttypecolor.line" fab small elevation="3" @click="setchartLine(item)" class="mt-5">折線</v-btn>    
                                            <v-btn :color="item.charttypecolor.bar" fab small elevation="3" @click="setchartBar(item)" class="mx-1 mt-5">長條</v-btn>     
                                        </v-col>
                                        <v-col lg="2" md="2" sm="3" cols="3">
                                            <v-btn :color="item.timecolor.timeday" fab small elevation="3" @click="setday(item)" class="mt-5">天</v-btn>    
                                            <v-btn :color="item.timecolor.timehour" fab small elevation="3" @click="sethour(item)" class="mx-1 mt-5">時</v-btn>    
                                            <v-btn :color="item.timecolor.timemin" fab small elevation="3" @click="setmin(item)" class="mt-5">分</v-btn> 
                                        </v-col>
                                        <v-col lg="1" md="1" sm="2" cols="3">
                                            <v-btn
                                                color="primary"
                                                elevation="8"
                                                @click="morefunc(item)"
                                                class="mt-5 ml-5"
                                            >
                                                <v-icon left>
                                                    mdi-cog-outline
                                                </v-icon>
                                                篩選
                                            </v-btn>
                                        </v-col>
                                        <v-col v-if="item.funcdone" cols="12">
                                            <v-chip v-for="y in chartItem[item.idx].chipAdvanced" :key="y.idx" close class="mr-2" @click:close="advanced_close(y, item)" color="primary">
                                                <span v-if="y.sensor == 'temp'">溫度 {{y.operation}} {{y.value}}</span> 
                                                <span v-if="y.sensor == 'humidity'">濕度 {{y.operation}} {{y.value}}</span> 
                                                <span v-if="y.sensor == 'luminance'">光照 {{y.operation}} {{y.value}}</span> 
                                                <span v-if="y.sensor == 'atp'">大氣壓力 {{y.operation}} {{y.value}}</span> 
                                                <span v-if="y.sensor == 'ec'">導電度 {{y.operation}} {{y.value}}</span> 
                                                <span v-if="y.sensor == 'ph'">PH值 {{y.operation}} {{y.value}}</span> 
                                                <span v-if="y.sensor == 'soil_humid'">土壤濕度 {{y.operation}} {{y.value}}</span> 
                                                <span v-if="y.sensor == 'soil_temp'">土壤溫度 {{y.operation}} {{y.value}}</span> 
                                                <span v-if="y.sensor == 'uv'">UV值 {{y.operation}} {{y.value}}</span> 
                                                <span v-if="y.sensor == 'rainfall'">雨量 {{y.operation}} {{y.value}}</span> 
                                            </v-chip>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn dark class="mr-2" @click="closeEditdialog">取消</v-btn>
                                    <v-btn dark color="error" class="mr-2" @click="clear">清除</v-btn>
                                    <v-btn dark color="success" class="mr-2" @click="searchdata">搜尋</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog
                            v-model="dialogfunc"
                            width="600px"
                        >
                            <v-card dark>
                                <v-toolbar dark flat class="text-h5">
                                    <v-icon left>
                                        mdi-cog-outline
                                    </v-icon>
                                    篩選
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" fab dark small elevation="10" @click="advanced_plus"> 
                                        <v-icon dark>
                                            mdi-plus
                                        </v-icon>
                                    </v-btn>
                                </v-toolbar> 
                                <v-card-text>
                                    <v-container>
                                        <v-row v-for="x in advanced" :key="x.idx">
                                            <v-col cols="1" class="mr-2">
                                                <v-btn color="red lighten-2" small text icon @click="advanced_close(x)" class="mt-5"> 
                                                    <v-icon>
                                                        mdi-close
                                                    </v-icon>
                                                </v-btn>
                                            </v-col>
                                            <v-col>
                                                <v-select
                                                    v-model="x.sensor"
                                                    :items="chartItem[idx].type_ch"
                                                    item-text="text"
                                                    item-value="id"
                                                    label="感測器"
                                                    hide-details
                                                    @input="advanced_selecttype(x)"
                                                ></v-select>    
                                            </v-col>
                                            <v-col>
                                                <v-select
                                                    v-model="x.operation"
                                                    :items="['>','>=','=','<=','<']"
                                                    label="判斷"
                                                    hide-details
                                                    @input="advanced_selectoption(x)"
                                                ></v-select> 
                                            </v-col>
                                            <v-col>
                                                <v-text-field 
                                                    v-model="x.value"
                                                    @input="advanced_value(x)"
                                                >
                                                    {{x.value}}
                                                </v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn @click="dialogfunc_close">取消</v-btn>
                                    <v-btn color="success" @click="dialogfunc_finish">完成</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog> 
                        <v-card dark class="rounded-t" tile>
                            <v-toolbar
                                flat
                                height="60"
                                bottom
                                dark
                            >
                                <v-toolbar-title><h3>多圖分析</h3></v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="primary"
                                    elevation="8"
                                    @click="setEditdialog"
                                >
                                    <v-icon left>mdi-square-edit-outline</v-icon>
                                    編輯
                                </v-btn>
                                <!-- <template v-slot:extension>
                                    
                                </template> -->
                            </v-toolbar>
                            <v-tabs background-color="transparent" color="cyan accent-3" slider-color="cyan accent-3" v-model="tab">
                                <v-tab href="#tab-1">全部</v-tab>
                                <v-tab href="#tab-2">圖1</v-tab>
                                <v-tab href="#tab-3">圖2</v-tab>
                                <v-tab href="#tab-4">圖3</v-tab>
                                <v-tab href="#tab-5">圖4</v-tab>
                            </v-tabs>
                            <v-tabs-items v-model="tab">
                                <v-tab-item value="tab-1">
                                   <v-card dark height="800px" tile>
                                       
                                   </v-card>
                                </v-tab-item>
                                <v-tab-item value="tab-2">
                                   <v-card dark height="800px" tile>
                                       
                                   </v-card>
                                </v-tab-item>
                                <v-tab-item value="tab-3">
                                   <v-card dark height="800px" tile>
                                       
                                   </v-card>
                                </v-tab-item>
                                <v-tab-item value="tab-4">
                                   <v-card dark height="800px" tile>
                                       
                                   </v-card>
                                </v-tab-item>
                                <v-tab-item value="tab-5">
                                   <v-card dark height="800px" tile>
                                       
                                   </v-card>
                                </v-tab-item>
                            </v-tabs-items>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12">
                        <v-progress-linear
                            :active="loading"
                            :indeterminate="loading"
                            absolute
                            top
                            color="#40b47f"
                        ></v-progress-linear>
                        <OriDataChart v-if="chartloading" :chartWidth="width" :chartHeight="height" :title="Title" :charttitle="Charttitle"
                        :timeData="TimeData"
                        :tempData="TempData" 
                        :humidityData="HumidityData"
                        :luminanceData="LuminanceData"
                        :atpData="AtpData"
                        :ecData="EcData"
                        :phData="PhData"
                        :soil_tempData="Soil_tempData"
                        :soil_humidData="Soil_humidData"
                        :uvData="UvData"
                        :rainfallData="RainfallData"
                        />
                        <OriDataChartTwoSer v-if="charttwoloading" :chartWidth="width" :chartHeight="height" :title="Title" :charttitle="Charttitle"
                        :timeData="TimeData"
                        :leftdata="LeftData"
                        :rightdata="RightData"
                        :type1title="Type1"
                        :type2title="Type2"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped>
    .shrink{
       width: auto;
    }
    .border{
        border-bottom: 1px solid #686868;
    }
</style>


