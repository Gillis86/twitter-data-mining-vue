<template>
<div>
  <div v-if="dataISReady" class="chart__wrapper">
      <userMeta />
     <BarChart style="margin-bottom:150px" title="Reetweets" :data='retweets' />
     <BarChart title="Likes" :data='likes' />
     <ShowTweet v-if="this.$store.state.tweet !== null" />
     
  </div>
  <div class="error" v-if="this.$store.state.gotError">
    <div class="error__box">
      <b-alert variant="danger" show>Error Occured! Try with another ID</b-alert>
    </div>
    <div @click="resetError" class="error__close">
            <i class="fa fa-times fa-3x" aria-hidden="true"></i>
        </div>
  </div>
</div>
  
</template>

<script>

import BarChart from '@/components/BarChart.vue'
import ShowTweet from '@/components/ShowTweet.vue'
import userMeta from '@/components/userMeta.vue'
export default {
  components:{
    BarChart,
    ShowTweet,
    userMeta
  },
  computed:{
    dataISReady(){
      return this.$store.state.dataISReady
    },
    retweets(){
            return this.$store.state.data.map(d =>  d.engagement.retweets)
        },
    likes(){
            return this.$store.state.data.map(d =>  d.engagement.likes)
        },
  },
  updated(){
    console.log('data changed')

  },
  created(){
    console.log(this.$axios.defaults.baseURL)
  },
  methods:{
    resetError(){
      this.$store.commit('RESET_ERROR')
    }
  }
}
</script>

<style lang="scss" scoped>
.chart__wrapper{
  //margin-top:100px;
  width:90%;
  //overflow:visible;
  margin: 50px auto
}

.error{
  position:fixed;
  width:100vw;
  height:100vh;
  top:0;
  left:0;
  background: rgba(#000,.25);
  z-index:9999;
  display: flex;
  justify-content: center;
  align-items: center;
  &__close{
     position:fixed;
            top:0;
            right:0;
            z-index:1000000;
            padding:20px;
            & i{
                color:orangered;
                cursor:pointer;
            }
        }
  }

</style>
