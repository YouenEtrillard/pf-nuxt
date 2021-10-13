const defaultDepth = `*.*.*`;

export const state = () => ({
  education: [],
  experience: [],
  facts: [],
  skills: [],
  works: []
});

export const getters = {
  education: (state) => state.education,
  experience: (state) => state.experience,
  facts: (state) => state.facts,
  skills: (state) => state.skills,
  works: (state) => state.works,
  workByUrl: (state) => (url) => state.works.find((work) => work.url === url)
};

export const mutations = {
  setData(state, { resource: dataEntry, data }) {
    state[dataEntry] = data;
  }
};

export const actions = {
  async fetchResource({ commit }, resource) {
    await this.$axios
      .get(`/items/${resource}?fields=${defaultDepth}`)
      .then((response) => {
        if (response.status === 200) {
          commit(`setData`, {
            resource,
            data: response.data.data
          });
        }
      });
  }
};
