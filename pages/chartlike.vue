<script>
import Chartpot from '@/components/Chartpot.vue';
export default {
  components:{
    Chartpot,
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
      startdate: '2021-04-01',
      start: '2021-04-01 00:00:00',
      enddate: '2021-05-01',
      endtime: '00:00',
      end: '2021-05-01 00:00:00',
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
      dialogfunc: false,
      idx: 0,
      funcdone: false,
      timeday: "success",
      timehour: "dark",
      timemin: "dark",
      startDate: '2021-04-01 00:00',
      endDate: '2021-05-01 00:00',
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
    Title(){
        for (let i = 0; i < this.type_ch.length; i++) {
            const element = this.type_ch[i].text;
            this.title.push(element);
        }
        return this.title;
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
        this.chipAdvanced.push(
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
        this.chipAdvanced.splice(item.idx,1);
        this.chipAdvanced.forEach(i => {
            if (i.idx > item.idx) {
                i.idx = i.idx - 1;
            }
        })
        this.idx -= 1;
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
    },
    morefunc(){
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
    },
    //search
    async searchdata(){
        this.loading = true;
        this.chartloading = false;
        this.charttwoloading = false;
        this.title = [];
        this.charttitle = [];
        await this.$store.dispatch('handType', this.type);
        await this.$store.dispatch('chartdata', {
            type: this.type, 
            advanced: this.advanced,
            start_time: this.start, 
            end_time: this.end, 
            time: this.selecttime
        });
        // console.log(this.type.length);
        if (this.$store.getters.IsChart == true) {
            this.old_type = this.type;
            if (this.type.length == 2) {
                this.charttwoloading = true;
            }
            else {
                this.chartloading = true;
            }
        }
        else {
            if (this.old_type.length == 2) {
                this.charttwoloading = true;
            }
            else if (this.old_type.length == 0){
                this.chartloading = false;
                this.charttwoloading = false;
            }
            else{
                this.chartloading = true;
            }
        }
        this.loading = false;
    },
    filtersensorcolor(sensor){
        if (sensor == "temp") {
            this.tempcolor = "dark";
        }
        else if (sensor == "humidity"){
            this.humiditycolor = "dark";
        }
        else if (sensor == "atp"){
            this.atpcolor = "dark";
        }
        else if (sensor == "luminance"){
            this.luminancecolor = "dark";
        }
        else if (sensor == "ph"){
            this.phcolor = "dark";
        }
        else if (sensor == "ec"){
            this.eccolor = "dark";
        }
        else if (sensor == "soil_humid"){
            this.soil_humidcolor = "dark";
        }
        else if (sensor == "soil_temp"){
            this.soil_tempcolor = "dark";
        }
        else if (sensor == "uv"){
            this.uvcolor = "dark";
        }
    },
    temp(){
        if (this.tempcolor === "dark"){
            this.tempcolor = "primary";   
            this.type.push("temp");
            this.type_ch.push({ 'id':'temp', 'text':'溫度' }); 
            if (this.type.length > 2) {
                const a = this.type.shift();
                this.type_ch.shift();
                this.filtersensorcolor(a);
            }           
        }
        else{
            this.tempcolor = "dark"; 
            this.type = this.type.filter(e => e !== "temp");
            this.type_ch = this.type_ch.filter(e => e.id !== "temp");
        }
    },
    humidity(){
        if (this.humiditycolor === "dark"){
            this.humiditycolor = "primary";
            this.type.push("humidity");
            this.type_ch.push({ 'id':'humidity', 'text':'濕度' });
            if (this.type.length > 2) {
                const a = this.type.shift();
                this.type_ch.shift();
                this.filtersensorcolor(a);
            }
        }
        else{
            this.humiditycolor = "dark";
            this.type = this.type.filter(e => e !== "humidity");
            this.type_ch = this.type_ch.filter(e => e.id !== "humidity");
        }
    },
    atp(){
        if (this.atpcolor === "dark"){
            this.atpcolor = "primary";
            this.type.push("atp");
            this.type_ch.push({ 'id':'atp', 'text':'大氣壓力' });
            if (this.type.length > 2) {
                const a = this.type.shift();
                this.type_ch.shift();
                this.filtersensorcolor(a);
            }
        }
        else{
            this.atpcolor = "dark";
            this.type = this.type.filter(e => e !== "atp");
            this.type_ch = this.type_ch.filter(e => e.id !== "atp");
        }  
    },
    luminance(){
        if (this.luminancecolor === "dark"){
            this.luminancecolor = "primary";
            this.type.push("luminance");
            this.type_ch.push({ 'id':'luminance', 'text':'光照' });
            if (this.type.length > 2) {
                const a = this.type.shift();
                this.type_ch.shift();
                this.filtersensorcolor(a);
            }
        }
        else{
            this.luminancecolor = "dark";
            this.type = this.type.filter(e => e !== "luminance");
            this.type_ch = this.type_ch.filter(e => e.id !== "luminance");
        }  
    },
    ec(){
        if (this.eccolor === "dark"){
            this.eccolor = "primary";
            this.type.push("ec");
            this.type_ch.push({ 'id':'ec', 'text':'導電度' });
            if (this.type.length > 2) {
                const a = this.type.shift();
                this.type_ch.shift();
                this.filtersensorcolor(a);
            }
        }
        else{
            this.eccolor = "dark";
            this.type = this.type.filter(e => e !== "ec");
            this.type_ch = this.type_ch.filter(e => e.id !== "ec");
        }  
    },
    ph(){
        if (this.phcolor === "dark"){
            this.phcolor = "primary";
            this.type.push("ph");
            this.type_ch.push({ 'id':'ph', 'text':'PH值' });
            if (this.type.length > 2) {
                const a = this.type.shift();
                this.type_ch.shift();
                this.filtersensorcolor(a);
            }
        }
        else{
            this.phcolor = "dark";
            this.type = this.type.filter(e => e !== "ph");
            this.type_ch = this.type_ch.filter(e => e.id !== "ph");
        }  
    },
    soil_temp(){
        if (this.soil_tempcolor === "dark"){
            this.soil_tempcolor = "primary";
            this.type.push("soil_temp");
            this.type_ch.push({ 'id':'soil_temp', 'text':'土壤溫度' });
            if (this.type.length > 2) {
                const a = this.type.shift();
                this.type_ch.shift();
                this.filtersensorcolor(a);
            }
        }
        else{
            this.soil_tempcolor = "dark";
            this.type = this.type.filter(e => e !== "soil_temp");
            this.type_ch = this.type_ch.filter(e => e.id !== "soil_temp");
        }  
    },
    soil_humid(){
        if (this.soil_humidcolor === "dark"){
            this.soil_humidcolor = "primary";
            this.type.push("soil_humid");
            this.type_ch.push({ 'id':'soil_humid', 'text':'土壤濕度' });
            if (this.type.length > 2) {
                const a = this.type.shift();
                this.type_ch.shift();
                this.filtersensorcolor(a);
            }
        }
        else{
            this.soil_humidcolor = "dark";
            this.type = this.type.filter(e => e !== "soil_humid");
            this.type_ch = this.type_ch.filter(e => e.id !== "soil_humid");
        }  
    },
    uv(){
        if (this.uvcolor === "dark"){
            this.uvcolor = "primary";
            this.type.push("uv"); 
            this.type_ch.push({ 'id':'uv', 'text':'UV值' });
            if (this.type.length > 2) {
                const a = this.type.shift();
                this.type_ch.shift();
                this.filtersensorcolor(a);
            }
        }
        else{
            this.uvcolor = "dark";
            this.type = this.type.filter(e => e !== "uv");
            this.type_ch = this.type_ch.filter(e => e.id !== "uv");
        } 
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
    advanced_selecttype(item){
        this.advanced.splice(item.idx,1,item);
        this.chipAdvanced.splice(item.idx,1,item);
    },
    advanced_selectoption(item){
        this.advanced.splice(item.idx,1,item);
        this.chipAdvanced.splice(item.idx,1,item);
    },
    advanced_value(item){
        this.advanced.splice(item.idx,1,item);
        this.chipAdvanced.splice(item.idx,1,item);
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
            <v-card dark>
              <v-toolbar
                  flat
                  height="80"
                  bottom
              >          
                  <v-toolbar-title>
                      <h3>數據分析圖</h3>
                  </v-toolbar-title>                       
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
                  <v-btn :color="timeday" fab small elevation="3" @click="setday">天</v-btn>    
                  <v-btn :color="timehour" fab small elevation="3" @click="sethour" class="mx-3">時</v-btn>    
                  <v-btn :color="timemin" fab small elevation="3" @click="setmin">分</v-btn> 
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
              </v-toolbar>
              <v-card-text>
                  <v-container fluid>
                    <v-row>
                        <v-col v-if="funcdone">
                            <v-chip v-for="item in chipAdvanced" :key="item.idx" close class="mr-2" @click:close="advanced_close(item)" color="primary">
                                <span v-if="item.sensor == 'temp'">溫度 {{item.operation}} {{item.value}}</span> 
                                <span v-if="item.sensor == 'humidity'">濕度 {{item.operation}} {{item.value}}</span> 
                                <span v-if="item.sensor == 'luminance'">光照 {{item.operation}} {{item.value}}</span> 
                                <span v-if="item.sensor == 'atp'">大氣壓力 {{item.operation}} {{item.value}}</span> 
                                <span v-if="item.sensor == 'ec'">導電度 {{item.operation}} {{item.value}}</span> 
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
                            >導電度</v-btn>
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
            <Chartpot v-if="charttwoloading" :chartWidth="width" :chartHeight="height" :title="Title" :charttitle="Charttitle"
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
</style>


