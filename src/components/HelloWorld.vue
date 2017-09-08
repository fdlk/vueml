<template>
  <div class="row">
    <div class="col text-center">
      <h1>Package UML</h1>
      <p>{{classes}}</p>

      <svg width="701" height="3560" version="1.1" baseProfile="full"
           xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ArrowGeneralization"
                  viewBox="0 0 20 20"
                  refX="18"
                  refY="9"
                  markerUnits="strokeWidth"
                  markerWidth="8" markerHeight="6"
                  orient="auto">
            <path d="M 2 2 L 18 9 L 2 18 Z"
                  fill="white"
                  stroke="black"></path>
          </marker>
          <marker id="ArrowReference"
                  viewBox="0 0 20 20"
                  refX="18"
                  refY="9"
                  markerUnits="strokeWidth"
                  markerWidth="8" markerHeight="6"
                  orient="auto">
            <path d="M 2 2 L 18 9 L 2 18"
                  fill="none"
                  stroke="black"></path>
          </marker>
        </defs>
        <g :transform="`translate(${clazz.x} ${clazz.y})`" v-for="(clazz, index) in classes">
          <class :compartments="clazz.compartments"
                 :width="clazz.width || 120"
                 :key="clazz.id"
                 ref="classes"></class>
        </g>
        <!--<arrow :x1="200" :y1="30" :x2="122" :y2="80" type="gen" fromLabel="from" toLabel="to"></arrow>-->
      </svg>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import Class from './Class'
  import Arrow from './Arrow'
  import { SET_DIMENSIONS } from '../store/mutations'

  export default {
    name: 'hello-world',
    computed: {
      ...mapState(['classes'])
    },
    methods: {
      ...mapMutations({
        setDimensions: SET_DIMENSIONS
      })
    },
    components: {
      Class,
      Arrow
    },
    mounted () {
      this.setDimensions(this.$refs.classes.map(clazz => clazz.getDimensions()))
    }
  }
</script>

<style scoped>
  svg {
    stroke-width: 3;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
</style>
