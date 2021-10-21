<script>
import OriDataTable from '@/components/OriDataTable';
export default {
  components:{
    OriDataTable,
  }

}
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col lg="12" md="12" sm="12" cols="12">
            <OriDataTable />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>