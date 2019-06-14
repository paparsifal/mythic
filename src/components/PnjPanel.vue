<template>
    <v-container>
        <h1>Liste des PNJs</h1>
        <v-list>
            <v-list-tile v-for="pnj in pnjs" :key="pnj">
                {{pnj}}
                <v-spacer></v-spacer>
                <v-btn @click="newPNJ=pnj; pnjs.splice(pnjs.indexOf(pnj), 1)" icon><v-icon>delete</v-icon></v-btn>
            </v-list-tile>
        </v-list>
        <p></p>
        <v-layout row wrap>
            <v-text-field v-model="newPNJ" label="Nouveau PNJ" full-width box></v-text-field>
            <v-btn @click="pnjs.push(newPNJ); newPNJ=''">Ajouter</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    pnjs: ['Obiwan', 'Yoda', 'Josh Ivans'],
    newPNJ: ''
  })
}
</script>
