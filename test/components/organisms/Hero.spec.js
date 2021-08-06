import Hero from '~/components/ui/organisms/Hero.vue'
import { factory } from '~/test/utils/helper'

describe('Hero', () => {
  it('should display right informations', () => {
    const props = {
      title: 'Test title',
      message: 'this is a test message',
      link: 'https://nkcreation.com/',
      label: 'Click on me',
    }

    const wrapper = factory(Hero, {
      propsData: {
        ...props,
      },
    })

    expect(wrapper.get('h1').text()).toBe(props.title)
    expect(wrapper.get('.content').text()).toBe(props.message)
    expect(wrapper.get('.button').attributes('href')).toBe(props.link)
    expect(wrapper.get('.button').text()).toBe(props.label)
  })
})
