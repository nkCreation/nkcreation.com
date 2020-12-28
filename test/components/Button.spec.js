import Button from '@/components/Button.vue'
import { shallowMount } from '@vue/test-utils'

describe('Button', () => {
  it('should have correct class with props', () => {
    const buttonColor = 'white'
    const wrapper = shallowMount(Button, {
      propsData: {
        color: buttonColor,
      },
    })

    expect(wrapper.get('button').classes()).toContain(
      `nk-button--${buttonColor}`
    )
  })

  it('should have correct type', () => {
    const buttonType = 'submit'
    const wrapper = shallowMount(Button, {
      propsData: {
        type: buttonType,
      },
    })

    expect(wrapper.get('button').attributes('type')).toBe(buttonType)
  })
})
