import { shallowMount } from "@vue/test-utils";
import FormSubmit from "@/components/tests/FormSubmit.vue";

let url = ''
let data = ''

const mockHttp = {
  get: () => Promise.resolve({ data: 'value' })
}

describe('FormSUbmit.vue', () => {
  it('フォーム送信でお知らせ表示', () => {
    const wrapper = shallowMount(FormSubmit, {
      mocks: {
        $http: mockHttp
      }
    });

    wrapper.find("[data-username]").setValue("alice");
    wrapper.find("form").trigger("submit.prevent");

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find(".message").text()).toBe("aliceさん、お問い合わせ、ありがとうございます。");
    })
  });
});

