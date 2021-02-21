<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        Finding Falcon
      </div>
      <v-spacer></v-spacer>

      <v-btn text href="https://geektrust.in" target="blank"
        >Geektrust Home</v-btn
      >
    </v-app-bar>
    <v-main>
      <router-view> </router-view>
    </v-main>
    <v-footer>
      <v-row class="text-center">
        <v-col>
          coding problem- www.geektrust.in/finding-falcone
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
