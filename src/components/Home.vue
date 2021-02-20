<template>
  <v-containe class="spacing-playground pa-6" fluid>
    <v-row class="pr-2 pl-2 d-flex justify-center ">
      <v-col cols="2">
        Finding falcone
      </v-col>
    </v-row>
    <v-row class="pr-2 pl-2 d-flex justify-center ">
      <v-col cols="4">
        Select planets you want to search in
      </v-col>
    </v-row>
    <v-row class="pr-2 pl-2">
      <v-col cols="3" v-for="n in 4" :key="n">
        <v-row>
          <v-col>Destination 1</v-col>
        </v-row>
        <v-row>
          <v-col><v-select placeholder="destination1"> </v-select></v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-radio label=" sapce pod " />
            <v-radio label=" sapce pod " />
            <v-radio label=" sapce pod " />
            <v-radio label=" sapce pod " />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col cols="2">
        Time Taken : 140
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="2">
        <v-btn class="primary">Find falcone</v-btn>
      </v-col>
    </v-row>
  </v-containe>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
