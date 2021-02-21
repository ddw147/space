import Vue from "vue";
import Vuex from "vuex";
import planet from "@/store/planet";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    planet: planet
  }
});
