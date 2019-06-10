<template>
    <v-container>
        <h1>Mythic</h1>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <v-card-text>
                    <p v-for="resultat in resultats" :key="resultat.texte" v-html="resultat.texte"></p>
                </v-card-text>
            </v-flex>
            <v-flex xs12 sm6>
                <v-btn block @click="roll('IM')">Impossible</v-btn>
                <v-btn block @click="roll('QI')">Quasi impossible</v-btn>
                <v-btn block @click="roll('I')">Improbable</v-btn>
                <v-btn block @click="roll('PP')">peu probable</v-btn>
                <v-btn block @click="roll('50')">50/50</v-btn>
                <v-btn block @click="roll('AP')">Assez probable</v-btn>
                <v-btn block @click="roll('P')">Probable</v-btn>
                <v-btn block @click="roll('QS')">Quasi sûr</v-btn>
                <v-btn block @click="roll('S')">Sûr</v-btn>
                <v-btn block @click="focusRoll()">Générer focus</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import focusData from '../assets/focus.json'
import actionsData from '../assets/actions.json'
import subjectsData from '../assets/subjects.json'
export default {
  data: () => ({
    resultats: [],
    proba: {
      'IM': 99,
      'QI': 85,
      'I': 70,
      'PP': 60,
      '50': 50,
      'AP': 40,
      'P': 30,
      'QS': 20,
      'S': 10
    },
    focus: focusData,
    actions: actionsData,
    subjects: subjectsData
  }),
  methods: {
    roll: function (e) {
      let tirage = Math.floor(Math.random() * 101)
      let reponse = ''
      if (tirage > this.proba[e]) {
        reponse = 'OUI'
      } else {
        reponse = 'NON'
      }
      this.resultat = reponse + ' (' + tirage + ') ' + e
    },
    focusRoll: function () {
      let tirage = Math.floor(Math.random() * 101)
      let resultat = this.focus.find(function (e) { return e.l <= tirage && tirage <= e.u }).e.fr
      tirage = Math.floor(Math.random() * 101)
      resultat += ' : ' + this.actions[tirage].fr
      tirage = Math.floor(Math.random() * 101)
      resultat += ' ' + this.subjects[tirage].fr
      this.resultats.push({texte: resultat});
    }
  }
}
</script>
