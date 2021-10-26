<script>
export default {
  data(){
    return {
      sensoritems:[
        { name: '感測器', color: '#2196F3', src: require('~/assets/text-search.png'), link: this.tolist},
        { name: '折線圖', color: '#00BCD4', src: require('~/assets/chart-bell-curve.png'), link: this.tochart},
        { name: '長條圖', color: '#8BC34A', src: require('~/assets/chart-bar.png'), link: this.tochartbar},
        { name: '感測器更新', color: '#CDDC39', src: require('~/assets/update.png'), link: this.toupdate},
      ],
      chartitems:[
        { name: '相關係數', color: '#FFC107', src: require('~/assets/text-box-search.png'), link: this.tosensorlike},
        { name: '數據分析', color: '#FF5722', src: require('~/assets/chart-scatter-plot.png'), link: this.tochartlike},
      ],
    }
  },
  methods:{
    tolist(){
      this.$router.push('/list');
    },
    tochart(){
      this.$router.push('/chart');
    },
    tochartbar(){
      this.$router.push('/chartbar');
    },
    toupdate(){
      this.$router.push('/update');
    },
    tosensorlike(){
      this.$router.push('/sensorlike');
    },
    tochartlike(){
      this.$router.push('/chartlike');
    },
  }
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col v-for="item in sensoritems" :key="item.name" lg="3" md="4" sm="6" cols="12">
            <v-hover v-slot="{ hover }">
              <v-card dark @click="item.link" height="300" :color="item.color" width="auto" class="ma-lg-3 ma-md-3 ml-sm-1 ml-1 pt-9" :elevation="hover ? 2 : 12" :class="{ 'on-hover': hover }">
                <v-card-title class="justify-center">
                  <v-avatar
                    size="100"
                    tile
                    class="mt-5"
                  >
                    <v-img :src="item.src"></v-img>
                  </v-avatar>
                </v-card-title>
                <v-card-text class="text-center">
                  <h1 class="text-title">{{item.name}}</h1> 
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="item in chartitems" :key="item.name" lg="3" md="4" sm="6" cols="12">
            <v-hover v-slot="{ hover }">
              <v-card dark @click="item.link" height="300" :color="item.color" width="auto" class="ma-lg-3 ma-md-3 ml-sm-1 ml-1 pt-9" :elevation="hover ? 2 : 12" :class="{ 'on-hover': hover }">
                <v-card-title class="justify-center">
                  <v-avatar
                    size="100"
                    tile
                    class="mt-5"
                  >
                    <v-img :src="item.src"></v-img>
                  </v-avatar>
                </v-card-title>
                <v-card-text class="text-center">
                  <h1 class="text-title">{{item.name}}</h1> 
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.text-title{
  color: #fff;
}
.v-card {
  transition: .4s ease-in-out;
  opacity: 0.8;
}
.v-card:not(.on-hover) {
  opacity: 1;
}
</style>