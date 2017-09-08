<template>
  <text :x="x+8" :y="y">{{text}}</text>
</template>

<script>
  export default {
    name: 'line',
    props: ['x', 'y', 'text']
  }
</script>
