<script>
import TableSensor from '@/components/TableSensor';
export default {
  components:{
    TableSensor,
  }

}
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col lg="12" md="12" sm="12" cols="12">
            <TableSensor />
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