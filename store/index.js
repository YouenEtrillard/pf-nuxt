import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const apiUrl = `https://api.youen-etrillard.com/directus/public/_`;
const defaultDepth = `*.*.*`;

const store = () => new Vuex.Store({
  state: {
    education: [],
    experience: [],
    facts: [],
    skills: [],
    works: [],
  },
  getters: {
    education: state => state.education,
    experience: state => state.experience,
    facts: state => state.facts,
    skills: state => state.skills,
    works: state => state.works,
  },
  mutations: {
    setData(state, { resource: dataEntry, data }) {
      console.log(state, dataEntry, data);
      state[dataEntry] = data;
    },
  },
  actions: {
    async fetchResource({commit}, resource) {
      await this.$axios.get(`${apiUrl}/items/${resource}?fields=${defaultDepth}`)
        .then(response => {
          if (response.status === 200) {
            commit(`setData`, {
              resource,
              data: response.data.data,
            });
          }
        });
    },
  }
});

export default store;
