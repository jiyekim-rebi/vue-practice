<template>
  <v-btn @click="onChildrenClickEvent">
    {{ message }}
  </v-btn>
</template>

<script>
export default {
  name: "ChildrenComponent",
  props: ['message'],
  methods: {
    onChildrenClickEvent() {
      this.$emit('children-click-event')
    }
  }
}
</script>
