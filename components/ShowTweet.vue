<template>
    <div class="data__wrapper">
        <div @click="resetTweet" class="data__close">
            <i class="fa fa-times fa-3x" aria-hidden="true"></i>
        </div>
        <div class="data__box">
                <b-row>
                    <b-col cols="12">
                        <div class="data__box--header">
                            <div class="data__box--name">
                                <h4>{{tweet.user.name}}</h4>
                            </div>
                            <div class="data__box--photo">
                                <img :src="tweet.user.image" alt="user photo" class="data__user--photo">
                            </div>
                        </div>
                        
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12">
                        <div class="data__box--user__data">
                            <b-row>
                                <b-col cols="12" style="overflow-x:auto;" class="text-center">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>created</th>
                                                <th>text</th>
                                                <th>hashtag</th>
                                                <th>retweet</th>
                                                <th>likes</th>
                                                <th>mentions</th>
                                                <th>source</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{{tweet.created | checkEntry | formatDate}}</td>
                                                <td>{{tweet.text | checkEntry}}</td>
                                                <td>{{tweet.hashtags | flatHashtags | checkEntry}}</td>
                                                <td>{{tweet.engagement.retweets | checkEntry}}</td>
                                                <td>{{tweet.engagement.likes | checkEntry}}</td>
                                                <td>{{tweet.engagement.mentions  | flatMentions| checkEntry }}</td>
                                                <td>
                                                    <b-button size="sm" class="tweet__btn" target="_blank" 
                                                    :href="'https://twitter.com/statuses/'+tweet.slug">
                                                        <i class="fab fa-twitter"></i>
                                                    </b-button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </b-col>
                            </b-row>
                        </div>
                    </b-col>
                </b-row>
        </div>
    </div>
</template>

<script>
import * as moment from 'moment'
export default {
    computed:{
        tweet(){
            return this.$store.state.tweet
        },
    },
        methods:{
            resetTweet(){
                this.$store.commit('RESET_TWEET')
            }
        },
        filters:{
            checkEntry(value){
                return value ? value : 'None'
            },
            flatHashtags(value){
                if(Array.isArray(value)){
                    return value.map(v => '#'+v.text).join(' ')
                }
                return false
                
            },
            flatMentions(value){
                if(Array.isArray(value)){
                    console.log('is array')
                    return value.map(v => '@'+v.screen_name).join(' ')
                }
                return false
            },
             formatDate: function(value){
                return moment(value).format('DD MM YYYY - HH:MM')
     }
        }
}
</script>

<style lang="scss" scoped>
    .data{
        &__wrapper{
            position:fixed;
            width:100vw;
            height:100vh;
            top:0;
            left:0;
            background: rgba(#000,.25);
            z-index:9999;
            display: flex;
            justify-content: center;
            align-items: center
        }
        &__user--photo{
        
            border-radius:50%;
        }

        &__box{
            background:#fff;
            position:relative;
            width:90%;
            margin: 0 auto;
            border-radius:5px;
            box-shadow: 5px 9px 21px -11px rgba(0,0,0,0.75);
            &--header{
                background:#1DA1F2;
                padding:30px;
                width:100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border-top-left-radius:5px;
                border-top-right-radius:5px;
            }
            &--name{
                order:2;
                margin-left:20px;
                color:#fff;
            }

            &--photo{
                order:1
            }

            &--content{
                background: #fff;
                width:100%;
                padding:30px;
            }

            &--user__data{
                padding:30px;
                
                & h4{
                    color:#1DA1F2;
                    text-transform: uppercase;
                    font-size:14px;
                    letter-spacing:1px;
                    font-weight:900;
                    margin-bottom:30px;
                }
            }
        }
    
        &__close{
            position:fixed;
            top:0;
            right:0;
            z-index:1000000;
            padding:20px;
            & i{
                color:#1DA1F2;
                cursor:pointer;
                
            }
        }
        
    }

    .tweet__btn{
        background: #1DA1F2;
        border-color: darken(#1DA1F2,5)
    }
    .table{
        width:90%;
        margin: 0 auto;
        border-collapse: separate;
        border-spacing:20px;
        & th{
            text-transform: uppercase;
            font-size:15px;
            letter-spacing:1px;
            font-weight:900;
            color:#1DA1F2;
            padding:10px 0px;
            border:none;

        }
        & td{
            font-size:14px;
            padding:10px 0px;
            border:none;
            font-size:14px;
            color: rgba(#000,.75)
        }
        &__tweet{
            &--text{
                padding-left:10px;
            padding-right:10px;
            text-align:left;
            
            }
            &--created{
                font-size:11px !important;
            }
            
        }
        
    }
</style>


