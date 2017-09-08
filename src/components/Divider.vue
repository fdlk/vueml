<template>
  <g>
    <path :d="d" style="stroke: rgb(51, 50, 46); fill: none;"></path>
  </g>

</template>

<script>
  export default {
    name: 'divider',
    props: ['x', 'y', 'width'],
    computed: {
      d () {
        const {x, y, width} = this
        return `M${x} ${y} H${width}`
      }
    }
  }
</script>
