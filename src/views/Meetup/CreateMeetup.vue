<template>
<v-container>
  <v-layout>
    <v-flex xs12 sm8 offset-sm3 class="mb-3">
      <h2 class="primary--text display-1">Create a new Meet- Up</h2>
    </v-flex>
  </v-layout>
  <v-layout row>
    <v-flex xs12>

       <!-- new meet-up form -->
      <v-form @submit="onCreateMeetup" class="cyan lighten-3 red--text py-4" >
        <v-layout row>
          <v-flex xs12 sm8 offset-sm2>
            <v-text-field name='title' label='Title' id="title"  flat required prepend-inner-icon="search" v-model="title" ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm8 offset-sm2>
            <v-text-field name='location' label='Location' id="location"  flat required prepend-inner-icon="face" v-model="location"></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm8 offset-sm2>
            <v-text-field name='imageUrl' label='Image - Url' id="imageUrl"  flat required  prepend-inner-icon="person"  v-model="imageUrl"></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm8 offset-sm2>
            <img :src="imageUrl" alt="Preview" height='173px'>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm8 offset-sm2>
            <v-textarea name='description' label='Description' id="description"  flat required prepend-inner-icon="supervisor_account" v-model="description"></v-textarea>
          </v-flex>
        </v-layout>

        <!-- the date Picker -->
        <v-layout>
        <v-flex xs6 sm3 md2 offset-sm3 class="mr-5">
        <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="-39"  lazy  transition="scale-transition" offset-y full-width   >

        <template v-slot:activator="{ on }">
        <v-text-field  v-model="date"   label="Pick the Date" prepend-icon="event"  readonly  v-on="on"></v-text-field> </template> 

        <v-date-picker v-model="date" @input="menu2 = false" width='270px' color='primary' ></v-date-picker>

        </v-menu>
        </v-flex>

    <v-flex xs6 sm3 md2>
      <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="time"
        lazy transition="scale-transition" offset-y full-width max-width="270px" min-width="237px" >
        <template v-slot:activator="{ on }">
          <v-text-field v-model="time" label="Pick Meet-up Time" prepend-icon="access_time" readonly v-on="on" ></v-text-field>
        </template>
        <v-time-picker v-if="menu" v-model="time" full-width @click:minute="$refs.menu.save(time)" ></v-time-picker>
      </v-menu>
    </v-flex>

       </v-layout>


        <v-layout row>
          <v-flex xs12 sm8 offset-sm4>
          <v-btn class="primary" :disabled="!valid" type="submit">Create Meet-Up</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      title : '',
      location : '',
      imageUrl: '',
      description: '',

      date: new Date().toISOString().substr(0, 10),
      time: new Date().toISOString().substr(11, 5),
      menu: false,
      modal: false,
      menu2: false      
    }
  },
  computed: {
    valid(){
      return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.description !== ''
    },
      submittableDate() {
        const date = new Date(this.date)
        if (typeof this.time === 'string'){
          let hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
        date.setHours(this.time.getHours())
        date.setMinutes(this.time.getMinutes())
        }        
        console.log(date)
        return date
      }
  },
  methods:{
    onCreateMeetup() {
      if (!this.valid){
        return
      }
      const meetupData = {
      title: this.title,
      location: this.location,
      imageUrl: this.imageUrl,
       description: this.description,
       date : this.submittableDate 
      }
     this.$store.dispatch('createMeetup', meetupData)
     this.$router.push('/meetups')
    }
  }
}
</script>

