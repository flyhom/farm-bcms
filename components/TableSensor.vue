<script>
export default {
    data(){
        return{
            loading: false,
            showtable: false,
            headerArray: [
                { text: '欄位名稱/相似度', value: 'header', width: '100', align: 'center', divider: true, sortable: false },
                { text: '大氣壓力', value: 'atp', width: '100', align: 'center', divider: true, sortable: false },
                { text: 'EC值', value: 'ec', width: '100', align: 'center', divider: true, sortable: false },
                { text: '濕度', value: 'humidity', width: '100', align: 'center', divider: true, sortable: false },
                { text: '光照', value: 'luminance', width: '100', align: 'center', divider: true, sortable: false },
                { text: 'PH值', value: 'ph', width: '100', align: 'center', divider: true, sortable: false },
                { text: '土壤濕度', value: 'soil_humid', width: '100', align: 'center', divider: true, sortable: false },
                { text: '土壤溫度', value: 'soil_temp', width: '100', align: 'center', divider: true, sortable: false },
                { text: '溫度', value: 'temp', width: '100', align: 'center', divider: true, sortable: false },
                { text: 'UV值', value: 'uv', width: '100', align: 'center', divider: true, sortable: false },
            ],
            page: 1,
            pageCount: 0,
            //datePicker
            selecttime:'min',
            activePicker: null,
            menustart: false,
            menuend: false,
            starttime: '00:00',
            startdate: '2021-04-01',
            start: '2021-04-01 00:00:00',
            enddate: '2021-05-01',
            endtime: '00:00',
            end: '2021-05-01 00:00:00',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            datetime: null,
            //typebtn
            //timebtn
            timeday: "dark",
            timehour: "dark",
            timemin: "success",
            
            analyticsdata: [],
            startDate: '2021-04-01 00:00',
            endDate: '2021-05-01 00:00',

            csvheader:{
                header: '欄位名稱/相似度',
                atp: '大氣壓力',
                ec: 'EC值',
                humidity: '濕度',
                luminance: '光照',
                ph: 'PH值',
                soil_humid: '土壤濕度',
                soil_temp: '土壤溫度',
                temp: '溫度',
                uv: 'UV值',
            }
        }
    },
    mounted(){
        if (this.$store.getters.AnalyticsData.length !== 0 ) {
            this.showtable = true;
        }
    },
    computed:{
        AnalyticsData(){
            this.analyticsdata = this.$store.getters.AnalyticsData;
            return this.$store.getters.AnalyticsData;
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
        downloadbtn(){
            if (this.analyticsdata.length == 0) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    methods:{
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
        //search
        async searchdata(){
            this.loading = true;
            await this.$store.dispatch('analyticsdata', {
                start_time: this.start, 
                end_time: this.end, 
                time: this.selecttime
            });
            // console.log(this.typeheaders);
            this.showtable = true;
            this.loading = false;
        },
        setday(){
            this.selecttime = "day";
            this.timeday = "success";
            this.timehour = "dark";
            this.timemin = "dark";
        },
        sethour(){
            this.selecttime = "hour"; 
            this.timeday = "dark";
            this.timehour = "success";
            this.timemin = "dark";
        },
        setmin(){
            this.selecttime = "min";
            this.timeday = "dark";
            this.timehour = "dark";
            this.timemin = "success";
        },
        starttextset(){
            this.start = this.startDate + ':00';
            const x = this.startDate.split(" ");
            this.startdate = x[0];
            this.starttime = x[1];
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
    }
}
</script>

<template>
    <div>
        <v-row>
            <v-col>
                <v-card dark class="ma-1">
                    <v-app-bar
                        flat
                        height="80"
                    >          
                        <v-toolbar-title>
                            <h3>感測器相似度</h3>
                        </v-toolbar-title>                       
                        <v-spacer></v-spacer>
    <!-- 起始日 -->      <v-text-field
                            v-model="startDate"
                            label="開始日"
                            hide-details
                            prepend-icon="mdi-calendar"
                            @click:prepend="openstart"
                            class="shrink"
                            @change="starttextset"
                        ></v-text-field>
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
                            <v-btn :color="timeday" fab small elevation="3" @click="setday" disabled>天</v-btn>    
                            <v-btn :color="timehour" fab small elevation="3" @click="sethour" class="mx-3" disabled>時</v-btn>    
                            <v-btn :color="timemin" fab small elevation="3" @click="setmin">分</v-btn>    
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
                        <downloadCsv :data="AnalyticsData" name="感測器相似度.csv" :labels="csvheader">
                            <v-btn
                                color="primary"
                                elevation="8"
                                fab
                                small
                                dark
                                :disabled="downloadbtn"
                            >
                                <v-icon dark>mdi-download</v-icon>
                            </v-btn>
                        </downloadCsv>
                    </v-app-bar>
                    <v-card-text>
                        <v-container fluid>
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
                                        v-if="showtable"
                                        dark
                                        :items="AnalyticsData"
                                        :headers="headerArray"
                                        fixed-header
                                        height="490px"
                                        loading-text="正在載入資料..."
                                        no-data-text="無資料"
                                        class="elevation-1 element"
                                        hide-default-footer
                                    >   
                                        <template v-slot:no-data>
                                            <div>無資料</div>
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
    .shrink{
        width: auto;
    }
</style>