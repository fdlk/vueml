<template>
  <div class="row">
    <div class="col text-center">
      <h1>Package UML</h1>
      {{classes | json}}
      <svg width="701" height="3560" version="1.1" baseProfile="full"
           xmlns="http://www.w3.org/2000/svg"
           style="font-weight: bold; font-size: 12pt; font-family: Calibri, Helvetica, sans-serif; stroke-width: 3px; stroke-linejoin: round; stroke-linecap: round;">
        <class x="10" y="10" v-for="clazz in classes" :compartments="clazz.compartments" key="clazz.id"></class>
      </svg>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Class from './Class'
  import Divider from './Divider'

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
      class: Class,
      divider: Divider
    }
  }
</script>
