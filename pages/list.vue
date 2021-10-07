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
          <v-col lg="12" md="12" sm="12" cols="12">
            <Table />
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