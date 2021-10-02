<script>
export default {
    
}
</script>

<template>
    <v-main>
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
                <v-icon>mdi-text-box-search</v-icon>
                </v-list-item-icon>
                <v-list-item-title>查詢</v-list-item-title>
            </v-list-item>
        </router-link>
        <router-link to="/Data">
            <v-list-item link>
                <v-list-item-icon>
                <v-icon>mdi-chart-bell-curve</v-icon>
                </v-list-item-icon>
                <v-list-item-title>圖表</v-list-item-title>
            </v-list-item>
        </router-link>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="#161616"
      dark
    >
      <v-toolbar-title>後臺管理系統</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    </v-main>
</template>

<style scoped>
a{
    text-decoration: none;
}
</style>