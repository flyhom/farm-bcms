<script>
export default {
    methods:{
        routertablelike(){
            this.$router.push('sensorlike');
        },
        routerchartlike(){
            this.$router.push('chartlike');
        },
        routersensor(){
            this.$router.push('list');
        },
        routerchart(){
            this.$router.push('chart');
        },
        routerchartbar(){
            this.$router.push('chartbar');
        },
        routerupdate(){
            this.$router.push('update');
        },
        routerchartmulti(){
            this.$router.push('chartmulti');
        }
    }
}
</script>

<template>
    <div>
        <!-- <v-app-bar
            color="#161616"
            dark
            app
            flat
            >
            <v-toolbar-title>茶農管理系統</v-toolbar-title>

            <v-spacer></v-spacer>
        </v-app-bar> -->
        <v-navigation-drawer
            permanent
            color="primary"
            expand-on-hover
            dark
            app
        >
            <v-list
            nav
            dense
            >
            <router-link to="/">
                <v-list-item link>
                    <v-list-item-icon>
                    <v-avatar
                        size="32"
                        tile
                        class="pr-2 pb-2"
                    >
                        <v-img :src="require('~/assets/wtea.svg')"></v-img>
                    </v-avatar>
                    <!-- <v-icon>mdi-leaf</v-icon> -->
                    </v-list-item-icon>
                    <v-list-item-title>茶農管理系統</v-list-item-title>
                </v-list-item>
            </router-link>
            <!-- <router-link to="/list">
                <v-list-item link>
                    <v-list-item-icon>
                    <v-icon>mdi-text-search</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>原始資料</v-list-item-title>
                </v-list-item>
            </router-link>
            <router-link to="/chart">
                <v-list-item link>
                    <v-list-item-icon>
                    <v-icon>mdi-chart-bell-curve</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>折線圖</v-list-item-title>
                </v-list-item>
            </router-link> -->
            <v-list-group
                prepend-icon="mdi-file-document-multiple-outline"
                no-action
                color="#fff"
            >
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title>原始資料</v-list-item-title>
                </v-list-item-content>
                </template>

                <v-list-item link @click="routersensor">
                    <v-list-item-title>感測器</v-list-item-title>
                    <v-list-item-icon>
                        <v-icon>mdi-text-search</v-icon>
                    </v-list-item-icon>
                </v-list-item>
                <v-list-item link @click="routerchart">
                    <v-list-item-title>折線圖</v-list-item-title>
                    <v-list-item-icon>
                        <v-icon>mdi-chart-bell-curve</v-icon>
                    </v-list-item-icon>
                </v-list-item>
                <v-list-item link @click="routerchartbar">
                    <v-list-item-title>長條圖</v-list-item-title>
                    <v-list-item-icon>
                        <v-icon>mdi-chart-bar</v-icon>
                    </v-list-item-icon>
                </v-list-item>
                <v-list-item link @click="routerupdate">
                    <v-list-item-title>感測器更新</v-list-item-title>
                    <v-list-item-icon>
                        <v-icon>mdi-update</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-group>
            <v-list-group
                prepend-icon="mdi-poll"
                no-action
                color="#fff"
            >
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title>分析</v-list-item-title>
                </v-list-item-content>
                </template>

                <v-list-item link @click="routertablelike">
                    <v-list-item-title>相關係數</v-list-item-title>
                    <v-list-item-icon>
                        <v-icon>mdi-text-box-search</v-icon>
                    </v-list-item-icon>
                </v-list-item>
                <v-list-item link @click="routerchartlike">
                    <v-list-item-title>數據分析</v-list-item-title>
                    <v-list-item-icon>
                        <v-icon>mdi-chart-scatter-plot</v-icon>
                    </v-list-item-icon>
                </v-list-item>
                <v-list-item link @click="routerchartmulti">
                    <v-list-item-title>多圖分析</v-list-item-title>
                    <v-list-item-icon>
                        <v-icon>mdi-chart-multiple</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-group>

            <!-- <router-link to="/sensorlike">
                <v-list-item link>
                    <v-list-item-icon>
                    <v-icon></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title></v-list-item-title>
                </v-list-item>
            </router-link> -->
            <!-- <router-link to="/chartlike">
                <v-list-item link>
                    <v-list-item-icon>
                    <v-icon></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title></v-list-item-title>
                </v-list-item>
            </router-link> -->
            </v-list>
        </v-navigation-drawer>
    </div> 
</template>

<style scoped>
a{
    text-decoration: none;
}
</style>