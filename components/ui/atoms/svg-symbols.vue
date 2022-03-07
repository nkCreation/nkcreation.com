<script>
// eslint-disable-next-line import/no-webpack-loader-syntax
const svg = require('!!raw-loader!../../../assets/sprite/gen/icons.svg').default

export default {
  render: (createElement) => {
    const innerHTML = svg.replace(/.*?$/m, '') // strip declaration
    const style = 'height: 0; width: 0; position: absolute; top: 0; z-index: -1'
    return createElement('div', { domProps: { innerHTML }, attrs: { style } })
  },
}
</script>
