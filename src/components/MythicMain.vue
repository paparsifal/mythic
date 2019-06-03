<template>
    <v-container>
        <h1>Mythic</h1>
        <v-card-text>
            <p>{{ resultat }}</p>
        </v-card-text>
        <v-btn block @click="roll('IM')">Impossible</v-btn>
        <v-btn block @click="roll('QI')">Quasi impossible</v-btn>
        <v-btn block @click="roll('I')">Improbable</v-btn>
        <v-btn block @click="roll('PP')">peu probable</v-btn>
        <v-btn block @click="roll('50')">50/50</v-btn>
        <v-btn block @click="roll('AP')">Assez probable</v-btn>
        <v-btn block @click="roll('P')">Probable</v-btn>
        <v-btn block @click="roll('QS')">Quasi sûr</v-btn>
        <v-btn block @click="roll('S')">Sûr</v-btn>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
        resultat: 'hey there',
        proba: {
            'IM': 99,
            'QI': 85,
            'I': 70,
            'PP': 60,
            '50': 50,
            'AP': 40,
            'P': 30,
            'QS': 20,
            'S': 10,
        }
    }),
    methods: {
        roll: function(e) {
            let tirage = Math.floor(Math.random()*101);
            let reponse = '';
            if (tirage>this.proba[e]){
                reponse = 'OUI';
            }
            else {
                reponse = "NON";
            }
            this.resultat = reponse + ' (' +tirage + ') ' + e;
        }
    }
  }
</script>