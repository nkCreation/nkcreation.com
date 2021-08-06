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

  describe('right component depending on href', () => {
    it('should be a normal link when http is passed', () => {
      const wrapper = factory(Button, {
        propsData: {
          href: 'https://www.example.com/',
        },
      })

      expect(wrapper.get('a').exists()).toBe(true)
      expect(wrapper.get('a').attributes('href')).toBe(
        'https://www.example.com/'
      )
      expect(wrapper.get('a').attributes('target')).toBe('_blank')
    })

    it('should be a nuxt link when relative path is passed', () => {
      const wrapper = factory(Button, {
        propsData: {
          href: 'contact',
        },
        stubs: ['nuxt-link'],
      })

      expect(wrapper.find('nuxt-link-stub').exists()).toBe(true)
      expect(wrapper.find('nuxt-link-stub').attributes('to')).toBe('contact')
    })
  })
})
