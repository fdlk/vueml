<template>
  <path :d="`M 0 0 H${width}`"></path>
</template>

<script>
  export default {
    name: 'divider',
    props: ['width']
  }
</script>

<style scoped>
 path {
   stroke: rgb(51, 50, 46); fill: none;
 }
</style>
