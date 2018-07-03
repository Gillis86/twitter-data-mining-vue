<template>
    <header class="header">
        <b-row>
            <b-col cols="12">
                <div class="wrapper">
                    <h2 class="header__title">Twitter Data Mining</h2>
                <i class="fab fa-twitter fa-5x"></i>
                </div>
                
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <h3 class="header__subtitle">get likes and retweets from twitter users 
                    <span>
                       <a href="https://developer.twitter.com/en/docs.html" target="_blank">#TwitterAPI</a> 
                    </span>     
                </h3>
            </b-col>
        </b-row>
    </header>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
    .header{
        width:100%;
        height:40vh;
        background:#1DA1F2;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 5px -5px 10px 1px rgba(0,0,0,0.25);
        //margin-bottom:90px;
        &__title{
            color:#fff;
            margin-top: 40px;
            text-transform:uppercase;
            letter-spacing: 1px;
            order:2;
        
        }
        &__subtitle{
            color:#fff;
            text-transform:uppercase;
            letter-spacing: 1px;
            font-size:16px;
            margin-top:20px;
            & span{
                text-transform: none;
                margin-left:10px;
                & a{
                    color:#fff;
                    text-decoration: none;
                    padding:10px;
                    border: 2px solid #fff;
                    border-radius:5px;
                    &:hover{
                        color:#1DA1F2;
                        background: #fff;
                        border: 2px solid #1DA1F2;
                    }
                }
            }
        }
        & i{
            color:#fff
        }
    }
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>