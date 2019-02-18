import { mergeData } from 'vue-functional-data-merge'
import CLink, { propsFactory } from '../Link/CLink'

export default {
  functional: true,
  name: 'CDropdownItem',
  props: propsFactory(),
  render (h, { props, data, children }) {
    return h(
      CLink,
      mergeData(data, {
        props,
        staticClass: 'dropdown-item',
        attrs: { role: 'menuitem' }
      }),
      children
    )
  }
}
