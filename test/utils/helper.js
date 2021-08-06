import { mount, shallowMount } from '@vue/test-utils'

export const factory = (component, options, shallow = false) => {
  const mountingFunction = shallow ? shallowMount : mount

  return mountingFunction(component, { ...options })
}
