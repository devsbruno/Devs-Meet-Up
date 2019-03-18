<template>
  <v-dialog width="350px"  v-model="editDialog">
    <v-btn small accent class="orange white--text ml-2" slot="activator">
      Edit Date & Time
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap offset-sm1>           
          <v-flex xs12 sm6 md6  >
            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="-100"  lazy  transition="scale-transition" offset-y full-width  >
                <template v-slot:activator="{ on }">
                <v-text-field  v-model="editableDate"   label="Pick the Date" prepend-icon="event"  readonly  v-on="on"></v-text-field> </template> 
                <v-date-picker v-model="editableDate" @input="menu2 = false" width='290px' color='primary' >     
                </v-date-picker>
            </v-menu>
          </v-flex>

          <v-flex xs12 sm6>
            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="-100" :return-value.sync="editableTime"
              lazy transition="scale-transition" offset-y full-width max-width="270px" min-width="237px" >
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="editableTime" label="Pick Meet-up Time" prepend-icon="access_time" readonly v-on="on" ></v-text-field>
                </template>
                <v-time-picker v-if="menu" v-model="editableTime" full-width @click:minute="$refs.menu.save(editableTime)" >     
                </v-time-picker>
            </v-menu>
          </v-flex>

          <div>
            <v-btn class="blue--text darken-1"  flat
              @click.native="editDialog = false">Kansoul
            </v-btn>
            <v-btn class="blue--text darken-1" flat
              @click="onSaveChanges">Save
            </v-btn>
          </div>

        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['meetup'],
    data () {
      return {
        editDialog: false,
        editableDate: null,
        editableTime: null,
        menu:false,
        menu2: false,
        
      }
    },
    methods: {
      onSaveChanges () {
        const newDate = new Date(this.meetup.date)
        const newDay = new Date(this.editableDate).getUTCDate()
        const newMonth = new Date(this.editableDate).getUTCMonth()
        const newYear = new Date(this.editableDate).getUTCFullYear()
        const hours = this.editableTime.match(/^(\d+)/)[1]  
        const minutes = this.editableTime.match(/:(\d+)/)[1]

        newDate.setUTCDate(newDay)
        newDate.setUTCMonth(newMonth)
        newDate.setUTCFullYear(newYear)
        newDate.setHours(hours)
        newDate.setMinutes(minutes)
        
        this.$store.dispatch('updateMeetupData', {
          id: this.meetup.id,
          date: newDate
        })
      }
    },
    created () {
      this.editableDate = new Date(this.meetup.date).toISOString().substr(0,10)
      this.editableTime = new Date(this.meetup.date).toISOString().substr(11,5)
    }
  }
</script>