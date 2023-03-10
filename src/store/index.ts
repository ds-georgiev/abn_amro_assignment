import { createStore } from "vuex";
import { CastMember, TVShow, TVShowDetails } from "@types";
import axios from "axios";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {
    tvShows: [] as TVShow[],
    comedyShows: [] as TVShow[],
    dramaShows: [] as TVShow[],
    actionShows: [] as TVShow[],
    adventureShows: [] as TVShow[],
    showDetails: {} as TVShowDetails,
    searchedShows: {} as TVShow,
  },
  getters: {
    tvShows(state) {
      return state.tvShows;
    },

    comedyShows(state) {
      return state.comedyShows;
    },

    dramaShows(state) {
      return state.dramaShows;
    },

    actionShows(state) {
      return state.actionShows;
    },

    adventureShows(state) {
      return state.adventureShows;
    },
    showDetails(state) {
      return state.showDetails;
    },
  },
  mutations: {
    setTVShows(state, data) {
      state.tvShows = data;

      state.comedyShows = state.tvShows
        .filter((show) => show.genres?.includes("Comedy"))
        .sort((a, b) => b.rating - a.rating);
      state.dramaShows = state.tvShows
        .filter((show) => show.genres?.includes("Drama"))
        .sort((a, b) => b.rating - a.rating);
      state.actionShows = state.tvShows
        .filter((show) => show.genres?.includes("Action"))
        .sort((a, b) => b.rating - a.rating);
      state.adventureShows = state.tvShows
        .filter((show) => show.genres?.includes("Adventure"))
        .sort((a, b) => b.rating - a.rating);
    },
    setTVSwowDetails(state, data) {
      state.showDetails = JSON.parse(JSON.stringify(data));
    },
    setSearchedShows(state, data) {
      state.searchedShows = JSON.parse(JSON.stringify(data));
    },
  },
  actions: {
    async fetchTVShows({ commit }) {
      axios.get("https://api.tvmaze.com/shows").then(async (response) => {
        const data = response.data;
        const tvShows = data.map((show: any) => {
          return {
            id: show.id,
            title: show.name,
            image: show.image?.medium,
            url: show.url,
            genres: show.genres,
            rating: show.rating.average,
          };
        });
        commit("setTVShows", tvShows);
      });
    },

    async fetchTVShowDetails({ commit }, id) {
      let tvShowDetails: TVShowDetails = {} as TVShowDetails;
      let tvShowCast: CastMember[];
      await axios
        .get(`https://api.tvmaze.com/shows/${id}`)
        .then(async (response) => {
          const data = response.data;
          tvShowDetails = {
            id: data.id,
            title: data.name,
            image: data.image?.medium,
            url: data.url,
            genres: data.genres,
            language: data.language,
            summary: data.summary,
            rating: data.rating.average,
          };
        });
      await axios
        .get(`https://api.tvmaze.com/shows/${id}/cast`)
        .then(async (response) => {
          const data = response.data;
          tvShowCast = data.map((cast: any) => {
            return {
              id: cast.person.id,
              name: cast.person.name,
              image: cast.person?.image?.medium,
              character: cast.character.name,
            };
          });
          tvShowDetails.cast = tvShowCast;
          commit("setTVSwowDetails", tvShowDetails);
        });
      return tvShowDetails;
    },

    async setSearchedShows({ commit }, data) {
      commit("setSearchedShows", data);
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
