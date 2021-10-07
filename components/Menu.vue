<script>
export default {
    
}
</script>

<template>
    <div>
        <v-app-bar
            color="#161616"
            dark
            app
            flat
            >
            <v-toolbar-title>茶農管理系統</v-toolbar-title>

            <v-spacer></v-spacer>
        </v-app-bar>
        <v-navigation-drawer
            permanent
            color="#40b47f"
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
                    <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>首頁</v-list-item-title>
                </v-list-item>
            </router-link>
            <router-link to="/list">
                <v-list-item link>
                    <v-list-item-icon>
                    <v-icon>mdi-text-search</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>感測器資料</v-list-item-title>
                </v-list-item>
            </router-link>
            <router-link to="/chart">
                <v-list-item link>
                    <v-list-item-icon>
                    <v-icon>mdi-chart-bell-curve</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>折線圖</v-list-item-title>
                </v-list-item>
            </router-link>
            <router-link to="/sensorlike">
                <v-list-item link>
                    <v-list-item-icon>
                    <v-icon>mdi-text-box-search</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>感測器相似度</v-list-item-title>
                </v-list-item>
            </router-link>
             <router-link to="/chartlike">
                <v-list-item link>
                    <v-list-item-icon>
                    <v-icon>mdi-chart-scatter-plot</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>數據分析圖</v-list-item-title>
                </v-list-item>
            </router-link>
            </v-list>
        </v-navigation-drawer>
    </div> 
</template>

<style scoped>
a{
    text-decoration: none;
}
</style>