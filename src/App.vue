<template>
  <v-app dark>
    <v-content v-if="page=='main'">
      <MythicMain/>
    </v-content>
    <v-content v-if="page=='pnj'">
      <PnjPanel/>
    </v-content>
    <v-footer>
      <v-btn @click="page='main'">Home</v-btn>
      <v-btn @click="page='pnj'">PNJ</v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import MythicMain from './components/MythicMain'
import PnjPanel from './components/PnjPanel'

export default {
  name: 'App',
  components: {
    MythicMain,
    PnjPanel
  },
  data () {
    return {
      page: 'pnj'
    }
  }
}
</script>
