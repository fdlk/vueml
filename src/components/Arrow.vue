<template>
  <g>
    <path :d="d"
          fill="none" stroke="black"
          :marker-end="`url(#${markerEnd})`"></path>
  </g>
</template>

<script>
  export default {
    props: ['points', 'type', 'fromLabel', 'toLabel'],
    name: 'class',
    computed: {
      markerEnd () {
        switch (this.type) {
          case 'ref':
            return 'ArrowReference'
          case 'gen':
            return 'ArrowGeneralization'
        }
      },
      d () {
        const result = 'M ' + this.points.map(p => `${p.x} ${p.y}`).join(' L ')
        console.log('d', result)
        return result
      }
    }
  }
</script>
