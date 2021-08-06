import Button from '~/components/ui/atoms/Button.vue'
import { factory } from '~/test/utils/helper'

describe('Button', () => {
  it('should have correct class with props', () => {
    const buttonColor = 'white'
    const wrapper = factory(Button, {
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
    const wrapper = factory(Button, {
      propsData: {
        type: buttonType,
      },
    })

    expect(wrapper.get('button').attributes('type')).toBe(buttonType)
  })
})
