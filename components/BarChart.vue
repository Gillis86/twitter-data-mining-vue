<script>
import { Bar } from 'vue-chartjs'
import * as moment from 'moment'
export default {
    extends:Bar,
    props:['data','title'],
    computed:{
        date(){
            return this.$store.state.data.map(d =>  d.created)
        },

        tweets(){
            return this.$store.state.data
        }
    },
    mounted () {
    // set reference to this for using into renderChart method
    let that = this;
    this.renderChart({
      labels: this.date, //['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: this.title,
          backgroundColor: '#1DA1F2',
          data: this.data //[40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    },{
        responsive:true,
        maintainAspectRatio: false,
        hover:{
            onHover: function(e) {
                 const point = this.getElementAtEvent(e);
                    if (point.length) e.target.style.cursor = 'pointer';
                        else e.target.style.cursor = 'default';
      }
        },
        scales:{
            xAxes: [{
                ticks: {
                    fontSize: 10,
                    stepSize: 1,
                    callback: function(value, index, values) {
                        return moment(value).format('DD MM YYYY - HH:MM')
                    }
                    
                }
            }]
        },
        onClick:function(evt) {
            //console.log(this)
            //that.$modal.show('hello-world');
            const activePoint = this.getElementsAtEvent(evt)[0];
            if(activePoint){
                //console.log(activePoint)
                let value = this.config.data.datasets[0].data[activePoint._index]
                let date = this.config.data.labels[activePoint._index]

                let tweet = that.tweets.find(t => t.created === date)
                that.$store.commit('SET_TWEET',tweet)
                console.log(tweet)
                
            }
        }
    })
  }
}
</script>


<style lang="scss" scoped>

</style>