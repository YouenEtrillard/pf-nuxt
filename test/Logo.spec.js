import { mount } from '@vue/test-utils';
import LogoAnim from '~/components/LogoAnim.vue';

describe('LogoAnim', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LogoAnim);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
