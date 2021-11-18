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
            chartloading: [
                false,false,false,false,
            ],
            charttwoloading: [
                false,false,false,false,
            ],
            width: '98%',
            widthall: '98%',
            height: '350px',
            height1: '700px',
            height2: '700px',
            height3: '700px',
            height4: '700px',
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
            startdate: '2021-02-01',
            start: '2021-02-01 00:00:00',
            enddate: '2021-03-01',
            endtime: '00:00',
            end: '2021-03-01 00:00:00',
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
            startDate: '2021-02-01 00:00',
            endDate: '2021-03-01 00:00',

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
            taball: false,
            tabone: false,
            tabtwo: false,
            tabthree: false,
            tabfour: false,
        }
    },
    mounted(){
        this.$store.dispatch('handClearchartmulti');
    },
    computed:{
        //chartmulti1
        LeftData1(){
            return this.$store.getters.LeftData1;
        },
        RightData1(){
            return this.$store.getters.RightData1;
        },
        Typeleft1(){
            return this.$store.getters.Typeleft1;
        },
        Typeright1(){
            return this.$store.getters.Typeright1;
        },
        TimeData1(){
            return this.$store.getters.TimeData1;
        },
        TempData1(){
            return this.$store.getters.TempData1;
        },
        HumidityData1(){
            return this.$store.getters.HumidityData1;
        },
        LuminanceData1(){
            return this.$store.getters.LuminanceData1;
        },
        AtpData1(){
            return this.$store.getters.AtpData1;
        },
        EcData1(){
            return this.$store.getters.EcData1;
        },
        PhData1(){
            return this.$store.getters.PhData1;
        },
        Soil_tempData1(){
            return this.$store.getters.Soil_tempData1;
        },
        Soil_humidData1(){
            return this.$store.getters.Soil_humidData1;
        },
        UvData1(){
            return this.$store.getters.UvData1;
        },
        RainfallData1(){
            return this.$store.getters.RainfallData1;
        },
        Title1(){
            return this.$store.getters.Type_ch1;
        },
        TitleTab1(){
            return `${this.$store.getters.Start1} - ${this.$store.getters.End1}`;
        },
        Charttitle1(){
            return `${this.$store.getters.Type_ch1} & ${this.$store.getters.Start1} - ${this.$store.getters.End1}`;
        },
        ChartType1(){
            return this.$store.getters.ChartType1;
        },
        //chartmulti2
        LeftData2(){
            return this.$store.getters.LeftData2;
        },
        RightData2(){
            return this.$store.getters.RightData2;
        },
        Typeleft2(){
            return this.$store.getters.Typeleft2;
        },
        Typeright2(){
            return this.$store.getters.Typeright2;
        },
        TimeData2(){
            return this.$store.getters.TimeData2;
        },
        TempData2(){
            return this.$store.getters.TempData2;
        },
        HumidityData2(){
            return this.$store.getters.HumidityData2;
        },
        LuminanceData2(){
            return this.$store.getters.LuminanceData2;
        },
        AtpData2(){
            return this.$store.getters.AtpData2;
        },
        EcData2(){
            return this.$store.getters.EcData2;
        },
        PhData2(){
            return this.$store.getters.PhData2;
        },
        Soil_tempData2(){
            return this.$store.getters.Soil_tempData2;
        },
        Soil_humidData2(){
            return this.$store.getters.Soil_humidData2;
        },
        UvData2(){
            return this.$store.getters.UvData2;
        },
        RainfallData2(){
            return this.$store.getters.RainfallData2;
        },
        Title2(){
            return this.$store.getters.Type_ch2;
        },
        TitleTab2(){
            return `${this.$store.getters.Start2} - ${this.$store.getters.End2}`;
        },
        Charttitle2(){
            return `${this.$store.getters.Type_ch2} & ${this.$store.getters.Start2} - ${this.$store.getters.End2}`;
        },
        ChartType2(){
            return this.$store.getters.ChartType2;
        },
        //chartmulti3
        LeftData3(){
            return this.$store.getters.LeftData3;
        },
        RightData3(){
            return this.$store.getters.RightData3;
        },
        Typeleft3(){
            return this.$store.getters.Typeleft3;
        },
        Typeright3(){
            return this.$store.getters.Typeright3;
        },
        TimeData3(){
            return this.$store.getters.TimeData3;
        },
        TempData3(){
            return this.$store.getters.TempData3;
        },
        HumidityData3(){
            return this.$store.getters.HumidityData3;
        },
        LuminanceData3(){
            return this.$store.getters.LuminanceData3;
        },
        AtpData3(){
            return this.$store.getters.AtpData3;
        },
        EcData3(){
            return this.$store.getters.EcData3;
        },
        PhData3(){
            return this.$store.getters.PhData3;
        },
        Soil_tempData3(){
            return this.$store.getters.Soil_tempData3;
        },
        Soil_humidData3(){
            return this.$store.getters.Soil_humidData3;
        },
        UvData3(){
            return this.$store.getters.UvData3;
        },
        RainfallData3(){
            return this.$store.getters.RainfallData3;
        },
        Title3(){
            return this.$store.getters.Type_ch3;
        },
        TitleTab3(){
            return `${this.$store.getters.Start3} - ${this.$store.getters.End3}`;
        },
        Charttitle3(){
            return `${this.$store.getters.Type_ch3} & ${this.$store.getters.Start3} - ${this.$store.getters.End3}`;
        },
        ChartType3(){
            return this.$store.getters.ChartType3;
        },
        //chartmulti4
        LeftData4(){
            return this.$store.getters.LeftData4;
        },
        RightData4(){
            return this.$store.getters.RightData4;
        },
        Typeleft4(){
            return this.$store.getters.Typeleft4;
        },
        Typeright4(){
            return this.$store.getters.Typeright4;
        },
        TimeData4(){
            return this.$store.getters.TimeData4;
        },
        TempData4(){
            return this.$store.getters.TempData4;
        },
        HumidityData4(){
            return this.$store.getters.HumidityData4;
        },
        LuminanceData4(){
            return this.$store.getters.LuminanceData4;
        },
        AtpData4(){
            return this.$store.getters.AtpData4;
        },
        EcData4(){
            return this.$store.getters.EcData4;
        },
        PhData4(){
            return this.$store.getters.PhData4;
        },
        Soil_tempData4(){
            return this.$store.getters.Soil_tempData4;
        },
        Soil_humidData4(){
            return this.$store.getters.Soil_humidData4;
        },
        UvData4(){
            return this.$store.getters.UvData4;
        },
        RainfallData4(){
            return this.$store.getters.RainfallData4;
        },
        Title4(){
            return this.$store.getters.Type_ch4;
        },
        TitleTab4(){
            return `${this.$store.getters.Start4} - ${this.$store.getters.End4}`;
        },
        Charttitle4(){
            return `${this.$store.getters.Type_ch4} & ${this.$store.getters.Start4} - ${this.$store.getters.End4}`;
        },
        ChartType4(){
            return this.$store.getters.ChartType4;
        },
        //
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
        PlusEditbtn(){
            if (this.chartItem.length == 4) {
                return true;
            }
            else {
                return false;
            }
        },
        searchbtncheck(){
            if (this.chartItem.length > 0) {
                return false;
            }
            else {
                return true;
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
            this.chartItem[this.idx].advanced.idx += 1;
        },
        advanced_close(y){
            this.chartItem[this.idx].advanced.splice(y.idx,1);
            this.chartItem[this.idx].advanced.forEach(i => {
                if (i.idx > y.idx) {
                    i.idx = i.idx - 1;
                }
            })
            this.chartItem[this.idx].chip.splice(y.idx,1);
            this.chartItem[this.idx].chip.forEach(i => {
                if (i.idx > y.idx) {
                    i.idx = i.idx - 1;
                }
            })  
            this.chartItem[this.idx].advanced.idx -= 1;
            if (this.chartItem[this.idx].advanced.length == 0) {
                this.chartItem[this.idx].funcdone = false;
            }
        },
        advanced_chip_close(y,item){
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
            this.type_ch = this.chartItem[this.idx].type_ch;
            this.dialogfunc = true;
        },
        openstart(item){
            this.idx = item.idx;
            this.startdate = this.chartItem[this.idx].startdate;
            this.starttime = this.chartItem[this.idx].starttime;
            this.menustart = true;
        },
        openend(item){
            this.idx = item.idx;
            this.enddate = this.chartItem[this.idx].enddate;
            this.endtime = this.chartItem[this.idx].endtime;
            this.menuend = true;
        },
        closestart(){
            this.menustart = false;
        },
        closeend(){
            this.menuend = false;
        },
        clear(){
            this.$store.dispatch("handClearchartmulti");
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
            this.chartloading = [
                false,false,false,false,
            ];
            this.charttwoloading = [
                false,false,false,false,
            ];
            this.starttime = '00:00';
            this.startdate = '2021-02-01';
            this.enddate = '2021-03-01';
            this.endtime = '00:00';
            this.old_type = [];
            this.charttitle = [];
            this.chartItem = [];
            this.editidx = 0;
            this.taball = false;
            this.tabone = false;
            this.tabtwo = false;
            this.tabthree = false;
            this.tabfour = false;
        },
        //search
        async searchdata(){
            for (let j = 0; j < this.chartItem.length; j++) {
                if (this.chartItem[j].type.length == 0) {
                    this.$toast.error("請選擇感測器", { 
                        icon: 'error' ,
                        duration: 3000,
                    });
                }
                else {
                    if (j == this.chartItem.length - 1) {
                        this.loading = true;
                        await this.$store.dispatch("handClearchartmulti");
                        this.editdialog = false;
                        this.chartloading = [
                            false,false,false,false,
                        ];
                        this.charttwoloading = [
                            false,false,false,false,
                        ];
                        this.charttitle = [];
                        this.tab = 'tab-1';
                        this.taball = false;
                        this.tabone = false;
                        this.tabtwo = false;
                        this.tabthree = false;
                        this.tabfour = false;
                        for (let i = 0; i < this.chartItem.length; i++) {
                            await this.$store.dispatch('handchartitemlength', this.chartItem.length);
                            
                            await this.$store.dispatch('handTypemulti', { arr: this.chartItem[i].type, id: i});
                            
                            await this.$store.dispatch('handTypeChmulti', { arr: this.chartItem[i].type_ch, id: i});
                            
                            await this.$store.dispatch('chartmultidata', {
                                type: this.chartItem[i].type, 
                                advanced: this.chartItem[i].advanced,
                                start_time: this.chartItem[i].start, 
                                end_time: this.chartItem[i].end, 
                                time: this.chartItem[i].time,
                                id: i,
                                charttype: this.chartItem[i].charttype,
                            });
                            if (this.chartItem[i].type.length == 2) {
                                this.charttwoloading[i] = true;
                            }
                            else {
                                this.chartloading[i] = true;
                            } 
                            
                        }
                        this.taball = true;
                        this.tabone = true;
                        this.tabtwo = true;
                        this.tabthree = true;
                        this.tabfour = true;
                        this.loading = false;
                    }
                }
            }
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
        starttextset(item){
            this.idx = item.idx;
            this.chartItem[this.idx].start = item.startDate + ':00';
            const a = item.startDate.split(" ");
            this.chartItem[this.idx].startdate = a[0];
            this.chartItem[this.idx].starttime = a[1];
            this.startdate = a[0];
            this.starttime = a[1];
        },
        startdatetime(){
            this.chartItem[this.idx].startDate = this.startdate + " " + this.starttime;
            this.chartItem[this.idx].start = this.startdate + " " + this.starttime + ":00";
            this.menustart = false;
        },
        endtextset(item){
            this.idx = item.idx;
            this.chartItem[this.idx].end = item.endDate + ':00';
            const a = item.endDate.split(" ");
            this.chartItem[this.idx].enddate = a[0];
            this.chartItem[this.idx].endtime = a[1];
            this.enddate = a[0];
            this.endtime = a[1];
        },
        enddatetime(){
            this.chartItem[this.idx].endDate = this.enddate + " " + this.endtime;
            this.chartItem[this.idx].end = this.enddate + " " + this.endtime + ":00";
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
                        'start': '2021-02-01 00:00:00',
                        'startDate': '2021-02-01 00:00',
                        'startdate': '2021-02-01',
                        'starttime': '00:00',
                        'end': '2021-03-01 00:00:00',
                        'endDate': '2021-03-01 00:00',
                        'enddate': '2021-03-01',
                        'endtime': '00:00',
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
                                    <v-btn :disabled="PlusEditbtn" color="primary" fab dark small @click="plusEditCol">
                                        <v-icon dark>mdi-plus</v-icon>
                                    </v-btn>
                                </v-toolbar>
                                <v-card-text>
                                    <v-row v-for="item in chartItem" :key="item.idx" class="border" no-gutters>
                                        <v-col cols="1" class="mt-12 ml-5">
                                            <v-btn color="red lighten-2" small text icon @click="closeEditCol(item)"> 
                                                <v-icon>
                                                    mdi-close
                                                </v-icon>
                                            </v-btn>
                                        </v-col>
                                        <v-col lg="2" md="3" sm="2" cols="6" class="mt-3 mb-6">
                                            <v-text-field
                                                v-model="item.startDate"
                                                label="開始日"
                                                hide-details
                                                prepend-icon="mdi-calendar"
                                                @click:prepend="openstart(item)"
                                                class="shrink"
                                                @change="starttextset(item)"
                                            ></v-text-field>
                            <!-- 起始日 -->
                                            <v-text-field
                                                v-model="item.endDate"
                                                label="結束日"
                                                prepend-icon="mdi-calendar"
                                                @click:prepend="openend(item)"
                                                hide-details
                                                @change="endtextset(item)"
                                                class="shrink"
                                            ></v-text-field>
                            <!-- 結束日 -->
                                        </v-col>
                                        <v-col lg="4" md="4" sm="3" cols="4" class="mt-lg-7 mt-md-3">
                                            <v-btn   
                                                class="ma-1"
                                                :color="item.color.tempcolor"
                                                @click="temp(item)"
                                                elevation="10"
                                                small
                                            >溫度</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.humiditycolor"
                                                @click="humidity(item)"
                                                elevation="10"
                                                small
                                            >濕度</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.soil_tempcolor"
                                                @click="soil_temp(item)"
                                                elevation="10"
                                                small
                                            >土壤溫度</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.soil_humidcolor"
                                                @click="soil_humid(item)"
                                                elevation="10"
                                                small
                                            >土壤濕度</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.phcolor"
                                                @click="ph(item)"
                                                elevation="10"
                                                small
                                            >PH值</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.eccolor"
                                                @click="ec(item)"
                                                elevation="10"
                                                small
                                            >導電度</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.luminancecolor"
                                                @click="luminance(item)"
                                                elevation="10"
                                                small
                                            >光照</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.uvcolor"
                                                @click="uv(item)"
                                                elevation="10"
                                                small
                                            >UV值</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.atpcolor"
                                                @click="atp(item)"
                                                elevation="10"
                                                small
                                            >大氣壓力</v-btn>
                                            <v-btn
                                                class="ma-1"
                                                :color="item.color.rainfallcolor"
                                                @click="rainfall(item)"
                                                elevation="10"
                                                small
                                                :disabled="item.rainbtn"
                                            >雨量</v-btn>
                                        </v-col>
                                        <v-col lg="3" md="2" sm="3" cols="2" class="ml-2 mt-5 ml-md-4">
                                            <v-row no-gutters>
                                                <v-col lg="6" cols="12" class="mt-lg-5">
                                                    <v-btn :color="item.charttypecolor.line" fab small elevation="3" @click="setchartLine(item)" >折線</v-btn>    
                                                    <v-btn :color="item.charttypecolor.bar" fab small elevation="3" @click="setchartBar(item)" class="ml-1">長條</v-btn>
                                                </v-col>
                                                <v-col lg="6" cols="12" class="mt-lg-5 mt-2">
                                                    <v-btn :color="item.timecolor.timeday" fab small elevation="3" @click="setday(item)">天</v-btn>    
                                                    <v-btn :color="item.timecolor.timehour" fab small elevation="3" @click="sethour(item)" class="mx-1">時</v-btn>    
                                                    <v-btn :color="item.timecolor.timemin" fab small elevation="3" @click="setmin(item)">分</v-btn> 
                                                </v-col>
                                            </v-row> 
                                        </v-col>
                                        <!-- <v-col lg="2" md="2" sm="3" cols="3" class="ml-6 mt-10">
                                            <v-btn :color="item.timecolor.timeday" fab small elevation="3" @click="setday(item)">天</v-btn>    
                                            <v-btn :color="item.timecolor.timehour" fab small elevation="3" @click="sethour(item)" class="mx-1">時</v-btn>    
                                            <v-btn :color="item.timecolor.timemin" fab small elevation="3" @click="setmin(item)">分</v-btn> 
                                        </v-col> -->
                                        <v-col lg="1" md="1" sm="2" cols="3" class="ml-5 mt-10">
                                            <v-btn
                                                color="primary"
                                                elevation="8"
                                                @click="morefunc(item)"
                                            >
                                                <v-icon left>
                                                    mdi-cog-outline
                                                </v-icon>
                                                篩選
                                            </v-btn>
                                        </v-col>
                                        <v-col v-if="item.funcdone" cols="12">
                                            <v-chip v-for="y in chartItem[item.idx].chipAdvanced" :key="y.idx" close class="mr-2" @click:close="advanced_chip_close(y, item)" color="primary">
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
                                    <v-btn dark color="success" class="mr-2" @click="searchdata" :disabled="searchbtncheck">搜尋</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog
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
                                    @click="startdatetime"
                                    :disabled="startcheck"
                                >
                                    確定
                                </v-btn>
                                </v-card-actions>
                            </v-card>                        
                        </v-dialog>
                        <v-dialog
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
                                        @click="enddatetime"
                                        :disabled="endcheck"
                                    >
                                        確認
                                    </v-btn>
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
                                        <v-row v-for="y in advanced" :key="y.idx">
                                            <v-col cols="1" class="mr-2">
                                                <v-btn color="red lighten-2" small text icon @click="advanced_close(y)" class="mt-5"> 
                                                    <v-icon>
                                                        mdi-close
                                                    </v-icon>
                                                </v-btn>
                                            </v-col>
                                            <v-col>
                                                <v-select
                                                    v-model="y.sensor"
                                                    :items="type_ch"
                                                    item-text="text"
                                                    item-value="id"
                                                    label="感測器"
                                                    hide-details
                                                    @input="advanced_selecttype(y)"
                                                ></v-select>    
                                            </v-col>
                                            <v-col>
                                                <v-select
                                                    v-model="y.operation"
                                                    :items="['>','>=','=','<=','<']"
                                                    label="判斷"
                                                    hide-details
                                                    @input="advanced_selectoption(y)"
                                                ></v-select> 
                                            </v-col>
                                            <v-col>
                                                <v-text-field 
                                                    v-model="y.value"
                                                    @input="advanced_value(y)"
                                                >
                                                    {{y.value}}
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
                                <v-tab href="#tab-2" v-show="TimeData1.length != 0">{{TitleTab1}}</v-tab>
                                <v-tab href="#tab-3" v-show="TimeData2.length != 0">{{TitleTab2}}</v-tab>
                                <v-tab href="#tab-4" v-show="TimeData3.length != 0">{{TitleTab3}}</v-tab>
                                <v-tab href="#tab-5" v-show="TimeData4.length != 0">{{TitleTab4}}</v-tab>
                            </v-tabs>
                            <v-progress-linear
                                :active="loading"
                                :indeterminate="loading"
                                absolute
                                top
                                color="#40b47f"
                            ></v-progress-linear>
                            <v-tabs-items v-model="tab">
                                <v-tab-item value="tab-1" v-if="taball">
                                    <v-card dark height="800px" tile>
                                        <v-row justify="center">
                                            <v-col cols="6">
                                                <OriDataChart v-if="chartloading[0]" :chartWidth="widthall" :chartHeight="height" :title="Title1" :charttitle="Charttitle1" :charttype="ChartType1"
                                                :timeData="TimeData1"
                                                :tempData="TempData1" 
                                                :humidityData="HumidityData1"
                                                :luminanceData="LuminanceData1"
                                                :atpData="AtpData1"
                                                :ecData="EcData1"
                                                :phData="PhData1"
                                                :soil_tempData="Soil_tempData1"
                                                :soil_humidData="Soil_humidData1"
                                                :uvData="UvData1"
                                                :rainfallData="RainfallData1"
                                                />
                                                <OriDataChartTwoSer v-if="charttwoloading[0]" :chartWidth="widthall" :chartHeight="height" :title="Title1" :charttitle="Charttitle1"  :charttype="ChartType1"
                                                :timeData="TimeData1"
                                                :leftdata="LeftData1"
                                                :rightdata="RightData1"
                                                :type1title="Typeleft1"
                                                :type2title="Typeright1"
                                                />
                                            </v-col>
                                            <v-col cols="6">
                                                <OriDataChart v-if="chartloading[1]" :chartWidth="widthall" :chartHeight="height" :title="Title2" :charttitle="Charttitle2" :charttype="ChartType2"
                                                :timeData="TimeData2"
                                                :tempData="TempData2" 
                                                :humidityData="HumidityData2"
                                                :luminanceData="LuminanceData2"
                                                :atpData="AtpData2"
                                                :ecData="EcData2"
                                                :phData="PhData2"
                                                :soil_tempData="Soil_tempData2"
                                                :soil_humidData="Soil_humidData2"
                                                :uvData="UvData2"
                                                :rainfallData="RainfallData2"
                                                />
                                                <OriDataChartTwoSer v-if="charttwoloading[1]" :chartWidth="widthall" :chartHeight="height" :title="Title2" :charttitle="Charttitle2" :charttype="ChartType2"
                                                :timeData="TimeData2"
                                                :leftdata="LeftData2"
                                                :rightdata="RightData2"
                                                :type1title="Typeleft2"
                                                :type2title="Typeright2"
                                                />
                                            </v-col>
                                            <v-col cols="6" class="mt-5">
                                                <OriDataChart v-if="chartloading[2]" :chartWidth="widthall" :chartHeight="height" :title="Title3" :charttitle="Charttitle3" :charttype="ChartType3"
                                                :timeData="TimeData3"
                                                :tempData="TempData3" 
                                                :humidityData="HumidityData3"
                                                :luminanceData="LuminanceData3"
                                                :atpData="AtpData3"
                                                :ecData="EcData3"
                                                :phData="PhData3"
                                                :soil_tempData="Soil_tempData3"
                                                :soil_humidData="Soil_humidData3"
                                                :uvData="UvData3"
                                                :rainfallData="RainfallData3"
                                                />
                                                <OriDataChartTwoSer v-if="charttwoloading[2]" :chartWidth="widthall" :chartHeight="height" :title="Title3" :charttitle="Charttitle3"  :charttype="ChartType3"
                                                :timeData="TimeData3"
                                                :leftdata="LeftData3"
                                                :rightdata="RightData3"
                                                :type1title="Typeleft3"
                                                :type2title="Typeright3"
                                                />
                                            </v-col>
                                            <v-col cols="6" class="mt-5">
                                                <OriDataChart v-if="chartloading[3]" :chartWidth="widthall" :chartHeight="height" :title="Title4" :charttitle="Charttitle4" :charttype="ChartType4"
                                                :timeData="TimeData4"
                                                :tempData="TempData4" 
                                                :humidityData="HumidityData4"
                                                :luminanceData="LuminanceData4"
                                                :atpData="AtpData4"
                                                :ecData="EcData4"
                                                :phData="PhData4"
                                                :soil_tempData="Soil_tempData4"
                                                :soil_humidData="Soil_humidData4"
                                                :uvData="UvData4"
                                                :rainfallData="RainfallData4"
                                                />
                                                <OriDataChartTwoSer v-if="charttwoloading[3]" :chartWidth="widthall" :chartHeight="height" :title="Title4" :charttitle="Charttitle4" :charttype="ChartType4"
                                                :timeData="TimeData4"
                                                :leftdata="LeftData4"
                                                :rightdata="RightData4"
                                                :type1title="Typeleft4"
                                                :type2title="Typeright4"
                                                />
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-tab-item>
                                <v-tab-item value="tab-2" v-if="tabone">
                                   <v-card dark height="800px" tile>
                                       <v-row justify="center">
                                            <v-col cols="12">
                                                <OriDataChart v-if="chartloading[0]" :chartWidth="width" :chartHeight="height1" :title="Title1" :charttitle="Charttitle1" :charttype="ChartType1"
                                                :timeData="TimeData1"
                                                :tempData="TempData1" 
                                                :humidityData="HumidityData1"
                                                :luminanceData="LuminanceData1"
                                                :atpData="AtpData1"
                                                :ecData="EcData1"
                                                :phData="PhData1"
                                                :soil_tempData="Soil_tempData1"
                                                :soil_humidData="Soil_humidData1"
                                                :uvData="UvData1"
                                                :rainfallData="RainfallData1"
                                                />
                                                <OriDataChartTwoSer v-if="charttwoloading[0]" :chartWidth="width" :chartHeight="height1" :title="Title1" :charttitle="Charttitle1" :charttype="ChartType1"
                                                :timeData="TimeData1"
                                                :leftdata="LeftData1"
                                                :rightdata="RightData1"
                                                :type1title="Typeleft1"
                                                :type2title="Typeright1"
                                                />
                                            </v-col>
                                        </v-row>
                                   </v-card>
                                </v-tab-item>
                                <v-tab-item value="tab-3" v-if="tabtwo">
                                   <v-card dark height="800px" tile>
                                       <v-row justify="center">
                                            <v-col cols="12">
                                                <OriDataChart v-if="chartloading[1]" :chartWidth="width" :chartHeight="height2" :title="Title2" :charttitle="Charttitle2" :charttype="ChartType2"
                                                :timeData="TimeData2"
                                                :tempData="TempData2" 
                                                :humidityData="HumidityData2"
                                                :luminanceData="LuminanceData2"
                                                :atpData="AtpData2"
                                                :ecData="EcData2"
                                                :phData="PhData2"
                                                :soil_tempData="Soil_tempData2"
                                                :soil_humidData="Soil_humidData2"
                                                :uvData="UvData2"
                                                :rainfallData="RainfallData2"
                                                />
                                                <OriDataChartTwoSer v-if="charttwoloading[1]" :chartWidth="width" :chartHeight="height2" :title="Title2" :charttitle="Charttitle2" :charttype="ChartType2"
                                                :timeData="TimeData2"
                                                :leftdata="LeftData2"
                                                :rightdata="RightData2"
                                                :type1title="Typeleft2"
                                                :type2title="Typeright2"
                                                />
                                            </v-col>
                                        </v-row>
                                   </v-card>
                                </v-tab-item>
                                <v-tab-item value="tab-4" v-if="tabthree">
                                   <v-card dark height="800px" tile>
                                       <v-row justify="center">
                                            <v-col cols="12">
                                                <OriDataChart v-if="chartloading[2]" :chartWidth="width" :chartHeight="height3" :title="Title3" :charttitle="Charttitle3" :charttype="ChartType3"
                                                :timeData="TimeData3"
                                                :tempData="TempData3" 
                                                :humidityData="HumidityData3"
                                                :luminanceData="LuminanceData3"
                                                :atpData="AtpData3"
                                                :ecData="EcData3"
                                                :phData="PhData3"
                                                :soil_tempData="Soil_tempData3"
                                                :soil_humidData="Soil_humidData3"
                                                :uvData="UvData3"
                                                :rainfallData="RainfallData3"
                                                />
                                                <OriDataChartTwoSer v-if="charttwoloading[2]" :chartWidth="width" :chartHeight="height3" :title="Title3" :charttitle="Charttitle3" :charttype="ChartType3"
                                                :timeData="TimeData3"
                                                :leftdata="LeftData3"
                                                :rightdata="RightData3"
                                                :type1title="Typeleft3"
                                                :type2title="Typeright3"
                                                />
                                            </v-col>
                                        </v-row>
                                   </v-card>
                                </v-tab-item>
                                <v-tab-item value="tab-5" v-if="tabfour">
                                   <v-card dark height="800px" tile>
                                       <v-row justify="center">
                                            <v-col cols="12">
                                                <OriDataChart v-if="chartloading[3]" :chartWidth="width" :chartHeight="height4" :title="Title4" :charttitle="Charttitle4" :charttype="ChartType4"
                                                :timeData="TimeData4"
                                                :tempData="TempData4" 
                                                :humidityData="HumidityData4"
                                                :luminanceData="LuminanceData4"
                                                :atpData="AtpData4"
                                                :ecData="EcData4"
                                                :phData="PhData4"
                                                :soil_tempData="Soil_tempData4"
                                                :soil_humidData="Soil_humidData4"
                                                :uvData="UvData4"
                                                :rainfallData="RainfallData4"
                                                />
                                                <OriDataChartTwoSer v-if="charttwoloading[3]" :chartWidth="width" :chartHeight="height4" :title="Title4" :charttitle="Charttitle4" :charttype="ChartType4"
                                                :timeData="TimeData4"
                                                :leftdata="LeftData4"
                                                :rightdata="RightData4"
                                                :type1title="Typeleft4"
                                                :type2title="Typeright4"
                                                />
                                            </v-col>
                                        </v-row>
                                   </v-card>
                                </v-tab-item>
                                <v-tab-item value="tab-6">
                                </v-tab-item>
                            </v-tabs-items>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped>
    .shrink{
       width: 160px;
    }
    .border{
        border-bottom: 1px solid #686868;
    }
</style>


