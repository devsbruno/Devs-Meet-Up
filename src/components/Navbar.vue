<template>
  <v-card >
      <!-- include the hide setup accrding to viewport of the toolbar menu vs drawer menu drawer md  toool sm -->  


    <v-toolbar  color="orange lighten-3" height='73'  >
      
      <!-- side drawer btn -->
      <v-toolbar-side-icon   @click="sideNav=!sideNav" scroll-toolbar-off-screen 
      class="hidden-md-and-up "> 
      </v-toolbar-side-icon> 
      <router-link to="/" tag="span" style="cursor:pointer" class="display-1">Devs Meet-Upp</router-link>
      <v-spacer></v-spacer>
       

      <!-- toolbar-links -->
      <span v-for="link in menuItems" :key="link.title" class="hidden-xs-and-down " > 
        <v-btn flat color='orange lighten-5' small  router :to='link.route'>
            <v-icon  class="  purple--text">{{link.icon}}</v-icon>
          <span  class="red--text text--darken-4 font-weight-bold pl-1">{{link.title}}</span>
        </v-btn>
      </span>

        <v-btn flat small  @click="onLogOut" color='orange lighten-5' v-if="userIsAuthenticated" >
            <v-icon  class="  purple--text">exit_to_app</v-icon>
          <span  class="red--text text--darken-4 font-weight-bold pl-1">Log Out</span>
        </v-btn>   

    </v-toolbar>

    <!-- the side-nav links -->
    <v-navigation-drawer app v-model="sideNav" temporary  class="yellow lighten-4 " style="margin-top : 73px">
      <v-list>
        <v-list-tile v-for='link in menuItems' :key="link.title" router :to= "link.route" @click="sideNav=false" class="mt-1">
          <v-list-tile-action>
            <v-icon class="  purple--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="red--text text--darken-4 ">{{link.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile  @click="sideNav=false" class="mt-1" v-if="userIsAuthenticated">
          <v-list-tile-action>
            <v-icon class="  purple--text">exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title @click="onLogOut"  class="red--text text--darken-4 ">Log Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


      </v-list>   
    </v-navigation-drawer>

  </v-card>
</template>

<script>
export default {
  data() {
    return{
      sideNav : false,      
    }
  },
  methods:{
    onLogOut () {
      this.$store.dispatch('logOut')
    }
  },
   
  computed : {
    menuItems () {
      let menuItems =[
      {  icon:'face', title : "Sign Up", route:"/signup" },
      {  icon:'lock_open', title : "Sign In", route:"/signin" }
      ]
      if (this.userIsAuthenticated) {
        menuItems =[
      {  icon:'supervisor_account', title : "View Meet-ups", route:"/meetups" },
      {  icon:'room', title : "Organize Meetup", route:"/meetup/new" },
      {  icon:'person', title : "Profile", route:"/profile" }
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !==null && this.$store.getters.user !== undefined
    }
    
    
  }
}
</script>

