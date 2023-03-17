<template>
  <v-container>
    <h2>emit test</h2>
    <br/>
    <parent-component1></parent-component1>
    <parent-component2></parent-component2>
  </v-container>
</template>

<script>
import ParentComponent1 from "@/components/emit/ParentComponent1"
import ParentComponent2 from "@/components/emit/ParentComponent2"

export default {
  name: "EmitMain",
  components: {
    ParentComponent1, ParentComponent2
  },
  methods: {},
}
</script>

