<template>
<v-container>
  <h1>Profile Page</h1>

<v-layout>
<!-- <v-flex xs6 sm2 md2>
  <v-menu v-model="menu2" :close-on-content-click="false"
  :nudge-right="-39"  lazy  transition="scale-transition"
   offset-y full-width  min-width="290px" >

    <template v-slot:activator="{ on }">
     <v-text-field  v-model="date"   label="Pick the Date" 
      prepend-icon="event"  readonly  v-on="on"></v-text-field>
    </template> 

    <v-date-picker v-model="date" @input="menu2 = false" width='321px' color='primary' ></v-date-picker>
  </v-menu>
</v-flex> -->

<v-flex xs6 sm2 md2>
  <v-menu ref="menu" v-model="menu2" :close-on-content-click="false"
  :nudge-right="-39"  lazy  transition="scale-transition"
   offset-y full-width  min-width="290px" >

    <template v-slot:activator="{ on }">
    <v-text-field  v-model="time"   label="Pick the time" 
    prepend-icon="event"  readonly  v-on="on"></v-text-field>
    </template> 

    <v-time-picker v-model="time" @input="menu2 = false" width='321px' color='primary' ></v-time-picker>
  </v-menu>
 </v-flex>
 </v-layout>

<v-layout row wrap>
    <v-flex xs11 sm5>
      <v-menu
        ref="menu" v-model="menu"  :close-on-content-click="false"        :nudge-right="-40" :return-value.sync="time" lazy
        transition="scale-transition" offset-y   full-width
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="time"
            label="Picker in menu"
            prepend-icon=""
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-flex>
  </v-layout>
 
</v-container>
</template>

<script>
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      time: new Date().toISOString().substr(11, 5),
      menu: false,
      modal: false,
      menu2: false
    }),
    computed : {
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
    }

  }


</script>