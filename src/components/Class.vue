<template>
  <g>
    <rect :height="y[compartments.length]" :width="width"
          style="stroke: rgb(51, 50, 46); fill: rgb(253, 246, 227);"></rect>
    <g v-for="(compartment, index) in compartments"
       :transform="`translate(0 ${y[index]})`"
       :key="index">
      <divider :width="width" v-if="index > 0"></divider>
      <compartment :lines="compartment.lines"></compartment>
    </g>
  </g>
</template>

<script>
  import Compartment from './Compartment'
  import Divider from './Divider'

  // lines have height 15, dividers have height 1, compartments have padding 7.5
  const compartmentHeight = compartment => (compartment.lines.length + 1) * 15 + 1
  const cumulativeHeights = (a, b) => [...a, a[a.length - 1] + b]

  export default {
    props: ['compartments', 'width'],
    name: 'class',
    computed: {
      y () {
        return this.compartments.map(compartmentHeight).reduce(cumulativeHeights, [1])
      }
    },
    components: {
      Compartment,
      Divider
    }
  }
</script>
