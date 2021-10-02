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
</style>