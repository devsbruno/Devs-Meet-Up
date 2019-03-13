<template>
	<v-container class="pt-2">
		<v-layout row wrap class="mt-3 mb-5">
			<v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="primary"> Explore Meetups</v-btn>
			</v-flex>
			<v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="primary"> Organize Meetups</v-btn>
			</v-flex>
		</v-layout>

		<v-layout row wrap class="mt-2">
			<v-flex xs12 sm12  class="justify-centre">
      <v-carousel hide-delimiters style="cursor:pointer;" height='579px'>
        <v-carousel-item   v-for="meetup in meetups" :key="meetup.id"
        :src="meetup.imageUrl" @click="onLoadMeetup(meetup.id)" > <div class="titl0 display-5 ">{{meetup.title}}</div></v-carousel-item>
      </v-carousel>
			</v-flex>
    </v-layout>
    <v-layout row wrap class='mt-3'>
			<v-flex xs12 class="text-sm-center mt-2">
       <router-link to="/meetups" tag="span" style="cursor:pointer" class="info lighten-3 primary--text text--darken-1 pa-3 title ">Join our Awesome Meetups</router-link>
			</v-flex>

		</v-layout>
	

	</v-container>
</template>

<script>

export default {
  computed : {
		meetups () {
      return this.$store.getters.featuredMeetups
		}
	},
	methods: {
		onLoadMeetup(id) {
      this.$router.push('/meetups/' + id)
		}
	}
}
</script>

<style scoped>
.titl0 {
	position: absolute;
	bottom: 07px;
	background-color: #fff;
	color:blueviolet;
	padding: 3px 17px; 
  right: 1%;
	font-size: 28px;
}
</style>



