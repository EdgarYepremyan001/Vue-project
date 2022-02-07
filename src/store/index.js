import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Auth from "./modules/Auth";
import Posts from "./modules/Posts";
import Users from "./modules/Users";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    Auth,
    Posts,
    Users,
  }
})
export default store

