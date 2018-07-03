<template>
<div class="input-wrapper">
    <div class="info">
        <b-row>
            <b-col cols="1" align-self="center" class="text-center">
                <div class="info__icon">
                    <i class="fas fa-info-circle fa-3x"></i>
                </div>
            </b-col>
            <b-col cols="8
            " align-self="center" class="text-center">
                <h3 class="info__text">Get the information about an user by inserting the user ID and the 
                    number of tweets you want to retrieve. You will get stats about the last n tweets 
                </h3>
            </b-col>
            <b-col cols="3" align-self="center" class="text-center">
                <b-button href="https://tweeterid.com/" target="_blank" class="id__btn" size="md"><span>
                GET USER TWITTER ID</span></b-button>
            </b-col>
        </b-row>
    </div>
    <div class="form__container">
     <div class="form__container--title">
         <h3>insert your data</h3>
     </div>
    <b-form inline class="form-center">
      <b-input type="text" v-model.trim="id" class="mb-2 mr-sm-2 mb-sm-0"  placeholder="Insert a Twitter ID" 
      required />
      <b-input type="number" v-model="count" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Max 200 tweets" 
      required />
      <b-button @click="storeData" class="search__btn"><i class="fas fa-search"></i></b-button>
    </b-form>
  </div>
  <div class="input__invalid" v-if="inputNotValid">
      <b-alert show variant="warning">{{invalidInputMessage}}</b-alert>
  </div>
</div>
 
  
</template>

<script>
import { required, minLength, between, numeric } from 'vuelidate/lib/validators'

export default {
 data(){
     return{
         id:"",
         count:0,
         inputNotValid:false,
         invalidInputMessage: 'errorrrrr'
     }
 },
 
 validations:{
     id:{
         required,
         numeric
        
     },
     count:{
         required,
         between: between(1,200)
     }
 },
 methods:{
     storeData(){
         this.$v.$touch()
         if(this.$v.$invalid){
             if(this.$v.id.$invalid && this.$v.count.$invalid ){
                 this.invalidInputMessage = 'Please insert a valid ID and a valid number'
                 this.inputNotValid = true
                 return
             }
             else if(this.$v.id.$invalid && !this.$v.count.$invalid){
                 this.invalidInputMessage = 'Please insert a valid ID'
                 this.inputNotValid = true
                 return
             }else{
                 this.invalidInputMessage = 'Please insert a number between 1 and 200'
                 this.inputNotValid = true
                 return
             }
             //this.inputNotValid = true
             //return
         }
         if(this.id !== ''){
             this.inputNotValid = false
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

.input-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.input__invalid{
    margin: 30px auto;
}
.info{
    margin-bottom:100px;
    box-shadow: 5px 5px 10px 1px rgba(0,0,0,0.25);
    padding:30px;
    position:relative;
    z-index:1;
    display: flex;
    justify-content: center;
    
    &__icon{
        padding:20px;
        z-index:9999;
        & i{
            color: #1DA1F2;
        }
    }
    &__text{
        color:#1DA1F2;
        font-size:15px;
        font-weight:bold;
        line-height: 30px;
        //margin-bottom:30px;
        padding:30px;
        //font-weight:bold;
        letter-spacing: 1px;

    }
}
    .form__container{
        padding:30px;
        position:relative;
        margin-bottom:20px;
        border-radius:5px;
        box-shadow: 5px 5px 10px 1px rgba(0,0,0,0.25);
        width:50%;
        &--title{
            position:absolute;
            background: #1DA1F2;
            top:0%;
            left:50%;
            transform: translate(-50%,-50%);
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
    .id__btn{
        background: #1DA1F2 !important;
        color:#fff !important;
        border-color:#1DA1F2 !important;
       
    }
    .form-center{
        justify-content: center;
        margin:20px 0;
        
    }
</style>