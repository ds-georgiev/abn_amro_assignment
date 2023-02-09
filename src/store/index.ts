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
      console.log("🚀 ~ file: index.ts:36 ~ tvShows ~ tvShows", data);

      state.tvShows = data;

      state.comedyShows = state.tvShows.filter((show) =>
        show.genres?.includes("Comedy")
      );
      state.dramaShows = state.tvShows.filter((show) =>
        show.genres?.includes("Drama")
      );
      state.actionShows = state.tvShows.filter((show) =>
        show.genres?.includes("Action")
      );
      state.adventureShows = state.tvShows.filter((show) =>
        show.genres?.includes("Adventure")
      );
    },
    setTVSwowDetails(state, data) {
      console.log("🚀 ~ file: index.ts:63 ~ setTVSwowDetails ~ data", data);

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
            rating: data.rating.average,
            summary: data.summary,
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

// language: string;
//   rating: {
//     average: number;
//   };
//   summary: string;
//   cast: CastMember[];
