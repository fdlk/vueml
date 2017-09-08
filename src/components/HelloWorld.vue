<template>
  <div class="row">
    <div class="col text-center">
      <h1>Package UML</h1>
      <p>{{classes}}</p>

      <svg width="701" height="3560" version="1.1" baseProfile="full"
           xmlns="http://www.w3.org/2000/svg"
           style="">
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
        <g :transform="`translate(${200 * index + 1} 1)`" v-for="(clazz, index) in classes">
          <class :compartments="clazz.compartments"
                 :width=120
                 :key="clazz.id"></class>
        </g>
        <arrow :x1="200" :y1="30" :x2="122" :y2="80" :type="gen" :fromLabel="from" :toLabel="to"></arrow>
        <arrow :x1="200" :y1="30" :x2="122" :y2="80" :type="gen" :fromLabel="from" :toLabel="to"></arrow>
        <arrow :x1="200" :y1="80" :x2="122" :y2="20" :type="ref" :fromLabel="from" :toLabel="to"></arrow>
      </svg>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Class from './Class'
  import Arrow from './Arrow'

  export default {
    name: 'hello-world',
    methods: {
      showSweetAlert () {

      }
    },
    computed: {
      ...mapState(['classes'])
    },
    components: {
      Class,
      Arrow
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
