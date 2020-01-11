import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/App.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

const router = new VueRouter();

let wrapper: any;

beforeEach(() => {
  wrapper = shallowMount(App, {
    router,
    stubs: [
      'router-link',
      'router-view',
    ],
  });
});

describe('Testing App comonent', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
