<template>
  <v-app>
    <v-content>
      <MythicMain/>
    </v-content>
  </v-app>
</template>

<script>
import MythicMain from './components/MythicMain'

export default {
  name: 'App',
  components: {
    MythicMain
  },
  data () {
    return {
      //
    }
  }
}
</script>
