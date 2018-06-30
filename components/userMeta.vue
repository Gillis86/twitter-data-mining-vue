<template>
    <div class="user__box">
                <div class="meta__heading--header">
                            <div class="meta__heading--name">
                                <h4 v-html="userMeta.name"></h4>
                            </div>
                            <div class="meta__heading--photo">
                                <img :src="userMeta.image" alt="user photo" class="meta__heading--photo">
                            </div>
                        </div>
        <b-row>
            <b-col cols="12" class="text-center">
                <b-row>
                                <b-col cols="12" style="overflow-x:auto;" class="text-center">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Location</th>
                                                <th>Profile</th>
                                                <th>Description</th>
                                                <th>Followers</th>
                                                <th>Following</th>
                                                <th>Website</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{{'@'+userMeta.screen_name | checkEntry}}</td>
                                                <td>{{userMeta.location | checkEntry}}</td>
                                                <td>
                                                    <b-button size="sm" class="custom__btn" target="_blank" :href="'https://twitter.com/'+userMeta.screen_name"> <i class="fas fa-user"></i></b-button>
                                                </td>
                                                <td>{{userMeta.description | checkEntry}}</td>
                                                <td>{{userMeta.followers | checkEntry}}</td>
                                                <td>{{userMeta.friends | checkEntry}}</td>
                                                <td>
                                                    <b-button size="sm" class="custom__btn" target="_blank" :href="userMeta.url[0]"> <i class="fas fa-globe"></i></b-button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </b-col>
                            </b-row>
            </b-col>
        </b-row>
    </div>
    
</template>


<script>
export default {
    computed:{
        userMeta(){
            return this.$store.state.userMeta
        }
    },
    filters:{
            checkEntry(value){
                return value ? value : 'None'
            },
    }
}
</script>


<style lang="scss" scoped>
.custom__btn{
    background: #1DA1F2;
        border-color: darken(#1DA1F2,5)
}
.user__box{
            background:#fff;
            position:relative;
            border-radius:5px;
            box-shadow: 5px 9px 21px -11px rgba(0,0,0,0.75);
            margin-top:50px;
            margin-bottom:100px;
}
    .meta__heading{
        margin: 30px auto 50px auto;
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
            border-radius:50%;
        }
    }

    .table{
         width:100%;
        margin: 0 auto;
        border-collapse: separate;
        border-spacing:20px;
        overflow: hidden;
        & th{
            text-transform: uppercase;
            font-size:11px;
            letter-spacing:1px;
            font-weight:900;
            color:#1DA1F2;
            padding:20px;
            border:none;

        }
        & td{
            font-size:14px;
            padding:20px;
            border:none;
            text-transform: uppercase;
            color:rgba(#000,.75)
        }
    }

</style>