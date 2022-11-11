<template>
  <div>
    <page-title :title="title"></page-title>
  </div>
  <div>
    <children-component @send-message="sendMessage" ref="children_component"></children-component>
  </div>
  <div>
    <button type="button" @click="changeChildData">Change Child Data</button>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import ChildrenComponent from '@/components/ChildrenComponent'
export default {
  components: {
    PageTitle, ChildrenComponent
  },
  mounted () {
    // 자식 컴포넌트 method 접근
    // this.$refs.children_component.$refs.btn.click()
    this.$refs.children_component.childFunc()
  },
  data () {
    return {
      title: 'parent to children v-bind'
    }
  },
  methods: {
    changeChildData () {
      this.$refs.children_component.message = 'children component message'
    },
    sendMessage (data) {
      console.log(data)
    }
  }
}
</script>
