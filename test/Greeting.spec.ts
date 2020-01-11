import { mount } from '@vue/test-utils';
import Greeting from '@/components/tests/Greeting.vue'

describe('Greeting.vue', () => {
  it('reder greeting', () => {
    const wrapper = mount(Greeting);
    expect(wrapper.text()).toMatch('Vue and TDD');
  })
})