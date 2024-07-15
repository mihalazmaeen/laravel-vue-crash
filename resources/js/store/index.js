import { createApp } from "vue";
import { createStore } from "vuex";
// import getters from "./getters";
import * as actions from "./actions";
// import mutations from "./mutations";

// Create a new store instance.
const store = createStore({
    state: {},
    modules: {},
    // getters,
    actions,
    // mutations,
});

export default store;
