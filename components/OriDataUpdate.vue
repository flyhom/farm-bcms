<script>
export default {
    data(){
        return {
            loading: false,
            mode:'ignore',
            file: [],
            //timebtn
            modeignore: "primary",
            modereplace: "dark",
        }
    },
    methods:{
        async update(){
            this.loading = true;
            const FormFile = new FormData();
            FormFile.append('mode',this.mode);
            FormFile.append('file',this.file);
            await this.$store.dispatch('update',
                FormFile,
            );
            this.loading = false;
            this.file = [];
            this.mode = 'ignore';
            this.modeignore = "primary";
            this.modereplace  = "dark";
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
                            :disabled="loading"
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
                        <v-progress-linear
                            :active="loading"
                            :indeterminate="loading"
                            absolute
                            top
                            color="#40b47f"
                        ></v-progress-linear>
                    </v-app-bar>
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