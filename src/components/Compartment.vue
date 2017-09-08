<template>
  <g>
    <uml-line v-for="(line, index) in lines" :y="(index + 1) * 15 + 7.5"
              :text="line"
              :key="index"></uml-line>
  </g>
</template>

<script>
  import UmlLine from './Line'

  export default {
    name: 'component',
    props: ['lines'],
    components: {
      UmlLine
    }
  }
</script>
