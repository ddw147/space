<template>
  <div>
    <v-row>
      <v-col>Destination 1</v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-autocomplete
          placeholder="destination1"
          :items="destinations"
          v-model="selectedDestination"
        />
      </v-col>
    </v-row>
    <v-row v-if="selectedDestination">
      <v-col>
        <v-radio-group v-model="selectedRadio">
          <v-radio label=" space pod " :value="radio1" />
          <v-radio label=" space pod " :value="radio2" />
          <v-radio label=" space pod " :value="radio3" />
          <v-radio label=" space pod " :value="radio4" />
        </v-radio-group>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "PlanetSelector",
  data() {
    return {
      radio1: "1",
      radio2: "2",
      radio3: "3",
      radio4: "4",
      selectedRadio: null,
      selectedDestination: null,
      destinations: ["first", "second", "third", "fourth"]
    };
  }
};
</script>
