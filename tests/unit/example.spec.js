import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/Home";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "asd";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
