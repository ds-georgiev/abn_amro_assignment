import { TVShow } from "@/store/types";
import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
import HomeView from "@/views/HomeView.vue";

describe("Actions.vue", () => {
  let mockedFunction: any;
  let store: any;

  beforeEach(() => {
    mockedFunction = jest.fn();
    store = createStore({
      state: {
        tvShows: [] as TVShow[],
      },
      actions: {
        fetchTVShows: mockedFunction,
      },
    });
  });

  test("mount", () => {
    expect(HomeView).toBeTruthy();
  });
  test("should call fetchTVShows action", () => {
    shallowMount(HomeView, {
      global: {
        plugins: [store],
      },
    });

    expect(mockedFunction).toHaveBeenCalled();
    expect(store.state.tvShows).toEqual([]);
  });
});
