<template>
  <v-container >
   <v-layout row v-if="error">
     <v-flex xs12 sm8 offset-sm2  >
       <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
     </v-flex>
   </v-layout>
    <v-layout row class="mt-5">
      <v-flex xs12 sm6 offset-sm3 >
        <v-card round raised="" class="cyan lighten-3 pt-3">
          <v-layout>
            <v-flex xs12 sm8 offset-sm3>
              <v-card-title class="display-3 primary--text">
                Sign In
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignin">

                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="email" label="Email"  id="email" v-model="email" type="email" required  autocomplete="username"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row class="mt-4">
                  <v-flex xs12>
                    <v-text-field  name="password"  label="Password"  id="password" v-model="password" type="password"  required autocomplete="current-password"></v-text-field>
                  </v-flex>
                </v-layout>
                
                <v-layout row class="mt-5">
                  <v-flex xs12>
                    <v-btn type="submit" :disabled="loading" :loading="loading" color="primary">Sign in
                      <span slot="loader" class="custom-loader"> 
                        <v-icon light> cached </v-icon>
                      </span>
                    </v-btn> 
                  </v-flex>
                </v-layout>

              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },

computed: {
  user () {
    return this.$store.getters.user
  },
  error () {
    return this.$store.getters.error
  },
  loading(){
    return this.$store.getters.loading
  }
},

watch : {
  user (value) {
    if (value !==null && value !== undefined) {
      this.$router.push('/')
    }
    else{
      console.log( 'Problem with the state.user value is either null or undefined');
      
    }
  }
},

  methods : {
    onSignin () {
     this.$store.dispatch('signUserIn', {email:this.email , password:this.password }) 
    },
    onDismissed() {
      console.log('Dismissed Alert!')
      this.$store.dispatch('clearError')      
    }
  }
}
</script>
