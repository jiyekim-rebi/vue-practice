<template>
  <h3>parent1</h3>
  <children-component :message="message" @children-click-event="parent1Method"/>
</template>

<script>
import ChildrenComponent from '@/components/emit/ChildrenComponent'

export default {
  data: () => ({
    message: 'ParentComponent1'
  }),
  components: {
    ChildrenComponent,
  },
  methods: {
    parent1Method: function() {
      alert('parent_1_method')
    }
  }
}
</script>
