import * as moment from 'moment'


export const state = () => ({
    data: [],
    dataISReady: false,
    tweet: null,
    userMeta:null,
    gotError: false,
  })
  
  export const mutations = {
    'SET_DATA'(state,tweets){
        state.data =  tweets
    },
    'RESET_DATA'(state){
        state.data = []
    },
    'DATA_IS_READY'(state){
        state.dataISReady = true
    },
    'DATA_IS_NOT_READY'(state){
        console.log('data not ready')
        state.dataISReady = false
    },
    'SET_USER_META'(state,payload){
        state.userMeta = payload
    },
    'SET_TWEET'(state,tweet){
        state.tweet = tweet
    },
    'RESET_TWEET'(state,tweet){
        state.tweet = null
    },
    'GOT_ERROR'(state){
        state.gotError = true
    },
    'RESET_ERROR'(state){
        state.gotError = false
    },
  }

  export const getters = {
      getData(state){
          return state.data
      }
  }

  export const actions = {
      fetchData({commit},payload){
          console.log(typeof payload.id)
          console.log(typeof payload.count)
            this.$axios.$get('/data',{
                params:{
                    user_id: payload.id,
                    count: payload.count
                }
            })
                .then(response =>{
                    console.log(response) 
                    commit('SET_DATA',response)
                    commit('SET_USER_META', response[0].user)
                    commit('DATA_IS_READY')
                })
                .catch(err => {
                    console.log('err')
                    console.log(err)
                    commit('DATA_IS_NOT_READY')
                    commit('GOT_ERROR')
                    //commit('SET_ERROR',err)
                    this.$axios.$get('/error',{
                        params:{
                            error: err.message,
                            date: moment(Date.now()).format('DD MM YYYY - HH:MM')
                        }
                    })
                
                })

    }

}