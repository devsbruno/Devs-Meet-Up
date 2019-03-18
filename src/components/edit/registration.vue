<template>
  <v-dialog  width="290px" v-model="registerDialog">
    <v-btn small accent class="primary white--text ml-2" slot="activator">
      {{ userIsRegistered ? 'Un-Register' : "Register"}}
    </v-btn>
    <v-card>
      <v-container>
         <v-layout row wrap>
          <v-flex xs12>
            <v-card-title v-if="userIsRegistered">Unregister from MeetUp ?</v-card-title>
						<v-card-title v-else>Register for MeetUp ?</v-card-title>
					</v-flex>
        </v-layout>
				<v-layout row wrap>
					<v-flex xs12>
						<v-card-text>
							You can always change the Decision
						</v-card-text>
					</v-flex>
				</v-layout>			
				<v-layout row wrap>
					<v-flex xs12>
						<v-card-actions>
							<v-btn class="red--text darken-1" flat @click="registerDialog = false"> Cancel</v-btn>	
							<v-btn class="green--text darken-1" flat @click="onAgree"> Confirm</v-btn>					
						</v-card-actions>
					</v-flex>
				</v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
	data () {
		return {
      registerDialog : false
		}
    
	},
	props : ['meetupId'],
    computed: {
      userIsRegistered () {
        return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
          return meetupId === this.meetupId
        }) >= 0
      }
    },
	methods : {
		onAgree(){
			if(this.userIsRegistered){
				this.$store.dispatch('unregisterUserFromMeetup', this.meetupId)
			} else {
			this.$store.dispatch('registerUserForMeetup', this.meetupId)

			}


		}

	}
}
</script>


