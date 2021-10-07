<script>
import Table from '@/components/Table';
export default {
  components:{
    Table,
  }

}
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="3">
            <v-card dark height="100" class="" elevation="12">
              <v-card-title>
                感測器資料
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card dark height="100" class="" elevation="12">
              <v-card-title>
                折線圖
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