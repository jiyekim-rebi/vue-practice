<template>
  <h3>parent2</h3>
  <children-component :message="message" @children-click-event="parent2Method"/>
</template>

<script>
import ChildrenComponent from '@/components/emit/ChildrenComponent'

export default {
  name: "ParentComponent2",
  data: () => ({
    message: 'ParentComponent2'
  }),
  components: {
    ChildrenComponent,
  },
  methods: {
    parent2Method: function() {
      alert('parent_2_method')
    }
  }
}
</script>
