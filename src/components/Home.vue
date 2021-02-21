<template>
  <v-container class="spacing-playground pa-6" fluid>
    <v-row>
      <v-col cols="12" class="text-center"> Finding Falcone </v-col>

      <v-col cols="12" class="text-center">
        Select planets you want to search in
      </v-col>
    </v-row>
    <v-row class="pr-2 pl-2" :key="keyToReset">
      <v-col v-for="n in 4" :key="n" cols="3">
        <v-card height="500" class="pa-4" elevation="2">
          <PlanetSelector />
        </v-card>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="2">
        Time Taken : 140
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="2">
        <v-btn class="primary mr-1">Find Falcone</v-btn>

        <v-btn class="info ml-1" @click="reset">Reset</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {
    PlanetSelector: () => import("@/components/PlanetSelector")
  },
  data() {
    return {
      keyToReset: 0
    };
  },
  methods: {
    reset() {
      this.keyToReset++;
    }
  }
};
</script>
