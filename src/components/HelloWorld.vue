<template>
  <div class="row">
    <div class="col text-center">
      <h1>Package UML</h1>
      {{classes}}
      <svg width="701" height="3560" version="1.1" baseProfile="full"
           xmlns="http://www.w3.org/2000/svg"
           style="">
        <g :transform="`translate(${200 * index + 1} 1)`" v-for="(clazz, index) in classes">
          <class :compartments="clazz.compartments"
                 :width=120
                 :key="clazz.id"></class>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Class from './Class'

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
      Class
    }
  }
</script>
