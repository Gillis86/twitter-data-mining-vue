<template>
 <div class="form__container">
     <div class="form__container--title">
         <h3>insert your data</h3>
         <i class="fas fa-angle-down"></i>
     </div>
    <b-form inline class="form-center">
      <b-input v-model="id" class="mb-2 mr-sm-2 mb-sm-0"  placeholder="Insert a Twitter ID" />
      <b-input v-model="count" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Max 200 tweets" />
      <b-button @click="storeData" class="search__btn"><i class="fas fa-search"></i></b-button>
    </b-form>
    <b-row style="margin-top:10px">
        <b-col></b-col>
        <b-col class="text-center">
            <b-button href="https://tweeterid.com/" target="_blank" class="search__btn" size="sm"><span>
                GET TWITTER ID</span></b-button>
        </b-col>
        <b-col></b-col>
    </b-row>
  </div>
  
</template>

<script>


export default {
 data(){
     return{
         id:"",
         count:0
     }
 },
 methods:{
     storeData(){
         if(this.id !== null){
             this.$store.commit('DATA_IS_NOT_READY')
             if(this.$store.state.data.length){
                 this.$store.commit('RESET_DATA')   
             }
             let payload = {
                 id: this.id,
                 count:this.count
             }
             this.$store.dispatch('fetchData',payload)
         }else{
             console.log('Please insert ID')
         }
     }
 }
}
</script>

<style lang="scss" scoped>
    .form__container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        padding:30px;
        position:relative;
        margin-bottom:90px;
        border-radius:5px;
        box-shadow: 5px 9px 21px -11px rgba(0,0,0,0.75);
        width:50%;
        &--title{
            position:absolute;
            background: #1DA1F2;
            top:-25px;
            left:40%;
            padding:5px 20px;
            box-shadow: 5px 9px 21px -11px rgba(0,0,0,0.75);
            border-radius:5px;
            display:flex;
            justify-content: center;
            align-self: center;
            & h3{
                color:#fff;
                font-size:13px;
                text-transform:uppercase;
                margin-right:10px;
                letter-spacing: 1px;
                font-weight: bold;
                
            }

            & i{
                color:#fff;
            }
        }
    }

    .search__btn{
        background: #1DA1F2;
        border-color: darken(#1DA1F2,5);
        //margin:10px auto;
        & span{
            font-size:12px;
            letter-spacing: 1px;
            font-weight: bold;
        }
    }

    .form-center{
        justify-content: center;
        margin:20px 0;
        
    }
</style>