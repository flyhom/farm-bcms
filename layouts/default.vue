<script>
import Menu from "../components/Menu.vue";
export default {
    components:{
        Menu,
    },
}
</script>

<template>
    <v-app>
        <Menu />
        <Nuxt />
    </v-app>
</template>

<style>
.v-main{
  background-color: rgb(22, 22, 22);
}
.v-data-table__wrapper::-webkit-scrollbar{
    width: 10px;
    color: '#40b47f';
}
.v-data-table__wrapper::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
</style>