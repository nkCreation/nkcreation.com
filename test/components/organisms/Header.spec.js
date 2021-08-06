import Header from '~/components/ui/organisms/Header.vue'
import { factory } from '~/test/utils/helper'

const stubs = ['NuxtLink', 'Logo']

describe('Header', () => {
  it('should have dark class with props', () => {
    const wrapper = factory(Header, {
      propsData: {
        dark: true,
      },
      stubs,
    })

    expect(wrapper.get('header').classes()).toContain(`is-dark`)
  })

  it('should not have dark class with props', () => {
    const wrapper = factory(Header, {
      propsData: {
        dark: false,
      },
      stubs,
    })

    expect(wrapper.get('header').classes()).not.toContain(`is-dark`)
  })
})
