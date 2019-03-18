<template>
	<v-container>
		<v-layout row wrap v-if="loading">
			<v-flex xs12 class="text-xs-center">
			<v-progress-circular indeterminate  color="purple" :width="7" :size="70"  v-if="loading">
			</v-progress-circular>
			</v-flex>
		</v-layout>

		<v-layout row wrap v-else>
     <v-flex xs12 sm10 md10 offset-sm1 offset-md1>
        <v-card class=" orange lighten-5">
        <v-img height="227px" :src= 'meetup.imageUrl' >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline titl4 orange lighten-5 ">{{meetup.title}} </span>
             
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-text>
          <div>
           <div class="primary--text title mb-2">{{meetup.date | date}}   -  {{meetup.location}}</div> 
						<div>{{meetup.description}}	</div>
          </div>
        </v-card-text>
        <v-card-actions class="mt-0 pt-0">
          <template  v-if="userIsCreator">
            <app-edit-meetup-details-dialog :meetup='meetup'></app-edit-meetup-details-dialog>
           </template>
          <template  v-if="userIsCreator">
            <app-edit-meetup-date-dialog :meetup='meetup' ></app-edit-meetup-date-dialog>
          </template>
          
					<v-spacer></v-spacer>
          <app-registration :meetupId="meetup.id" v-if="userisAuthenticated && !userIsCreator"></app-registration>
        </v-card-actions> 
				</v-card>
		 </v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	computed : {
		meetup (id) {
			return this.$store.getters.loadedMeetup(this.$route.params.id)		
    },
    userisAuthenticated() {
      return this.$store.getters.user !==null && this.$store.getters.user !== undefined
    },
    userIsCreator () {
      if (!this.userisAuthenticated) {
        return false
      }
      return this.$store.getters.user.id === this.meetup.creatorId
    },
		loading () {
			return this.$store.getters.loading
		}
	}
	
}
</script>

<style scoped>
.titl4 {
	position: absolute;
  left: 13px;
	top: 13px;
	color:blueviolet;
	padding: 10px; 
	font: size 34rem; 
}

</style>
