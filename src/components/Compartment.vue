<template>
  <g>
    <text v-for="(line, index) in lines"
          :x="8"
          :y="(index + 1) * 15 + 7.5"
          :key="index">{{line}}</text>
  </g>
</template>

<script>
  export default {
    name: 'component',
    props: ['lines']
  }
</script>

<style scoped>
  text {
    font-weight: bold;
    font-size: 12pt;
    font-family: Calibri, Helvetica, sans-serif;
  }
</style>
