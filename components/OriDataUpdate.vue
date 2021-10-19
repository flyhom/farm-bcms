<script>
export default {
    data(){
        return {
            loading: false,
            type: '',
            mode:'ignore',
            file: [],
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
            //timebtn
            modeignore: "primary",
            modereplace: "dark",
        }
    },
    methods:{
        async update(){
            this.loading = true;
            console.log(this.type);
            console.log(this.file);
            const FormFile = new FormData();
            FormFile.append('mode',this.mode);
            FormFile.append('type',this.type);
            FormFile.append('file',this.file);
            await this.$store.dispatch('update',
                FormFile,
            );
            this.loading = false;
            this.type = '';
            this.file = [];
            this.mode = 'ignore';
            this.modeignore = "primary";
            this.modereplace  = "dark";
            this.tempcolor = "dark"; 
            this.humiditycolor = "dark";
            this.atpcolor = "dark";
            this.luminancecolor = "dark";
            this.eccolor = "dark";
            this.phcolor = "dark";
            this.soil_tempcolor = "dark";
            this.soil_humidcolor = "dark";
            this.uvcolor = "dark";
        },
        temp(){
            if (this.tempcolor === "dark"){
                this.tempcolor = "primary";
                this.humiditycolor = "dark";
                this.atpcolor = "dark";
                this.luminancecolor = "dark";
                this.eccolor = "dark";
                this.phcolor = "dark";
                this.soil_tempcolor = "dark";
                this.soil_humidcolor = "dark";
                this.uvcolor = "dark";   
                this.type = 'temp';
            }
            else{
                this.tempcolor = "dark"; 
                this.type = '';   
            }
        },
        humidity(){
            if (this.humiditycolor === "dark"){
                this.humiditycolor = "primary";
                this.tempcolor = "dark";
                this.atpcolor = "dark";
                this.luminancecolor = "dark";
                this.eccolor = "dark";
                this.phcolor = "dark";
                this.soil_tempcolor = "dark";
                this.soil_humidcolor = "dark";
                this.uvcolor = "dark";
                this.type = 'humidity';
            }
            else{
                this.humiditycolor = "dark";
                this.type = '';
            }
        },
        atp(){
            if (this.atpcolor === "dark"){
                this.atpcolor = "primary";
                this.humiditycolor = "dark";
                this.tempcolor = "dark";
                this.luminancecolor = "dark";
                this.eccolor = "dark";
                this.phcolor = "dark";
                this.soil_tempcolor = "dark";
                this.soil_humidcolor = "dark";
                this.uvcolor = "dark";
                this.type = 'atp';
            }
            else{
                this.atpcolor = "dark";
                this.type = '';
            }  
        },
        luminance(){
            if (this.luminancecolor === "dark"){
                this.luminancecolor = "primary";
                this.atpcolor = "dark";
                this.humiditycolor = "dark";
                this.tempcolor = "dark";
                this.eccolor = "dark";
                this.phcolor = "dark";
                this.soil_tempcolor = "dark";
                this.soil_humidcolor = "dark";
                this.uvcolor = "dark";
                this.type = "luminance";
            }
            else{
                this.luminancecolor = "dark";
                this.type = '';
            }  
        },
        ec(){
            if (this.eccolor === "dark"){
                this.eccolor = "primary";
                this.atpcolor = "dark";
                this.humiditycolor = "dark";
                this.tempcolor = "dark";
                this.luminancecolor = "dark";
                this.phcolor = "dark";
                this.soil_tempcolor = "dark";
                this.soil_humidcolor = "dark";
                this.uvcolor = "dark";
                this.type = "ec";
            }
            else{
                this.eccolor = "dark";
                this.type = '';
            }  
        },
        ph(){
            if (this.phcolor === "dark"){
                this.phcolor = "primary";
                this.atpcolor = "dark";
                this.humiditycolor = "dark";
                this.tempcolor = "dark";
                this.luminancecolor = "dark";
                this.eccolor = "dark";
                this.soil_tempcolor = "dark";
                this.soil_humidcolor = "dark";
                this.uvcolor = "dark";
                this.type = "ph";
            }
            else{
                this.phcolor = "dark";
                this.type = '';
            }  
        },
        soil_temp(){
            if (this.soil_tempcolor === "dark"){
                this.soil_tempcolor = "primary";
                this.atpcolor = "dark";
                this.humiditycolor = "dark";
                this.tempcolor = "dark";
                this.luminancecolor = "dark";
                this.eccolor = "dark";
                this.phcolor = "dark";
                this.soil_humidcolor = "dark";
                this.uvcolor = "dark";
                this.type = "soil_temp"; 
            }
            else{
                this.soil_tempcolor = "dark";
                this.type = '';
            }  
        },
        soil_humid(){
            if (this.soil_humidcolor === "dark"){
                this.soil_humidcolor = "primary";
                this.atpcolor = "dark";
                this.humiditycolor = "dark";
                this.tempcolor = "dark";
                this.luminancecolor = "dark";
                this.eccolor = "dark";
                this.phcolor = "dark";
                this.soil_tempcolor = "dark";
                this.uvcolor = "dark";
                this.type = "soil_humid";
    
            }
            else{
                this.soil_humidcolor = "dark";
                this.type = '';
            }  
        },
        uv(){
            if (this.uvcolor === "dark"){
                this.uvcolor = "primary";
                this.atpcolor = "dark";
                this.humiditycolor = "dark";
                this.tempcolor = "dark";
                this.luminancecolor = "dark";
                this.eccolor = "dark";
                this.phcolor = "dark";
                this.soil_tempcolor = "dark";
                this.soil_humidcolor = "dark";
                this.type = "uv"; 
            }
            else{
                this.uvcolor = "dark";
                this.type = '';
            } 
        },
        setmodeignore(){
            this.mode = "ignore";
            this.modeignore = "primary";
            this.modereplace = "dark";
        },
        setmodereplace(){
            this.mode = "replace"; 
            this.modeignore = "dark";
            this.modereplace = "primary";
        },
    },
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
                            <h3>感應器更新</h3>
                        </v-toolbar-title>
                        <v-spacer></v-spacer>  
                        <v-file-input
                            v-model="file"
                            chips
                            show-size
                            hide-details
                            label="選擇檔案"
                            truncate-length="42"
                        ></v-file-input>                     
                        <v-spacer></v-spacer>
                            <v-btn :color="modeignore" fab small elevation="3" @click="setmodeignore">忽略</v-btn>    
                            <v-btn :color="modereplace" fab small elevation="3" @click="setmodereplace" class="mx-3">覆蓋</v-btn>    
                        <v-spacer></v-spacer>
                        <v-btn
                            color="#40b47f"
                            class="mr-5"
                            elevation="8"
                            @click="update"
                        >
                            <v-icon left>
                                mdi-upload
                            </v-icon>
                            
                            上傳
                        </v-btn>
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
    </div>
</template>

<style scoped>
    .shrink{
        width: auto;
    }
</style>