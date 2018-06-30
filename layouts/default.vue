<template>
<b-container fluid>
  <b-row>
    <b-col cols="12" class="heading">
      <Header/>
      <search />
    </b-col>
  </b-row>
  <b-row>
    <b-col cols="12">
      <nuxt/>
    </b-col>
  </b-row>
   <b-row>
    <b-col cols="12">
      <Footer />
    </b-col>
  </b-row>
</b-container>
</template>


<script>
import Header from '@/components/Header.vue'
import SearchInput from '@/components/SearchInput.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:{
    search: SearchInput,
    Header,
    Footer
  },
}
</script>

<style>
.heading{
  display:flex;
  justify-content: center;
  flex-direction: column;
}
body, html{
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  height: 100vh;
}

</style>
