import { shallowMount } from '@vue/test-utils';
import NumberRender from '@/components/tests/NumberRender.vue';

describe('NimberRender.vue', () => {
  it('偶数をレンダー', () => {
    const wrapper = shallowMount(NumberRender, {
      propsData: {
        even: true
      }
    });
    expect(wrapper.text()).toBe('2, 4, 6, 8');
  });

});