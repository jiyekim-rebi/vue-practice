<template>
  <button type="button" @click="childFunc" ref="btn">Click</button>
  <h3> {{message}} </h3>
</template>

<script>
export default {
  data () {
    return {
      message: 'children component to Parent component'
    }
  },
  methods: {
    childFunc () {
      console.log('부모 컴포넌트에서 직접 발생시킨 이벤트')
    }
  },
  mounted () {
    // 자식 컴포넌트에서 부모 컴포넌트로 데이터 전달
    this.$emit('send-message', this.message)
  }
}
</script>
