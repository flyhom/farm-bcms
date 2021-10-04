<script>
export default {
    data(){
        return{
            loading: false,
            headerArray: [
                { text: '日期', value: 'time'},
                { text: '溫度', value: 'temp' },
                { text: '濕度', value: 'humidity' },
                { text: '大氣壓力', value: 'atp', },
                { text: '光照', value: 'luminance' },
                { text: 'EC值', value: 'ec' },
                { text: 'PH值', value: 'ph' },
                { text: '土壤溫度', value: 'soil_temp' },
                { text: '土壤濕度', value: 'soil_humid' },
                { text: 'UV值', value: 'uv' },
            ],
            page: 1,
            pageCount: 0,
            //datePicker
            type: [],
            type_ch: [],
            advanced: [],
            chip: [],
            selecttime:'day',
            activePicker: null,
            menustart: false,
            menuend: false,
            starttime: '00:00',
            startdate: '2021-04-01',
            start: '',
            enddate: '2021-05-01',
            endtime: '00:00',
            end: '',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            datetime: null,
            //typebtn
            tempcolor: "dark", 
            humiditycolor: "dark",
            atpcolor: "dark",
            luminancecolor: "dark",
            eccolor: "dark",
            phcolor: "dark",
            soil_tempcolor: "dark",
            soil_humidcolor: "dark",
            uvcolor: "dark",
            dialogfunc: false,
            
            farmdata: [],
            typeheaders: [],
            showheaders: [],

            idx: 0,
            funcdone: false,
        }
    },
    // mounted(){
    //     window.addEventListener("scroll", this.scrolling)
    // },
    computed:{
        FarmData(){
            this.farmdata = this.$store.getters.FarmData;
            return this.$store.getters.FarmData;
        },
        startDate(){
            if (this.starttime == '' || this.startdate == '') {
                this.start = '';
                return '';
            }
            this.start = this.startdate + " " + this.starttime + ":00";
            return this.startdate + " " + this.starttime
        },
        endDate(){
            if (this.endtime == '' || this.enddate == '') {
                this.end = '';
                return '';
            }
            this.end = this.enddate + " " + this.endtime + ":00";
            return this.enddate + " " + this.endtime
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
    },
    methods:{
        advanced_plus(){
            this.advanced.push(
                {
                    'idx': this.idx,
                    'sensor': this.selecttype,
                    'operation': this.selectoption,
                    'value': this.value,
                }
            )
            this.chip.push(
                {
                    'idx': this.idx,
                    'sensor': this.selecttype,
                    'operation': this.selectoption,
                    'value': this.value,
                }
            )
            this.idx += 1;
        },
        advanced_close(item){
            this.advanced.splice(item.idx,1);
            this.advanced.forEach(i => {
                if (i.idx > item.idx) {
                    i.idx = i.idx - 1;
                }
            })
            this.chip.splice(item.idx,1);
            this.chip.forEach(i => {
                if (i.idx > item.idx) {
                    i.idx = i.idx - 1;
                }
            })
            this.idx -= 1;
            // console.log(this.advanced);
            if (this.advanced.length == 0) {
                this.funcdone = false;
            }
        },
        dialogfunc_finish(){
            this.dialogfunc = false;
            this.funcdone = true;
        },
        dialogfunc_close(){
            this.dialogfunc = false;
            // this.advanced = [];
            // this.chip = [];
        },
        morefunc(){
            this.dialogfunc = true;
        },
        closestart(){
            this.menustart = false;
            this.startdate = '';
            this.starttime = '';
        },
        closeend(){
            this.menuend = false;
            this.enddate = '';
            this.endtime = '';
        },
        clear(){
            this.$store.dispatch("handClearfarm");
            this.showheaders = [];
            this.tempcolor = "dark"; 
            this.humiditycolor = "dark";
            this.atpcolor = "dark";
            this.luminancecolor = "dark";
            this.eccolor = "dark";
            this.phcolor = "dark";
            this.soil_tempcolor = "dark";
            this.soil_humidcolor = "dark";
            this.uvcolor = "dark";
            this.type = [];
            this.advanced = [];
            this.chip = [];
        },
        //search
        async searchdata(){
            this.loading = true;
            await this.$store.dispatch('farmdata', {
                type: this.type, 
                advanced: this.advanced,
                start_time: this.start, 
                end_time: this.end, 
                time: this.selecttime
            });
            if (this.$store.getters.IsFarm){
                this.typeheaders = ['time'];
                this.typeheaders = this.typeheaders.concat(this.type);
                this.showheaders = this.headerArray.filter(e => this.typeheaders.includes(e.value));
            }
            else {
                this.typeheaders = [];
            }
            // console.log(this.typeheaders);
            this.loading = false;
        },
        temp(){
            if (this.tempcolor === "dark"){
                this.tempcolor = "primary";   
                this.type.push("temp");
                this.type_ch.push({ 'id':'temp', 'text':'溫度' });      
                this.typeheaders.push("temp");      
            }
            else{
                this.tempcolor = "dark"; 
                this.type = this.type.filter(e => e !== "temp");
                this.type_ch = this.type_ch.filter(e => e.id !== "temp");
                this.typeheaders = this.typeheaders.filter(e => e !== "temp");        
            }
        },
        humidity(){
            if (this.humiditycolor === "dark"){
                this.humiditycolor = "primary";
                this.type.push("humidity");
                this.type_ch.push({ 'id':'humidity', 'text':'濕度' });
                this.typeheaders.push("humidity");
            }
            else{
                this.humiditycolor = "dark";
                this.type = this.type.filter(e => e !== "humidity");
                this.typeheaders = this.typeheaders.filter(e => e !== "humidity");
            }
        },
        atp(){
            if (this.atpcolor === "dark"){
                this.atpcolor = "primary";
                this.type.push("atp");
                this.type_ch.push({ 'id':'atp', 'text':'大氣壓力' });
                this.typeheaders.push("atp"); 
            }
            else{
                this.atpcolor = "dark";
                this.type = this.type.filter(e => e !== "atp");
                this.typeheaders = this.typeheaders.filter(e => e !== "atp");
            }  
        },
        luminance(){
            if (this.luminancecolor === "dark"){
                this.luminancecolor = "primary";
                this.type.push("luminance");
                this.type_ch.push({ 'id':'luminance', 'text':'光照' });
                this.typeheaders.push("luminance"); 
            }
            else{
                this.luminancecolor = "dark";
                this.type = this.type.filter(e => e !== "luminance");
                this.typeheaders = this.typeheaders.filter(e => e !== "luminance");
            }  
        },
        ec(){
            if (this.eccolor === "dark"){
                this.eccolor = "primary";
                this.type.push("ec");
                this.type_ch.push({ 'id':'ec', 'text':'EC值' });
                this.typeheaders.push("ec"); 
            }
            else{
                this.eccolor = "dark";
                this.type = this.type.filter(e => e !== "ec");
                this.typeheaders = this.typeheaders.filter(e => e !== "ec");
            }  
        },
        ph(){
            if (this.phcolor === "dark"){
                this.phcolor = "primary";
                this.type.push("ph");
                this.type_ch.push({ 'id':'ph', 'text':'PH值' });
                this.typeheaders.push("ph"); 
            }
            else{
                this.phcolor = "dark";
                this.type = this.type.filter(e => e !== "ph");
                this.typeheaders = this.typeheaders.filter(e => e !== "ph");
            }  
        },
        soil_temp(){
            if (this.soil_tempcolor === "dark"){
                this.soil_tempcolor = "primary";
                this.type.push("soil_temp");
                this.type_ch.push({ 'id':'soil_temp', 'text':'土壤溫度' });
                this.typeheaders.push("soil_temp"); 
            }
            else{
                this.soil_tempcolor = "dark";
                this.type = this.type.filter(e => e !== "soil_temp");
                this.typeheaders = this.typeheaders.filter(e => e !== "soil_temp");
            }  
        },
        soil_humid(){
            if (this.soil_humidcolor === "dark"){
                this.soil_humidcolor = "primary";
                this.type.push("soil_humid");
                this.type_ch.push({ 'id':'soil_humid', 'text':'土壤濕度' });
                this.typeheaders.push("soil_humid"); 
            }
            else{
                this.soil_humidcolor = "dark";
                this.type = this.type.filter(e => e !== "soil_humid");
                this.typeheaders = this.typeheaders.filter(e => e !== "soil_humid");
            }  
        },
        uv(){
            if (this.uvcolor === "dark"){
                this.uvcolor = "primary";
                this.type.push("uv"); 
                this.type_ch.push({ 'id':'uv', 'text':'UV值' });
                this.typeheaders.push("uv"); 
            }
            else{
                this.uvcolor = "dark";
                this.type = this.type.filter(e => e !== "uv");
                this.typeheaders = this.typeheaders.filter(e => e !== "uv");
            } 
        },
        advanced_selecttype(item){
            this.advanced.splice(item.idx,1,item);
            this.chip.splice(item.idx,1,item);
        },
        advanced_selectoption(item){
            this.advanced.splice(item.idx,1,item);
            this.chip.splice(item.idx,1,item);
        },
        advanced_value(item){
            this.advanced.splice(item.idx,1,item);
            this.chip.splice(item.idx,1,item);
        },
    }
}
</script>

<template>
    <div>
        <v-row>
            <v-col>
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
                                <v-row v-for="item in advanced" :key="item.idx">
                                    <v-col cols="1" class="mr-2">
                                        <v-btn color="red lighten-2" small text icon @click="advanced_close(item)" class="mt-5"> 
                                            <v-icon>
                                                mdi-close
                                            </v-icon>
                                        </v-btn>
                                    </v-col>
                                    <v-col>
                                        <v-select
                                            v-model="item.sensor"
                                            :items="type_ch"
                                            item-text="text"
                                            item-value="id"
                                            label="感測器"
                                            hide-details
                                            @input="advanced_selecttype(item)"
                                        ></v-select>    
                                    </v-col>
                                    <v-col>
                                        <v-select
                                            v-model="item.operation"
                                            :items="['>','>=','=','<=','<']"
                                            label="判斷"
                                            hide-details
                                            @input="advanced_selectoption(item)"
                                        ></v-select> 
                                    </v-col>
                                    <v-col>
                                        <v-text-field 
                                            v-model="item.value"
                                            @input="advanced_value(item)"
                                        >
                                            {{item.value}}
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
                <v-card dark class="ma-1">
                    <v-app-bar
                        flat
                        height="80"
                    >          
                        <v-toolbar-title>
                            <h3>感測器資料</h3>
                        </v-toolbar-title>                       
                        <v-spacer></v-spacer>
        <!-- 起始日 --> <v-dialog
                            ref="dialogstart"
                            v-model="menustart"
                            :return-value.sync="startdate"
                            persistent
                            width="600px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="startDate"
                                    label="開始日"
                                    readonly
                                    hide-details
                                    prepend-icon="mdi-calendar"
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>
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
                                    @click="$refs.dialogstart.save(startdate)"
                                    :disabled="startcheck"
                                >
                                    確定
                                </v-btn>
                                </v-card-actions>
                            </v-card>                        
                        </v-dialog>
                        <v-spacer></v-spacer>
        <!-- 結束日 --> <v-dialog
                            ref="dialogend"
                            v-model="menuend"
                            :return-value.sync="enddate"
                            persistent
                            width="600px"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="endDate"
                                label="結束日"
                                prepend-icon="mdi-calendar"
                                hide-details
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
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
                                        @click="$refs.dialogend.save(enddate)"
                                        :disabled="endcheck"
                                    >
                                        確認
                                    </v-btn>
                                </v-card-actions>
                            </v-card>                        
                        </v-dialog>
                        <v-spacer></v-spacer>
                        <v-select
                            v-model="selecttime"
                            :items="[{'id':'day', 'text':'天'},{'id':'hour','text':'時'},{'id':'min','text':'分'}]"
                            item-text="text"
                            item-value="id"
                            label="時間"
                            hide-details
                        ></v-select>    
                        <v-spacer></v-spacer>
                        <v-btn
                            color="#40b47f"
                            class="mr-5"
                            elevation="8"
                            @click="searchdata"
                        >
                            <v-icon left>
                                mdi-magnify
                            </v-icon>
                            
                            搜尋
                        </v-btn>
                        <v-btn
                            color="error"
                            class="mr-5"
                            elevation="8"
                            @click="clear"
                        >
                            <v-icon left>
                                mdi-delete-circle
                            </v-icon>
                            清除
                        </v-btn>
                        <v-btn
                            color="primary"
                            elevation="8"
                            @click="morefunc"
                        >
                            <v-icon left>
                                mdi-cog-outline
                            </v-icon>
                            篩選
                        </v-btn>
                    </v-app-bar>
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col v-if="funcdone">
                                    <v-chip v-for="item in chip" :key="item.idx" close class="mr-2" @click:close="advanced_close(item)" color="primary">
                                        <span v-if="item.sensor == 'temp'">溫度 {{item.operation}} {{item.value}}</span> 
                                        <span v-if="item.sensor == 'humidity'">濕度 {{item.operation}} {{item.value}}</span> 
                                        <span v-if="item.sensor == 'luminance'">光照 {{item.operation}} {{item.value}}</span> 
                                        <span v-if="item.sensor == 'atp'">大氣壓力 {{item.operation}} {{item.value}}</span> 
                                        <span v-if="item.sensor == 'ec'">EC值 {{item.operation}} {{item.value}}</span> 
                                        <span v-if="item.sensor == 'ph'">PH值 {{item.operation}} {{item.value}}</span> 
                                        <span v-if="item.sensor == 'soil_humid'">土壤濕度 {{item.operation}} {{item.value}}</span> 
                                        <span v-if="item.sensor == 'soil_temp'">土壤溫度 {{item.operation}} {{item.value}}</span> 
                                        <span v-if="item.sensor == 'uv'">UV值 {{item.operation}} {{item.value}}</span> 
                                    </v-chip>
                                </v-col>
                            </v-row>
                            <v-row justify="center">
                                <v-col class="text-center">
                                    <v-btn   
                                        :color="tempcolor"
                                        @click="temp"
                                        elevation="10"
                                    >溫度</v-btn>
                                </v-col>
                                <v-col class="text-center">
                                    <v-btn
                                        :color="humiditycolor"
                                        @click="humidity"
                                        elevation="10"
                                    >濕度</v-btn>
                                </v-col>
                                <v-col class="text-center">
                                    <v-btn
                                        :color="soil_tempcolor"
                                        @click="soil_temp"
                                        elevation="10"
                                    >土壤溫度</v-btn>
                                </v-col>
                                <v-col class="text-center">
                                    <v-btn
                                        :color="soil_humidcolor"
                                        @click="soil_humid"
                                        elevation="10"
                                    >土壤濕度</v-btn>
                                </v-col>
                                <v-col class="text-center">
                                    <v-btn
                                        :color="phcolor"
                                        @click="ph"
                                        elevation="10"
                                    >PH值</v-btn>
                                </v-col>
                                <v-col class="text-center">
                                    <v-btn
                                        :color="eccolor"
                                        @click="ec"
                                        elevation="10"
                                    >EC值</v-btn>
                                </v-col>
                                <v-col class="text-center">
                                    <v-btn
                                        :color="luminancecolor"
                                        @click="luminance"
                                        elevation="10"
                                    >光照</v-btn>
                                </v-col>
                                <v-col class="text-center">
                                    <v-btn
                                        :color="uvcolor"
                                        @click="uv"
                                        elevation="10"
                                    >UV值</v-btn>
                                </v-col>
                                <v-col class="text-center">
                                    <v-btn
                                        :color="atpcolor"
                                        @click="atp"
                                        elevation="10"
                                    >大氣壓力</v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-progress-linear
                                        :active="loading"
                                        :indeterminate="loading"
                                        absolute
                                        top
                                        color="#40b47f"
                                    ></v-progress-linear>
                                    <v-data-table
                                        dark
                                        :items="FarmData"
                                        :headers="showheaders"
                                        fixed-header
                                        height="490px"
                                        loading-text="正在載入資料..."
                                        no-data-text="無資料"
                                        sort-by="calories"
                                        class="elevation-1 element"
                                        :page.sync="page"
                                        @page-count="pageCount = $event"
                                        :footer-props="{
                                            showFirstLastPage: true,
                                            firstIcon: 'mdi-chevron-double-left',
                                            lastIcon: 'mdi-chevron-double-right',
                                            prevIcon: 'mdi-chevron-left',
                                            nextIcon: 'mdi-chevron-right',
                                            'items-per-page-text':'當前顯示筆數：',
                                            'items-per-page-options':[10, 20, 30, 50]
                                        }"
                                    >   
                                        <template v-slot:no-data>
                                            <div>無資料</div>
                                        </template>
                                        <template v-slot:footer.page-text>
                                            <v-row justify="center" align="center" no-gutters>
                                                <v-col cols="2"><span class="text">第</span></v-col>
                                                <v-col cols="6">
                                                    <v-text-field
                                                        :value="page"
                                                        solo
                                                        type="number"
                                                        min="-1"
                                                        class="centered-input mt-5 px-1"
                                                        @input="page = parseInt($event, 10)"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="2"><span class="text">頁</span></v-col>
                                            </v-row>
                                        </template>
                                    </v-data-table>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
    .centered-input >>> input {
        text-align: center;
    }
    ::v-deep input::-webkit-outer-spin-button,
    ::v-deep input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    /* .v-data-table__wrapper::-webkit-scrollbar {
        width: 24px;
        height: 8px;
        background-color: #508bce;
    } */
</style>