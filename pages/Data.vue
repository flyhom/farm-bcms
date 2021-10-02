<script>
import Chart from '@/components/Chart.vue';
export default {
  components:{
    Chart,
  },
  data(){
    return {
      loading: false,
      chartloading: false,
      width: '100%',
      height: '400px',
      title: '感測器數值',
      //查詢工具列
      type: [],
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
      tempcolor: "dark", 
      humiditycolor: "dark",
      atpcolor: "dark",
      luminancecolor: "dark",
      eccolor: "dark",
      phcolor: "dark",
      soil_tempcolor: "dark",
      soil_humidcolor: "dark",
      uvcolor: "dark",
    }
  },
  computed:{
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
    //日期選擇
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
    },
    //search
    async searchdata(){
        this.loading = true;
        this.chartloading = false;
        await this.$store.dispatch('chartdata', {
            type: this.type, 
            start_time: this.start, 
            end_time: this.end, 
            time: this.selecttime
        });
        // console.log(this.typeheaders);
        this.loading = false;
        this.chartloading = true;
    },
    temp(){
        if (this.tempcolor === "dark"){
            this.tempcolor = "primary";   
            this.type.push("temp");           
        }
        else{
            this.tempcolor = "dark"; 
            this.type = this.type.filter(e => e !== "temp");             
        }
    },
    humidity(){
        if (this.humiditycolor === "dark"){
            this.humiditycolor = "primary";
            this.type.push("humidity");
        }
        else{
            this.humiditycolor = "dark";
            this.type = this.type.filter(e => e !== "humidity");
        }
    },
    atp(){
        if (this.atpcolor === "dark"){
            this.atpcolor = "primary";
            this.type.push("atp");
        }
        else{
            this.atpcolor = "dark";
            this.type = this.type.filter(e => e !== "atp");
        }  
    },
    luminance(){
        if (this.luminancecolor === "dark"){
            this.luminancecolor = "primary";
            this.type.push("luminance");
        }
        else{
            this.luminancecolor = "dark";
            this.type = this.type.filter(e => e !== "luminance");
        }  
    },
    ec(){
        if (this.eccolor === "dark"){
            this.eccolor = "primary";
            this.type.push("ec");
        }
        else{
            this.eccolor = "dark";
            this.type = this.type.filter(e => e !== "ec");
        }  
    },
    ph(){
        if (this.phcolor === "dark"){
            this.phcolor = "primary";
            this.type.push("ph");
        }
        else{
            this.phcolor = "dark";
            this.type = this.type.filter(e => e !== "ph");
        }  
    },
    soil_temp(){
        if (this.soil_tempcolor === "dark"){
            this.soil_tempcolor = "primary";
            this.type.push("soil_temp");
        }
        else{
            this.soil_tempcolor = "dark";
            this.type = this.type.filter(e => e !== "soil_temp");
        }  
    },
    soil_humid(){
        if (this.soil_humidcolor === "dark"){
            this.soil_humidcolor = "primary";
            this.type.push("soil_humid");
        }
        else{
            this.soil_humidcolor = "dark";
            this.type = this.type.filter(e => e !== "soil_humid");      
        }  
    },
    uv(){
        if (this.uvcolor === "dark"){
            this.uvcolor = "primary";
            this.type.push("uv");  
        }
        else{
            this.uvcolor = "dark";
            this.type = this.type.filter(e => e !== "uv");
        } 
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
            <v-card dark>
              <v-toolbar
                  flat
                  height="80"
                  bottom
              >          
                  <v-toolbar-title>
                      <h3>折線圖</h3>
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
  <!-- 起始日 --> <v-dialog
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
                      :items="['day','hour','min']"
                      label="狀態"
                      hide-details
                  ></v-select>    
                  <v-spacer></v-spacer>
                  <v-btn
                      color="#40b47f"
                      elevation="8"
                      @click="searchdata"
                      class="mr-5"
                  >
                      <v-icon left>
                          mdi-magnify
                      </v-icon>
                      搜尋
                  </v-btn>
                  <v-btn
                      color="error"
                      elevation="8"
                      @click="clear"
                  >
                      全部清除
                  </v-btn>
              </v-toolbar>
              <v-card-text>
                  <v-container fluid>
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
                        <v-col class="text-center">
                            <v-btn
                                :color="luminancecolor"
                                @click="luminance"
                                elevation="10"
                            >光照</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
              </v-card-text>
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
            <Chart v-if="chartloading" :chartWidth="width" :chartHeight="height" :title="title" 
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
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


