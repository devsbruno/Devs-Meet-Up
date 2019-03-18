<template>
	<v-dialog width="450px" persistent v-model="editDialog">
		<v-btn accent small class="orange white--text" slot="activator">
			Edit Details
		</v-btn>
		<v-card>
			<v-container>
				<v-layout row wrap>
					<v-flex xs12 offset-xs1>
						<v-card-title >EDIT THE MEETUP</v-card-title>
					</v-flex>
				</v-layout>
				<v-divider color='red'></v-divider>
				<v-layout row wrap>
					<v-flex xs12>
						<v-card-text>
            <v-text-field name='title' label='Title' id="title"  flat required prepend-inner-icon="search" v-model="editedTitle" >
						</v-text-field> 

						<v-textarea name='description' label='Description' id="description"  flat required prepend-inner-icon="supervisor_account" v-model="editedDescription">
					   </v-textarea>  
						<v-flex xs12 sm8 offset-sm2>
            <v-text-field name='location' label='Location' id="location"  flat required prepend-inner-icon="face" v-model="editedLocation"></v-text-field> </v-flex>

            




						
						</v-card-text>
					</v-flex>
				</v-layout>
				<v-divider color='red'></v-divider>

				        


				<v-layout row wrap>
					<v-flex xs12>
						<v-card-actions>
							<v-btn  class="red white--text darken-1" @click="editDialog= false" >Close</v-btn>
							<v-spacer></v-spacer>
							<v-btn  class="green white--text darken-1" @click="onSaveChanges">Save</v-btn>
						</v-card-actions>
					</v-flex>
				</v-layout>
				<v-divider color='red'></v-divider>
			</v-container>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props : ['meetup'],
	data () {
		return {
			editDialog : false,
			editedTitle : this.meetup.title,
			editedLocation : this.meetup.location,
			editedDescription : this.meetup.description,

			 date: new Date().toISOString().substr(0, 10),
      time: new Date().toISOString().substr(11, 5),
      menu: false,
      modal: false,
      menu2: false

			
		}
	},
	methods:{
		onSaveChanges () {
			if(this.editedDescription.trim()=== '' || this.editedTitle.trim() === '') {
				return
			}
		 this.editDialog=false
		 this.$store.dispatch('updateMeetupData',{
			 id: this.meetup.id,
			 title: this.editedTitle,
			location: this.editedLocation,
			 description: this.editedDescription
		 })
		 }
	}
}
</script>
