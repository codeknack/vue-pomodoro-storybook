import { mount } from '@vue/test-utils'
import State from '../../src/components/State.vue';

describe("State", () => {
  it('have title Work!', () => {
    const wrapper = mount(State, {
      propsData: {
        isworking: true
      }
    })
    const title = wrapper.find('h3')
    expect(title.text()).toBe('Work!')
  });
  it('have title Rest!', () => {
    const wrapper = mount(State, {
      propsData: {
        isworking: false
      }
    })
    const title = wrapper.find('h3')
    expect(title.text()).toBe('Rest!')
  });
});




