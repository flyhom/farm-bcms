<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="7">
            <v-card dark color="#40b47f">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" elevation="10">查詢</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="7">
            <Chart :courseScore="newArr" :chartWidth="width" :chartHeight="height" :title="title" :date="timeArr"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Chart from '@/components/Chart.vue';
export default {
  components:{
    Chart,
  },
  data(){
    return{
      width: '1000px',
      height: '400px',
      title: '溫度',
      newArr: [],
      timeArr: [],
      date: [
        '2021-09-01',
        '2021-09-02',
        '2021-09-03',
        '2021-09-04',
        '2021-09-05',
        '2021-09-06',
        '2021-09-07',
      ],
      data: [
        {
            "time": "2021-04-01",
            "temp": 24.18,
            "uv": 0.61
        },
        {
            "time": "2021-04-02",
            "temp": 25.6,
            "uv": 1.57
        },
        {
            "time": "2021-04-03",
            "temp": 25.12,
            "uv": 1.9
        },
        {
            "time": "2021-04-06",
            "temp": 21.11,
            "uv": 0.53
        },
        {
            "time": "2021-04-07",
            "temp": 19.86,
            "uv": 0.38
        },
        {
            "time": "2021-04-08",
            "temp": 20.47,
            "uv": 0.68
        },
        {
            "time": "2021-04-09",
            "temp": 18.46,
            "uv": 0.52
        },
      ]
    }
  },
  mounted(){
    for (let index = 0; index < this.data.length; index++) {
      this.timeArr.push(this.data[index].time)
      this.newArr.push(this.data[index].uv)
    }
    this.$store.dispatch('chartdata', {
      type: ["temp","ec"], 
      start_time: "2021-04-01 00:00:00", 
      end_time: "2021-05-01 00:00:00", 
      time: "day",
    });
  }
}
</script>
