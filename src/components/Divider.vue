<template>
  <path :d="d" style="stroke: rgb(51, 50, 46); fill: none;"></path>
</template>

<script>
  export default {
    name: 'divider',
    props: ['width'],
    computed: {
      d () {
        return `M0 0 H${this.width}`
      }
    }
  }
</script>
