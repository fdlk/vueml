<template>
  <g>
    <rect x="26.5" y="57.5" height="167" width="288"
          style="stroke: rgb(51, 50, 46); fill: rgb(253, 246, 227);"></rect>
    <text x="34.5" y="79">Pirate</text>
    <divider :x="26.5" :y="88.5" :width="314.5"></divider>
    <text x="34.5" y="110">bucket:string</text>
    <text x="34.5" y="125">key:string</text>
    <text x="34.5" y="140">expression:bool</text>
    <text x="34.5" y="155">accessKey:string</text>
    <text x="34.5" y="170">secretKey:string</text>
    <text x="34.5" y="185">region:string</text>
    <text x="34.5" y="200">targetEntityId:string</text>
    <text x="34.5" y="215">extension:string</text>
  </g>

</template>

<script>
  import Divider from './Divider'
  import Line from './Line'

  export default {
    props: ['x', 'y', 'compartments'],
    name: 'class',
    components: {
      divider: Divider,
      line: Line
    }
  }
</script>
