<template>
  <g>
    <text v-for="(line, index) in lines"
          :x="8"
          :y="(index + 1) * 15 + 7.5"
          ref="lines"
          :key="index">{{line}}</text>
  </g>
</template>

<script>
  export default {
    name: 'component',
    props: ['lines'],
    methods: {
      getWidth () {
        return Math.max.apply(Math, this.$refs.lines.map(text => text.getBBox().width)) + 16
      }
    }
  }
</script>

<style scoped>
  text {
    font-weight: bold;
    font-size: 12pt;
    font-family: Calibri, Helvetica, sans-serif;
  }
</style>
