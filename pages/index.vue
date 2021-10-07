<script>
import Table from '@/components/Table';
export default {
  components:{
    Table,
  },
  methods:{
    tolist(){
      this.$router.push('/list');
    },
    tochart(){
      this.$router.push('/chart');
    },
  }
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="2">
            <v-card dark elevation="12" @click="tolist" color="primary" height="80" width="170">
              <v-card-title class="justify-center">
                <v-icon class="mr-2">mdi-text-box-search</v-icon>感測器資料
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card dark elevation="12" @click="tochart" color="primary" height="80" width="170">
              <v-card-title class="justify-center">
                <v-icon class="mr-2">mdi-chart-bell-curve</v-icon>折線圖
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-main{
  height: 0px;
}
</style>