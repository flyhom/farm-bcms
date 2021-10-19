<script>
import OriDataUpdate from '@/components/OriDataUpdate.vue';
export default {
    components:{
        OriDataUpdate,
    }
}
</script>

<template>
  <v-app>
      <v-main>
            <v-container fluid>
                <v-row justify="center">
                    <v-col lg="12" md="12" sm="12" cols="12">
                        <OriDataUpdate />
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