<template>
  <text :x="8">{{text}}</text>
</template>

<script>
  export default {
    name: 'line',
    props: ['text']
  }
</script>

<style scoped>
  text {
    font-weight: bold;
    font-size: 12pt;
    font-family: Calibri, Helvetica, sans-serif;
  }
</style>
