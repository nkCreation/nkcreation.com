import Logo from '~/components/ui/atoms/Logo.vue'
import { factory } from '~/test/utils/helper'

describe('Logo', () => {
  it('should display color logo when dark is false', () => {
    const wrapper = factory(Logo, {
      propsData: {
        dark: false,
      },
    })

    expect(wrapper.get('img').attributes('src')).toContain('logo.svg')
  })

  it('should display color logo when dark is true', () => {
    const wrapper = factory(Logo, {
      propsData: {
        dark: true,
      },
    })

    expect(wrapper.get('img').attributes('src')).toContain('logo_white.svg')
  })
})
