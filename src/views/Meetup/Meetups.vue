<template>
<v-container>
  <v-layout>
    <v-flex xs12 sm12 md11 offset-sm1 offset-md-1 align-center>
      <v-card class="primary lighten-5 mb-3" v-for="meetup in meetups" :key='meetup.id'>
        <v-container fluid >
          <v-layout row>
            <v-flex xs5 sm4 md4>
                <v-img  :src="meetup.imageUrl" height="201px"  ></v-img>
            </v-flex>
            <v-flex xs7 sm8 >
             <v-card-title primary-title class="pt-0 ml-1">
             <div>
             <div class="headline blue--text">{{meetup.title}}</div>
             <div class="primary--text"> {{meetup.date | date}}  -  {{meetup.location}}</div>
             <div>{{meetup.description}}</div>
             </div>
             </v-card-title>
               <v-card-actions >
              <v-btn small round light class="primary ml-3" :to="'/meetups/' + meetup.id">
                View MeetUp<v-icon right >arrow_forward</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  computed : {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>
