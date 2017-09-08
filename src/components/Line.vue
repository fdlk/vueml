<template>
  <text :x="8">{{text}}</text>
</template>

<script>
  export default {
    name: 'line',
    props: ['text']
  }
</script>
