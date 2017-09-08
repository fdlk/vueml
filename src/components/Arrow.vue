<template>
  <g>
    <path :d="`M ${x1} ${y1} L ${x2} ${y2}`"
          fill="none" stroke="black"
          :marker-end="`url(#${markerEnd})`"></path>
    <text v-if="fromLabel"
          :x="x1" :y="y1"
          :dx="fromDx"
          :dy="fromDy"
          :text-anchor="fromAnchor"
          :alignment-baseline="fromBaseline">{{fromLabel}}
    </text>
    <text v-if="toLabel"
          :x="x2" :y="y2"
          :dx="-fromDx"
          :dy="-fromDy"
          :text-anchor="toAnchor"
          :alignment-baseline="toBaseline">{{toLabel}}
    </text>
  </g>
</template>

<script>
  export default {
    props: ['x1', 'y1', 'x2', 'y2', 'type', 'fromLabel', 'toLabel'],
    name: 'class',
    computed: {
      fromBaseline () {
        // See http://apike.ca/prog_svg_text_style.html for meaning of baseline and anchor attrs.
        if (this.y2 < this.y1) {
          return 'before-edge'
        }
        return 'auto'
      },
      fromAnchor () {
        if (this.x1 < this.x2) {
          return 'start'
        }
        return 'end'
      },
      toBaseline () {
        if (this.y1 < this.y2) {
          return 'before-edge'
        }
        return 'auto'
      },
      toAnchor () {
        if (this.x2 < this.x1) {
          return 'start'
        }
        return 'end'
      },
      fromDx () {
        if (this.x1 < this.x2) {
          return 5
        }
        return -5
      },
      fromDy () {
        if (this.y1 < this.y2) {
          return -5
        }
        return 5
      },
      markerEnd () {
        switch (this.type) {
          case 'ref':
            return 'ArrowReference'
          case 'gen':
            return 'ArrowGeneralization'
        }
      }
    }
  }
</script>
