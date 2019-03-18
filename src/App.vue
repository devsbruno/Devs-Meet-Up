<template>
  <v-app>
    <Nav/>
    <v-content class="grey lighten-2" >    
       <router-view></router-view>
    </v-content>


  </v-app>
</template>

<script>
import Nav from './components/Navbar'

export default {
  name: 'App',
  components: {
      Nav
  },
  
  data () {
    return {
      //
    }
  }


}
</script>
