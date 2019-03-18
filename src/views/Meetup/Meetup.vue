<template>
	<v-container>
		<v-layout row wrap>
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
					<v-spacer></v-spacer>
          <v-btn class="primary">Register</v-btn>
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
		}
	}
	
}
</script>

<style scoped>
.titl4 {
	position: absolute;
	bottom: 17px;
	color:blueviolet;
	padding: 10px; 
  left: 13px;
	font: size 34rem; 
}
</style>
