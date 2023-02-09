import { shallowMount } from "@vue/test-utils";
import DetailsComponent from "@/components/DetailsComponent.vue";
import mockDetailsComponent from "./mocks/mockDetailsComponent";

describe("Actions.vue", () => {
  const mockData = mockDetailsComponent();

  test("mount", () => {
    expect(DetailsComponent).toBeTruthy();
  });

  test("check show genres", () => {
    const wrapper = shallowMount(DetailsComponent, {
      props: {
        data: mockData,
      },
    });
    const genres = wrapper.findAll('[data-test="show-genres"]');

    expect(genres).toBeTruthy();
    expect(genres.length).toBe(3);
  });

  test("check show title", () => {
    const wrapper = shallowMount(DetailsComponent, {
      props: {
        data: mockData,
      },
    });
    const title = wrapper.find('[data-test="show-title"]');

    expect(title).toBeTruthy();
    expect(title.text()).toBe("The Big Bang Theory");
  });

  test("check show image", () => {
    const wrapper = shallowMount(DetailsComponent, {
      props: {
        data: mockData,
      },
    });
    const image = wrapper.find('[data-test="show-image"]');

    expect(image).toBeTruthy();
    expect(image.attributes().src).toBe(mockData.image);
  });

  test("check cast", () => {
    const wrapper = shallowMount(DetailsComponent, {
      props: {
        data: mockData,
      },
    });
    const castEl = wrapper.find('[data-test="show-cast"]');
    const castChildren = castEl.findAll('[data-test="show-cast-member"]');

    expect(castEl).toBeTruthy();
    expect(castChildren.length).toBe(mockData.cast?.length);
  });
});
